# Movement and control

### Disabling the prohibition on overtaking on the right when cruise control is active

``` yaml
Block 03 → Coding:
Overtaking_right_prevention: Deactivate
```


### Reducing jerk when starting with autohold

``` yaml
Block 03 → Adaptation:
Treshold_for_drive_away_assist:
- Data: normal → early
→ Apply
```


### Setting up the disk drying system

``` yaml
Block 03 → Adaptation:
brake disk wiper:
- Param to DOP: normal → strong
→ Apply
```


### Enabling the side slip compensation system during acceleration

``` yaml
Block 03 → Adaptation:
Straigt_line_control:
- Data: Activate
→ Apply
```
