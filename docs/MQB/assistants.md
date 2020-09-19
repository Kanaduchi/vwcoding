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

## Прошивка камеры ассистентов

Для полноценной работы камеры ассистентов нужна правильная прошивка и параметрия к ней.  
Существует несколько поколений прошивок.  

Поколение 4:
+ FL_3Q0980654_0920: 3Q0980654S [(Прошивка)](../firmwares/FL_3Q0980654_0920.frf)  (прошивка для Skoda, не рекоммендуется для Tiguan 2G)   
+ FL_3Q0980654_0460: 3Q0980654R  
+ FL_3Q0980654_0881: 3Q0980654Q  
+ FL_3Q0980654: 3Q0980654M  

Поколение 3:

+ FL_3Q0980654_0611: 3QD980654T (прошивка для Tiguan 2G от модельного ряда 2020 года)   
+ FL_3Q0980654_0610: 3QD980654L [(Прошивка)](../firmwares/FL_3Q0980654_0610.frf) [(Параметрия под ODIS)](../firmwares/A5_OE_3Q0980654L_TJA_653_mod.xml)   
+ FL_3QD980654_1611: 3QD980654A  

Поколение 2:  

+ FL_3Q0980654_0272: 3QD980654H [(Прошивка)](../firmwares/FL_3Q0980654_0272.frf)  
+ FL_3QD980654_1272: 3QD980654  
+ FL_3Q0980654_0231: 3QD980654G  

Поколение 1:    

+ FL_3Q0980654_0024: 3Q0980654D  
+ FL_3Q0980654_0010: 3Q0980654C  

Порядок обновления может быть следующим: G -> H -> L -> T -> Q -> R -> S   

!!! warning "Важно!"
    Изменение этого порядка в обратном порядке повредит вашу камеру. Меню Ассистента навсегда исчезает   

## Активации ассистентов

### Активация кнопки вызова ассистентов (для 5Q0 953 502 AJ / Valeo 408 876)

```
Блок 16 → Адаптация
> Электроника рулевой колонки
> Клавиша вспомогательных систем водителя
> Установл.
→ Применить
```
> логин-пароль 20103

### Активация Line Assist

!!! warning
    Для активации Line Assist обновление параметрии для установленной камеры ассистентов не требуется
    
Включаем отображение Line Assist на приборной панели
```
Блок 17 (комбинация приборов/ActiveInfoDisplay)  → Кодирование
> Lane_assist: yes
 (Байт 04: бит 6 -> активировать (Lane_assist: no -> yes))
> Lane_assist_BAP: yes.
 (Байт 11: бит 1 -> активировать (Lane_assist_BAP: no -> yes))
```

Конфигурация камеры ассистентов   
Можно использовать готовое кодирование:   
000307060007040100220044C150890080000E20004000 
```
Блок A5 (камера ассистентов) → Кодирование 
Байт 14 - меняем значение на A0/A1
Байт 16 - активировать бит 7 либо меняем значение на 90/98
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
> Lane Assist installed: active   
 (Байт 03: бит 0 -> активировать)   
> Heading_control_assist: active   
 (Байт 03: бит 1 -> активировать)   
→ Применить 
```
> логин-пароль 19249

Включаем в меню новые функции
```    
Блок 5F (мультимедия) → Адаптация 
> Car_Function_List_BAP_Gen2
>> LDW_HCA_0x19:  activated
> Car_Function_Adaptations_Gen2
>> menu_display_Lane_Departure_Warning: activated;
>> menu_display_Lane_Departure_Warning_over_threshold_high: activated;
→ Применить 
```

Указание блоку парковочного ассистента о наличии Line Assist (У кого PLA3.0 12 Датчиков)

!!! note ""
    В Tiguan 2G 2020 года выпуска PLA3.0 может стоять в система как 10 блок, а не 76
    
```
Блок 76 → Кодирование 
Ассистент движения по полосе, связ. с усилителем рул. управления
> HeadingControl Unterstutzung Auswahl: Spurhalteassistent aktiviert (Heading-Control)
(3 байт 5 бит)
→ Применить 
```

