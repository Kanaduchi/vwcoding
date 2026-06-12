# Security

### Door lock (CL) by ignition

:octicons-verified-24: Audi
``` yaml
Block 46 → Coding:
central_locking_system_lock_unlock_at_engine_running: Activate
→ Apply
```


### Automatic opening of the car (opening only, will not close automatically)

:octicons-verified-24: Audi
``` yaml
Block 46 → Coding:
automatic_opening: not_active: Activate
automatic_closing: not_active: Activate
keyless_light_illumination: not_active: Activate
→ Apply
```


``` yaml
Block 46 → Adaptation:
Personalized_settings_vehicle:
- Keyless_access_automatic_open: not_active: Activate
→ Apply
```


### Locking the car with the engine running

``` yaml
Block 46 → Coding:
Byte 9 – Bit 7: Activate 
→ Apply (with block reboot)
```


### Audio confirmation when disarming

!!! note ""
Subject to the presence of a standard alarm
  
``` yaml
Block 46 → Coding:
Byte 4 – Bit 6: Activate 
→ Apply (with block reboot)
```


``` yaml
Block 46 → Adaptation:
Sounder_settings:
- Beeptime_opening_central_locking: double_beep
→ Apply
```


a corresponding menu will appear in the GU

### Opening/closing a running car from the button on the door

``` yaml
Block 46 → Coding:
central_locking_system_lock_unlock_then_engine_running: yes
unlocking_hatchback_via_kessy_at_s_contact_active: yes
```
