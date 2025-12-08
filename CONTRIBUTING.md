![VW coding](docs/assets/images/logo.png)  

## Adding codings

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

Path for images: `/docs/images`  
Path to firmwares: `/docs/firmwares`  
Path to parameter files: `/docs/parameters`  

Insert image to the page:  
![Screenshot](../images/MQB/odis-e-tires.png) 

Insert file to the page:  
[(Applicable for Škoda)](../firmwares/TMC-zz.rar)  

## Adding localizations

If you want to help in translating this site to the English language, please contribute a localization!  

Follow these steps to add localization:
1. Copy a particular file in the /docs directory to new with lang suffix. Example: drive.md → drive.en.md 
2. Start translating the strings
3. Edit mkdocs.yaml and edit the following variables:
Make sure that all navigation items translated correctly
    ```yaml
    nav_translations:
        en:
    ```
4. Create a PR with your localization updates.

