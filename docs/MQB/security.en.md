# Security

## Central locking
### Options for power trunk lid

| Car | Parameters<br/>(ODIS XML) | Notes |
|:------|:-----------------------------------------|:-------------------------|
| All brands | [(Download)](../parameters/6D.ZIP) | All available parameters |

### Kick Close - closing the trunk with a foot movement

!!! note ""
For Tiguan, the firmware version in block B7 must be at least N.  
    For Superb L is enough.  
    If the BCM block is lower in hardware than H38, updating the firmware of the B7 block higher than G will not work

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
- Kick_and_close: installed
→ Apply
```


``` yaml title="Login code: 31347"
Block B7 → Adaptation:
- Coding_kick and_close_function: Activate
- Coding_easyclose_locking:  Activate
→ Apply
```


### Activation of security system functions without alarm

:octicons-verified-24: Škoda Karoq  
The car will honk if a closed door is opened without a key, for example by breaking the glass

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Anti-theft device:
- Akusticher Alarm Signalhorn: Activate
- Diebstahlwarnangle: Activate
→ Apply
```


### Easy Open activation

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Verdecksteuergeraet:
- Virtuelles_Pedal_HMI_einstellba: Activate
- Virtuelles_Pedal_Verbau: Activate
- Virtuelles_Pedal: Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block B7 → Adaptation:
Byte9_VIP:
- active_vip: Activate
- BU open. tailgate, sensor 1, threshold value 1: 5 → 69
- BU open. tailgate, sensor 1, timer value 3: 0 → 9
- BU open. tailgate, sensor 1, timer 4 value: 226 → 34
- BU open. tailgate, sensor 1, timer value 5: 255 → 34
- BU open. tailgate, sensor 2, timer value 5: 108 → 24
- control unit for opening the trunk door, car model: fe → 22
```


!!! warning ""
After coding, it is necessary to conduct a Performer Test
	Control_supply_voltage_vip

### Arming when closing the trunk door using the Easy Close button

!!! tip ""
With this function, the car will completely close itself when you press the delayed trunk close button.  
    The car will sound a closing signal
  
=== "Coding in ODIS"
    
``` yaml title="Login code: 20103"
    Block B7 → Coding:
    byte9_Vip
    - Coding_easy close_locking: Activate
    → Apply
    ```


=== "Coding in OBD11"
    
``` yaml title="Login code: 20103"
Block B7 authorized access: Activate
    byte9_Vip 
- coding easy close locking: activated.
    ```


### Adjusting the sensitivity of the volume sensor of the standard alarm

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Interior_Monitoring_Sensitivity:
- sensitivity: 70% 
→ Apply
```


### Opening and closing the trunk using the remote control button

``` yaml title="Login code: 20103"
Block B7 → Adaptation:
byte9_Vip:
- Coding_kick and_close_function: Activate
→ Apply
```


### Selective opening of doors

!!! tip ""
When you press the door open button for the first time, only the driver's door opens.  
    When pressed again (must be pressed within 5 seconds from the moment of the first press), all other doors will open.

=== "Coding in ODIS"
    
``` yaml title="Login code: 31347"
    Block 09 → Adaptation:
    Central Locking 
    - Selective (Single) Door Locking: Activate
    → Apply
    ```


=== "Coding in VCDS" 
    
```yaml title="Login code: 31347"
09-Central electronics
    Coding - 07 → Long coding:
    Byte 0 – Bit 0 (Selective Central Locking (Single Door Locking) active): Activate  
    Exit → Save  
    ```


### Auto-close doors when you start driving and auto-open when you remove the key

``` yaml title="Login code: 20103"
Block B7 → Adaptation:
ZV Autolock:
- Automatisches Entriegeln: Deactivate 
- Automatisches Verriegeln bei Geschwindigkeit: Deactivate 
→ Apply
```


### The key fob works when the ignition is on

!!! tip ""
With this function, you can start the car, close it and walk away, while maintaining the ability to remotely open it or the trunk with the key.

=== "Coding in ODIS"
    
``` yaml title="Login code: 31347"
    Block 09 → Adaptation:
    ZV allgemein (Access control) 
    - Funk bei Klemme 15 ein: Activate
    → Apply
    ```


=== "Coding in OBD11" 
    
``` yaml title="Login code: 31347"
09 Block on-board network control → Security access → Adaptation
    ZV allgemein 
    - Funk bei Klemme 15 ein: Activate
    ```


### Kessy handles work when the ignition is on

=== "Coding in ODIS"
    
``` yaml
    Block B7 → Coding:
    Terminal 15 characteristics of passive entry exit function
- Original value – Function only allowed for terminal 15 off
    - New value – Function only allowed for terminal 15 on or off
    → Apply
    ```


=== "Coding in VCDS" 
    
