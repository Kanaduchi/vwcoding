# COMFORT

### Indirect tire pressure control generation II

Indirect tire pressure monitoring of the 2nd generation shows the change in pressure in a specific wheel on MaxiDot.  
The determination is based on the rotation speed of each wheel, subject to a change of at least 0.5 atm.  

!!! note "Features"
    Does not require installation of additional equipment.  
    Activation is only possible on cars with MaxiDot, a dashboard model no lower than 843 Q, ESC and the presence of 18 or 19 Bytes in block 3.
  
``` yaml
Block 19 → equipment list:
4C – Tire pressure monitoring II: Activate
---
Block 17 → Coding → Long coding:
Byte 2 – Bit 0: Activate
---
Block 3 → Coding → Long coding:
Byte 17 – Bit 2: Activate
```


    After activation, you need to go to block 3 and clear the list of errors.
``` yaml
Block 3 → Coding → Long coding:
Byte 16 – Bit 1: Activate
Block 3 → Coding → Long coding:
Byte 16 – Bit 2: Activate
```


For ABS =>BM blocks with 20 Bytes (first “0” last “19”)
``` yaml
Block 3 → Coding → Long coding:
Byte 19 – Bit 0: Activate
Block 3 → Coding → Long coding:
Byte 19 – Bit 1: Activate
```


!!! warning "Note"
    After activation, you need to go to block 3 and clear the list of errors.

### Cruise control on MaxiDot

This function allows you to display the set value of the cruise control (only when it is active) on the MaxiDot instead of the total mileage value.

!!! note "Features"
    Valid only for Škoda Octavia A5FL 1.4 TSI.
  
``` yaml
Block 17 → Adaptation:
channel “IDE03721” → set value “active” → execute
```


### Automatic rear wiper on MaxiDot

In the MaxiDot “Comfort and Lighting” menu, it becomes possible to turn on/off the automatic rear wiper mode, which consists of activating the rear wiper once a minute, provided that the front wipers operate continuously for more than 1 minute.
``` yaml
Block 09 → Coding → Long coding:
Byte 25 – Bit 0: Activate
```


### Disabling the variable position of the front windshield wipers

To reduce wear on the wiper rubber bands, a variable rest position is provided.
``` yaml
Block 09 → Coding → 1 block Wischer → Long coding:
Byte 1 – Bit 2: Deactivate
```


### Disable the front wiper parking zone

During long-term parking (after turning off the ignition), the windshield wipers are lowered to a special place, just below the working area.
``` yaml
Block 09 → Coding → 1 block Wischer → Long coding:
Byte 2 – Bit 5: Deactivate
```


### Additional sweep of front windshield wipers

This function allows you to automatically wipe off droplets a few seconds after using the windshield washer.  
Be careful, dirt can be rubbed into the slush!
``` yaml
Block 09 → Coding → 1 block Wischer → Long coding:
Byte 1 – Bit 3: Activate
```


### Additional rear wiper stroke

Often, after applying water to the rear window, a standard wave of the windshield wiper is not enough and, literally after 10 seconds, the droplets treacherously roll onto the dry glass.  
This function allows you to automatically wipe off droplets a few seconds after using the windshield washer.
``` yaml
Block 09 → Coding → Long coding:
Byte 21 – Bit 4: Activate
```


### Rear wiper operation when reverse gear is engaged

By default, when the windshield wipers are actively operating under the control of the rain sensor, when reverse gear is engaged, the rear wiper is activated.  
If this is not needed (for example, when it is frozen in winter), this function can be disabled.
``` yaml
Block 09 → Coding → Long coding:
Byte 21 – Bit 6: Deactivate
```


### Disabling the rear wiper

If the rear windshield wiper bothers anyone, you can turn it off completely.
``` yaml
Block 09 → Coding → Long coding:
Byte 21 – Bit 0: Deactivate
```


### Changing the frequency of operation of the headlight washers

The standard frequency (every 5th time) may seem very frequent and wasteful to some, so you can change the number of intermediate windshield washer activations.  
If the value is “3”, then the headlight washer will work every 4th time, if the value is “7”, then the headlight washer will work every 8th time.
``` yaml
Block 09 → Adaptation: 
26 channel → test → enter the required value → save
```


### Disabling headlight washers

``` yaml
Block 09 → Coding → Long coding:
Byte 20 – Bit 5: Deactivate
```


### Configuring the light sensor

You can optimally adjust the sensitivity of the light sensor.
``` yaml
Block 09 → Coding → 2 block RLS → Long coding:
Byte 1 – Bit 0-7 → select the desired value
```


### Setting up the rain sensor

You can adjust its sensitivity.
``` yaml
Block 09 → Coding → 2 block RLS → Long coding:
Byte 2 – Bit 0-7 → select the desired value
```


### Disabling the light sensor

If the quality of the light sensor is not at all satisfactory, and it is not possible to adjust it, then you can simply turn it off.  
The light sensor will turn off in this version without turning off the rain sensor, but it will become impossible to encode RLS block 2.
``` yaml
Block 09 → Coding → Long coding:
Byte 21 – Bit 5: Deactivate
```


