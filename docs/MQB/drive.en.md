# Movement and control

### Reconfiguring the steering rack

!!! tip ""
The steering wheel becomes more informative.  
     If you set the "Direct" profile, the steering wheel will be heavy from very low speeds.  
     If you set the "Incremental" profile, the steering wheel will become heavier as the speed increases.

``` yaml title="Login code: 19249"
Block 44  → Coding:
Select active driving profile: Activate
→ Apply
	
Block 44  → Adaptation:
Power steering characteristics: "Dynamik"
Switching riding mode profile: "Incremental"
→ Apply
```


### Disabling trailer stabilization

=== "Coding in ODIS"
    
``` yaml
    Block 03 → Coding:  
    - Trailer Stabilization: Deactivate
    → Apply (with block reboot)
    ```


=== "Coding in VCDS" 
    
``` yaml
    Block 03 — ABS → Adaptation:  
- Adaptation channel No. 56: 1 – enabled, 0 – disabled
    Exit → Save  
    ```


### Smooth start with Autohold

!!! tip ""
Sometimes there is a slight jerk when starting to drive with AutoHold enabled. The effect is quite noticeable; now the car starts moving very smoothly.

=== "Coding in ODIS"
    
``` yaml title="Login code: 20103"
    Block 3-ABS/ESP → Adaptation:
Drive_away_assist_control (Anpassung des Dynamischen Anfahrassistenten): early (Früh)
Hill_hold_assist_control (Dynamischer Anfahrassistent): early (Früh)
    → Apply
    ```


=== "Coding in OBD11" 
    
``` yaml title="Login code: 20103"
Block 03 brake system electronics control → Adaptation:
Dynamic traction assist: early
Hill assist: early
    ```


### Gas pedal response time

``` yaml title="Login code: 27971 or 19249"
Block 44 → Adaptation:
Switching Driving Profile: Direct, Threshold Control
→ Apply
```


### DSG-7 adaptation

1. Warm up the engine and gearbox - about an hour's drive
2. Engine off, ignition on
    
``` yaml
    Block 02 → Transmission electronics → Basic settings:
launch of quick adaptation of double friction clutch
waiting for the completion message
    ```


3. Turn off the ignition
4. Start the engine - on. handbrake (do not press the brake)
5. P transmission
    
``` yaml
    Block 02 → Transmission electronics → Basic settings:
basic gearbox installation
We wait for the completion sign and listen to the frightening grinding and tremors of the control gear
    ```
