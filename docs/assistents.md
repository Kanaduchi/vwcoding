# Активация ассистентов

### Активация кнопки вызова ассистентов (для 5Q0 953 502 AJ / Valeo 408 876)

	Блок 16 → Адаптация
	> Электроника рулевой колонки
    > Клавиша вспомогательных систем водителя
	> Установл.
	→ Применить

> логин-пароль 20103

### Активация Line Assist нужно сделать следующее

    Блок 08 →
    Camera heating: installed
    
    Блок 4B →
    mdf_activation: enabled
    headlamp_coding_word: 1
    
    Блок 3C →
    Lane_Departure_Warning_System:_with_Lane_Departure_Warning_System
    Front_Sensors_Driver_Assistance_System:_with_Front_Sensors_Driver_Assistance_System
    
    Блок 76 →
    3 байт 5 бит или HeadingControl Unterstutzung Auswahl: _Spurhalteassistent aktiviert (Heading-Control)
    
    Блок 09 →
    Fernlicht_assistent: _Erweiterte_Fernlichtsteuerung: _AFS, FLA, Fernlicht (GLW, MDF)
    Fernlicht_assistent:_Menuesteuerung Fernlichtassistent:_available
    
    Блок 13 →
    _Front_camera: _installed
    
    Блок 17 →
    Lane_assist:_yes
    traffic_sign_display:_yes.
    Lane_assist_BAP:_yes.
    
    Блок 44 →
    heading_control_assist:_active.
    
    Блок 5F →
    [VO]_Car_Function_List_BAP_Gen2: [LO]_LDW_HCA_0x19: _activated
    [VO]_Car_Function_List_BAP_Gen2: [LO]_traffic_sign_recognition_0x21:_activated
    [VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_Lane_Departure_Warning: _activated;
    [VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_Lane_Departure_Warning_over_threshol d_high:_activated;
    [VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_road_sign_identification:_activated;
    [VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_road_sign_identification_over_thresh old_high:_activated.
    
    Блок 82 →
    Road_sign_detection: _available
    Lane_departure_warning: _available
    
    Блок A5 →
    [LO]_Brand: [VO]_VW
    [LO]_Class: [VO]_A
    [LO]_Generation: [VO]_Generation_7
    [LO]_Bodystyle: [VO]_Suv
    [LO]_Expansion: [VO]_Not_coded
    [LO]_Production_region: [VO]_EU
    [LO]_Country_variant: [VO]_Europe
    [LO]_Chassis: [VO]_Steel_springs
    [LO]_Steering_bar: [VO]_Not_coded
    [LO]_Windshield: [VO]_Heat_protecting_glass
    [LO]_Traffic_side: [VO]_Right_traffic
    [LO]_PSD_Version: [VO]_PSD_15
    [LO]_Navigation: [VO]_MIB_High
    [LO]_AAG: [VO]_Coded для фаркопа !
    [LO]_SWA: [VO]_Coded
    [LO]_ACC: [VO]_Coded
    [LO]_Pedestrian_break: [VO]_Not_coded
    [LO]_Blind_spot_detection: [VO]_Not_coded
    [LO]_Rain_light_sensor: [VO]_Coded
    [LO]_Main_unit: [VO]_enabled
    [LO]_PLA: [VO]_Coded
    [LO]_ESP: [VO]_Coded
    [LN]_Lan_assist_system_mode: [VN]_Steering_wheel_vibration active
    [LO]_Personalized_key: [VO]_Version_1.x
    [LO]_Networking_variant: [VO]_MQB
    [LO]_Radar_interface: [VO]_Coded
    [LO]_Perso_HC: [VO]_Last_setting
    [LO]_Point_of_intervention: [VN]_late_setting_over_menu
    [LO]_LaneAssist_AGW_output: [VO]_disabled
    [LO]_Lane_assist_off_text: [VO]_disabled
    [LO]_Emergency_Assist: [VO]_EA_Variant_1
    [LO]_VZE: [VO]_coded
    [LO]_HC_mob_line: [VO]_Not_coded
    [LO]_HC: [VO]_Coded
    [LO]_FCWP_default_on_prewarning: [VO]_last_mode
    [LO]_FCWP_delivery_status_prewarning: [VO]_off
    [LO]_FCWP_extended_prewarning_settings: [VO]_Not_coded
    [LO]_FCWP_warning_indicator: [VO]_Not_coded
    [LO]_FCWP: [VO]_Not_coded
    [LO]_FLA_Additional_High_Beam: [VO]_no_Additional_High_Beam
    [LO]_FLA_Headinglight_type: [VO]_LED
    [LO]_Mains_frequency: [VO]_50_Hz
    [LO]_AFS_coding_Light_Assist: [VO]_Dynamic_Light_Assist
    
    адаптация
    Road_sign_recognition_fusion_mode: [VN]_Road Sign Detection
    
    Поэтому, если после всех действий ассистент не заработал → поменяйте просто кодировку блока А5 на следующее значение: 
    0003070600000401002223468050890094000E200040

### Можно добавить вибрацию на руле, если ты включил поворотник, а в слепой зоне машина находится

    [LN]_Lan_assist_system_mode: [VN]_Selection_over_menu 
    [VN]_Lane_assist_warning_intensity: 
    [LN]_Lane_assist_warning_intensity: [VN]_Selection_over_menu

