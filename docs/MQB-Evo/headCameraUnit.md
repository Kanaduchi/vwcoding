# Front assistance camera (A5)

### Steering resistance is adjustable via the Car Menu while Travel-Assist is active

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3405

![Screenshot](../images/MQB-Evo/travel_assist_setting.png)

``` yaml 
Control unit A5 → Coding:
HC_Warn_Intensity: Setting_over_menu
→ Apply
```

### Adjust lane-keeping assistant intervention point

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3405

``` yaml 
Control unit A5 → Coding:
Point_of_intervention: early (intervenes early), late (intervenes late), early_setting_over_menu (Intervenes early, no settings in the menu), late_setting_over_menu (Intervenes late, no settings in the menu)
→ Apply
```

### Save lane-keeping assistant settings (on ignition change)

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3405

``` yaml 
Control unit A5 → Coding:
Configuration_for_lane_departure_warning_Kl15: last_setting
→ Apply
```

### Lane-keeping assist intervention point adjustable in the car menu

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3405

``` yaml 
Control unit A5  → Coding:
Point_of_intervention: early, late, early_setting_over_menu, late_setting_over_menu
→ Apply
```

### Activate lane-keeping assist below 60km/h

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3303

!!! error ""
    No function below 60km/h

``` yaml 
Control unit A5  → Coding:
Hc_variante: Variante_1
→ Apply
```