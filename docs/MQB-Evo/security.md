# Security

### Enable automatic central locking in the car menu

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
ZV_Autolock:
- ZV_autolock_autounlock_hmi: adjustable
→ Apply
```

### Deactivate warning sound when opening the door with ignition

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

``` yaml 
Control unit 9 → Adjustments:
Clamp_Control:
- Ignition_Active_Message: No_display
→ Apply
```

### Automatic door unlocking when DSG is in park position

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
ZV_Autolock
- automatic_unlock_nar: active
→ Apply
```

### Deactivate start-stop system

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 7084-7312

``` yaml 
Control unit 19 → Adjustments:
Slave_component_list:
- Battery Monitoring Control Module: no
→ Apply
```

!!! note ""
    Does not work on vehicles with a 45V electrical system.  
    Also, an error remains in the gateway: "Subsystem_multiple_plug_identified"
    No error message appears in the AID or infotainment system.

### Deactivate online unlocking of the central locking

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
OCU:
- Remote_Unlock_Lock: not_active
→ Apply
```

### Enable garage door opener

:octicons-verified-24: SFD: yes

``` yaml title="Tested SW: 0161"
Control unit 9 → Adjustments:
UGDO:
- ugdo_transmitter: installed
- ugdo_via_mmi_configurable: active
→ Apply
```

``` yaml title="Tested SW: 1941"
Control unit 5F → Adjustments:
Car_Function_List_BAP:
- UGDO_0x14_msg_bus: activated
- UGDO_0x14: clamp_15
Car_Function_Adaptations:
- menu_display_ugdo_over_threshold_high: activated
- menu_display_ugdo: activated
→ Apply
```

### Open Trunk with Vehicle Key

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
ZV Heck:
- Direktauswurf_heckdeckel: active
→ Apply
```

### Switch central locking with key even when ignition is on

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml 
Control unit 09 → Adjustments:
ZV allgemein:
- Funk_bei_Kl15_ein: active
→ Apply
```

### Automatic locking when walking away (if forgetting to lock the car)

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0174 - 0183

!!! error ""
    Only possible from software version 0174 onwards. Not possible with versions below 0174.  
    Does not work when moving away from the tailgate sideways.

``` yaml 
Control unit 09 → Adjustments:
Automatische_Funktionen:
- Automatisches_Verriegeln_aktiv: activated
DevCod_IDGeber_Suche:
- Unterdrueckung_zyklischer _Suchen_bei_entriegeltem_Fahrzeug_aktiv: not_activated
DevCod_Nutzerkonfigurationen:
- HMIMenue_Aktivierung_Nah_Mittel_Fern_aktiv: activated
→ Apply
```

``` yaml title="Login code: 10587"
Control unit B7 → Adjustments:
Passive_Komfort:
- Passive_Komfort_Oeffnen_aktiv: activated
- Passive_Komfort_Togglen_aktiv: activated
DevCod_AutomatischeFunktionen:
- Slowpolling_Rechtecksignal_Aktiv: activated
→ Apply
```
