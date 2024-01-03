# Light management

### Change light functions based on light sensitivity

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

``` yaml 
Control unit 9 → Adjustments:
Lighting_Assist_Adaptation:
- Lichtsensorempfindlichkeit: normal (Adjust as desired)
→ Apply
```

### Save high beam assistant settings (on ignition change)

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

``` yaml 
Control unit 9 → Adjustments:
Fernlicht_assistent:
- Fernlichtassistent Reset: not_active
→ Apply
```

### Activate adjustable daytime running lights in the car menu

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

``` yaml 
Control unit 9 → Adjustments:
Tagfahrlicht:
- Tagfahrlicht Aktivierung durch BAP oder Bedienfolge moeglich: active
→ Apply
```

### Adjustable DWA acknowledgement ton in the car menu (lock and unlock)

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

``` yaml 
Control unit 9 → Adjustments:
ZV Quittierungen:
- Quittungston_hmi_einstellbar: active
- Quittierungston_bei_entriegeln: active
- Quittungs_ton_bei_verriegeln: active
→ Apply
```

Only if there is no alarm system or acknowledgment tone through the horn:

```
Quittungston_ueber_hupe: active
```

### Rear lights as daytime running lights

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Tagfahrlicht:
- Tagfahrlicht-Dauerfahrlicht aktiviert zusaetzlich Standlicht: active
→ Apply
```

### Adjust Coming Home Lights

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
BAP_Funktionsstatus:
- Coming_home_Leuchten: Abblendlicht oder Nebellicht
→ Apply
```

### Disable warning that the lights are turned off

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Fahrlichthinweis:
- Fahrlicht_Hinweis_mehrfach: not_active
- Fahrlichtwarnung_Hinweis_Konfig: kein_Hinweis
→ Apply
```

### Keep lights off as it gets dark

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Licht_bedienung:
- LTM_BGL_Wegabhängig: not_active
- LTM_BGL_Geschwindigkeitsabhängig: not_active
- LTM_BGL_Geschwindigkeitsabhängig_Parameter: not_active
- LTM_GlobalOFF_Wegabhängig: not_active
- LTM_GlobalOFF_Geschwindigkeitsabhängig: not_active
- LTM_GlobalOFF_Geschwindigkeitsabhängig_Parameter: not_active
- Beleuchtung_LTM_Auto_LED_58xt_logik: not_active
- Beleuchtung_Auto_LED_bei_Nebelfunktion: not_active
→ Apply
```

### Make the turn signals flash when locking and unlocking the vehicle

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml 
Control unit 09 → Adjustments:
Dynamisch Blinken:
- ZV_Blinken_zu: active (oder not_active für deaktiviert)
- ZV_Blinken_auf: active (oder not_active für deaktiviert)
→ Apply
```

### Adjust coming home and leaving home

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml 
Control unit 09 → Adjustments:
Coming-Home_and_Leaving-Home:
- Menueeinstellung CHO LHO: Menuesteuerung aktivieren
Coming-Home_and_Leaving-Home:
- Menueeinstellung Leaving-home Zeit per BAP: 10 seconds (bis 90 sec)
- Menueeinstellung Cominghome: 10 seconds (bis 90 sec)
- Menueeinstellung Cominghome bei Tag: 10 seconds (bis 90 sec)
- Menueeinstellung Leaving-home bei Tag: 10 seconds (bis 90 sec)
→ Apply
```

### Coming home and leaving home also during the day (light switch position on “Auto”)

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml 
Control unit 09 → Adjustments:
Coming-Home_and_Leaving-Home:
- Tagfahrlicht mit CHO bei Tag in Stellung AUTO: active
- Tagfahrlicht mit LHO bei Tag in Stellung AUTO: active
→ Apply
```

### Light strip (between the headlights) as daytime running lights

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

!!! error ""
    No changes recognizable, maybe linked in the dataset

Until model CW45 2020:
``` yaml 
Control unit 09 → Adjustments:
Leuchte 2 SL VL B20:
- Lichtfunktion B 2: Tagfahrlicht
Leuchte 3 SL VR B32:
- Lichtfunktion B 3: Tagfahrlicht
→ Apply
```

From model CW48 2020:
``` yaml 
Control unit 09 → Adjustments:
Leuchte 31 AMBL 1 C61:
- Lichtfunktion B 31: Tagfahrlicht
Leuchte 32 AMBL 2 C35:
- Lichtfunktion B 32: Tagfahrlicht
→ Apply
```

### Deactivate light strip (between the headlights)

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

!!! error ""
    No changes recognizable, maybe linked in the dataset

Before KW48 2020:
``` yaml 
Control unit 09 → Adjustments:
Leuchte 2 SL VL B20:
- Lichtfunktion A 2: not_active
- Lichtfunktion D 2: not_active
Leuchte 3 SL VR B32:
- Lichtfunktion A 3: not_active
- Lichtfunktion D 3: not_active
→ Apply
```

After KW48 2020:
``` yaml 
Control unit 09 → Adjustments:
Leuchte 31 AMBL 1 C61:
- Lichtfunktion A 31: not_active
- Lichtfunktion D 31: not_active
Leuchte 32 AMBL 2 C35:
- Lichtfunktion A 32: not_active
- Lichtfunktion D 32: not_active
→ Apply
```