#BRAKES AND TIRES

### Setting ASR at start (vibration suppression at start)

!!! tip ""
For winter conditions, the preferred value is Maximum - it eliminates slipping at start.
``` yaml title="Login code: 40168"
Block 03 → Adaptation:
Starting vibration reduction → select the desired value: Strong, Normal, Maximum
→ Apply
```


### Activation of Hill Hold Control (Hill start assistant)

``` yaml
Block 03 → Long coding:  
Byte 16 – Bit 0: Activate
→ Apply
```


To use, you need to re-read the unit settings from memory (set/disarm the car to standard security for 5-10 seconds)

### Adaptation (setting) Hill Hold Control

``` yaml title="Login code: 40168"
Block 03 → Adaptation:
Berganfahrassistent → select the desired value: early , normal , at the end
→ Apply
```


### Drying brake discs

!!! note ""
There are 3 levels of value: schwach (1-weak), stark (3-strong), mittel (2-medium)
``` yaml title="Login code: 40168"
Block 03 → Adaptation:
Brake disk drying → select Stufe 2 (mittel)
→ Apply
```


### Setting HBA (Brake Assist)

!!! tip "" 
Preferred value - sport
``` yaml title="Login code: 40168"
Block 03 → Adaptation:
Hydraulic brake assistant → select normal
→ Apply
```


### Setting the brake pressure

``` yaml title="Login code: 40168"
Block 03 → Adaptation:
Overboost in brake system → standard value 6 —
→ Apply
```


### Adding menu items ESC-sport, ESC-off (for vehicles with ESC)

``` yaml title="Login code: 40168"
Block 03 → Long coding:  
For ESC Sport + ASR off
Byte 16:
Bit 04: Deactivate
Bits 03, 06: Activate
Off
Byte 16:
Bit 04: Deactivate
Bit 05 — activate
For ESC On/Off + ASR off
Byte 16:
Bit 04: Deactivate
Bits 03, 05: Activate
For ESC On/Off + ESC Sport
Byte 16:
Bit 04: Deactivate
Bit 06: Activate
→ Apply
```


### XDS Activation

!!! warning "Activation IS NOT POSSIBLE"
ESC/ABS units manufactured by TRW (Electronic Brake Control - EBC 460) do not support this functionality.  
    SW: 6R0 614 517 BQ, 6R0 614 517 CA or 6R0 614 517 CG

### EDS response threshold

``` yaml title="Login code: 40168"
Block 03 → Long coding:  
Byte 17 – Bits 0-3
01 – 1.6MPI/66 kW/90 hp/155 nm
02 – 1.6MPI/81 kW/110 hp/155 nm with manual transmission
03 – 1.6MPI/81 kW/110 hp/155 nm with automatic transmission
04 – 1.0TSI/70 kW/95 hp/160 nm and 1.2TSI/66 kW/90 hp/160 nm
05 – 1.2TSI/81 kW/110 hp/175 nm and 1.0TSI/81 kW/110 hp/200 nm
06 – 1.4TSI/92 kW/125 hp/200 nm with DSG
07 – 1.4TDI/66 kW/90 hp/230 nm with manual transmission
08 – 1.4TDI/66 kW/90 hp/230 nm with DSG
09 – 1.6TDI/85 kW/115 hp/250 nm
→ Apply
```


### Indirect tire pressure monitoring TPMS

First generation system
``` yaml title="Login code: 40168"
Block 03 → Long coding:  
Byte 16 – Bit 1: Activate
Byte 16 – Bit 2: Activate
Byte 19 – Bit 7: Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Car_Function_List_BAP_Gen2 – tire_pressure_system_0x07 → change from “not activated.” to ""activated."
Car_Function_List_BAP_Gen2 – tire_pressure_system_0x07_msg_bus → change from “Drive data bus” to “Comfort data bus”
Car_Function_Adaptations_Gen2 – menu_display_rdk → change from “not activated.” to "activir"
→ Apply
```


``` yaml
Block 17 (5JA-920-7XX) → Long coding:  
Byte 04 – Bit 0: Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block 03 → Adaptation:
tire pressure monitoring indicator → select “default”, “sensitive” or “insensitive”
tire pressure monitoring system, tire selection → select value “regular”, “unknown” or “SST-tyres”
→ Apply
```


To enable display of a specific wheel:
``` yaml title="Login code: 40168"
Block 03 → Long coding:  
Byte 15 – Bit 3: Activate 
→ Apply
```
