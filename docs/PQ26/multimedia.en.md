# MULTIMEDIA

### Changing the sound of Swing/Bolero (Arkamys)

!!! note ""
Arkamys will sound correctly only if the radio has the appropriate parameters. VCP or ODIS is being loaded, this parameter file is not available.

``` yaml
Block 5F → Long coding:
Byte 11 – Bit 2 : Activate
Byte 08 – Bit 6 (VDA Low Frequency Input): Activate
→ Apply
```


### Changing the Swing/Bolero start screen

``` yaml
Block 5F → Long coding:
Byte 18: change value 00 to preferred
01-vRS
02-SCOUT
03-Laurin & Klement
04-GreenLine
07-MonteCarlo 
08-SportLine )
→ Apply
```


The next time you turn on the radio for the first time (after removing it from the signal), we see a new screen saver.
The next time you turn on the radio for the first time (after removing it from the signal), we see a new screen saver.

### Deactivation of the AM band in the Swing/Bolero GU

``` yaml
Block 5F → Long coding:
Byte 14 – Bit 1: Activate
```


### Changing the vehicle display type in the “Vehicle Status” menu

``` yaml
Block 5F → Long coding:
Byte 01 – Bits 0~23:
– 035201, model: Škoda Rapid
– 035203, model: Škoda Rapid Spaceback
- 035331, model: Škoda Rapid FL (NH3)
– 036200, model: Škoda Fabia
– 036202, model: Škoda Fabia Combi
– 037301, model: Škoda Octavia liftback
– 038401, model: Škoda Superb liftback
→ Apply
```


### Changing the screen saver display time when the radio is turned on

``` yaml
Block 5F → Adaptation:
Time display for start screen → 2.0 s – set the desired
→ Apply
```


20103

### Activating rear door speakers after self-installation (Swing/Bolero/Amundsen)

``` yaml
Block 5F → Long coding:
Byte 04 – Bits 0~31 → select
- BE000000
If 2-component acoustics with tweeters are installed in the rear doors, select accordingly:
— FF000000 .
→ Apply
```


### Activation of the low-frequency analog input AUX-IN

``` yaml
Block 5F → Long coding:
Byte 8 – Bit 4: Activate
→ Apply
```


### Activate USB input

``` yaml
Block 5F → Long coding:
Byte 19 – Bits 6~7 → select value
- 80 or
- C0
→ Apply
```


### Changing microphone sensitivity

``` yaml
Block 5F → Adaptation:
Microphone sensitivity → 0 dB – set the required value.
→ Apply
```


20103
20103

### BC readings with ignition off

``` yaml
Block 5F → Adaptation:
Car_Function_Adaptations_Gen2-menu_display_board_computer_clamp_15_off → switch from not activated to activated
→ Apply
```


20103

### Driving school mode on Swing/Bolero

``` yaml
Block 5F → Adaptation:
Car_Function_Adaptations_Gen2-menu_display_driving_school → switch from not activated to activated
Car_Function_Adaptations_Gen2-menu_display_driving_school_over_threshold_high → switch from not activated to activated
Car_Function_List_CAN_Gen2-Driving_school → switch from Not available to available
Car_Function_List_CAN_Gen2-Driving_school_msg_bus → switch from Not available to Comfort data bus
→ Apply
```


20103

### Activating the Swing 3 Off-Road mode

``` yaml
Block 5F → Adaptation:
Car_Function_Adaptations_Gen2 – menu_display_compass_clamp_15_off: activated
Car_Function_Adaptations_Gen2 – menu_display_compass_over_threshold_high: activated.
Car_Function_Adaptations_Gen2 – menu_display_compass: activated.
→ Apply
```


20103

### Activating the Engineering Testmode Swing 2

Only using VAS5054 and ODIS-E
```
Start ODIS-E
Select project (SK25X or SK26X) → start
Select control unit 5F → Diagnostic session
In the dialog select:
Development mode → Execute
Then: Adaptation/parameter →
Developer mode → enter value Activated
```


# Configuring sound parameters in the Engineering menu
The engineering menu is launched by long-pressing the Setup button until the menu appears on the screen: Engineering Testmode.  
Select: Software System – Audio Management →  
in Loudness check the box  
then select: Input Gain Offset and in the points below increase the level by 13 dB  
* FM source - +12  
* Media File Player - +9  
* BT audio - +13  
We exit the Engineering menu and, if necessary, adjust the balance and equalizer in the sound settings.  
After completing all sound settings, it is advisable to deactivate the Engineering menu. It is believed that when activated, it discharges the battery.

### Enabling the transition from winter to summer time

``` yaml
Block 5F → Adaptation:
Summertime: automatic, manual change to Europe
→ Apply
```


20103

### Connecting a second phone. Swing 3

One phone can be used for calls, the other for listening to music.

``` yaml
Block 5F → Adaptation:
Dtmf_without_active_call: Activate
Support_second_phone: Activate
Support_for_response_and_hold: Activate
→ Apply
```


20103

``` yaml
Block 17 (5JA 920 7XX) → Long coding:
Byte 11 – Bit 6: Activate (telephone2_BAP)
→ Apply
```
