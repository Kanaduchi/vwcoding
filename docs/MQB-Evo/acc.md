# Cruise control function

### Activate cruise control (No distance regulation)

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0395

``` yaml title="login code: 20103"
Control unit 13 → Coding:
Cruise_control_mode: activated
→ Apply
```

### Disable prevention of overtaking on the right (ACC)

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0395

``` yaml title="login code: 20103"
Control unit 13 → Coding:
Overtaking_right_prevention: deactivated
→ Apply
```

### Adjust ACC 1 km/h increments

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0395

!!! note ""
    Tap +/- 1 km/h, press a little longer for +/- 10 km/h

``` yaml title="login code: 20103"
Control unit 13 → Coding:
Operation_mode: Operation_mode_2
→ Apply
```

### Curve assistant adjustable in the car menu for ACC

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0395

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml title="Login code: 20103"
Control unit 13 → Coding:
Curve_assistent_CarMenu: activated
→ Apply
```

### Speed limiter adjustable in the car menu for ACC

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0395

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml title="Login code: 20103"
Control unit 13 → Coding:
Speed_limit_assistent_CarMenu: activated
→ Apply
```