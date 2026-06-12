# INSTRUMENT PANEL

### Item “Space in the tank”

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 10 – Bit 4: Activate
→ Apply
```


### Arrow test

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 01 – Bit 0: Activate
→ Apply
```


### Lap timer

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 01 – Bit 3: Activate
→ Apply
```


### Enabling the "Remove Key" reminder

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 01 – Bit 4: Activate
→ Apply
```


### Rear fog light warning when speed limit is exceeded

``` yaml title="Login code: 31347 (legacy 20103)"
Block 09 → Adaptation:
Driving light and parking light – Nebelschlusslicht Warngeschwindigkeit: 
- 0—warning disabled.
- 1 … 255 — speed limit for warning
→ Apply
```


### Speed adjustment on the speedometer

!!! note ""
It only works up to 03, but above that the mileage begins to deviate noticeably from the real one.  
    With a value of 03, mileage increases by approximately 300 meters per 10 km.  
    With factory coding 00, the increase is 200 meters per 40 km.
``` yaml
Block 17 (5JA 920 7XX) → Long coding:
03 byte:
- 00, tire circumference: standard
- 01, tire circumference: variant1
…
- 07, tire circumference: variant7
→ Apply
```


### Reset maintenance reminder

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
SIE – time from inspection → instead of mileage in days, set value 0
SIE – distance from inspection → instead of mileage in km, set value 0
→ Apply
ESI – Resetting ESI → select Reset
→ Apply
```


### Changing the maintenance interval (by mileage and time)

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
ESI – maximum value km-driving distance/inspection → 30000 km – change to desired, for example 15000
ESI – minimum value km-driving distance/inspection → 15000 km – change to desired, for example 7500
ESI – maximum value of time between inspections → 730 d – change to required
ESI – minimum value of time between inspections → 365 d – change to required
→ Apply
```


### Clock in 12h mode

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 06 – Bit 7: Activate 
→ Apply
```


### Eco-tips

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 01 – Bit 7: Activate
→ Apply
```


``` yaml
Block 19 → Long coding:
Byte 13 – Bit 0: Activate
→ Apply
```


After coding, you need to go to the settings menu for the displayed information of the panel in the radio and turn on the “Eco-tips” item.
``` yaml
Block 19 → Adaptation:
Efficiency program display – Tip → aerodynamic resistance: close the windows/sunroof.
Efficiency program display – Advice → brake. motor: high clutch only when rev. less than 1300.
Efficiency program display – Tip → do not press the accelerator pedal when starting the engine.
Efficiency program display – Tip → turn on recommended gears.
Efficiency program display – Tip → use the start-stop system.
Efficiency program display – Tip → turn on the start-stop system.
Efficiency program display – Tip → climate control: close the windows/sunroof.
Efficiency program display – Tip → use position D.
Efficiency program display – Tip → do not press the accelerator pedal when the vehicle is stationary.
Efficiency program display – Tip → roof open: turn off the climate control. installation
→ Apply
```


!!! note ""
    After coding, you need to go to the settings menu for the displayed information of the panel in the radio and turn on the “Eco-tips” item.

### Adjusting fuel consumption readings

!!! info "Calculation example"
We take the consumption of the on-board computer, displayed on the panel - 6.3 liters per 100 km.  
    Let's take the actual consumption as observed - for example, 6.8 liters per 100 km.  
    Next, we calculate the proportions.  
    We take the on-board computer readings as 100%  
    6.3 – 100%  
    6.8 – X  
    X = 6.8 * 100 /6.3  
    X = 107.9%, after rounding 108%  
    In the adaptation value field we indicate this value. On average, the on-board computer underestimates the readings by 0.4 liters.

Default - 100%, step 1%, minimum - 85%, maximum - 115%

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
Display correction of consumptions and operating range: 100%
→ Apply
```


### Fuel gauge - adjustment / calibration

Factory setting: -12.8; value range: -8.0 to 8.0  
Negative values lower the fuel needle, positive values raise it. This also affects the calculation of the remaining volume.

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
Offset for tank calibration values:
- Complete tank calibration: -12.8 l change to the desired one
→ Apply
```


### Setting the clock source

- internal clock – internal clock  
- GPS – receiving from the GPS unit. Time is taken according to Greenwich Mean Time (GMT+0) 
- radio controller – time from block 5F  
- inactive - do not synchronize

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
Source for synchronization of time: internal clock
→ Apply
```


### Slippery road warning temperature change (“Snowflake”)

It works on the principle of a hysteresis loop: operation is at the lower level, shutdown is at the upper level.

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
outside_temperature:
- outside_temperature: 4 # Warning output temperature
- p_ice_warning_exit_temperature: 6 # Temperature for disabling warning output
- Source for synchronization of time: internal clock
→ Apply
```


### Turn on the instrument panel illumination in parking light mode

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
Illumination_algorithm:
- Scale_switching_algorithm: lds 
→ Apply
```


### Changing the instrument panel language

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
Language version: change to the desired one
→ Apply
```


### Duration of service reminder display

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
time_parameter_display:
- hmi_t_NextServiceAnz_ms: 5s change to the desired value
→ Apply
```


### Duration of display of warning messages

``` yaml title="Login code: 25327 (legacy 20103)"
Block 17 (5JA 920 7XX) → Adaptation:
time_parameter_display:
- hmi_t_NextWarning_ms: 6s change to the desired value
→ Apply
```
