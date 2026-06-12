# DYNAMICS

### Resetting the accelerator pedal

Slightly eliminates the delay in the accelerator pedal, making it more distinct. This coding is a kind of lite version of the accelerator pedal coding.  

!!! note "Features"
    Available only for 1.8 TSI and 2.0 TSI engines. This is done with the engine turned off.  Immediately after coding, it is necessary to adapt the throttle valve.

``` yaml
Block 1 → Coding → Long coding:
Byte 0 – Bit 0-2 → change from 02 (Škoda) to 01 (Audi)
```


!!! warning "Note"
    Along with this setting, it is better to immediately reconfigure XDS, BAS and TSC to maximum.  
    Some people use settings from Volkswagen – they say it becomes less twitchy compared to Audi.

### Throttle valve adaptation

Over time, due to dirt, the range of the “open-closed” position changes slightly; to restore it, adaptation is carried out, so to speak, the unit re-learns where the damper position is actually closed and where it is open.  

!!! note "Features"
    The setting is performed with the engine turned off and the ignition on.  
    For cars with an electronic throttle (the vast majority of new cars) you need to select group “060”, for those with a mechanical throttle – group “098”.

``` yaml
Block 1 → Basic parameters:
enter the required value in the “Group” window
Click the “On/Off” switch at the top right → wait for the status “Adaptation is normal”
```


!!! warning "Note"
    If none of the groups respond, it means that your engine does not support this adaptation.

### Automatic transmission reconfiguration

The classic 6-speed automatic transmission (Aisin 09G) can be reconfigured to your taste and color. The dynamics/flow ratio is directly proportional.  

!!! note "Features"
    Basic settings:  
    “0000008” - A3 (<2005), Octavia (<2005), Beetle (1C/1Y/9C), Touran (<2005);  
    “0000072” - Octavia (2006>), Golf (1K), Golf Plus (5M), Passat (35/3C), Polo (9N), Touran (2006>);  
    "0008201" - TT (8N);  
    “0000328” - Golf (5K), Golf Plus (52), Tiguan (5N) Rest of World (RoW);  
    “0000840” - Tiguan (5N) North American Region (NAR);  
    "0008520" - Tiguan (2013>)  

    Experimental settings:  
    "0000020" - No Assistance Edition;  
    "0008524" - Full Assistance Edition.  
  
    You can also experiment at your own risk with turning on/off individual assistants (1 – on, 0 – off).  
    The data below is not official.  
  
    The encoding is selected in this way: the required value is compiled from 16 bits in the binary system and converted to hexadecimal (an engineering calculator will help).  
  
    | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |  
    |:--:|:--:|:--:|:--:|:--:|:--:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|  
    | 0  | 0  | A  | 0  | 0  | 0  | B | C | 0 | D | 0 | E | F | G | 0 | H |  
  
    13 bits (A) – support for steering wheel paddle shifters;  
    9 bit (B) – disables the display of the gear number on the dashboard;  
    8 bit (C) – engine braking when descending;  
    6 bits (D) – smooth locking of the torque converter clutch;  
    4 bit (E) - disable hill hold (HHC);  
    3 bits (F) - adaptation to driving style (DSP);  
    2 bit (G) - disables engine braking at speeds below 65 km/h;  
    0 bit (H) - operation of the steering wheel paddles only in manual mode (in D and S they are not active)

``` yaml
Block 2 → Coding:
1st field → set the required value → execute
```


!!! warning "Note"
    Since the automatic transmission is structurally a very complex mechanism, incorrect settings can lead to a wide variety of deviations in operation, including breakdown.  
    Be extremely careful!  
    Before reconfiguring, write down your factory settings, and after reconfiguring it is recommended to reset the automatic transmission adaptations.

### Reconfiguration of the GTZ

Braking efficiency is increased by applying pressure settings in the brake master cylinder (MBC) from Audi S3, Škoda Octavia RS, VW Golf GTI, Seat Leon Cupra.

!!! note "Features"
    This technique is only suitable for cars with ESP (MK60 unit).
  
``` yaml
Block 3 → Coding → Long coding:
Byte 0 – Bit 0: Deactivate
Byte 0 – Bit 2: Activate
Byte 8 – Bit 7: Deactivate
Byte 8 – Bit 5: Activate
```


