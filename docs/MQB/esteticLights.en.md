# Coding interior lighting

### Smooth switching on and off of interior lighting

!!! tip ""
The backlighting of all buttons in the cabin lights up and goes out smoothly, looks very natural and beautiful.
  
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Suchbeleuchtung_allgemein:
- KL58 Einschalten mit Rampe →  Active
→ Apply
```


### Engine Start-Stop Button Pulsation

``` yaml title="Login code: 20103"
Block B7 Kessy Security access → Adaptation:
DeveloperCoding Search lights:
- ZAT_illumination_concept_mybeat_clamp58xt: Activate
- ZAT_illumination_modus_mybeat_clamp58xt: Activate
→ Apply
```


### Color profiles

+ [ODIS_E scale for 30 colors for machines without RGB for block 09 (adaptation)](../odis-files/09 – Scale for 30 colors.PRE)
+ [ODIS_E scale for 10 colors for machines without RGB for block 09 (adaptation)](../odis-files/09 – Scale for 9 colors.PRE)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Interior_light_2nd_generation:
- Mittelkonsolenbeleuchtung mehrfarbig: act
→ Apply
---
Interior_light_lamp_configuration:
- Ambientemenue mit globalem aus: active
- Ambientemenue mit alle Zonen: active
- Ambient_Farbliste_HMI: active
→ Apply
---
Ambience_lightning_color_list / Ambientelicht Farbliste
Old value for all: 0
— Rotwert Farbe 1: 217
— Gruenwert Farbe 1: 221
— Blauwert Farbe 1: 235
— Rotwert Farbe 2: 255
— Gruenwert Farbe 2: 172
— Blauwert Farbe 2: 5
— Rotwert Farbe 3: 253
— Gruenwert Farbe 3: 108
— Blauwert Farbe 3: 55
— Rotwert Farbe 4: 222
— Gruenwert Farbe 4: 70
— Blauwert Farbe 4: 20
— Rotwert Farbe 5: 252
— Gruenwert Farbe 5: 116
— Blauwert Farbe 5: 240
— Rotwert Farbe 6: 132
— Gruenwert Farbe 6: 76
— Blauwert Farbe 6: 222
— Rotwert Farbe 7: 0
— Gruenwert Farbe 7: 102
— Blauwert Farbe 7: 225
— Rotwert Farbe 8: 1
— Gruenwert Farbe 8: 192
— Blauwert Farbe 8: 255
— Rotwert Farbe 9: 0
— Gruenwert Farbe 9: 204
— Blauwert Farbe 9: 0
— Rotwert Farbe 10: 182
— Gruenwert Farbe 10: 255
— Blauwert Farbe 10: 57
	→ Apply
```


??? tip "What are these numbers?"
    - Rotwert Farbe 1: 217
    - Gruenwert Farbe 1: 221
    - Blauwert Farbe 1: 235
  
    These are the colors in RGB format for the color picker. 
    Before adaptation, you can make your list of desired colors using a color calculator (for example, https://www.colorspire.com/rgb-color-wheel)
	
??? note "Advanced Colors"
    Expanded colors are specified in the adaptation of block 9: 
    Ambience_lightning_color_list_2

### Color selection depending on motion profile

+ [ODIS_E Coding of block 19](../odis-files/19 – FPA AMB.PRE)
+ [ODIS_E Linking motion profiles for block 09 (adaptation)](../odis-files/09 – Linking motion profiles.PRE)

!!! warning ""
    The installed gate must have a software version of at least 4344 or 5344 and have a Q index or higher

Aesthetic lighting menu

``` yaml
Block 19 → Coding:
FPA_Funktion_AMB: Activate
→ Apply (with block reboot)
```


``` yaml
Block 5F → Adaptation:
Car_Function_Adaptations_Gen2:
- Menu_display_ambient_illumination - Enable
- Menu_display_ambient_illumination_clamp_15_off - not activated.
- Menu_display_ambient_illumination_over_threshold_high - Enable.
- Menu_display_ambient_illumination_standstill - not activated.
- Menu_display_ambient_illumination_after_disclaimer - not activated.
→ Apply
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Interior_light_lamp_configuration:
- Ambientemenue mit globalem aus — active
- Ambientemenue mit alle Zonen — active
- Ambient_Farbliste_HMI — active
- Ambience_light_colorlist_default — 1 
- Farbwahl ueber HMI - not active
- Farbwahl ueber Fahrprofil - not active
→ Apply

Interior_light_2nd_generation:
- Ambiente_Fahrprofil_Individual — 7
- Ambiente_Farbwahl_FPA_waehlbare_Kopplung — active
- Ambiente_Farbwahl_FPA_waehlbare_Kopplung_Status_hmi_default - coupled
- Mittelkonsolenbeleuchtung mehrfarbig — active
→ Apply
```


    Fahrprofil_0 – when opening the doors with the car turned off  

!!! tip "Deciphering profiles"
    Fahrprofil_2 – regular - blue  
    Fahrprofil_3 – sport – red  
    Fahrprofil_4 – off-road - lilac  
    Fahrprofil_5 – eco – green  
    Fahrprofil_7 – individual – purple  
    Fahrprofil_10 – snow - blue  
    Fahrprofil_11 – individual off-road mode
    Fahrprofil_11 - individual off-road mode

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Ambientelicht Zuordnung der Farbe zum Fahrprofi:
- Fahrprofil_0 — 1
- Fahrprofil_1 — 1
- Fahrprofil_2 — 7
- Fahrprofil_3 — 4
- Fahrprofil_4 — 6
- Fahrprofil_5 — 9
- Fahrprofil_6 — 8
- Fahrprofil_7 — 5
- Fahrprofil_8 — 1
- Fahrprofil_9 — 1
- Fahrprofil_10 — 8
- Fahrprofil_11 — 1
- Fahrprofil_12 — 1
- Fahrprofil_13 — 1
- Fahrprofil_14 — 1
- Fahrprofil_15 — 1
→ Apply
```


Profile switching speed
``` yaml title="Login code: 31347"
Block 19 → Adaptation:
Driving Profile Selection Parameter:
- Driving Profile Selection Toogle Time Adaptation - instead of 2000 ms set to 0
→ Apply
```


### Turning off the interior lighting when opening the trunk

!!! tip ""
Initially, when opening the trunk lid, the light came on not only in it, but also in the cabin

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Interior lighting 2nd generation:
- Innenlicht bei offenem Heckdeckel einschalten: Deactivate
→ Apply
```
