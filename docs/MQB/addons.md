# Дооснащение

### [PR-8T8] Адаптивный круиз-контроль

!!! warning ""
    Данные адаптации проводятся после заливки SWAP кода

!!! info "Считывание информации для получения SWAP кода"
    Для запроса SWAP кода необходимо предоставить следующую информацию:   
    
    * Каналы адаптации из радара: ID15370 и ID15360
    * HW/SW для радара
    * VIN машины
    
Настройка электроники двигателя
```
Блок 01 → Кодирование
> Байт 5 — Бит 6 → вкл. 
→ Применить (с перезагрузкой блока)
```
Настройка тормозной системы
```
Блок 03 → Кодирование
> Байт 24 — Бит 3 → вкл. 
→ Применить (с перезагрузкой блока)
```
Настройка блока адаптивного круиз-контроля
```
Блок 13 → Кодирование
> Automatic_driveaway_by_pretrigger → activated
> Automatic_driveaway_after_short_stop → activated
> Driveaway_by_triggerleaver → activated
> FPK_functions → installed
→ Применить (с перезагрузкой блока)
```
```
Блок 13 → Адаптации
> Distance_Setting - par_Distance_Setting → on
> Adjustment_mode_time_slot_adaptive_distance_control - Adjustment_mode_time_slot_adaptive_distance_control → on
> Overtaking_right_prevention → deactivated (обгон справа)
> Drive_pmode_selection → MMI_menu_ACC (выбор режима работы в меню ассистентов на магнитоле) 
→ Применить
```
> логин-пароль 14117 

Настройка приборной панели
```
Блок 17 → Кодирование
> adaptive_cruise_control → yes
→ Применить (с перезагрузкой блока)
```
Настройка гейтвея
```
Блок 19 → Кодирование
> FPA_Funktion_ACC → включить
→ Применить (с перезагрузкой блока)
```
```
Блок 19 → Адаптация
> Multi_function_steering_wheel_control_module Coding Value
>> variant → ACC-High
→ Применить
```
Настройка ГУ
```
Блок 5F → Адаптация
> Car_Function_Adaptations_Gen2 - menu_display_ACC → activated
> Car_Function_Adaptations_Gen2 - menu_display_ACC_over_threshold_high → activated
> Car_Function_List_BAP_Gen2 - ACC_0x05 → activated
→ Применить
```
> логин-пароль 20103

Настройка парковочного асисстента
```
Блок 76 → Кодирование
> Adaptive_cruise_control → activated
→ Применить (с перезагрузкой блока)
```

### DYNAUDIO 

```
Блок 19 → Адаптация
Installation list: specified installations → Sound System, Not coded
GW_Enable_CAN_Timeout_DTC - Sound System → Enabled
→ Применить
```
```
Блок 5F → Кодирование
> byte_4_Channel_1_HT → not_installed
> byte_4_Channel_1_TT → not_installed
> byte_4_Channel_2_HT → not_installed
> byte_4_Channel_2_TT → not_installed
> byte_4_Channel_3_HT → not_installed
> byte_4_Channel_3_TT → not_installed
> byte_4_Channel_4_HT → not_installed
> byte_4_Channel_4_TT → not_installed
> byte_5_Channel_5_HT → not_installed
> byte_5_Channel_5_TT → not_installed
> byte_5_Channel_6_HT → not_installed
> byte_5_Channel_6_TT → not_installed
> byte_5_Channel_7_HT → not_installed
> byte_5_Channel_7_TT → not_installed
> byte_5_Channel_8_HT → not_installed
> byte_5_Channel_8_TT → not_installed
> byte_6_Channel_9_HT → not_installed
> byte_6_Channel_9_TT → not_installed
> byte_6_Channel_10_HT → not_installed
> byte_6_Channel_10_TT → not_installed
> byte_6_Channel_11_HT → not_installed
> byte_6_Channel_11_TT → not_installed
> byte_6_Channel_12_HT → not_installed
> byte_6_Channel_12_TT → not_installed
> byte_7_Channel_13_HT → not_installed
> byte_7_Channel_13_TT → not_installed
> byte_7_Channel_14_HT → not_installed
> byte_7_Channel_14_TT → not_installed
> byte_7_Channel_15_HT → not_installed
> byte_7_Channel_15_TT → not_installed
> byte_7_Channel_16_HT → not_installed
> byte_7_Channel_16_TT → not_installed
> byte_11_Sound_System → Sound_System_external_MOST
→ Применить (с перезагрузкой блока)
```
```
Блок 5F → Адаптация
> Sound System → yes
> Startup_screen_sticker_HMI: 2
> Car_Function_List_BAP_Gen2 - Amplifier_0x2D → not activated
> Car_Function_List_BAP_Gen2 - Amplifier_0x2D_msg_bus → Databus Infotainment
> Installation list: specified installations - Digital Sound System Control Module → Yes
→ Применить
```
> логин-пароль 20103

### [PR-KA1] [PR-KA2] Камера заднего вида

??? note "Подключение проводов" 
    > Плюс клемма 30 берется в разъеме Quadlock красный или красно желтый толстый  
    > Масса берется в разъеме Quadlock коричневый толстый  
    Кан шина инфотеймент - Сигнал от камеры  
    > К пину под номером 12 должна быть подключена "оплётка"/экран видеокабеля от камеры   - черный провод  
    > К пину под номером 6 - центральная жила того же кабеля - белый провод  
    Это самые крайние пины для синего разъёма.    
    > Оранжево-фиолетовый - к оранжево-фиолетовому Quadlock - серый разъем 6 контакт  
    > Оранжево-кориневый - к оранжевому коричневому Quadlock - серый разъем 12 контакт  
    ОБЯЗАТЕЛЬНО ЗАКРЫВАЙТЕ БАГАЖНИК ПРИ ПРОВЕРКЕ!  

