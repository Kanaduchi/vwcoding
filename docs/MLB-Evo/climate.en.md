# Climate control

### Reassigning the ECO button

Instead of eco mode, turn on the air conditioner to maximum

``` yaml
Block 08 → Coding:
ACmax/ECO: ECO → ACmax
→ Apply (with block reboot)
```


### Separate activation of bun heating and back heating when the heated seats are turned on

``` yaml
Block 08 → Coding:
Activation_seat_heating_and_backrest_heating: Coupled → ...
→ Apply (with block reboot)
```


### Changing the display duration of the climate settings for rear passengers on the MMI

``` yaml
Block 08 → Adaptation:
MMI display time during rear zone adjustment:
- MMI_display_time_during_rear_zone_adjustment: 10 s → ...
→ Apply
```


### Setting the preheater operating time

``` yaml
Block 08 → Adaptation:
Auxiliary heating run on time:
- Auxiliary_heating_run_on_time: 10 min
→ Apply
```
