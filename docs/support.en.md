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
Path to templates (e.g. used in utils): `/overrides/pages`

Main configuration file: `mkdocs.yml`

### Adding new codings

You can use the template below to add new codings

```
    ### Name of coding / adaptation

    !!! tip ""
        Tip/info message

    !!! warning ""
        Some warning message

    ``` yaml title="логин-пароль: XXXXX (if applicable)"
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
```![Screenshot](../images/***/imageName.png)```

Inserting file to the page:  
```[(Name of file)](LinkToFile)```

### Adding localizations

If you want to help in translating this site to English language, please contribute a localization!

Follow these steps to add a localization:

1. Copy particular file in /docs directory to new with lang suffix. Example: drive.md → drive.en.md
2. Start translating the strings
3. Edit mkdocs.yaml and edit the following variables. Make sure that all navigation items translated correctly
    ```yaml
    nav_translations:
        Name in Russian: Name in English
    ```
4. Create a PR with your localization updates.
