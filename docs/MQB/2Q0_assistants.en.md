# Encoding 2Q0* (MFK 3.0) camera assistants

**This manual is only suitable for cameras 2Q0980653**  

Lane Assist with Adaptive Lane Guidance - Adaptive lane guidance eliminates ping-ponging from lane to lane.  
The option is excellent, it allows you to relax behind the wheel and not have to catch the center of the lane; it is simply irreplaceable on the highway. 

Traffic Jam Assist - Traffic jam assistant.  
This is an extension of Lane Assist to work from 0 km/h. In a traffic jam, the car steers, accelerates and brakes itself, without the participation of the driver. When stopping for more than 3 seconds, you need to press RES or press the gas pedal to start.  
Parameters are required for activation.  

Emergency Assist - Emergency stop assistant.  
If the driver does not want or cannot take part in driving the car, then the car begins to wake him up, first with a sound, then with a sharp grab of the brakes,  
If the person continues to not take control, the car turns on the emergency lights and stops.

Sign Assist - Traffic sign recognition assistant. Shows the signs that the camera reads.  
A SWaP code is required for activation. Step-by-step guide: [2Q0 camera SWaP](2Q0_swap.en.md).

## SWaP functionality extension codes

100E1000 - Enhanced Lane Guidance (aLDW)  
100E1100  
100E1200  
100E1300  
100E1400  
100E1500  
100E1600 — Recognition of objects on the path  
100E1700 - Pedestrian detection (FCPW)  
100E0F00 - Character recognition (TSR/VZE)

## Assistant camera firmware

Located here: [Firmware and parameters][1]

[1]: camAssistFirmwares.md

## Assistant activations

### Activating Light Assist - high beam assistant

``` yaml title="Login code: 31347"
Block 09 (on-board network) → Adaptation:
Fernlicht_assistent:
- Erweiterte_Fernlichtsteuerung: "AFS: FLA: BCM-Fernlicht" or "AFS: FLA: Fernlicht ueber AFS"
- Menuesteuerung Fernlichtassistent Werkseinstellung: available
- Menuesteuerung Fernlichtassistent: available
- Fernlichtassistent Reset: Deactivate
→ Apply
```

``` yaml
Block A5 (assistant camera) → Coding:  
Byte 15 – Bit 5-7: (20) AFS_coding_Light_Assist,High_Beam_Assist
→ Apply
```


### Activating Lane Assist 

Turn on Lane Assist display on the dashboard
``` yaml
Block 17 (instrument cluster/ActiveInfoDisplay) → Coding:
Byte 04 – Bit 6 (Lane_assist): Activate
Byte 11 – Bit 1 (Lane_assist_BAP): Activate
```


HCA - Indicates to the steering control unit that Lane Assist is present
``` yaml title="Login code: 19249"
Block 44 (steering assist) → Coding:
Byte 03 – Bit 1 (Heading_control_assist): Activate
→ Apply
```


Including new functions in the menu
``` yaml
Block 5F (multimedia) → Adaptation:
Car_Function_List_BAP_Gen2:
- LDW_HCA_0x19: Activate
- LDW_HCA_0x19_msg_bus: CAN_Extended
Car_Function_Adaptations_Gen2:
- menu_display_Lane_Departure_Warning: Activate
- menu_display_Lane_Departure_Warning_over_threshold_high: Activate
→ Apply
```


Indicating the parking assistant unit about the presence of Lane Assist (Who has PLA3.0 12 Sensors)

!!! note ""
    PLA3.0 can be in the system as block 10, not 76
  
``` yaml
Block 76 → Coding:
Lane assist linked to steering assist
Byte 3 – Bit 5 (HeadingControl Unterstutzung Auswahl): Activate (Spurhalteassistent aktiviert)
→ Apply
```


Assistant camera configuration
``` yaml
Block A5 (assistant camera) → Coding:  
Byte 08 – Bit 5-7 (Point_of_intervention): A0 late, setting over menu
Byte 09 – Bit 0-1 (Configuration_for_lane_departure_warning_Kl15): 03 Last_setting
Byte 09 – Bit 7 (HC): (1) coded
Byte 09 – Bit 2-3 (Lane_assist_system_mode): 0C Selection_over_menu
Byte 09 – Bit 4-5 (HC advanced takeover request): (1) coded
Byte 17 – Bit 0 (HC messages): (1) coded
→ Apply
```
