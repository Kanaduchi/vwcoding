#!/usr/bin/env python3
"""Run mkdocs build --strict and allow only whitelisted warnings."""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WHITELIST_PATH = Path(__file__).with_name("mkdocs_strict_whitelist.txt")
WARNING_PREFIX = "WARNING -  "


def load_whitelist() -> list[re.Pattern[str]]:
    patterns: list[re.Pattern[str]] = []
    for line in WHITELIST_PATH.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        patterns.append(re.compile(line))
    return patterns


def extract_warnings(output: str) -> list[str]:
    warnings: list[str] = []
    for line in output.splitlines():
        if line.startswith(WARNING_PREFIX):
            warnings.append(line[len(WARNING_PREFIX) :])
    return warnings


def is_whitelisted(message: str, patterns: list[re.Pattern[str]]) -> bool:
    return any(pattern.search(message) for pattern in patterns)


def main() -> int:
    patterns = load_whitelist()
    result = subprocess.run(
        ["mkdocs", "build", "--clean", "--strict"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    output = result.stdout + result.stderr
    warnings = extract_warnings(output)

    unwhitelisted = [msg for msg in warnings if not is_whitelisted(msg, patterns)]

    if result.returncode != 0 and not unwhitelisted and warnings:
        print(
            "mkdocs strict build failed only with whitelisted warnings; treating as pass."
        )
    elif result.returncode != 0:
        print(output, file=sys.stderr)

    if unwhitelisted:
        print("mkdocs strict check failed with unwhitelisted warnings:", file=sys.stderr)
        for msg in unwhitelisted:
            print(f"  - {msg}", file=sys.stderr)
        print(
            f"\nAdd a regex to {WHITELIST_PATH.relative_to(ROOT)} "
            "only if the warning is expected.",
            file=sys.stderr,
        )
        return 1

    whitelisted_count = len(warnings) - len(unwhitelisted)
    print(
        f"mkdocs strict check passed "
        f"({whitelisted_count} warning(s), all whitelisted)."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
