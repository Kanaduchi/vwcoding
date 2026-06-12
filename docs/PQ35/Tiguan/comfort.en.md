# COMFORT

### Changing the frequency of operation of the headlight washers 

The standard frequency (every 5th time) may seem very frequent and wasteful to some, so you can change the number of intermediate windshield washer activations.  
If the value is set to “9”, then the headlight washer will operate every 10th time.
``` yaml title="Login code: 31347"
Block 09 → Adaptation: 
26 channel → enter the required value → save
```


Complete shutdown of headlight washers
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 20 – Bit 5: Deactivate
```


### Automatic closing of windows when it rains 

If the car is left standing with the windows down and it starts to rain, this function, using a rain sensor, will automatically close the windows so that the rain does not wet the interior.
``` yaml
Block 09 → Coding → Long coding:
Byte 4 – Bit 5-6: Activate
```


``` yaml
Block 09 → Coding → Long coding → block rls:
Byte 00 – Bit 2: Activate
```


### Operating time for heated rear window and mirrors 

In the northern regions, the standard 10 minutes of heating may not be enough, then the heating time can be increased (or reduced, if anyone needs it).
``` yaml title="Login code: 31347"
Block 09 → Adaptation: 
25 channel → enter the required value → save Required value
```


It is calculated by the formula: value = time (in seconds) / 40. That is, if you need to set the heating time to 20 minutes, then 1200 / 40 = 30, enter the value “30”.

### Disabling the “press the clutch pedal” message 

For owners of cars with a manual transmission, the message “Press the clutch pedal” will not be displayed on the dashboard.
``` yaml title="Login code: 31347"
Block 09 → Coding → Long coding:
Byte 20 – Bit 4: Deactivate
```


### Disarming the standard alarm system via the door lock 

If this function is active, then you can remove the car from the standard alarm using the door lock, i.e. radio electronics are not involved in this process and just the key blade is enough. Maybe someone needs this, but it’s still better to disable the function, otherwise an attacker will be able to open the car with a regular mechanical hack.
``` yaml
Block 09 → Coding → Long coding:
Byte 6 – Bit 2: Deactivate
```


### Disable wiper twitching 

When operating in automatic mode in the lower position, the wipers always jump down.
``` yaml
Block 09 → Coding → Subblock WWS → Long coding:
Byte 1 – Bit 2: Deactivate
```


### Setting up the rain sensor 

Many people complain about the illogical operation of the rain sensor and you can adjust its sensitivity.
``` yaml
Block 09 → Coding → Subblock RLS → Long coding:
Byte 2 – Bit 0-7 → select the desired value, or specify it manually.
```


I empirically determined the optimal value for myself - CD.

### Controlling central locking with a second radio key when the ignition is on 

By default, control of central locking and comfort functions with the ignition on is not possible from the second radio key.  
This function allows you to do this when the ignition is turned on or the engine is running.
``` yaml
Block 09 → Coding → Long coding:
Byte 4 – Bit 2: Deactivate
```


### Sound confirmation of opening/closing central locking 

The siren beeps once when closing the central locking system and twice when opening it.  
Power on:
``` yaml
Block 09 → Coding → Long coding:
Byte 6 – Bit 3: Activate
```


Closing the central lock:
``` yaml
Block 09 → Coding → Long coding:
Byte 5 – Bit 1: Activate
```


Opening the central lock:
``` yaml
Block 09 → Coding → Long coding:
Byte 5 – Bit 4: Activate
```


### Folding mirrors when arming (starting from version VASYA Diagnostic 15.6.2 / VCDS 15.7) 

Initially it costs 90 (folding is disabled) 
- 90 – folding is disabled (by default);  
- 95 – folding when arming the alarm, unfolding when the ignition is turned on;  
- 99 - folded and unfolded when arming and disarming the alarm system.
``` yaml
Block 42 → closed area → enter “04354” → Adaptation:
(9)-System_Parameter_0-System Parameter Byte8 → enter the required value → save
```


The mirror switch can be in any position. Doors can be opened. There is no need to start the car.

### Memory for heated driver and passenger seats 

The function allows you to record the state of the heated front seats. Very useful in winter on cars with automatic start.  
There are three options: “not active” - not active, “active” - active, “active for 10 minutes” - heating only works for 10 minutes.
``` yaml
Block 8 → Adaptation: 
channel “Retention of driver’s seat heater level” → select the desired value → execute
channel “Retention of passenger’s seat heater level” → select the desired value → execute
```


### Adaptive heated front seats 

The function automatically reduces the heating level of the front seats when a certain heating level is reached, i.e. When the maximum is set, after 10 minutes the heating intensity is automatically reduced so as not to “toast the buns”.
``` yaml
Block 8 → Adaptation: 
channel “Seat heater performance reduction” → select “active” → execute
```
