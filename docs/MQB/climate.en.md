# Climate Control System Management

### Display of Fan Rotation Speed in Automatic Mode

=== "Coding in ODIS"
    ``` yaml
    Block 08 → Coding: 
    Byte 11 – Bit 6 (Blower display during auto mode): Activate (replace value 00001110 with 01001110) 
    → Apply (with block reboot)
    ```
  
=== "Coding in OBD11"
    ```yaml
    Block 08 – Heater and climate control electronics → Long coding: 
    Indication of fan mode in automatic mode: Activate
    ```
  
=== "Coding in VCDS"
    ```yaml
    08 – Climate control Coding – 07 → Long coding: 
    Byte 11 – Bit 6: Activate If there is no 6th bit, you can only change the code itself – replace value 00001110 with 01001110 
    Exit → Save 
    ```
    ![Screenshot](../images/MQB/climate.jpg)  

### Retention of the Last Heating Stage for Front Seats

!!! tip ""
    Description/Purpose of Activation: Always remembers the last selected intensity of the driver’s seat heater. This feature allows for more personalized car settings.

=== "Coding in ODIS"
    ``` yaml
    Block 08 → Adaptation:
    Speicherung der Sitzheizungsstufe Fahrer (Retention of driver’s seat heater level): Activate 
    → Apply
    Speicherung der Sitzheizungsstufe Beifahrer (Retention of passenger’s seat heater level): Activate
    → Apply
    ```
  
=== "Coding in OBD11"
    ```yaml
    08 Heater and climate control electronics → Adaptation  
    Retention of driver’s seat heater level: Activate (was Activate for 10 minutes)
    Retention of passenger’s seat heater level: Activate
    ```
  
### Automatic Steering Wheel Heating Based on Outside Air Temperature

!!! warning "Important Information"
    For 2020 models, this coding can be done in:
      - ODIS E 12 or ODIS S 6 versions
      - OBD11
    Coding in older versions of ODIS or VCDS may cause the steering wheel heating to stop working completely  

!!! tip ""
     There are 2 modes:  
     Lenkradtemperatur – based on the sensor in the steering wheel
     Aussentemperatur – based on the outside temperature sensor
     Lenkradtemperatur – activates when the ignition is on if the steering wheel has a low temperature. Relevant for highway driving
     Aussentemperatur – always works

=== "Coding in ODIS"
    ``` yaml
    Block 8 → Coding:
    Heater and climate control electronics / Heated_steering_wheel_automatic_mode
    - Steering wheel heating, automatic mode: set to desired value
    → Apply
    ```
  
=== "Coding in OBD11"
    ```yaml
    08 Heater and climate control electronics → Long coding:
    Steering wheel heating, automatic mode
    ```
  
=== "Coding in VCDS"
    ```yaml
    08 Climate control → Coding – 07 → Long coding:  
    Byte 13 – Bit 2: based on the sensor in the steering wheel  
    Byte 13 – Bit 3: based on outside temperature  
    Do not activate both bits simultaneously!
    If there is no bit selection, change the byte value itself: 14 (based on the sensor in the steering wheel) or 18 (based on outside temperature)  
    Exit → Save 
    ``` 
    ![Screenshot](../images/MQB/wheel.png)  

### Mirror Heating Along with Rear Window (not for Tiguan)

!!! note ""
     This coding does not work for Tiguan cars

=== "Coding in ODIS"
    ``` yaml title="login-password: 31347"
    Block 09 → Coding:
    Mirror heating on while rear window heater on: Activate
    → Apply (with block reboot)
    ```
  
=== "Coding in VCDS" 
    ```yaml title="login-password: 31347"
    09 – Onboard network electronics  
    Coding – 07 → Long coding:
    Byte 15 – Bit 3 (Mirror Heating ON while Rear Window Heater ON): Activate
    Exit → Save  
    ```
    ![Screenshot](../images/MQB/rear.jpg)  

### Mirror Heating Along with Rear Window (for Tiguan)

Activation of mirror heating along with rear window heating regardless of the position of the mirror control joystick on the driver's door

``` yaml
Block 52 → Coding:
Byte 9 – Bit 2 (rear_window_heater_trigger): Activate
```

``` yaml
Block 42 → Coding:
Byte 9 – Bit 2 (rear_window_heater_trigger): Activate
```

Display of mirror heating as a separate item in the comfort systems consumers menu:

=== "Coding in ODIS"
    ```yaml Block 19 → Adaptation: 
    Efficiency_display: 
    - Convenience_consumption_mirror_heating_dependency → Independent_of_outside_temperature_without_switch 
    Range_gain 
    - Consumption_mirror_heating_in_heated_rear_window: Activate 
    → Apply``` 

=== "Coding in OBD11"
    ```yaml Block 19 → Adaptation: 
    Efficiency program display: 
    - Convenience systems consumption, external mirror heating, dependency → Independent of outside temperature without switch 
    Range increase: 
    - External mirror heating consumption in rear window heating: Activate```


### Increase of Temperature and Heating Time for Front and Rear Windows

!!! note ""
    The input value is measured in seconds, for example, 1200 / 60 = 20 (minutes)

Change in temperature and heating time for the rear window


``` yaml title="login-password: 31347"
Block 09 → Adaptation:
Window heating:
- Heckscheibenheizung Zeitwert: from “320 s” to “640 s”
- Abschalttemperatur fuer Heckscheibenheizung: from “35.0 °C” to “38.0 °C”
→ Apply
```

Change in temperature and heating time for the windshield
``` yaml title="login-password: 31347"
Block 09 → Adaptation:
Window heating:
- Frontscheibenheizung Zeitwert: from “320 s” to “640 s”
- Abschalttemperatur fuer Frontscheibenheizung: from “35.0 °C” to “38.0 °C”
→ Apply
```

### Activation of Air Care Climatronic

!!! note ""
    When AirCare is active, the Climatronic system begins to filter the air through the cabin filter in recirculation mode along with the supply of fresh air from outside. As a result, the air inside your car is cleaned more effectively, and its quality is improved by intensively filtering out fine particles.
    It is recommended to use a hypoallergenic cabin filter for this option. It serves to effectively separate solid dust and pollen particles, which are a serious problem in urban environments, especially during spring and autumn seasons.

!!! warning ""
    To activate this functionality, you will need:
    - Climatronic unit with software version not lower than 1403;
    - Gateway unit with software version not lower than 1244/2244;
    - Infotainment MIB unit (STD2/HIGH2) from 2016 onwards (from 2017 model year);

=== "Coding in ODIS"
    ```yaml 
    Block 08 → Coding: 
    filtering_interior_air: installed 
    → Apply (with block reboot)```

=== "Coding in VCDS"
    ```yaml 08 – Climate control 
    Coding – 07 → Long coding: 
    Byte 15 – Bits 5-6 (20 – Interior air filtration): Activate 
    Exit → Save```

  
### Automatic Closing of Sunroof in Rain
:octicons-verified-24: VW Atlas

``` yaml title="login-password: 31347"
Block 09 → Adaptation:
Access control 2:
- RegenschlieRen: permanently
- RegenschlieRen: Activate
→ Apply
```

``` yaml title="login-password: 31347"
Block 09 → Coding → Subblock RLНS:
Byte 00 – Bits 1-2: Activate
→ Apply
```