disqus: https-mqb-readthedocs-io
# Активация ассистентов

### Описание 

Lane Assist с адаптивным ведением по полосе — адаптивное ведение исключает "пин-понг" от полосы к полосе.  
Опция отличная, позволяет расслабиться за рулем и не вылавливать центр полосы, по трассе просто незаменима. Комфорт и Безопасность.

Traffic Jam Assist — Ассистент движения в пробке. 
Это расширение работы Lane Assist для работы с 0 км/ч. В пробке машина подруливает, разгоняется и тормозит сама, без участия водителя.  
При остановке более 3 секунд для старта нужно нажать RES или тапнуть педаль газа.

Emergency Assist — Ассистент медицинской остановки
Если водитель не желает или не может принимать участие в управлении автомобилем, то машина начинает его будить, сначала звуком, потом резким схватыванием тормозов,   
если и далее человек не принимает управление, то машина сама включает аварийку и останавливается

Sign Assist — Ассистент распознавания дорожных знаков
Показывает знаки которые считывает камера. 

### Активация кнопки вызова ассистентов (для 5Q0 953 502 AJ / Valeo 408 876)

	Блок 16 → Адаптация
	> Электроника рулевой колонки
    > Клавиша вспомогательных систем водителя
	> Установл.
	→ Применить

> логин-пароль 20103

### Активация Line Assist

!!! warning
    Для активации Line Assist обновление параметрии для установленной камеры ассистентов не требуется
    
Включаем отображение Line Assist и дорожных знаков на приборной панели
```
Блок 17 (комбинация приборов/ActiveInfoDisplay)  → Кодирование
> Lane_assist: yes
 (Байт 04: бит 6 -> активировать ([LN]_Lane_assist: [VN]_no -> [VN]_yes))
> Lane_assist_BAP: yes.
 (Байт 11: бит 1 -> активировать ([LN]_Lane_assist_BAP: [VN]_no -> [VN]_yes))
```

Конфигурация камеры ассистентов
```
Блок A5 (камера ассистентов) → Кодирование 
Можно использовать готовое кодирование: 0003070600000401002200448050A10098000E200040 или 0003070600000401002200448050A10098000E20004000
```

```
Блок A5 (камера ассистентов) → Адаптация 
> Lan_assist_system_mode (Состояние включение ассистента движение по полосе) - Selection_over_menu  
> Lane_assist_warning_intensity (Интенсивность предупреждений ассистента движения по полосе) - Selection_over_menu 
> BAP personalization (Персонализация ВАР) - не активна 
> Personalization of lane dept. warning Cl. 15 on (Персонализация момента вмешательство при вкл клеммы 15) - Last Setting (последняя настройка)
→ Применить 
```

> логин-пароль 20103

HCA - Указание блоку рулевого управления о наличии Line Assist
```
Блок 44 (усилитель рулевого) → Кодирование
Ассистент движения по полосе, связ. с усилителем рул. управления
> heading_control_assist: active
 (Байт 03: бит 1 -> активировать ([LN]_heading_control_assist: [VN]_not active -> [VN]_active))
```

Включаем в меню новые функции
```    
Блок 5F (мультимедия) → Адаптация 
> [VO]_Car_Function_List_BAP_Gen2: [LO]_LDW_HCA_0x19:  activated
> [VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_Lane_Departure_Warning: activated;
> [VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_Lane_Departure_Warning_over_threshol d_high: activated;
→ Применить 
```

Указание блоку парковочного ассистента о наличии Line Assist (У кого PLA 12 Датчиков)
```
Блок 76 (парковочный ассистент) → Кодирование 
Ассистент движения по полосе, связ. с усилителем рул. управления
> HeadingControl Unterstutzung Auswahl: Spurhalteassistent aktiviert (Heading-Control)
(3 байт 5 бит)
```

### Активация полного комплекта Line Assist, Traffic Jam Assist, Sign Assist

!!! warning
    Для работы Traffic Jam Assist необходима параметрия для установленной камеры ассистентов

Задаем указание блоку, что установлен обогрев камеры. 
```
Блок 08 → Кодирование
> Camera heating: installed
(Байт 08: бит 0 -> активировать ([LN]_Camera heating: [VN]_not installed -> [VN]_installed))
```

Указание блоку, что, установлена камера
```
Блок 13 (адаптивный круиз) → Кодирование
> Front_camera: installed
 (Байт 03: бит 6 -> активировать ([LO]_Front_camera: [VN]_not_installed -> [VN]_installed))
```

