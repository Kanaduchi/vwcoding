# Aesthetic lights

### Dim ambient lighting to a higher level

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0161

!!! note ""
    Setting this coding may cause a non-erasable error in the control unit, as the data in the dataset no longer matches those of this coding.

``` yaml 
Control unit 9 → Adjustments:
Suchbeleuchtung_allgemein:
- KL58 Einschalten mit Rampe: active
→ Apply
```

### Adjust start button illumination

:octicons-verified-24: SFD: no :octicons-verified-24: Tested SW: 0725

``` yaml title="Login code: 10587"
Control unit B7 → Adjustments:
DevCod_ Search lights:
- Suchbeleuchtung_ZAT_Beleuchtung_SES_Variante_aktiv: activated (LED = dim), not_avtivated (LED = bright)
- Suchbeleuchtung_ZAT_SES_Mode: activated (LED flashing), not_activated (LED = on)
→ Apply
```

### Ambient colors

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0161

``` yaml 
Control unit 9 → Adjustments:
Interior_light_hmi_config:
- Hmi_ambient_colors_fod_bitmask: 3F FF FF FF
- Hmi_contour_colors_fod_bitmask: 3F FF FF FF
→ Apply
```

### Ambient colour assignment for the driving profiles

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0183

!!! note ""
    The colours for profile_1-6 may vary depending on the dataset.

``` yaml
Control unit 9 → Adjustments:
Interior_light_general_settings:
- Mapping_fpa_profile_1 (Light blue): 1 (1 = Profil „Comfort“)
- Mapping_fpa_profile_2 (Blue): 5 (3 = Profil „Sport“)
- Mapping_fpa_profile_3 (Red): 3 (4 = Profil „Offroad“)
- Mapping_fpa_profile_4 (Lime): 4 (5 = Profil „Eco“)
- Mapping_fpa_profile_5 (Violet): 2 (6 = Profil „Race“)
- Mapping_fpa_profile_6 (Yellow): 7 (7 = Profil „Individual“)
→ Apply
```

### 30 ambient colours

:octicons-verified-24: SFD: yes :octicons-verified-24: Tested SW: 0159-0183

``` yaml
Control unit 9 → Adjustments:
Interior_light_general_settings:
- Automatic_ambiance_lighting_with_fpa: active

Interior_light_hmi_config:
- Hmi_ambient_colors_bitmask: 45140AD
- Hmi_contour_colors_bitmask: 45140AD
- Hmi_ambient_colors_fod_bitmask: 3FFFFFFF
- Hmi_contour_colors_fod_bitmask: 3FFFFFFF
- Hmi_setup_set_1: 13
- Hmi_setup_set_2: 7
- Hmi_setup_set_3: 15
- Hmi_setup_set_4: 5
- Hmi_setup_members_set_1_byte_2: 1C
- Hmi_setup_members_set_2_byte_3: 60
- Hmi_setup_members_set_3_byte_3: 10
- Hmi_setup_members_set_4_byte_1: C
- Hmi_setup_members_multi_color_byte_1: C
- Hmi_setup_members_multi_color_byte_2: 1C
- Hmi_setup_members_multi_color_byte_3: 70
- Hmi_config_member_center_color_scheme_1: 3
- Hmi_config_member_center_bottom_color_scheme_1: 3
- Hmi_config_member_bottom_color_scheme_1: 3
- Hmi_config_member_center_color_scheme_3: 3
- Hmi_config_member_center_bottom_color_scheme_3: 2
- Hmi_config_member_bottom_color_scheme_3: 2
- Hmi_config_member_center_color_scheme_6: 3
- Hmi_config_member_center_bottom_color_scheme_6: 2
- Hmi_config_member_bottom_color_scheme_6: 3
- Hmi_config_member_center_color_scheme_8: 3
- Hmi_config_member_center_bottom_color_scheme_8: 3
- Hmi_config_member_bottom_color_scheme_8: 2
- Hmi_menu_ambient_lighting: active
- Hmi_ambient_color: active
- Hmi_contour_color: active
- Hmi_ambient_profile_1: active
- Hmi_ambient_profile_2: active
- Hmi_ambient_profile_3: active
- Hmi_ambient_profile_4: active
- Hmi_ambient_profile_5: active
- Hmi_ambient_profile_6: active
- Hmi_ambient_profile_7: active
- Hmi_ambient_profile_8: active
- Hmi_fpa_dependency: active
- Hmi_functional_ambience_lighting: active
- Hmi_play_of_colors: active
- Hmi_Display_Color_light_function: 1

Interior_light_router_config:
- Output_lin5_light_function_slave_3: 7
- Output_lin5_light_function_slave_4: 8
- Output_lin5_light_function_slave_8: 17
- Output_lin5_light_function_slave_9: 18
- Output_lin5_light_function_slave_11: 4
- Output_lin5_light_function_slave_12: 5
- Output_lin9_light_function_slave_2: D
- Output_lin9_light_function_slave_3: E
- Output_lin9_light_function_slave_6: 12
- Output_lin9_light_function_slave_7: 12
- Output_lin10_light_function_slave_3: 9
- Output_lin10_light_function_slave_4: A
- Output_lin10_light_function_slave_8: 19
- Output_lin10_light_function_slave_9: 1A
- Output_lin10_light_function_slave_11: 4
- Output_lin10_light_function_slave_12: 5

Interior_light_functions_1_to_70:
- Light_function_1: active
- Light_function_4: active
- Light_function_5: active
- Light_function_7: active
- Light_function_8: active
- Light_function_9: active
- Light_function_10: active
- Light_function_13: active
- Light_function_14: active
- Light_function_18: active
- Light_function_23: active
- Light_function_24: active
- Light_function_25: active
- Light_function_26: active
→ Apply
```