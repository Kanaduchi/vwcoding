# DYNAMICS AND CONTROL

### Reconfiguring automatic transmission-6 (Aisin)

``` yaml
Block 02 → Long coding: 
Byte 00 – Bits 00-23 – 000348 or enter another value (000852)
→ Apply
```


There are blocks with seven-digit encoding, for example: “0101000”, accordingly we change the first 7 characters in it from “0101000” to “0000008”.  
What can be changed in this automatic transmission:  

- 0000328 - factory coding for Škoda Rapid and some VW models  
— 0000072 — factory coding Škoda Octavia A5FL  
— 0000008 — encoding Audi A3, Škoda Octavia A5, VW Touran (before MY 2005)  
- 0008201 - Audi TT coding  
- 0008264 - encoding Audi A3, VW Jetta  
- 0008520 - VW Tiguan encoding - alternative encoding  
2015-2016 block 09G 927 749xx (six-digit coding):

— 000348 – Stock  
from model year 2016, block 09G 927 749xx, and from 2017 there is 09G 927 158 AL (already 20-byte encoding).  

The most common and only coding for Octavia, Rapid and Polo sedan models: – 010100000C000000000000000000000000000000.  
Other encoding options for such control units are also possible:  
— 010200000C000000000000000000000000000000 — for 1.4 TFSI and 1.8 TFSI engines  
— 010500000C000000000000000000000000000000 — for 1.6 CPDA engines.  
Accordingly, with a 20-byte encoding, 010100000C0 ... until the end of zeros, change the first 7 digits - for example, to 00000080C ... until the end of zeros (Audi A3) - save!
Accordingly, with a 20-byte encoding, 010100000C0 ... until the end of zeros, change the first 7 digits - for example, to 00000080C ... until the end of zeros (Audi A3) - save!

### Gas pedal recoding (reduced response to pressing)

``` yaml
Block 01 → Long coding:  
Byte 00 – Bits 0-2 – select value 02 – execute. * not recommended for cars with cruise control - there will be cruise glitches
→ Apply
```


### Changing the RAPID power steering settings (driving profile setting)

``` yaml
Block 44 → Long coding:  
Byte 00 – Bit 7: Activate. The value changes from 00 to 80.
→ Apply
```


``` yaml title="Login code: 17580"
Block 44 → Adaptation
Characteristic curve of steering assistance → select the desired value (Driving profile selection button, Comfort, Automatic, Dynamic, Default)
→ Apply
*preferably value – Dynamic
Driving Profile switchover → select the desired value, direct...) → save.
*preferably value – Direct
→ Apply
```


### Activating the TSC function 

!!! note ""
Side-steer compensation, compensation for torque differences on the drive wheels during hard acceleration - only for 1.4TSI

``` yaml title="Login code: 17580"
Block 44 → Long coding:  
Byte 00 – Bit 2-3: Activate. The byte value changes from 00 to 04
→ Apply
```


### Deactivating the start-stop function

``` yaml title="Login code: 20103"
Block 19 → Adaptation:
EM_start_stop_requirement_ambient_temperature:
- Minimum_temperature → -50.0 °C change value to 50.
Or by voltage:
- Start Stop voltage limit → 7.6V change to 12.1V
→ Apply
```
