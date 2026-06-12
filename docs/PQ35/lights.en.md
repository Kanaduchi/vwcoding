# LIGHT

### Turn on DRL

Activates DRL (Daytime Running Light) in various ways.

!!! note "Features"
    There are 4 options:
    A – DRLs through an additional section in the PTF (directly the DRLs themselves);  
    B – DRL through side lights;  
    C – DRL through low beam;  
    D - DRL via PTF (there are 2 value options: 64 - enable, E4 - enable, option to disable via MaxiDot).
``` yaml
Block 09 → Coding → Long coding:
A) Byte 15 – Bit 6: Activate 
Byte 15 – 7 bits: Activate
B) Byte 24 – Bit 7: Activate
C) Byte 11 – Bit 2: Activate
D) Byte 14 – Bit 1: Activate
   Byte 15 – Bit 7: Activate
```


!!! warning "Note"
    If there is no MaxiDot, then in options A and D 7 bits in 15 Bytes can be omitted.

### DRL operation in “O” position

In the “Auto” light switch position, the light switches from DRL to low beam depending on the light level. When this function is turned on, the DRL works only in the “Auto” position; when the function is turned off, the DRL will also light in the “O” position.
``` yaml
Block 09 → Coding → Long coding:
Byte 26 – Bit 3: Deactivate
```


### Side lights through DRLs

The DRLs continue to shine even after the switch is switched to the “side lights” or “low beam” mode. Saves those who covered the front parking lights with “eyelashes”.
``` yaml
Block 09 → Coding → Long coding:
Byte 25 – Bit 1: Activate
```


### Disabling DRL when setting the handbrake

While the car is on the handbrake, the DRLs are turned off; as soon as the handbrake is removed, the DRLs are turned on.
``` yaml
Block 09 → Coding → Long coding:
Byte 11 – Bit 0: Activate
```


### Disabling DRLs when the hazard lights are turned on

While the car's hazard lights are on, the DRLs are turned off.
``` yaml
Block 09 → Coding → Long coding:
Byte 15 – Bit 3: Activate
```


### Strobe effect through DRL

When you turn on the high beams, the DRLs are temporarily disabled. If you “blink” distantly, you get good strobes.
``` yaml
Block 09 → Coding → Long coding:
Byte 12 – Bit 1: Activate
```


!!! warning "Note"
    If you connect low beams as DRLs, you will get “super stroboscopes” (not recommended for xenon).

### Strobe effect through PTF

When the high beam is turned on, the PTF is temporarily disabled. If you “blink” distantly, you get good strobes.
``` yaml
Block 09 → Coding → Long coding:
Byte 14 – Bit 2: Activate
```


### Interior lighting when opening the tailgate

By default, when the trunk door is opened, the interior light comes on (provided the interior lighting switch is set to the “light with doors open” position).  
If you don't need this, you can turn it off.
``` yaml
Block 09 → Coding → Long coding:
Byte 20 – Bit 1: Deactivate
```


### Corner function

The Corner function illuminates corners using PTF. Works only at speeds up to 40 km/h and in conjunction with low beam.

!!! note "Features"
    There are 2 options:  
    A – activation depending on the position of the steering sensor;  
    B - activation depending on the position of the steering sensor and the turn signals on.
  
``` yaml
Block 09 → Coding → Long coding:
Byte 14 – Bit 0: Activate → Bit 7: Activate
A) Byte 17 – Bit 0: Deactivate
B) Byte 17 – Bit 0: Activate
```


!!! warning "Note"
    If you remove and turn off bit 0 in Byte 14, not only Corner, but also PTF will stop working.

### Disabling Corner when reversing

The Corner function also works by default when driving in reverse. If this is not needed, you can disable it.
``` yaml
Block 09 → Coding → Long coding:
Byte 26 – Bit 6: Deactivate
```


### Comming Home function

The Coming Home function leaves the low beam headlights (or PTF) and side lights on for some time after closing the car, as if illuminating your way home.

!!! note "2 options"
    A – through low beam;  
    B – via PTF.  
!!! note "2 response options"
    C – after opening the driver’s door;  
    D – after turning off the ignition.  
!!! note "2 control options"
    E – automatic (activated by light sensor);  
    F - manual (it is necessary to “blink” the high beam after turning off the ignition).
  
``` yaml
Block 09 → Coding → Long coding:
A) Byte 17 – Bit 5: Activate
B) Byte 17 – Bit 3: Activate
C) Byte 12 – Bit 0: Activate
D) Byte 12 – Bit 0: Deactivate
E) Byte 12 – Bit 2: Deactivate
F) Byte 12 – Bit 2: Activate
```


``` yaml
Block 09 → Adaptation: 
Channel 23 “Coming Home” → test → enter the operating time value
→ save
```


