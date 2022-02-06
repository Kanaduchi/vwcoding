---
title: Dataset editor
hide:
  - toc
---

# Dataset editor

This editor is used for working with dataset files

Editor possibilities:  
- View dataset file  
- Edit, add or remove parameter sections  
- Decode base64 data content  
- Migrate base64 data content into parameter sections (dataset simplification)    
- Calculation of CRC32 (for decoded simplified data)  
- Save dataset in simplified format  

??? note "Experimental function of dataset simplification"
    1 - Decode base64 value of <COMPRESSED_DATA> object. Value has structure of <SW-CNT>   
    2 - Cut first 8 bytes (version) and last 8 bytes (CRC-32 sum) of value of <DATEN> field  
    3 - Convert result value in little-endian format  
    4 - Save it in the corresponding <PARAMETER_DATA> object and calculate CRC-16 hash  

--8<-- "overrides/pages/datasets.en.html"