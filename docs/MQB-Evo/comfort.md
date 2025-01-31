# Comfort

### Deactivate rear windows wiper intermittent wipe function

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Heckwischer_steuerung:
- Traenenwischen Heck: not_active
→ Apply
```

### Enable rear windshield wiper activation automatically

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Heckwischer_steuerung:
- Automatisches Heckwischen: active
Geschwindigkeit, anpassen wie gewünscht:
- Komofortwischen Heck Intervallpausenzeit Stufe Intervall LSS AUS: 10 [UN]_s
- Komofortwischen Heck Intervallpausenzeit Stufe Intervall: 7 [UN]_s
- Komofortwischen Heck Intervallpausenzeit Stufe Automatik: 7 [UN]_s
- Komofortwischen Heck Intervallpausenzeit Stufe 1: 5 [UN]_s
- Komofortwischen Heck Intervallpausenzeit Stufe 2: 3 [UN]_s
- Einzelansteuerung Heckintervallwischen Zeitintervall 1: 8 [UN]_s
- Einzelansteuerung Heckintervallwischen Zeitintervall 2: 16 [UN]_s
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

### Maintain sunroof tilt angle while driving

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0040

``` yaml 
Control unit CA → Adjustments:
Speed_dependent_control:
- Sliding_sunroof_reduce_tilting_position: not_active
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

### Adjust seat ventilation

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161-0183

``` yaml 
Control unit 09 → Adjustments:
Sitzlüfterkennlinie:
- Level_1_Sitz: 30 % (stage 1)
- Level_1_Lehne: 30 % (stage 1)
- Level_2_Sitz: 30 % (stage 1)
- Level_2_Lehne: 30 % (stage 1)
- Level_3_Sitz: 50 % (stage 2)
- Level_3_Lehne: 50 % (stage 2)
- Level_4_Sitz: 50 % (stage 2)
- Level_4_Lehne: 50 % (stage 2)
- Level_5_Sitz: 75 % (stage 3)
- Level_5_Lehne: 75 % (stage 3)
- Level_6_Sitz: 80 % (stage 3)
- Level_6_Lehne: 80 % (stage 3)
→ Apply
```

### Comfort opening of windows via door handles

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161-0183

!!! Note ""
    Requirement: Door handles with built-in sensors (Kessy)

``` yaml 
Control unit 09 → Adjustments:
Kessyfunktion:
- Komfortbedienung_fh_oeffnen_ueber_kessy: active

ZV Komfort_Fensterheber:
- Komfortbedienung_fh_oeffnen_ueber_sz: active
- Komfort_oeffnen: active
→ Apply
```

``` yaml title="login code: 10587"
Control unit B7 → Adjustments:
Passive_Komfort:
- Passive_Komfort_Oeffnen_aktiv: activated
- Passive_Komfort_Togglen_aktiv: activated
→ Apply
``` yaml 