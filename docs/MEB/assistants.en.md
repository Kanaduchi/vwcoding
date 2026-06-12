# Driver assistance

!!! warning ""
    Writes to ECUs A5 and 13 require **SFD** (2024+ vehicles — **SFD2**). See [SFD](../sfd.en.md).

### Disable right-lane overtaking lock (ACC)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block 13 → Coding:
Overtaking_right_prevention: deactivated
→ Apply
```


### Lane Assist — early intervention (A5)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block A5 → Coding:
HC_point_of_intervention: early_setting_over_menu
→ Apply
```


### Travel Assist

Full procedure on MQB-Evo:

→ [Travel Assist (MQB-Evo)](../MQB-Evo/travelAssist.en.md)  
→ [Emergency Assist, TJA, ECU 44](../MQB-Evo/driverAssistExtras.en.md)

### Front Assist / emergency braking

!!! note ""
Activation depends on fitted radar and camera. Coding alone cannot add the feature without hardware.

``` yaml title="Login code: 20103"
Block A5 → Coding:
Front_Assist: activated
→ Apply
```


!!! danger ""
    Change only channels that exist in your software. A missing channel means different equipment or a parameter set is required.