### Leaving Home function

The Leaving Home function turns on the low beam headlights and side lights for a while after opening the car using the standard key fob, as if illuminating the way to the car. It is also useful when searching for a car at night in a crowded parking lot.
``` yaml
Block 09 → Coding → Long coding:
Byte 17 – Bit 6: Activate
```


``` yaml
Block 09 → Adaptation: 
Channel 24 “Leaving Home” → test → enter the operating time value
→ save
```


### Comfort turn signal

The comfortable turn signal (also known as Autobahn mode) turns on the turn signal indicators for a certain number of blinks when you lightly touch the turn signal stalk on the steering wheel, without fixing this same lever in the “on” position.

!!! note "Features"
    On units 087 J and 087 Q it changes only if you reset MaxiDot to factory settings.
  
``` yaml
Block 09 → Adaptation: 
Channel 31 “blinking direction indicators” → test → enter the value of the number of blinks → save
```


!!! warning "Note"
    The default value is “3”.

### Visual confirmation of vehicle locking

The turn signals blink when opening and closing the car with the standard alarm system.

!!! note "Features"
    There are 2 values: 0 - disabled, 1 - enabled.
  
``` yaml
Block 09 → Adaptation: 
17 channel → test → enter the required value → save
```


### Emergency alarm

Triggered during sudden (emergency) braking in the form of frequent blinking of brake lights or direction indicators (hazard warning lights).

!!! note "2 options"
    A – through brake lights;  
    B - through the direction indicators.
  
``` yaml
Block 09 → Coding → Long coding:
A) Byte 16 – Bit 1: Activate
B) Byte 16 – Bit 2: Activate
```


!!! warning "Note"
    If both options are activated, the emergency hazard warning lights will not work at all.

### Highway mode

This function, when driving for a long time at speeds above 140 km/h, automatically turns on the low beam and side lights, the so-called European Highway (or Autobahn) mode.  
When driving at a speed below 140 km/h for more than 2 minutes, the mode is automatically switched off.
``` yaml
Block 09 → Coding:
2 block RLS → Long coding:
Byte 0 – Bit 0: Activate
```


### Turning on the low beam in heavy rain

When the front windshield wipers operate in auto mode for more than 15 seconds, or when they are turned on in constant mode, the low beam automatically lights up.  
By default, this feature is enabled. This encoding disables it.
``` yaml
Block 09 → Coding:
2 block RLS → Long coding:
Byte 0 – Bit 1: Deactivate
```


### Adjusting the brightness of headlights and taillights

``` yaml
Block 09 → Coding → Long coding:
Byte 19 – Bit 0-3: select from the list
Byte 19 – Bit 4-7: select from the list
```


!!! warning "Note"
0-3 bit adjusts the brightness of the headlights, 4-7 bit adjusts the brightness of the rear lights

### DRL brightness adjustment

The brightness is adjusted simultaneously for all DRLs (if someone has something additionally configured as a DRL).
``` yaml
Block 09 → Coding → Long coding:
Byte 24: set value
```


!!! warning "Note"
    The default is 92%.

### LED brightness in side light mode

On Octavia A5FL RS makes the LED lights brighter in the side light mode.  
On the Octavia A5FL, the DRLs will light up together with the side lights.  

!!! note "Features"
    If the strobe effect is activated through the DRL, then it turns out to be another type of “strobe light”.
  
``` yaml
Block 09 → Coding → Long coding:
Byte 25 – Bit 1: Activate
```


### Disabling polling of license plate lamps

If LED lights are installed in the rear license plate lamps, an error will appear. To eliminate the error output, lamp polling is turned off.
``` yaml
Block 09 → Coding → Long coding:
Byte 17 – Bit 7: Activate
```


### Disabling footwell lamp polling

If LED lights are installed in the footwell lamps, an error will appear. To eliminate the error output, lamp polling is turned off.
``` yaml
Block 09 → Coding → Long coding:
Byte 25 – Bit 3: Activate
```


## Low beam in xenon mode

When installing xenon lamps, you can enable this mode to remove the effect of involuntary strobes. However, as practice shows, this does not prevent channel burnout in the BCM unit at all - it is a matter of time and quality of the ignition units.
``` yaml
Block 09 → Coding → Long coding:
Byte 14 – Bit 4: Activate
```


## Disabling polling for the health of headlight bulbs

It is necessary if there is a non-standard xenon or Chinese headlight, or LED lamps without additional load.
``` yaml
Block 09 → Coding → Long coding:

---Low beam survey
Byte 14 – Bit 3: ENABLE - installed)
Byte 14 – Bit 4: ENABLE)
---High beam survey
Byte 17 – Bit 2: ENABLE
Byte 25 – Bit 2: ENABLE High beam through the curtain – active/set
```