### Disabling the rain sensor

If the quality of operation of the rain sensor is not at all satisfactory, and it is not possible to adjust it, then you can simply turn it off.
``` yaml
Block 09 → Coding → 2 block RLS → Long coding:
Byte 0 – Bit 5: Activate
```


!!! warning "Note"
    To completely disable it, you need to reload the encodings, i.e. Turn off the car, remove the key and start it again.

### Indications of the remaining space in the tank on the display

The remaining space in the tank is the approximate value of liters that can be filled into the tank. The scale step is 5 liters.  
When the tank is fully filled, “---” is displayed.  
The readings are very approximate and may vary +/- 10 liters from the actual condition.  

!!! note "Features"
    Valid only for vehicles of the 2012 model year.
  
``` yaml
Block 17 → Adaptation: 
channel “IDE04848” → set value “display” / “ok” → execute
```


### Synchronized mirror adjustment

If there is no MaxiDot, then synchronous or separate adjustment of mirrors is configured only this way.  
If you need separate adjustment of the mirrors, this function can be disabled.
``` yaml
Block 09 → Coding → Long coding:
Byte 8 – Bit 6: Deactivate
```


### Power folding mirrors

If suddenly someone needs to disable the function of electric folding mirrors, then the value “4096” must be subtracted from the current value, respectively, if you need to enable the function, then the value “4096” must be added to the current one.

!!! note "Features"
    This method disables the electric folding of mirrors in principle, i.e. Neither the alarm system nor the key fob nor the joystick for controlling the mirrors works.

``` yaml
Block 42 → Coding → 1 field → set the desired value → execute
Block 52 → Coding → 1 field → set the desired value → execute
```


### Lowering the right rear view mirror when reversing

When reverse gear is engaged, the right rear view mirror lowers to the lower position for a better view of the parking area in the area of the rear right wheel.  
The mirror returns to its original position when the ignition is turned off or when moving forward at a speed above 20 km/h.

!!! note "Features"
    Only for electric mirrors with long coding in block 52.
  
``` yaml
Block 09 → Coding:
Byte 4 – Bit 3: Activate
Block 52 → Coding:
Byte 4 – Bit 2: Activate
```


### Setting the time for heated mirrors and rear window

In the northern regions, the standard 10 minutes of heating may not be enough, then the heating time can be increased (or reduced, if anyone needs it).

!!! note "Features"
    The required value is calculated using the formula: value = time (in seconds) / 40.  
    That is, if you need to set the heating time to 20 minutes, then 1200 / 40 = 30, enter the value “30”.  
    You only need to enter whole values!
  
``` yaml
Block 09 → Adaptation: 
25 channel → test → enter the required value → save
```


!!! warning "Note"
    The default value is “15”. If there is no need, then you should not abuse the heating time, because... glass and fuses may not be able to handle the heating for a long time.

### Deactivating the heated mirrors and rear window

Perhaps some people do not need automatic shutdown of the heated mirrors and rear window.
``` yaml
Block 09 → Adaptation: 
25 channel → test → enter “254” → save
```


### Recirculation memory

The function allows you to record the state of interior airflow recirculation. Very useful in winter on cars with automatic start.

!!! note "Features"
    Enabled only on software versions not lower than 0709. There may also be limited functionality in older versions of VCDS.

``` yaml
Block 8 → Coding → Long coding:
Byte 2 – Bit 0: Activate
```


### Heated front seats memory

The function allows you to record the state of the heated front seats. Very useful in winter on cars with automatic start.

!!! note "Features"
    The passenger seat heating memory is activated only on cars of the 2013 model year (it works exactly on 3T0 907 044 BS units), guaranteed on program versions not lower than 12.12. 
    According to the software versions of the units, there may be a restriction on activating the passenger seat.  
    There are three options: “not active” - not active, “active” - active, “active for 10 minutes” - heating only works for 10 minutes.
  
``` yaml
Block 8 → Adaptation: 
channel “IDE01067” → select the desired value → execute
channel “IDE07948” → select the desired value → execute
```


!!! warning "Note"
    The first encoding activates the memory of the driver's seat, the second – the memory of the passenger seat.

### Adaptive heated front seats

The function automatically reduces the heating level of the front seats when a certain heating level is reached, i.e. when the maximum is set, after some time the heating intensity is automatically reduced so as not to “fry the buns”.
``` yaml
Block 8 → Adaptation: 
channel “IDE07947” → select “active” → execute
```


### Automatic door lock

When the speed reaches 15 km/h, the doors will be automatically locked using this function.
``` yaml
Block 09 → Coding → Long coding:
Byte 0 – Bit 2: Activate
```


### Automatic door unlocking

This feature automatically unlocks the doors when the key is removed from the ignition.
``` yaml
Block 09 → Coding → Long coding:
Byte 0 – Bit 1: Activate
```


### Selective door opening

