# CLIMATE / HEATED MIRRORS AND GLASSES

### Increased rear window heating time

!!! note ""
The entered value is measured in seconds, for example: 1200 / 60 = 20 (minutes)
    On 2016 MG and older vehicles, 15 s means standard 10 minutes, 30 s means 20 minutes.
  
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Window heater – Heckscheibenheizung Zeitwert: 600 s  – change to 1200 s 
→ Apply
```


### Remembering the last climate control recirculation state

``` yaml
Block 08 (5JA 907 044) → Long coding:  
Byte 03 – Bit 1: Activate
```


### Memorizing the last state of recirculation of the heater without climate control

``` yaml
Block 08 (5JA 820 045 B) → Long coding:  
Byte 04 – Bit 4: Activate
```


### Adaptation of climate control flaps

``` yaml
Block 08 → Basic parameters 04:
Group 1: read
```


THERE IS NO NEED TO DO ANYTHING WITH THE CAR.  
When adaptation is complete, the message ENDANSCHLAEGE LERNEN is displayed.  
The damper adaptation process is complete.
The damper adaptation process is complete.