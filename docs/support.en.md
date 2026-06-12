---
template: ./main.en.html
title: Coding of VW cars
---
# Support and contributing

## Donation and support

If you liked this project and are ready to support it for further development, 
you can do so using Bitcoin:

<div class="grid cards" markdown>

-   :fontawesome-brands-btc:{ .lg .middle } __Cryptocurrency__

    ---
    ![BTC wallet](./images/btc.png){ width="100" align=left }  
  
    BTC Wallet: `1BKR5d91YUic3aqwc6nTGTMLkGBBrZkkcj`

</div>

## Contributing

### Structure of the project

Path to docs: `/docs`  
Path to images: `/docs/images`
Path to firmwares: `/docs/firmwares`  
Path to parameter files: `/docs/parameters`
Path to templates (e.g., used in utils): `/overrides/pages`

Main configuration file: `mkdocs.yml`

### Adding new codings

You can use the template below to add new codings

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


### Bilingual content

The site supports Russian and English. Every page exists as two files:

- `page.md` — Russian (default language)
- `page.en.md` — English

**When adding or changing codings and adaptations, update both files in the same pull request.**

1. Find the target page in `/docs`, for example `docs/MQB/drive.md`.
2. Apply the change to the Russian version.
3. Apply the equivalent change to `docs/MQB/drive.en.md`.
4. If you add a new page, create both files and add it to `nav` in `mkdocs.yml`.
5. For a new menu item, add a label to `nav_translations` (under `locale: en`).
6. Verify the build: `mkdocs build`.
7. Open a pull request.

See also [README.en.md](https://github.com/Kanaduchi/vwcoding/blob/master/README.en.md) and [CONTRIBUTING.md](https://github.com/Kanaduchi/vwcoding/blob/master/CONTRIBUTING.md).