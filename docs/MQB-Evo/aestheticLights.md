# Aesthetic lights

### Dim ambient lighting to a higher level

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

``` yaml 
Control unit 9 → Adjustments:
Suchbeleuchtung_allgemein:
- KL58 Einschalten mit Rampe: active
→ Apply
```

### Adjust start button illumination

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0725

``` yaml title="Login code: 10587"
Control unit B7 → Adjustments:
DevCod_ Search lights:
- Suchbeleuchtung_ZAT_Beleuchtung_SES_Variante_aktiv: activated (LED = dim), not_avtivated (LED = bright)
- Suchbeleuchtung_ZAT_SES_Mode: activated (LED flashing), not_activated (LED = on)
→ Apply
```

### ambient colors

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Interior_light_hmi_config:
- Hmi_ambient_colors_fod_bitmask: 3F FF FF FF
- Hmi_contour_colors_fod_bitmask: 3F FF FF FF
→ Apply
```