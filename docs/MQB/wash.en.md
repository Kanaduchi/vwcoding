# Parameters of mirrors and windshield wipers

### Operation of external lighting in mirrors with folded rear view mirrors

``` yaml
Block 52 → Coding:
Byte 1 – Bit 5 (turn_off_front_light_with_folded_mirror): not_active
```


``` yaml
Block 42 → Coding:
Byte 1 – Bit 5 (turn_off_front_light_with_folded_mirror): not_active
```


### Lowering the right mirror when reversing (if not activated from the factory)

!!! note ""
Works only when turning the mirror adjustment joystick to the R position  
  
!!! note ""
    The level to which the mirror lowers can be adjusted to suit you:  
    1) Open the car  
    2) Turn on the electromechanical parking brake  
    3) Turn on the ignition  
    4) Turn on neutral in the gearbox  
    5) Now turn on reverse gear  
    6) Adjust the mirror on the passenger side as convenient for us  
    7) The position of the mirror is remembered for the key with which we opened

``` yaml
Block 52 → Coding:
Byte 4 – Bit 2 and 3 (mirror_lowering_with_rear_gear): Activate
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
 Spiegelverstellung :
- Spiegelabsenkung bei Rueckwaertsfahrt: Activate
- Menuesteuerung Spigelabsenkung: Activate
→ Apply
```


### Folding out the mirrors when the engine is turned on

!!! tip ""
The mirrors will only unfold when the ignition is turned on, and not every time the car is opened. Less wear on mechanisms
  
!!! warning ""
    This adaptation only works on VW Tiguan

=== "Coding in ODIS" 
    
``` yaml title="Login code: 31347"
    Block 09 → Adaptation:
    Spiegelverstellung
- Signalisierung_Spiegelanklappung: Not activated
    → Apply
    ```


=== "Coding in OBD11" 
    
``` yaml title="Login code: 31347"
    Block 09 on-board network control → Security access  → Coding:
    Access control
    - Signalisierung_Spiegelanklappung: Activate
    ```


### Folding the side mirrors by holding the door close button or the original key fob close button

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Spiegelverstellung:
- Funk Spiegelanklappung Modus: by look command via remote control key → by convenience operation via remote control key
→ Apply
```


### Setting the headlight washers

Disabling the headlight washers every 10 times the windshield washers are turned on
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Scheinwerferreinigung:
- Anzahl Betaetigungen Frontwaschanlage pro SRA Aktivierung: 10 → 0
→ Apply
```


Analogue:
```
Scheinwerferreinigunglage → inactive
```

Activation after holding the glass washer lever for a long time
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Scheinwerferreinigung:
- SRA Verzoegerungszeit: 0 → 2500 (ms)
→ Apply
```

Disabling the second "zilch" on the headlights (not recommended)
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Scheinwerferreinigung:
- SRA Nachwaschzeit: 10 → 0 (ms)
→ Apply
```

### Service position of wipers

!!! note ""
    Service position: default 166.505329 degrees, change down.  
  
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Service position: enter the required value
→ Apply
Alternative position 2 (wiper position with ignition off)
→ Apply
```

### Service position of the wipers - menu in the radio
:octicons-verified-24: Škoda · :octicons-verified-24: Vehicles with MIB3
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Front wiper:
- Menuesteuerung Frontwischer: active
→ Apply
```

### Disabling the washer pump activation delay (the brushes will not crawl on dry glass)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Front wiper:
- Mindestwaschzeit_Frontwischer: 0 ms → 300 ms
- Timer_DWP_SRA_delay: 300 ms → 0 ms
→ Apply
```

### Wiping off drips – Windshield

!!! note ""
    During the cold season the function does not work (from 5.5 C)

``` yaml title="Login code: 31347"
Block 09 → Coding → Subblock 1:
04EDFD (old value 04EDDD)
→ Apply
```

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Front_wiper 
Traenenwischen Front Status: Activate
→ Apply
```

### Rear wiper operation during rain

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Rear wiper (Rear Wiper / Heckwischersteuerung)
Automatisches Heckwischen: Activate
→ Apply
```