``` yaml
    Block B7  
    Coding - 07 → Long coding → enable ASAM data:
    Byte 0 – Bit 4 (Terminal 15 characteristics of passive entry exit function): Activate  
    Exit → Save
    ```


### Automatic arming when the driver's door is slammed

=== "Coding in ODIS"
    
``` yaml
    Block B7 → Coding:
    Locking for door slamming active: Activate
    → Apply
    ```


=== "Coding in VCDS" 
    
``` yaml
    Block B7  
    Coding - 07 → Long coding → enable ASAM data:
    Byte 1 – Bit 4 : Activate  
    Exit → Save
    ```


### Sound when opening/closing the central lock

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Response signals:
- Akustische Rueckmeldung entriegeln : Activate
- Akustische Rueckmeldung verriegeln : Activate
- Menuesteuerung akustische Rueckmeldung: Activate
- Akustische Rueckmeldung global: Activate
- Akustische Rueckmeldung Signalhorn: Activate
→ Apply
```


!!! warning ""
After encoding, you need to check the box in the radio menu

### Opening and closing the hatch while holding the buttons on the key fob (closing together with the central locking)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Schiebedach:
- SAD Komfort schliessen: Activate
- SAD Komfort oeffnen: Activate
→ Apply
```


Opening the hatch completely

=== "Coding in ODIS"
    
``` yaml
    Block 00CA – Sunroof control module → Adaptation:
    Control_unit_for_sun_roof_convenience_functions / Power sunroof control module – convenience function
    - Convenience_opening_target_attitude: Tilting_position → Sliding_position
    → Apply
    ```


=== "Coding in OBD11"
    
``` yaml
    Block 00CA – Sunroof control module → Adaptation:
    Komfortfunktionen
- Set position for comfortable opening: Lifting position → Shifting position
    → Apply
    ```


## Comfortable driving position

!!! tip ""
Easy Entry function - easy entry, the seat moves away after turning off the ignition and opening the door and moves up when turned on
  
``` yaml
Block 36 – Driver seat adjustment module → Coding:
Byte 3 – Bit 1 (Easy_Entry_front): Activate
Byte 9 – Bit 6 (Easy_Entry_front_over_MMI): Activate
→ Apply (with block reboot)
```


``` yaml
Block 5F → Adaptation:
Car_Function_Adaptations_Gen2:
- menu_display_seat_configuration: Activate
- menu_display_seat_configuration_over_threshold_high: Activate
→ Apply 

Car_Function_List_BAP_Gen2:
- driver_seat_0x10: Activate
- driver_seat_0x10_msg_bus — Comfort tire
→ Apply
```


## Comfortable seating position for the passenger

!!! tip ""
Easy Entry function - easy entry, the seat moves away after turning off the ignition and opening the door and moves up when turned on
  
``` yaml
Block 36 – Driver seat adjustment module → Coding:
Byte 6 – Bit 4 (EasyEntry_Enable_Passenger_over_DriverMMI): Activate
→ Apply (with block reboot)
```


  
``` yaml
Block 6 – Passenger seat adjustment module → Coding:
Byte 3 – Bit 1 (Easy_Entry_front): Activate
Byte 9 – Bit 6 (Easy_entry_front_over_MMI): Activate
Byte 6 – Bit 4 (EasyEntry_Enable_Passenger_over_DriverMMI): Activate
→ Apply (with block reboot)
```


``` yaml
Block 5F → Adaptation:
Car_Function_Adaptations_Gen2:
- menu_display_seat_configuration: Activate
- menu_display_seat_configuration_over_threshold_high: Activate
→ Apply 

Car_Function_List_BAP_Gen2:
- Passenger_Seat_0x20: Activate
- Passenger_Seat_0x20_msg_bus - Comfort bus
→ Apply
```


## Window control
### Pressure release when closing door

:octicons-verified-24: Škoda

!!! tip ""
When the front doors are closed, the window lowers by 1 cm to reduce pressure in the cabin
``` yaml
Block 42 → Coding:
Short_drop: Activate
→ Apply
```


``` yaml
Block 52 → Coding:
Short_drop: Activate
→ Apply
```


### Operation of power windows with the ignition off and duration of their operation

!!! tip ""
When the ignition is turned off, the power windows continue to work, but if the door is opened/closed, the power windows turn off

=== "Coding in ODIS"  
    
``` yaml
    Block 09 → Adaptation:
    Acces control (ZV Komfort)
- Freigabenachlauf FH bei Tueroeffnen abbrechen: Activ on NotActiv
- FH SAD Kl15Aus Freigabezeit: 600 s change to any other in seconds
    → Apply
    ```


=== "Coding in OBD11"
    
``` yaml title="Login code: 31347"
    Block 09 on-board network control → Security access  → Coding:
    ZV Komfort
    - Freigabenachlauf FH bei Tueroeffnen abbrechen: Activate
    ```
