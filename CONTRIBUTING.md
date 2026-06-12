![VW coding](docs/assets/images/logo.png)

## Overview

This repository contains a bilingual MkDocs site (Russian + English).  
Every content page has two files:

- `docs/.../page.md` — Russian (default)
- `docs/.../page.en.md` — English

When you add or change codings, adaptations, or page text, **update both files in the same pull request**.

Navigation lives in `mkdocs.yml`. English menu labels are translated via `nav_translations` under `plugins → i18n → languages → locale: en`.

## Adding or updating codings

Use this template in **both** language files:

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

Paths:

| Purpose         | Path               |
|-----------------|--------------------|
| Images          | `/docs/images`     |
| Firmwares       | `/docs/firmwares`  |
| Parameter files | `/docs/parameters` |

Inserting image to the page:  
```
![Screenshot](../images/***/imageName.png)
```

Inserting file to the page:  
```
[(Name of file)](LinkToFile)
```

### Checklist for a coding change

- [ ] Updated `page.md`
- [ ] Updated matching `page.en.md`
- [ ] Added/updated `nav` entry in `mkdocs.yml` if this is a new page
- [ ] Added/updated `nav_translations` if this is a new menu item
- [ ] Ran `mkdocs build` locally
- [ ] If you changed docs, updated both `page.md` and `page.en.md` in the same PR

## Adding a new page

1. Create `docs/.../name.md`
2. Create `docs/.../name.en.md`
3. Add the page to `nav` in `mkdocs.yml`
4. Add the English menu label to `nav_translations` if needed
5. Open a PR with all files above

## Translating pages

All main pages already have English counterparts (`*.en.md`).  
For new Russian pages:

1. Create the Russian file `name.md`
2. Create the English file `name.en.md`
3. Update `nav` and `nav_translations` in `mkdocs.yml`
4. Open a PR

When editing existing content, do **not** copy the whole file again — edit Russian and English versions in parallel.

## Pull requests

1. Fork the repository
2. Create a branch
3. Keep Russian and English changes in sync
4. Run `mkdocs build`
5. Open a pull request with a short description of what was changed