!!! warning "Note"
    It is advisable not only to reconfigure the pressure in the turbocharger, but also to change the brake discs and calipers themselves. In this case, it is also worth reconfiguring.

### Reconfiguration when changing brake discs

When installing brake discs that differ in size from the standard ones, it is necessary to reconfigure the brake system. 

!!! note "Features"
    This technique is only suitable for cars with ESP (MK60 unit).

Performed according to the algorithm:
``` yaml
Block 3 → Coding → Long coding:
Byte 2: set value
Byte 10: set value
```


| Disc diameters, mm<br/>(front/rear) | Value 2 Bytes | Value 10 Bytes |
|:-----------------------------------------:|:----------------:|:-----------------:|
|                 280 / 253                 |        20        |        04         |
|                 288 / 253                 |        40        |        02         |
|                 288 / 272                 |        40        |        02         |
|                 312 / 253                 |        60        |        06         |
|                 312 / 272                 |        C0        |        03         |
|                 345 / 310                 |        80        |        01         |

### Reconfiguration when changing clearance

When installing a suspension that changes the ground clearance, it is necessary to reconfigure the brake system.

!!! note "Features"
    This technique is only suitable for cars with ESP (MK60 unit).
  
Performed according to the algorithm:
``` yaml
Block 3 → Coding → Long coding:
Byte 4: set value
Byte 12: set value
```


| Name | Suspension parameters<br/>(designation / ground clearance) | Value 4 Bytes | Value 12 Bytes |
|:-------------|:-----------------------------------------------|:-----------------|:------------------|
| Euro | 1JA/145 | 09 | 90 |
| PPD | 1JB/169 | 0A | 50 |
| Sports | 1JC/130 | 89 | 91 |

### Electronic Differential Lock (XDS)

XDS (Electronic Differential Lock) improves cornering dynamics through an extended differential lock (also often referred to as ride comfort).

!!! note "Features"
    There are 3 XDS levels: 0 – medium, 1 – low, 2 – high (there is a limitation of the starting dynamics).
``` yaml
Block 3 → Coding → Long coding:
Byte 17 – Bit 3: Activate
```


``` yaml
Block 3 → Adaptation: 
Channel 36 XDS → test → enter the required level value → save
```


### Setting Brake Assist (BAS)

BAS (Brake Assist System) helps the driver in a critical situation to realize maximum force on the brake pedal in the first moments of an emergency stop. 

!!! note "Features"
    There are 3 BAS levels: 0 – medium, 1 – low, 2 – high.

``` yaml
Block 3 → Adaptation: 
Channel 09 Brake Assist → test → enter the required level value → save
```


### Torque Compensation System (TSC)

When accelerating sharply, front-wheel drive cars with 1.8 TSI and 2.0 TSI drift slightly to the right. TSC (Torque Steer Compensation) eliminates this drift.

``` yaml
Block 44 → Adaptation: 
05 channel TSC → test → enter “1” → save
```


!!! warning "Note"
    You can also set the value to “2”, it seems that the steering angle increases. When accelerating from 60-80 km/h, a slight vibration is transmitted to the steering wheel - this is a feature of this assistant.

### Setting up steering assist (DSR)

Driving Steering Recommendation (DSR) helps when steering in difficult conditions, such as heavily rutted roads, by providing light force in the direction desired for steering.

!!! note "Features"
    There are 3 DSR levels: 0 – high, 1 – medium, 2 – low
  
``` yaml
Block 3 → Adaptation: 
Channel 54 DSR → test → enter the required level value → save
```


!!! warning "Note"
On TSI engines it is better to set the value to “0”. For those who do not support block 3, you can do the same
configure 44 blocks via channel 3.

### Activating adaptive steering assist (DCC)

Adaptive/Dynamic Chassis Control (DCC) allows the power steering and adjustable suspension (if equipped) to adapt to road conditions.

!!! note "Features"
    Not supported by all units; performance has been tested on software versions no lower than 3305.

``` yaml
Block 44 → Adaptation: 
Channel 8 DCC → test → enter “1” → save
```


### Hill Hold Assist (HHC)

HHC (Hill Hold Control) holds the car on a descent or ascent and prevents it from rolling away spontaneously until the driver presses the gas pedal. 

!!! note "Features"
    There are 3 HHC levels: 0 – standard, 1 – fast (low speed), 2 – long (high speed).

