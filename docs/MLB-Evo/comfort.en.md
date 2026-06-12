# Comfort systems

### Disabling the headlight washers

``` yaml title="Login code: 31347"
Block 09 → Coding:
head_lamp_wash: not_installed
```


### Comfortable folding of mirrors

``` yaml
Block 46 Central comfort systems module → Coding:
mirror_retraction_at_comfort_close: Activate
```


After this, in the “head” menu you need to uncheck “fold when locked”

### Comfort mode

``` yaml
Block 36 Driver seat adjustment module → Coding:
Byte 3 – Bit 6: Activate 
→ Apply (with block reboot)
```


It is necessary to activate "Assisted landing" and "Save the setting for the radio key" in the GU
It is necessary to activate "Landing assistance" and "Save the setting for the radio key" in the GU

### Passenger comfort mode

``` yaml
Block 06 Passenger seat adjustment module → Coding:
Byte 3 – Bit 6: Activate 
→ Apply (with block reboot)
```


Unlike the driver's seat, the passenger's seat works when the engine is running; you just need to open and close the door

### Adjusting the passenger seat using the driver's seat keys. Symmetry of seats.

``` yaml
Block 36 Driver seat adjustment module → Coding:
Byte 2 – Bit 5: Activate 
Byte 6 – Bit 1: Activate 
→ Apply (with block reboot)
```


``` yaml
Block 06 Passenger seat adjustment module → Coding:
Byte 2 – Bit 5: Activate 
Byte 6 – Bit 1: Activate 
→ Apply (with block reboot)
```


A corresponding menu will appear in the GU.

### rear window defogger

Default rear window heating time and temperature 10 minutes and 35 degrees

``` yaml
Block 46 → Adaptation:
Rear window defogger: value
```


### Setting the handbrake when the ignition is turned off

``` yaml
Block 03 → Adaptation:
Automatic parking brake: active
→ Apply
```


### The sound of the parking sensors is 15 cm earlier

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Distance to curb (Distance to curb):
- Old value - 15 centimeters
- New value - 30 centimeters
→ Apply
```


### Disabling automatic rear wiper activation when reverse gear is engaged

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Channel 19:
- Old value - 0 
- New value - 1 
→ Apply
```


### Setting Webasto not only to warm up the interior, but also the engine

``` yaml
Block 18 → Coding:
Byte 0 – Bit 3: Activate 
→ Apply (with block reboot)
```


### Opening (shifting, instead of lifting) the sunroof while holding the button on the key fob

:octicons-verified-24: Audi
``` yaml
Block CA → Adaptation:
Control_unit_for_sun_roof_convenience_functions:
- Convenience_opening_target_attitude: Tilting_position → sliding
```
