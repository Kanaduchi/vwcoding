# WIPERS / RAIN AND LIGHT SENSOR

### Service position of windshield wipers in the Swing menu

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper – Menuesteuerung Frontwischer: Activate
→ Apply
```


### Parking wipers with ignition off

!!! note ""
Solves the problem with the wipers stopping halfway in the middle of the glass when the ignition is turned off.
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper:
- Wischer stop bei KL15 aus: Deactivate
→ Apply
```


### Additional sweep of the front windshield wipers (wiping off drops)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Rear Window Wiper – Traenenwischen Heck: Activate
Windshield wiper – Traenenwischen Front Status: Activate
→ Apply
```


### Changing the sensitivity of the light sensor

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Assistance light functions-Lichtsensorempfindlichkeit → normal change to "non sensitive"
→ Apply
```


### Disabling the headlight washers

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper-SRA Waschzeit → 2300 ms replace with 0
→ Apply
```


### Increasing the interval and response time of the headlight washers

A parameter that determines at what time the windshield washers will operate.  
If you change the standard “9” to 1, it will work every time.
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper-Anzahl Betaetigungen Frontwaschanlage pro SRA Aktivierung → enter “15”
→ Apply
```


Parameter responsible for the time required to hold the windshield washer lever under the steering wheel for the headlight washers to operate
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper - SRA Verzoegerungszeit → change the standard 0 ms to, for example, 1500 ms
→ Apply
```


How many seconds will the headlight washers work?
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper - SRA Waschzeit → standard value 600 ms.
→ Apply
```


### Disable rear wiper activation when reverse gear is engaged

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Rear Window Wiper-Komfortwischen Heck → not active
→ Apply
```


or through the radio menu

### Automatic rear wiper activation

!!! note ""
The rear wiper starts to operate when the front wipers are operated at speed 2 for a long time.
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Rear Window Wiper – Automatisches Heckwischen: Activate
→ Apply
```


### Wiper defrost position

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Windshield wiper – Frontwischer Abtauposition → Abtauposition temperaturunabhaengig Referenzwischen 
→ Apply
```
