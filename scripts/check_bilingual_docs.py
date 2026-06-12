#!/usr/bin/env python3
"""Verify Russian/English markdown pairs under docs/."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"

# Pages that intentionally exist in a single language only.
SKIP_STEMS: set[str] = set()


def is_doc(path: Path) -> bool:
    return path.suffix == ".md" and path.is_file()


def ru_path(path: Path) -> Path:
    if path.name.endswith(".en.md"):
        return path.with_name(path.name[:-6] + ".md")
    return path


def en_path(path: Path) -> Path:
    if path.name.endswith(".en.md"):
        return path
    return path.with_name(f"{path.stem}.en.md")


def rel(path: Path) -> str:
    return str(path.relative_to(DOCS))


def stem_key(path: Path) -> str:
    return str(ru_path(path).relative_to(DOCS))


def check_all_pairs() -> list[str]:
    errors: list[str] = []
    for path in sorted(DOCS.rglob("*.md")):
        if not is_doc(path):
            continue
        key = stem_key(path)
        if key in SKIP_STEMS:
            continue
        ru = ru_path(path)
        en = en_path(path)
        if not ru.exists():
            errors.append(f"Missing Russian pair for {rel(en)}")
        if not en.exists():
            errors.append(f"Missing English pair for {rel(ru)}")
    return errors


def changed_files(base_ref: str) -> set[Path]:
    result = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=ACMR", f"{base_ref}...HEAD"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit(f"git diff failed: {result.stderr.strip()}")
    files: set[Path] = set()
    for line in result.stdout.splitlines():
        line = line.strip()
        if not line.startswith("docs/") or not line.endswith(".md"):
            continue
        files.add(ROOT / line)
    return files


def check_changed_pairs(base_ref: str) -> list[str]:
    """Require EN updates when RU changes; allow EN-only edits if RU pair exists."""
    errors: list[str] = []
    changed = changed_files(base_ref)
    touched: set[str] = set()
    for path in changed:
        if not is_doc(path):
            continue
        key = stem_key(path)
        if key in SKIP_STEMS:
            continue
        touched.add(key)

    for key in sorted(touched):
        ru = DOCS / key
        en = en_path(ru)
        ru_changed = ru in changed
        en_changed = en in changed

        if ru_changed and not en_changed:
            errors.append(
                f"{rel(ru)} changed without matching update to {rel(en)}"
            )
            continue

        if en_changed and not ru_changed:
            if not ru.exists():
                errors.append(
                    f"{rel(en)} changed but Russian pair {rel(ru)} is missing"
                )
            # EN-only change while RU exists: OK (translation / initial .en.md rollout)
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--all",
        action="store_true",
        help="Verify that every docs/*.md file has a language pair",
    )
    parser.add_argument(
        "--changed",
        metavar="BASE_REF",
        help="On PRs: fail if Russian docs changed without English; EN-only OK if RU pair exists",
    )
    args = parser.parse_args()

    if not args.all and not args.changed:
        args.all = True

    errors: list[str] = []
    if args.all:
        errors.extend(check_all_pairs())
    if args.changed:
        errors.extend(check_changed_pairs(args.changed))

    if errors:
        print("Bilingual documentation check failed:", file=sys.stderr)
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
        return 1

    print("Bilingual documentation check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