``` yaml
Block 3 → Coding → Long coding:
Byte 16 – Bit 0: Activate
```


``` yaml
Block 3 → Adaptation: 
Channel 58 HHC → test → enter the required level value → save
```


!!! warning "Note"
    If after activation your ABS error does not disappear, then your unit does not support HHC.

### Brake Disc Cleaning System (BDW)

BDW (Brake Disc Wiper) allows you to keep your brake discs dry and clean in rainy weather.  
The system is activated when the windshield wipers are turned on (manually or automatically) for more than 5 seconds. It should be enabled by default, but it's still worth checking.

``` yaml
Block 3 → Adaptation: 
Channel 55 BDW → test → enter “1” → save
```


!!! warning "Note"
    It should be enabled by default on all cars, but it's still worth checking.

### Cornering Brake Control (CBC)

CBC (Corner Brake Control) controls the brake pressure during braking in such a way as to create a corrective turning “counter-torque”, thereby correcting the manifestation of “yaw” when braking in a turn.
  
``` yaml
Block 3 → Coding → Long coding:
Byte 15 – Bit 4: Activate
```


!!! warning "Note"
    It is not activated on all cars.

### Switchable ESC

On cars manufactured after 2008, ESC (Electronic Stability Control) cannot be turned off with a button (only ASR can be turned off). The same function allows, by holding the ASR button for 5 seconds, to temporarily disable the ESC until the button is turned on again or the engine is restarted.

!!! note "Features"
    Suitable for blocks whose number in the penultimate character contains “B” (XXX XXX XXX BX) except for blocks with numbers ending in “BD”, “BE”.  
    This is done with the engine turned off.  

* For blocks <=BL with 19 Bytes (first “0” last “18”).  
There are 2 shutdown options:  
A) – ASR is turned off first, after a few seconds of holding the button, ESC is turned off;  
B) – ESC is immediately turned off.

``` yaml
Block 3 → Coding → Long coding:
Byte 06 – Bit 7: Activate
Byte 14 – Bit 0: Activate
A) Byte 16 – Bit 3: Deactivate
B) Byte 16 – Bit 3: Activate
```


!!! warning "Note"
    On TDI engines 14 Bytes do not need to be changed.
  
* For blocks =>BM with 20 Bytes (first “0” last “19”)  
There are 2 shutdown options: 
C) – normal complete shutdown of ESC;  
D) – ESCSport mode, in which it becomes possible to let the car skid, but at a critical moment the ESC will still work.
  
``` yaml
Block 3 → Coding → Long coding:
Byte 19 – Bit 4: Activate
C) Byte 19 – Bit 5: Activate
   Byte 19 – Bit 6: Activate
   Byte 19 – Bit 7: Deactivate
D) Byte 19 – Bit 5: Deactivate
   Byte 19 – Bit 6: Deactivate
   Byte 19 – Bit 7: Activate
```


### Setting idle speed to 1.6 MPI

If the speed fluctuates, this setting will help to even it out.

!!! note "Features"
    The setting is performed with the engine turned off and the ignition on.  
    Valid range: from 128 (corresponds to 640 rpm, on the dashboard ≈ 700 rpm) to 148 (corresponds to 832 rpm, on the dashboard ≈ 850 rpm).  
    The check is performed with the engine running. The setting is reset after the battery is discharged or disconnected.

``` yaml
Block 1 → Adaptation: 
01 channel → enter the required value → save
```


Examination
``` yaml
Block 1 → 08 – Measuring groups:
In the “Group” window enter the value “050” and click “Read”.
The idle speed value is in the 2nd window.
```


### Adaptation of the steering angle sensor

This adaptation allows you to set the zero position of the steering wheel angle by adapting the G85 sensor.

!!! note "Features"
    Adaptation is performed with the engine running; the steering wheel must initially be set straight. 
    For cars without ESC, the technique is performed in the 44th block, for cars with ESC - in the 3rd block.
  
``` yaml title="Login code: 40168"
3 block → Closed area → Basic parameters
In the “Group” window enter the value “060” and click “Read”
one turn of the steering wheel to the right → set the steering wheel straight → one turn of the steering wheel to the left → set the steering wheel straight
press the “On/Off” switch → listen to the squeak of the dashboard
click “Read” → wait for the status “Normal”
```