```
Блок 19 → Список оборудования
> 6C (КАМЕРА) → установлено
→ Применить
```
Настройка ГУ
```
Блок 5F → Кодирование
> Байт 19 - 4 бит (byte_19_Rear_View_Low) → Выключить (not activated)
→ Применить
```
```
Блок 5F → Адаптация
> Car_Function_List_BAP_Gen2 - VPS_0x0B → Активирован
> Car_Function_List_BAP_Gen2 - VPS_0x0B_msg_bus  → Databus заменить на Infotainment
→ Применить
```
> логин-пароль 20103

Настройка парковочного ассистента
```
Блок 76 → Кодирование
> Байт 2 - Бит 4-5 → 10 Camera Type: Rear View Camera (RVC) установлена
→ Применить (с перезагрузкой блока)
```

!!! note ""
    Если калибровка камеры не сделана — будет висеть ошибка — отсутствуют базовые параметры.

### Задние ручки kessy

```
Блок В7 → Кодирование
> Байт 0 - Бит 2 (Дверная ручка kessy слева на двери сзади слева) → Поставить выбор
> Байт 0 - Бит 3 (Дверная ручка kessy слева на двери сзади справа) → Поставить выбор
> Байт 1 - Бит 2 (Пассивный выход для двери сзади слева отключен) → Снять выбор
> Байт 1 - Бит 3 (Пассивный выход для двери сзади справа отключен) → Снять выбор
→ Применить
```

### Side Assist

!!! note ""
    Существуют 2 типа радаров. С 2020 года поставляются радары, с которых не надо снимать защиту компонентов и делать калибровку

```
Блок 19 → Список оборудования
> 3C (Система смены полосы движения) → установлено
> CF (Система смены полосы движения) → установлено
> Gateway_Component_List - Node_0x4E → coded
> Gateway_Component_List - Node_0x8A → coded
→ Применить
```
Кодирование приборной панели
```
Блок 17 → Кодирование
> Lane_change_assistant → yes
> Lane_change_assistant_BAP → yes
→ Применить (с перезагрузкой блока)
```
Кодирование адаптивного круиз
```
Блок 13 → Кодирование
> Control_module_for_lane_assistance → installed
> Lane_change_support → activated
→ Применить (с перезагрузкой блока)
```
Кодирование ABS
```
Блок 03 → Кодирование
> Байт 29 → активировать бит 7 (1ХХХХХХХ)
→ Применить (с перезагрузкой блока)
```
Кодирование ГУ
```
Блок 5F → Кодирование
[VO]_Car_Function_List_BAP_Gen2: [LO]_SWA_0x1A → activated
Car_Function_List_BAP_Gen2 - SWA_0x1A_msg_bus → Дополнительная шина данных (CAN_Extended)
[VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_lane_assistant → activated
[VO]_Car_Function_Adaptations_Gen2: [LO]_menu_display_lane_assistant_over_threshold_high → activated
```

Кодирование системы кругового обзора (если есть)
```
БлокБлок 6C → Кодирование
[LO]_equipment_RTA → installed
→ Применить (с перезагрузкой блока)
```
Парковочный ассистент
```
БлокБлок 76 → Кодирование
[LN]_Rear_Cross_Traffic - Alert → mit RCTA
→ Применить (с перезагрузкой блока)
```
Камера асситентов (если есть)
```
БлокБлок A5 → Кодирование
[LO]_SWA → Coded
→ Применить (с перезагрузкой блока)
```
Ассистент смены полосы движения
```
БлокБлок 3C → Кодирование
[LO]_Pre_Sense → without_Pre_Sense
[LO]_Rear_Cross_Traffic_Alert → with_RCTA
[LO]_ECU for draw bar → no ECU for draw bar
[LO]_steering → left-hand drive
[LO]_Rear_Axle_Steering → without_Rear_Axle_Steering
[LO]_Lane_Departure_Warning_System → with_Lane_Departure_Warning_System
[LO]_Front_Sensors_Driver_Assistance_System → with_Front_Sensors_Driver_Assistance_System
[LO]_Diagnosis_RCTA → tone_via_PLA
→ Применить (с перезагрузкой блока)
```

### Автосвет

Для этого необходим новый переключатель 5G0941431BD и датчик света и дождя 5Q0955547C

Установка переключателя
```
Блок 09 → Адаптация
> Aussenlicht_uebergreifend
>> LDS_mit_AFL → Yes
→ Применить
```

Установка датчика света и дождя
```
Блок 09 → Адаптация
> Lighting_Assist_Adaptation
>> Regen_Lichtsensor → LIN_Regen_Licht_Sensor
>> Feuchtesensor → Installed (если есть датчик влажности)
```

После этих кодировок датчик света и дождя появляется в кодировании 9 блока.
Прописываем в него кодировку:
```
Блок 09 → Кодирование
>> подблок RLНS:
> 3СА8DD — фары включаются не так поздно, где то при 1200lx
> 3CA8D7 — фары включаются совсем поздно, при 800lx
```

> логин-пароль 31347