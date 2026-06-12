# Head unit

### Deactivating the AM band in the radio

Result: at the bottom left, instead of the unnecessary AM/FM “switch”, an icon for manually tuning radio stations appears

``` yaml title="Login code: 20103"
Block 5F → Coding:
byte_14_AM_disable
select «On»
→ Apply (with block reboot)
```


### Turn on the 360 camera in parking assist mode

:octicons-verified-24: Audi e-tron with 360 camera
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Visual display for park assist: OPS display → with OPS 360°
→ Apply
```


### Activate the rear view camera at speeds > 30 km/h

:octicons-verified-24: Audi e-tron
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Switch-off speed for parking assist: 150 → 140
→ Apply
```


### Wireless Car Play

:octicons-verified-24: Audi
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Configuration:
- Apple_DIO_Wireless: Activate
- Google_GAL_Wireless: Activate
- wlan_5ghz_switch: Activate
→ Apply
```


### Disabling automatic launch of CarPlay or AndroidAuto when connecting a smartphone

:octicons-verified-24: Audi
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
function_configuration_media:
- app_start_automatically_on_customer_device: on → off
→ Apply
```


### View photos from USB or SD

:octicons-verified-24: Audi
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
function_configuration_media:
- picture_viewer: off → on
→ Apply
```


### Activation of MirrorLink (For vehicles where the Audi Smartphone Interface is activated)

:octicons-verified-24: Audi
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
function_configuration_connectivity:
- Mirror_link: off → on
→ Apply
```


### Activate video in motion

``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Speed:
- testmode_video_speed_off: 255
→ Apply
```


!!! note ""
Development mode must be used

### Activate navigation while driving

``` yaml title="Login code: 20103"
Block 5F → Adaptation:
locked menu contents:
- FB_NAV_3: non_blocked
→ Apply
```


### Possibility of calls from a SIM card

:octicons-verified-24: Audi
!!! note ""
For cars equipped with a SIM card slot, the ability to make calls from this SIM card

``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Vehicle_configuration:
- Phone_module_operation_mode: data_only → voice_and_data
- Support_for_response_and_hold: off → on
- Support_of_threeway_calling: off → on
- sim_data_only_sms_support: on → off
- Internal_SIM_card_usage: Never → Always
→ Apply
```


### Ability to connect Bluetooth headphones to a multimedia system

:octicons-verified-24: Audi
```
Block 5F → Coding:
byte_16_Bluetooth_Headphones: off
→ Apply
```


### Disabling the blocking of some functions in the MMI while driving

:octicons-verified-24: Audi
```
title="Login code: 20103"
Block 5F → Adaptation:
Vehicle_configuration:
- unblock_functions_while_piloted_driving: blocked
→ Apply
```


### Disable the user selection screen

:octicons-verified-24: Audi
``` yaml title="Login code: 20103"
Block 5F → Adaptation:
menu_IAA_PSO_over_threshold_high: Deactivate
menu_IAA_PSO_clamp_15_off: Deactivate
menu_IAA_PSO: Deactivate
→ Apply
```


### Driver greeting sound

:octicons-verified-24: Audi
``` yaml
Block 5F → Adaptation:
function_configuration_audio:
- welcome_sound: off → on
→ Apply and reboot the head unit
```
