# LIGHTING

### Light sensor sensitivity 

You can optimally adjust the sensitivity of the light sensor.
``` yaml title="Login code: 31347"
Block 09 → Coding → Subblock RLS → Long coding:
Byte 1 – Bit 0-7 → select the desired value, or specify it manually.
```


Recommended range: …0707, 0808, 0909, 0A10, 0B11, 0C12, 0D13, 0E14, 0F15, 1016, 1117, 1218, 1319, 1420, 1521, 1622, 1723…
Recommended range: …0707, 0808, 0909, 0A10, 0B11, 0C12, 0D13, 0E14, 0F15, 1016, 1117, 1218, 1319, 1420, 1521, 1622, 1723…

### Turn on the hazard warning lights during emergency braking 

Triggered during sudden (emergency) braking in the form of frequent blinking of brake lights or direction indicators (hazard warning lights).  
There are 2 operating options: A - through brake lights, B - through direction indicators
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
(A) Byte 16 – Bit 1: Deactivate
(B) Byte 16 – Bit 2: Activate
```


!!! warning ""
    If both options are activated simultaneously, the emergency alarm will not work!

### Footwell lighting when opening the door 

If the brightness of the footwell illumination is set to low via MFA+, then when the door is opened, the illumination becomes brighter.
``` yaml title="Login code: 31347"
Block 09 → Adaptation: 
27 channel → enter value from 0 to 200 (0 – 100%) → save
```


### Highway mode 

This function, when driving for a long time at speeds above 140 km/h, automatically turns on the low beam and side lights, the so-called European Highway mode.  
When driving at a speed below 140 km/h for more than 2 minutes, the mode is automatically switched off.
``` yaml title="Login code: 31347"
Block 09 → Coding → Subblock RLS → Long coding:
Byte 0 – Bit 0: Activate
```


### Turning off the DRL when the handbrake is on 

While the car is on the handbrake, the DRLs are turned off; as soon as the handbrake is removed, the DRLs are turned on.
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 11 – Bit 0: Activate
```


If bit 0 is hidden, you can replace the hexadecimal value C0 with C1.

### Comfort turn signal 

The comfortable turn signal (also known as Autobahn mode) turns on the turn signal indicators for a certain number of blinks when you lightly touch the turn signal stalk on the steering wheel, without fixing this same lever in the “on” position.
``` yaml title="Login code: 31347"
Block 09 → Adaptation: 
31 channel → enter the value of the number of blinks → save
```


### Operation of brake lights when the car is not started

``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 16 – Bit 6: Activate
```


### Disabling PTF when high beams blink 

When the high beams are turned on, the PTFs are temporarily disabled. If you “blink” distantly, you get good strobes.
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 14 – Bit 2: Activate
```


### Interior lighting when opening the tailgate 

By default, when the trunk door is opened, the interior light comes on (provided the interior lighting switch is set to the “light with doors open” position).  
When the trunk door is opened, the trunk light comes on.
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 20 – Bit 1: Deactivate
```


### Activating the brake lights on the trunk lid 

This encoding has been tested on restyled and pre-restyled models ONLY with halogen headlights (NO XENON!).
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 18: change value AA to 2F
```


Slave functions → Škoda V19.47 → Octavia 2004 → 2011 (B) → Sedan → CDAB 1.8 l TFSI / 112 kW → Central switching unit → J519 – Lighting configuration, parameterization → address 3088 → change value 21 to 29.
Slave functions → Škoda V19.47 → Octavia 2004 → 2011 (B) → Sedan → CDAB 1.8 l TFSI / 112 kW → Central switching block → J519 – Lighting configuration, parameterization → address 3088 → change value 21 to 29.

### Activation of DRL via PTF with brightness adjustment 

Only for those who do not have standard xenon and LED modules in the headlight. To activate the PTF together with the DS:
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 14 – Bit 1: Activate
```


To disable DS:
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 15 – Bit 6: Deactivate
```


Reduce the brightness of the PTF with the DRL on (60% of the glow from 55 W, i.e. 33 W):
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 24 – Bit 0-6 → 60
```


### Coming Home feature 

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
  
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
A) Byte 17 – Bit 5: Activate 
B) Byte 17 – Bit 3: Activate 
C) Byte 12 – Bit 0: Activate 
D) Byte 12 – Bit 0: Activate  
E) Byte 12 – Bit 2: Activate 
F) Byte 12 – Bit 2: Activate
```


Function operating time
``` yaml title="Login code: 31347"
Block 09 → Adaptation: 
23 channel → enter the operating time value → save
```


### Leaving Home function 

The Leaving Home function turns on the low beam headlights and side lights for a while after opening the car using the standard key fob, as if illuminating the way to the car.  
It is also useful when searching for a car in the dark in a crowded parking lot.
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 17 – Bit 6: Activate
```


Function operating time
``` yaml title="Login code: 31347"
Block 09 → Adaptation: 
24 channel → enter the operating time value → save
```


### Illumination of turns using PTF (Corner) 

The Corner function only works at speeds up to 40 km/h and in conjunction with low beam.  
There are 2 options: A - activation depending on the position of the steering sensor; B - activation depending on the position of the steering sensor and the turn signals on.
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 14 – Bit 0: Activate 
Byte 14 – Bit 7: Activate 
A) Byte 17 – Bit 0: Deactivate 
B) Byte 17 – Bit 0: Activate
```
