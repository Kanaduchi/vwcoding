# Activating assistants

### Activating Lane Assist

!!! warning ""
To activate this assistant you do not need parameters

``` yaml title="Login code: 20103"
Block A5 (assistant camera) → Coding:
ALDW_lane_assist: installed
→ Apply
```


Including new functions in the menu
``` yaml
Block 5F (multimedia) → Adaptation:
Car_Function_List_BAP_Gen2:
- LDW_HCA_0x19: Activate
- LDW_HCA_0x19_msg_bus: Terminal 15
Car_Function_Adaptations_Gen2:
- menu_display_Lane_Departure_Warning: Activate
- menu_display_Lane_Departure_Warning_over_threshold_high: Activate
→ Apply
```


HCA – Indicates to the steering control unit that Lane Assist is present
``` yaml
Block 44 (steering assist) → Coding:
Lane assist linked to steering assist
Byte 03 – Bit 1 (heading_control_assist): Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block 09 (on-board network) → Adaptation:
Heading Control config: heading_control
→ Apply
```


Turn on Lane Assist display on the dashboard
``` yaml
Block 17 (instrument cluster/ActiveInfoDisplay)  → Coding:
Lane_assist: yes
→ Apply
```


``` yaml
Block A5 (assistant camera) → Adaptation:
Lane_departure_warning_on_state: Selection_over_menu_default_on
→ Apply 
Personalisation_for_lane_departure_warning:
- TT_activated_not_activated: last_setting
→ Apply
```


### Activating the traffic sign assistant (vehicle must be equipped with a camera)

!!! warning ""
Parameters may be required to activate this assistant.

The car camera will read the road signs and display the set speed in the cluster.

``` yaml
Block 5F (multimedia) → Adaptation:
Vehicle function list BAP:
- traffic_sign_recognition_0x21: Activate
Vehicle menu operation:
- menu_display_road_sign_identification: Activate
- menu_display_road_sign_identification_over_threshold_high: Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block A5 (assistant camera) → Coding:
Byte 1 – Bit 0 (Traffic Sign Recognition (FTE) active): Activate
→ Apply
```


``` yaml
Block 17 (instrument cluster/ActiveInfoDisplay)  → Coding:
Byte 5 – Bit 2: Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block A5 (assistant camera) → Adaptation:
Display end of speed limit symbol: active
Display valid additional signs: 00100111
→ Apply
```


### Activating the Emergency Assistant

!!! warning ""
Parameters may be required to activate this assistant.
  
``` yaml title="Login code: 20103"
Block A5 (assistant camera) → Adaptation:
EA_emergency_assist: Variant_2
→ Apply
```


``` yaml
Block 13  → Coding:
Emergency_steer_assist: Activate
→ Apply
```


``` yaml
Block 46  → Coding:
central_locking_system_emergency_assist: Activate
→ Apply
```


### Displaying assistants on the windshield projection

:octicons-verified-24: Audi
``` yaml
Block 82 → Coding:
Road sign detection: not available → available 
Lane Departure Warning: not available → available 
→ Apply
```


### Activating Lane Assist on the Audi Q7 4M

!!! warning
It is not possible to completely disable Lane Assist on vehicles where it is not activated from the factory.  
    This is due to the absence of a mechanical button at the end of the left steering column switch:

``` yaml
Block A5 (assistant camera) → Coding:
HC: Coded
HC_mob_line: Coded
→ Apply
```


``` yaml
Block A5 (assistant camera) → Adaptation:
Personalization of lane dept. warning Cl. 15 on: Off
→ Apply
```


``` yaml title="Login code: 31347"
Block 09 → Coding:
heading_control_config: heading_control
→ Apply
```


``` yaml
Block 44  → Coding:
Heading Control Assistant: Active
→ Apply
```


``` yaml
Block 5F → Adaptation:
Car_Function_List_BAP_Gen2:
LDW_HCA_0x19: activated
LDW_HCA_0x19_msg_bus: Terminal 15

Car_Function_Adaptations_Gen2:
menu_display_Lane_Departure_Warning: activated
menu_display_Lane_Departure_Warning_over_threshold_high: activated
→ Apply
```


``` yaml
Block 17 → Coding:
Lane Assist: yes
→ Apply
```


``` yaml
Block CB  → Coding:
HCA: Active
→ Apply
```


``` yaml
Block 82  → Coding:
Lane Departure Warning: Available
→ Apply
```


``` yaml
Block 3C  → Coding:
Lane_Departure_Warning_System: with_Lane_Departure_Warning_System
→ Apply
```