Selective door opening allows you to open only the driver's door with one press of the door unlock button, and all the others with a second press.
``` yaml
Block 09 → Coding → Long coding:
Byte 0 – Bit 3: Activate
```


### Controlling the key fob with the ignition on

By default, it is not possible to control door locks and power windows with the ignition on using the key fob.  
This function allows you to control comfort functions from the key fob even when the engine is running.
``` yaml
Block 09 → Coding → Long coding:
Byte 4 – Bit 2: Activate
```


### Control of electric windows via a button on the center console

By default, holding down the door open/close button on the center console lowers/raises the side windows.  
This feature can be disabled for any purpose.
``` yaml
Block 09 → Coding → Long coding:
Byte 3 – Bit 7: Deactivate
```


### Operation of electric windows after opening doors

By default, when the key is removed from the ignition and the first time you open the doors from the passenger compartment, you can control the electric windows (and the sunroof); as soon as the doors are closed, the control is turned off.  
Disabling this function allows you to unblock the operation of the electric windows when the doors are opened.
``` yaml
Block 09 → Coding → Long coding:
Byte 4 – Bit 4: Activate
```


### Operation of electric windows after turning off the ignition

By default, when you turn off the ignition, you can control the electric windows (and sunroof) from the passenger compartment.  
Disabling this function allows you to block the operation of the power windows when the ignition is turned off.
``` yaml
Block 09 → Coding → Long coding:
Byte 4 – Bit 7: Deactivate
```


### Automatic closing of windows when it rains

If the car is left standing with the windows down and it starts to rain, this function, using a rain sensor, will automatically close the windows so that the rain does not wet the interior.
``` yaml
Block 09 → Coding → Long coding:
Byte 4 – Bit 6: Activate
```


### Driver seat belt warning

By default, some vehicles (depending on the configuration) have driver belt monitoring enabled. If someone likes to ride without a seat belt, this function can be disabled.
``` yaml
Block 17 → Coding → Long coding:
Byte 1 – Bit 1: Deactivate
```


### Changing the sound of the driver's seat belt warning

By default, some vehicles (depending on the configuration) have driver belt monitoring enabled.  
If someone likes to ride without a seat belt, this function can be disabled.

!!! note "Features"
    Value 4 – standard, 1 - continuous signal for one and a half minutes

``` yaml
Block 17 → Adaptation: 
channel “IDE00344” → select the desired value → execute
```


### Horn operation when the car is turned off

By default, the horn only works when the ignition is on or the engine is running.  
With this coding you can turn on the horn even when the car is turned off and the key is removed.
``` yaml
Block 16 → Coding → Long coding:
Byte 2 – Bit 2: Deactivate
```


!!! warning "Note"
    Even if the encoding is successfully written, it is not a fact that the function will work, because Suitable only for single copies of cars.

### Adjusting the speedometer readings

In accordance with safety standards, the speedometer readings are slightly higher than the actual speed.  
Different vehicles have different levels of overestimation.

!!! note "Features"
    The number of pulses from the Škoda Octavia (01) overestimates the reading at 100 km/h by ≈ 8 km/h, from the Škoda Fabia (02) - by ≈ 15 km/h.  
    The most accurate reading is achieved by setting the number of pulses from the VW Golf (07), but this value may not be recorded on all units.

``` yaml
Block 17 → Coding → Long coding:
Byte 0 – Bit 0-3 → change the desired value
```


### Adjusting fuel level readings

The fuel level sensor in the tank has a certain error, which is why the inaccuracy in the readings can reach +/- 10 liters.  
Using the “poke” method, you can select a value at which the error will be minimal.
``` yaml
Block 17 → Adaptation: 
channel “IDE00493” → Select the desired value → execute
```


### Adjusting fuel consumption and range readings

Correction in the brain of calculations of fuel consumption and the corresponding power reserve in %.
``` yaml
Block 17 → Adaptation: 
channel “IDE00499” → Select the desired value → execute
```


### Climate control adaptation

This adaptation opens and closes all the dampers in turn and moves all the internals of the climate control, checks the condition of all buttons and indicator lamps and performs other manipulations that allow you to stir up frozen or stagnant climate control.  
The entire procedure takes less than 1 minute.
``` yaml
Block 8 → 04 – Basic parameters →
channel “IDE01546” → read → wait for the status “Successfully completed”
```


### Disabling the parking sensor activation signal

When you engage reverse gear and turn on the parking sensors, a long beep is heard.  This can be disabled if anyone needs it.
``` yaml
Block 10 → Adaptation: 
channel "IDE01165": Deactivate
```


### Parking sensor volume control

The volume of the parking sensor signal transmitted through the rear speaker can be adjusted.
``` yaml
Block 10 → Adaptation: 
channel “MAS01426” → set the desired level
```


### Disabling the fuel filler door lock

When arming, the gas tank hatch is blocked by a metal rod, which in winter can freeze and refuse to open this very hatch.
``` yaml
Block 09 → Coding → Long coding:
Byte 7 – Bit 5: Activate
```