Изменение типа ассистента дальнего света с простого на MDF - маскируемый или неослепляющий дальний.Добавляем ассистент в меню
```
Блок 09 (бортовая сеть) → Адаптации
>> Fernlicht_assistent
> Erweiterte_Fernlichtsteuerung: AFS, FLA, Fernlicht ueber AFS → AFS, FLA, Fernlicht (GLW,MDF)
> Menuesteuerung Fernlichtassistent: not available -> [VN]_available
```

Включаем отображение Line Assist и дорожных знаков на приборной панели
```
Блок 17 (комбинация приборов/ActiveInfoDisplay)  → Кодирование
> Lane_assist: yes
 (Байт 04: бит 6 -> активировать ([LN]_Lane_assist: [VN]_no -> [VN]_yes))
> traffic_sign_display: yes.
 (Байт 05: бит 2 -> активировать ([LN]_traffic_sign_display: [VN]_no -> [VN]_yes))
> Lane_assist_BAP: yes.
 (Байт 11: бит 1 -> активировать ([LN]_Lane_assist_BAP: [VN]_no -> [VN]_yes))
```

Активация установленных блоков. Нужно добавить-A5 (передние датчики вспомогательных систем) и убрать блок 20
```
Блок 19 (гейтвэй) → Кодирование
> [VN]_Gateway_Component_List: [LN]_Node_0x30: [VN]_coded -> [VN]_not_coded; 
> [VN]_Gateway_Component_List: [LN]_Node_0x4F: [VN]_not_coded -> [VN]_coded. 
```

HCA - Указание блоку рулевого управления о наличии Line Assist
```
Блок 44 (усилитель рулевого) → Кодирование
Ассистент движения по полосе, связ. с усилителем рул. управления
> heading_control_assist: active
 (Байт 03: бит 1 -> активировать ([LN]_heading_control_assist: [VN]_not active -> [VN]_active))
```

```
Блок 4B (многофункциональный модуль) → Кодирование 
> mdf_activation: enabled
 (Байт 10: бит 6 -> активировать ([LO]_mdf_activation: [VN]_not_enabled -> [VN]_enabled))
> headlamp_coding_word: 1
```

Указание блоку ABS о наличии Line Assist
```
Блок 3C → Кодирование 
> Lane_Departure_Warning_System: with_Lane_Departure_Warning_System
> Front_Sensors_Driver_Assistance_System: with_Front_Sensors_Driver_Assistance_System
> Electromechanical parking brake: emergenay braking
  (Байт 29: Бит 5)
```

Указание блоку парковочного ассистента о наличии Line Assist (У кого PLA 12 Датчиков)
```
Блок 76 (парковочный ассистент) → Кодирование 
Ассистент движения по полосе, связ. с усилителем рул. управления
> HeadingControl Unterstutzung Auswahl: Spurhalteassistent aktiviert (Heading-Control)
(3 байт 5 бит)
```

Включаем в меню новые функции
```    
Блок 5F (мультимедия) → Адаптация 
> Car_Function_List_BAP_Gen2
>> LDW_HCA_0x19:  activated
>> traffic_sign_recognition_0x21: activated
>> traffic_sign_recognition_0x21_msg_bus: [VN]_CAN_Extended
> Car_Function_Adaptations_Gen2
>> menu_display_Lane_Departure_Warning: activated;
>> menu_display_Lane_Departure_Warning_over_threshol d_high: activated;
>> menu_display_road_sign_identification: activated;
>> menu_display_road_sign_identification_over_thresh old_high: activated.
```

Даем указание блоку проекции (если есть)
```
Блок 82 → Кодирование 
> Road_sign_detection:  available
> Lane_departure_warning: available
```

Конфигурация камеры ассистентов
Можно использовать готовое кодирование: 0003070600000401002200448050A10098000E200040
```
Блок A5 (камера ассистентов) → Кодирование 
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
[LO]_Point_of_intervention: [VN]_early_setting_over_menu
[LO]_LaneAssist_AGW_output: [VO]_disabled
[LO]_Lane_assist_off_text: [VO]_disabled
[LO]_Emergency_Assist: [VO]_EA_Variant_2
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
```

```
Блок A5 (камера ассистентов) → Адаптация 
> Road_sign_recognition_fusion_mode: Road Sign Detection
> Lan_assist_system_mode (Состояние включение ассистента движение по полосе) - Selection_over_menu  
> Lane_assist_warning_intensity (Интенсивность предупреждений ассистента движения по полосе) - Selection_over_menu 
> BAP personalization (Персонализация ВАР) - не активна 
> Personalization of lane dept. warning Cl. 15 on (Персонализация момента вмешательство при вкл клеммы 15) - Last Setting (последняя настройка)
→ Применить 
```

> логин-пароль 20103