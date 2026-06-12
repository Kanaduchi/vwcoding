# DOORS, GLASS, CL, REMOTE FOB AND NORMAL ALARM

### Disabling the seat belt warning

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 00 – Bit 2-4: replace with value 00
→ Apply
```


### Turn off (sound/message) about ignition on when opening the door

``` yaml
Block 17 (5JA 920 7XX) → Adaptation:
Ignition active message – actuator – was “Driver door“, set “No display“
→ Apply
```


### Enable (sound/message) about the ignition on when opening any door

``` yaml
Block 17 (5JA 920 7XX) → Adaptation:
Ignition active message – actuator – was “Driver door“, set “All Doors“
→ Apply
```


### Automatic door locking/unlocking for Entry/Activ models without Swing/Bolero:

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control – automatisches Verriegeln bei Geschwindigkeit: Activate
Access control – automatisches Entriegeln: Activate
Access control – Autolock Autounlock wirkt auf Heck —→ active 
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
ZV Autolock – Autolock_Autounlock_wirkt_auf_Heck: active
ZV Autolock – automatisches_Entriegeln: active
ZV Autolock – Automatisches_Verriegeln_bei_Geschwindigkeit: active
→ Apply
```


### Automatic closing of doors when the speed reaches 15 km/h and opening them when the key is removed.

!!! tip "Possible options"
Clobal Entriegelung - all doors at once  
    Einzeltuerentriegelung - the driver's door opens separately  
    Seitenselektive Oeffnung – all doors on one side  
    Individuell selective Oeffnung Kessy - separate opening when using the keyless entry system
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control – automatisches Verriegeln bei Geschwindigkeit: Activate
Access control – automatisches Entriegeln: Activate
Access control – ZV Türentriegelung → was Clobal Entriegelung
→ Apply
```


### Operation of the radio channel of the key fob when the engine is running

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control – Funk bei Klemme 15 ein: Activate
→ Apply
```


For 19 m.g.
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
ZV allgemein – Funk bei Klemme 15 ein: Activate
→ Apply
```


### Signal operation when the ignition is off

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Auxiliary functions – Signalhorn ohne KL15: Activate
→ Apply
```


### Activation of standard alarm

``` yaml title="Login code: 31347"
Block 09 → Long coding:
Byte 12 – Bit 0: Activate
→ Apply
```


To use, you need to re-read the unit settings from memory (set/disarm the car to normal security for 5–10 seconds)
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control – Akustischer Alarm Signalhorn: Activate
→ Apply
```


Triggered when turning the door lock cylinder with a key:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control – DWA Alarmverzoegerung → change from “immidiat_driver_door_contact_thatcham” to “delay_driver_door_lock_cylinder_skoda”
→ Apply
```


!!! note ""
    To use, you need to re-read the unit settings from memory (set/disarm the car to normal security for 5–10 seconds)

### Enabling sound confirmation of opening and closing using the standard remote control (without standard alarm)

\+ function control item in the Swing2 menu
``` yaml
Block 09 → Long coding: 
Byte 5 – Bit 0: Activate
Byte 5 – Bit 2: Activate
Byte 5 – Bit 4: Activate
→ Apply
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Acknowledgement signals — Akustische Rueckmeldung entriegeln: "Active" 
Acknowledgement signals — Akustische Rueckmeldung verriegeln: "Active" 
Acknowledgment signals - Dauer der Akustischen Rueckmeldung vom Einfachhorn: kurz ; normal - normal, slightly longer than short)
Acknowledgement signals – Optical feedback during locking → Decelerate
Acknowledgement signals – Optische Rueckmeldung Komfortschliessen: Activate
Acknowledgement signals – Optische Rueckmeldung 3.Bremsleuchte → not active
Acknowledgement signals — Menuesteuerung akustische Rueckmeldung: "Active" 
Acknowledgement signals – Akustische Rueckmeldung global: Activate
Acknowledgement signals — Akustische Rueckmeldung Signalhorn: "Active" 
→ Apply
```


### Car opening alarm via standard sound signal (19 m.g.)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Anti-theft device – Akustischer_Alarm_Signalhorn: active
Anti-theft device – anti_theft_alarm_system: active
Anti-theft device – Alarmsignal: frequency modulated
Anti-theft device – Sirenen_Alarmzahl: 10 Alarme
→ Apply
```


### Operation of power windows when the ignition is off

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control 2 – Freigabenachlauf FH bei Kl 15 aus → not active change to active
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
ZV Komfort (Fensterheber) - Freigabenachlauf FH bei Kl 15 aus: active
→ Apply
```


### Setting the duration of operation of the driver's door power window after turning off the ignition

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control 2-FH SAD Kl15Aus Freigabezeit: 600 s 
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
ZV Komfort (Fensterheber)-FH SAD Kl15Aus Freigabezeit → 600 s
→ Apply
```


### Operation of power windows with the door open

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control 2-Freigabenachlauf FH bei Tueroeffnen → not active, set to active
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
ZV Komfort (Fensterheber)-Freigabenachlauf FH bei Tueroeffnen: Activate
→ Apply
```


### Comfortable control of the driver's door window lifter from the standard key fob

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control 2 – Comfort closing: Activate
Access control 2 – Comfort opening: Activate
Access control 2 – Fahrertuerbedienung Fensterheber oeffnen: Activate
Access control 2 – Fahrertuerbedienung Fensterheber schliessen: Activate
Access control 2 – Funk Komfort oeffnen: Activate
Access control 2 – Funk Komfort schliessen: Activate
Access control 2 – Komfortbedienung global: Activate
Access control 2 – Menuesteuerung Komfortbedienung einstellbar → adjustable
→ Apply
```


For those who have a simple blues radio, just activate:

For those who have a simple blues radio, just activate:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Access control 2 – Comfort closing: Activate
Access control 2 – Comfort opening: Activate
Access control 2 – Funk Komfort oeffnen: Activate
Access control 2 – Funk Komfort schliessen: Activate
Access control 2 – Komfortbedienung global: Activate
→ Apply
```


### Automatic closing of the driver's door window when closing the car (19 y.)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
ZV Komfort (Fensterheber) - comfortable closing: active
ZV Komfort (Fensterheber) - comfortable opening: not active
ZV Komfort (Fensterheber) - BAP_Komfortschliessen: active
ZV Komfort (Fensterheber) - Fahrertuerbedienung Fensterheber oeffnen: active
ZV Komfort (Fensterheber) - Fahrertuerbedienung Fensterheber schliessen: active
ZV Komfort (Fensterheber) - Funk Komfort oeffnen: active
ZV Komfort (Fensterheber) - Funk Komfort schliessen: active
ZV Komfort (Fensterheber) - Komfortbedienung global: active
ZV Komfort (Fensterheber) - Menuesteuerung Komfortbedienung einstellbar: adjustable
ZV Komfort (Fensterheber) - Schliesszylinder_Komfort_oeffnen: active
ZV Komfort (Fensterheber) - Schliesszylinder_Komfort_schliessen: active
→ Apply
```
