# Drive assistance

### Break disk drying adjustment

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0136

!!! note ""
    This adaptation channel is not displayed by every coding dongle. Work in OBD11, ODIS
  
``` yaml 
Control unit 03 → Adjustments:
Break disk drying:
- Break disk drying: medium (light, medium, strong)
→ Apply
```

### Change steering characteristics without drive mode selection

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 1040

``` yaml 
Control unit 44 → Adjustments:
- Steering_support_characteristic_line: dynamic
→ Apply
```