# Front assistance camera (A5)

### Adjust lane-keeping assistant intervention point

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3403

``` yaml 
Control unit A5 → Coding:
Point_of_intervention: early (intervenes early), late (intervenes late), early_setting_over_menu (Intervenes early, no settings in the menu), late_setting_over_menu (Intervenes late, no settings in the menu)
→ Apply
```

### Save lane-keeping assistant settings (on ignition change)

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3403

``` yaml 
Control unit A5 → Coding:
Configuration_for_lane_departure_warning_Kl15: last_setting
→ Apply
```

### Lane-keeping assist intervention point adjustable in the car menu

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 3129-3303

!!! error ""
    No changes recognizable, maybe linked in the dataset

``` yaml 
Control unit A5  → Coding:
Point_of_intervention: early_setting_over_menu
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