### Активация полного комплекта Line Assist, Traffic Jam Assist, Sign Assist

!!! warning
    Для работы Traffic Jam Assist необходима параметрия для установленной камеры ассистентов.  
    [Параметрия под ODIS для камер с прошивкой 3Q0980654L](#_3)

Задаем указание блоку, что установлен обогрев камеры. 
```
Блок 08 → Кодирование
> Camera heating: installed
(Байт 08: бит 0 -> активировать (Camera heating: not installed -> installed))
→ Применить 
```

Указание блоку, что, установлена камера
```
Блок 13 (адаптивный круиз) → Кодирование
> Front_camera: installed
 (Байт 03: бит 6 -> активировать (>> Front_camera: not_installed -> installed))
→ Применить 
```

Изменение типа ассистента дальнего света с простого на MDF - маскируемый или неослепляющий дальний.Добавляем ассистент в меню
```
Блок 09 (бортовая сеть) → Адаптации
>> Außenlicht_Blinker 
> Warnblinken_durch_Fahrerassistenz -> available
>> Fernlicht_assistent
> Erweiterte_Fernlichtsteuerung: AFS, FLA, Fernlicht ueber AFS → AFS, FLA, Fernlicht (GLW,MDF)
> Menuesteuerung Fernlichtassistent: not available -> available
→ Применить 
```

Включаем отображение Line Assist и дорожных знаков на приборной панели
```
Блок 17 (комбинация приборов/ActiveInfoDisplay)  → Кодирование
> Lane_assist: yes
 (Байт 04: бит 6 -> активировать (Lane_assist: no -> yes))
> traffic_sign_display: yes.
 (Байт 05: бит 2 -> активировать (traffic_sign_display: no -> yes))
> Lane_assist_BAP: yes.
 (Байт 11: бит 1 -> активировать (Lane_assist_BAP: no -> yes))
→ Применить 
```

Активация установленных блоков. Нужно добавить-A5 (передние датчики вспомогательных систем) и убрать блок 20
```
Блок 19 (гейтвэй) → Кодирование
> Gateway_Component_List: Node_0x30:coded -> not_coded; 
> Gateway_Component_List: Node_0x4F: not_coded -> coded. 
→ Применить 
```

HCA - Указание блоку рулевого управления о наличии Line Assist
```
Блок 44 (усилитель рулевого) → Кодирование
> Lane Assist installed: active   
 (Байт 03: бит 0 -> активировать)   
> Heading_control_assist: active   
 (Байт 03: бит 1 -> активировать)   
→ Применить 
```
> логин-пароль 19249

```
Блок 4B (многофункциональный модуль) → Кодирование 
> mdf_activation: enabled
 (Байт 10: бит 6 -> активировать (>> mdf_activation: not_enabled -> enabled))
> headlamp_coding_word: 1
→ Применить 
```

Указание блоку ABS о наличии Line Assist
```
Блок 3C → Кодирование 
> Lane_Departure_Warning_System: with_Lane_Departure_Warning_System
> Front_Sensors_Driver_Assistance_System: with_Front_Sensors_Driver_Assistance_System
> Electromechanical parking brake: emergenay braking
  (Байт 29: Бит 5)
→ Применить 
```

Указание блоку парковочного ассистента о наличии Line Assist (У кого PLA 12 Датчиков)

!!! note ""
    В Tiguan 2G 2020 года выпуска PLA3.0 может стоять в система как 10 блок, а не 76
    
```
Блок 76 → Кодирование 
Ассистент движения по полосе, связ. с усилителем рул. управления
> HeadingControl Unterstutzung Auswahl: Spurhalteassistent aktiviert (Heading-Control)
(3 байт 5 бит)
→ Применить 
```

Включаем в меню новые функции
```    
Блок 5F (мультимедия) → Адаптация 
> Car_Function_List_BAP_Gen2
>> LDW_HCA_0x19: activated
>> traffic_sign_recognition_0x21: activated
>> traffic_sign_recognition_0x21_msg_bus: CAN_Extended (Дополнительная шина данных)
> Car_Function_Adaptations_Gen2
>> menu_display_Lane_Departure_Warning: activated;
>> menu_display_Lane_Departure_Warning_over_threshol d_high: activated;
>> menu_display_road_sign_identification: activated;
>> menu_display_road_sign_identification_over_threshold_high: activated.
→ Применить 
```

Даем указание блоку проекции (если есть)
```
Блок 82 → Кодирование 
> Road_sign_detection:  available
> Lane_departure_warning: available
→ Применить 
```

Конфигурация камеры ассистентов
Можно использовать готовое кодирование: 0003070600000401002200448050A10098000E200040 или 000307060007040100220046C156890084000E20004000
```
Блок A5 (камера ассистентов) → Кодирование 
>> Brand: VW
>> Class: A
>> Generation: Generation_7
>> Bodystyle: Suv
>> Expansion: Not_coded
>> Production_region: EU
>> Country_variant: Europe
>> Chassis: Steel_springs
>> Steering_bar: Not_coded
>> Windshield: Heat_protecting_glass
>> Traffic_side: Right_traffic
>> PSD_Version: PSD_15
>> Navigation: MIB_High
>> AAG: Coded (для фаркопа)
>> SWA: Coded
>> ACC: Coded
>> Pedestrian_break: Not_coded
>> Blind_spot_detection: Not_coded
>> Rain_light_sensor: Coded
>> Main_unit: enabled
>> PLA: Coded
>> ESP: Coded
>> Personalize_VZE:	Not_Coded
>> Lan_assist_system_mode: Steering_wheel_vibration active
>> Personalized_key: Version_1.x
>> Networking_variant: MQB
>> Radar_interface: Coded
>> Perso_HC: Last_setting
>> Point_of_intervention: early_setting_over_menu
>> LaneAssist_AGW_output: disabled
>> Lane_assist_off_text: disabled
>> Emergency_Assist: EA_Variant_2
>> Traffic Sign Recognition (TSR/VZE): coded
>> HC_mob_line: Not_coded
>> HC: Coded
>> FCWP_default_on_prewarning: last_mode
>> FCWP_delivery_status_prewarning: off
>> FCWP_extended_prewarning_settings: Not_coded
>> FCWP_warning_indicator: Not_coded
>> FCWP: Not_coded
>> FLA_Additional_High_Beam: no_Additional_High_Beam
>> FLA_Headinglight_type: LED
>> Mains_frequency: 50_Hz
>> AFS_coding_Light_Assist: Dynamic_Light_Assist
>> HC_LONGPRESS: Not_Coded
→ Применить 
```

```
Блок A5 (камера ассистентов) → Адаптация 
> Road_sign_recognition_fusion_mode (Распознавание дорожных знаков: режим Fusion): Road Sign Detection
> Lan_assist_system_mode (Состояние включение ассистента движение по полосе) - Selection_over_menu  
> Lane_assist_warning_intensity (Интенсивность предупреждений ассистента движения по полосе) - Selection_over_menu 
> BAP personalization (Персонализация ВАР) - не активна 
> Personalization of lane dept. warning Cl. 15 on (Персонализация момента вмешательство при вкл клеммы 15) - Last Setting (последняя настройка)
→ Применить 
```
> логин-пароль 20103

### Чтение дорожных знаков v2
Существует возможность добавить на головное устройство отображение дорожных знаков из базы навигации (Sat Nav Speed Limits),  
а на AID (Virtual Cockpit) — отображение знаков с камеры ассистентов.  
 
Если вдруг камера в засаде, то можно на всякий случай скинуть скорость до того значения, которое имеет наименьшее значение.   

![Screenshot](../images/MQB/VZA.png)

```    
Блок 5F (мультимедия) → Адаптация 
> Car_Function_List_BAP_Gen2
>> traffic_sign_recognition_0x21: deactivated
→ Применить 
> Car_Function_Adaptations_Gen2
>> menu_display_road_sign_identification: deactivated;
>> menu_display_road_sign_identification_over_threshold_high: deactivated.
→ Применить 
```

```    
Блок 5F (мультимедия) → Кодирование
>> byte_24_vza: активировать
```