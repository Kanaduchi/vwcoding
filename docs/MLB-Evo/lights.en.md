# Lighting equipment

### Changing the number of turn signal signals

``` yaml
Block 46 → Adaptation:
Turn signal control :
- Freeway flashing: new value
→ Apply
```


You can also change the number of flashes when arming and disarming

### Do not turn off the low beam when blinking the high beam

!!! note ""
Works both with the headlights off and with the low beams on

``` yaml title="Login code: 31347"
Block 09 → Coding:
lowbeam_at_flash: not_active: Activate
→ Apply
```


### Activating rear lights in DRL mode

``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 2 – Bit 3 (SL_AT_DRL): Activate
→ Apply
```


### Configure (or disable) the display of "Turn on lights" messages on the dashboard

``` yaml title="Login code: 31347"
Block 09 → Coding:
headlight_hint_0: lds_at_null
headlight_hint_1: lds_at_parkinglight
→ Apply
```


### Setting adaptive light functions in the menu

``` yaml title="Login code: 31347"
Block 09 → Coding:
mmi_adaptive_light: not_active
→ Apply
```


### Disabling DRL in the menu

``` yaml title="Login code: 31347"
Block 09 → Coding:
drl_mmi: Activate
→ Apply
```


### Disabling DRL when raising the handbrake

``` yaml title="Login code: 31347"
Block 09 → Coding:
drl_break: Activate
→ Apply
```


### Increasing DRL brightness

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
sl_at_drl: active
```


### Tail lights animation

:octicons-verified-24: Audi
!!! warning ""
Works only on cars with top optics

``` yaml
Block 46 → Coding:
SBBR_variant: 0 → 1
→ Apply
```
