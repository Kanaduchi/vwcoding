#Dashboard

### Test arrows when turning on the ignition 

When the ignition is turned on, the tachometer and speedometer needles move from the minimum to maximum positions.  
There is no functionality, but it looks impressive!
``` yaml
Block 17 → Adaptation: 
channel “indicator_celebration” → select “active” → execute
```


### Displays the free space in the gas tank in liters 

The remaining space in the tank is the approximate value of liters that can be filled into the tank. The scale step is 5 liters.  
When the tank is fully filled, “---” is displayed. Readings are approximate and may vary ±10 l.
``` yaml
Block 17 → Adaptation: 
channel “Volume to be replenished” → set value “yes” → execute
```


### Disabling the sound signal and seat belt warning 

By default, some vehicles have driver and front passenger seat belt monitoring enabled.  
If someone likes to ride without a seat belt, this function can be disabled.
``` yaml
Block 17 → Coding → Long coding:
Byte 1 – Bit 1: Deactivate
```


### Adjusting the speedometer readings 

In accordance with safety standards, the speedometer readings are slightly higher than the actual speed.  
Different vehicles have different levels of overestimation.  
The number of pulses from the Škoda Octavia (01) overestimates the reading at 100 km/h by ≈ 8 km/h, from the Škoda Fabia (02) by ≈ 15 km/h.  
The most accurate reading is on wheels of size 215/65 R16 when setting the number of pulses from VW Golf (07).
``` yaml
Block 17 → Coding → Long coding:
Byte 0 – Bit 0-3 → 07 Distance Impulse Number 7
```


### Adjusting fuel level readings 

The fuel level sensor in the tank has an error, which is why the inaccuracy in the readings can reach ±10 liters.
``` yaml
Block 17 → Adaptation: 
channel "Display correction of fuel gauge" → Select value → execute
```


Tank capacity – 64 l, division price – 4 l. The low fuel level indicator light comes on when there is 7 liters left in the tank.
Tank capacity – 64 l, division price – 4 l. The low fuel level indicator light comes on when there is 7 liters left in the tank.