![VW coding](docs/assets/images/logo.png)

## Description

The site is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and the [mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n) plugin.  
Page content is stored as Markdown under `/docs`.

- Russian version: `name.md` (default language)
- English version: `name.en.md`

Navigation is defined once in `mkdocs.yml` in Russian. English menu labels are mapped in `plugins → i18n → languages → en → nav_translations`.

## Project structure

| Purpose           | Path               |
|-------------------|--------------------|
| Site pages        | `/docs`            |
| Images            | `/docs/images`     |
| Firmwares         | `/docs/firmwares`  |
| Parameter files   | `/docs/parameters` |
| Utility templates | `/overrides/pages` |
| Main config       | `mkdocs.yml`       |

## Coding page template

```
    ### Name of coding / adaptation

    !!! tip ""
        Tip/info message

    !!! warning ""
        Some warning message

    ```

    ``` yaml title="Login code: XXXXX (if applicable)"
    Block XX → Adaptation/Coding:
    Byte XX – Bit X (name): Active
    Name of volume/folder:
    - Name of parameter: activate
    → Apply
    ```

    ??? note "Collapsibale list"
        This information is displayed collapsed on the site
```

Inserting image to the page:  
```
![Screenshot](../images/***/imageName.png)
```

Inserting file to the page:  
```
[(Name of file)](LinkToFile)
```

## Bilingual content

The site supports Russian and English. **Any change to codings, adaptations, or descriptions must be applied to both language files at the same time.**

### Adding a new coding

1. Add the block to the corresponding file `docs/.../page.md`.
2. Add the same block to the paired file `docs/.../page.en.md`.
3. If you create a new page, add both files (`page.md` and `page.en.md`) and a new item to `nav` in `mkdocs.yml`.
4. For a new menu item, add a translation to `nav_translations` (under `locale: en`).

### Updating an existing coding

1. Find the Russian file, for example `docs/MQB/drive.md`.
2. Apply the change to the Russian version.
3. Apply the **equivalent** change to `docs/MQB/drive.en.md`.
4. Open one PR that includes both files.

Do not open a PR with Russian changes only — the English page must not fall behind.

### New page or section

| Step | Action                                              |
|------|-----------------------------------------------------|
| 1    | Create `docs/.../name.md`                           |
| 2    | Create `docs/.../name.en.md`                        |
| 3    | Add the page to `nav` in `mkdocs.yml`               |
| 4    | If needed, add the menu label to `nav_translations` |

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Update both Russian and English versions of affected pages.
4. Verify the build: `mkdocs serve` or `mkdocs build`.
5. Open a pull request.

## Supporting the project

If this project is useful to you, you can support its development:

- BTC wallet: `1BKR5d91YUic3aqwc6nTGTMLkGBBrZkkcj`
