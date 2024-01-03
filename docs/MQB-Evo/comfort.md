# Comfort

### Deactivate rear windows wiper intermittent wipe function
:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Heckwischer_steuerung:
- Traenenwischen Heck: not_active
→ Apply
```

### Automatic opening/closing of windows when opening/closing door

:octicons-verified-24: SFD: no

``` yaml title="Tested SW: 0330-0350"
Control unit 42 → Coding:
short_drop: active
→ Apply
```

``` yaml title="Tested SW: 0330-0350"
Control unit 52 → Coding:
Coding:
short_drop: active
→ Apply
```

### Activate puddle lights when the mirrors are folded in

:octicons-verified-24: SFD: no

``` yaml title="Tested SW: 0330"
Control unit 42 → Coding:
turn_off_front_field_light_with_folded_mirror: not_active
→ Apply
```

``` yaml title="Tested SW: 0330"
Control unit 52 → Coding:
Coding:
turn_off_front_field_light_with_folded_mirror: not_active
→ Apply
```

### Comfort open-close sunroof with remote control

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0040

``` yaml 
Control unit CA → Adjustments:
Control_unit_for_sun_roof_convenience_functions:
- Convenience_opening_target_attitude: sliding_position
→ Apply
```

### Adjust or deactivate engine sound generator

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0001

``` yaml 
Control unit A9 → Adjustments:
Loudness_actuator_for_structure_borne_sound: 0-100% (0 = off, 1-100% = volume)
→ Apply
```

### Adjust automatic activation temperatures of the steering wheel heater

:octicons-verified-24: SFD: ??? :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
LIN-SMLS_konfig_1:
- k_i_offset: 4 [UN]_°C (Below 4°C is considered cold, for example)
→ Apply
```

### Display lap timer on the head-up display

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 2032

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml 
Control unit 82 → Adjustments:
Laptimer: yes
→ Apply
```