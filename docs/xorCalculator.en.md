---
template: ./main.en.html
title: Coding of VW cars
hide:
  - toc
---
  
<style>
  .md-typeset h1 {
    display: none;
</style>

# XOR Calculator

After changing firmware of Main Unit you can get `1555 / B201A Checking Software Version Management` fault code in the 5F control module.
XOR calculator is used to confirm firmware.

To confirm changing of firmware you need to:
1. Read current value from adaptation channel:
``` yaml
Блок 5F → Adaptation:
- Confirmation of installation change
```
2. Copy this value to calculator below and generate confirmation key
3. Write confirmation key to the adaptation:
``` yaml
Блок 5F → Adaptation:
- Confirmation of installation change: confirmation key
→ Save
```

--8<-- "overrides/xorCoding.en.html"