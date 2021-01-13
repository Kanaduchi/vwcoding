# Дооснащение

### Сенсорная панель климата

```
Блок 08 → Кодирование
> Climate_style поменять с display на Anzeige Front und Heck
→ Применить (с перезагрузкой блока)
```
```
Блок 08 → Адаптация
> Detection_time_tap:
>> par_Detection_time_tap: 600 [UN]_ms
> Detection_time_hold:
>> par_Detection_time_hold: 600 [UN]_ms
> Off_time_neighbor_key_during_sliding:
>> par_Off_time_neighbor_key_during_sliding: 400 [UN]_ms
> Sensitivity_touch:
>> par_Sensitivity_touch: 0
> Steps_temp_slider:
>> par_Steps_temp_slider: [VN]_8
> Step_size_temp_slider:
>> par_Step_size_temp_slider: > 0.5°C
> 22_degree_jump_temp_slider:
>> par_22_degree_jump_temp_slider: [VN]_not_active
> Flick_function_temp_slider:
>> par_Flick_function_temp_slider: [VN]_not_active
> Profile_selection_touch:
>> par_Profile_selection_touch: 0
> dimming_characteristic_new_1:
>> X1: 0
>> Y1: 16 [UN]_0
>> X2: 10
>> Y2: 16 [UN]_0
>> X3: 50
>> Y3: 60 [UN]_0
>> X4: 100
>> Y4: 125 [UN]_0
>> X5: 150
>> Y5: 500 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_2:
>> X1: 0
>> Y1: 0 [UN]_0
>> X2: 10
>> Y2: 100 [UN]_0
>> X3: 25
>> Y3: 250 [UN]_0
>> X4: 50
>> Y4: 500 [UN]_0
>> X5: 75
>> Y5: 750 [UN]_0
>> X6: 100
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_3:
>> X1: 0
>> Y1: 6 [UN]_0
>> X2: 10
>> Y2: 6 [UN]_0
>> X3: 50
>> Y3: 12 [UN]_0
>> X4: 100
>> Y4: 25 [UN]_0
>> X5: 150
>> Y5: 100 [UN]_0
>> X6: 253
>> Y6: 300 [UN]_0
> dimming_characteristic_new_4:
>> X1: 0
>> Y1: 20 [UN]_0
>> X2: 10
>> Y2: 20 [UN]_0
>> X3: 50
>> Y3: 60 [UN]_0
>> X4: 100
>> Y4: 120 [UN]_0
>> X5: 150
>> Y5: 800 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_5:
>> X1: 0
>> Y1: 10 [UN]_0
>> X2: 10
>> Y2: 10 [UN]_0
>> X3: 50
>> Y3: 50 [UN]_0
>> X4: 100
>> Y4: 100 [UN]_0
>> X5: 150
>> Y5: 1,000 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_6:
>> X1: 0
>> Y1: 4 [UN]_0
>> X2: 10
>> Y2: 4 [UN]_0
>> X3: 50
>> Y3: 15 [UN]_0
>> X4: 100
>> Y4: 30 [UN]_0
>> X5: 150
>> Y5: 600 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_7:
>> X1: 0
>> Y1: 20 [UN]_0
>> X2: 10
>> Y2: 20 [UN]_0
>> X3: 50
>> Y3: 50 [UN]_0
>> X4: 100
>> Y4: 100 [UN]_0
>> X5: 150
>> Y5: 800 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_8:
>> X1: 0
>> Y1: 8 [UN]_0
>> X2: 10
>> Y2: 8 [UN]_0
>> X3: 50
>> Y3: 20 [UN]_0
>> X4: 100
>> Y4: 25 [UN]_0
>> X5: 150
>> Y5: 600 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_9:
>> X1: 0
>> Y1: 14 [UN]_0
>> X2: 10
>> Y2: 14 [UN]_0
>> X3: 50
>> Y3: 32 [UN]_0
>> X4: 100
>> Y4: 41 [UN]_0
>> X5: 150
>> Y5: 800 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> dimming_characteristic_new_10:
>> X1: 0
>> Y1: 10 [UN]_0
>> X2: 10
>> Y2: 10 [UN]_0
>> X3: 50
>> Y3: 25 [UN]_0
>> X4: 100
>> Y4: 50 [UN]_0
>> X5: 150
>> Y5: 800 [UN]_0
>> X6: 253
>> Y6: 1,000 [UN]_0
> damping_dimming_characteristic_01:
>> PWM_Daempfung_Aufdimmen: 0.2 [UN]_s
>> PWM_Daempfung_Abdimmen: 0.1 [UN]_s
> damping_dimming_characteristic_02:
>> PWM_Daempfung_Aufdimmen: 0.2 [UN]_s
>> PWM_Daempfung_Abdimmen: 0.1 [UN]_s
> damping_dimming_characteristic_03:
>> PWM_Daempfung_Aufdimmen: 0.2 [UN]_s
>> PWM_Daempfung_Abdimmen: 0.1 [UN]_s
> damping_dimming_characteristic_04:
>> PWM_Daempfung_Aufdimmen: 0.2 [UN]_s
>> PWM_Daempfung_Abdimmen: 0.1 [UN]_s
> Sun_sensor_supplier_differentiation:
>> par_Sun_sensor_supplier_differentiation: [VN]_none
→ Применить
```

### Датчик влажности

Датчик 3Q0907643 ставится вместо штатного датчика грязного воздуха   

```
Блок 08 → Кодирование
> Байт 9 — Бит 4-5 (10) - Датчик влажности наружнего воздуха установлен
→ Применить (с перезагрузкой блока)
```
```
Блок 08 → Адаптация
> Reduction of window misting outside at high humidity (Уменьшение запотевания стёкол, кроме случаев высокой влажности)
>> Matching glass temperature model (В соответствии с моделью температуры стекол)
→ Применить
```

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

Настройка парковочного ассистента
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
    Кан шина инфотеймент — Сигнал от камеры  
    > К пину под номером 12 должна быть подключена "оплётка"/экран видео-кабеля от камеры — черный провод  
    > К пину под номером 6 - центральная жила того же кабеля — белый провод  
    Это самые крайние пины для синего разъёма.  
    > Оранжево-фиолетовый — к оранжево-фиолетовому Quadlock — серый разъем 6 контакт  
    > Оранжево-коричневый — к оранжевому коричневому Quadlock — серый разъем 12 контакт  
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

!!! warning "Установка китайской камеры"
    К ГУ можно так же подключить и китайскую камеру без поддержки траекторий. Но в этом случае необходимо будет поправить ряд кодировок:
    ```
    Блок 5F → Кодирование
    > Байт 19 - 4 бит (byte_19_Rear_View_Low) → Вкключить (activate)
    → Применить
    ```
    ```
    Блок 5F → Адаптация
    > Car_Function_List_BAP_Gen2 - VPS_0x0B → Неактивно
    → Применить
    ```

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
> Car_Function_List_BAP_Gen2 - SWA_0x1A → activated
> Car_Function_List_BAP_Gen2 - SWA_0x1A_msg_bus → Дополнительная шина данных (CAN_Extended)
> Car_Function_Adaptations_Gen2 - menu_display_lane_assistant → activated
> Car_Function_Adaptations_Gen2 - menu_display_lane_assistant_over_threshold_high → activated
```

Кодирование системы кругового обзора (если есть)
```
БлокБлок 6C → Кодирование
> equipment_RTA → installed
→ Применить (с перезагрузкой блока)
```
Парковочный ассистент
```
БлокБлок 76 → Кодирование
> Rear_Cross_Traffic - Alert → mit RCTA
→ Применить (с перезагрузкой блока)
```
Камера ассистентов (если есть)
```
БлокБлок A5 → Кодирование
> SWA → Coded
→ Применить (с перезагрузкой блока)
```
Ассистент смены полосы движения
```
БлокБлок 3C → Кодирование
> Pre_Sense → without_Pre_Sense
> Rear_Cross_Traffic_Alert → with_RCTA
> ECU for draw bar → no ECU for draw bar
> steering → left-hand drive
> Rear_Axle_Steering → without_Rear_Axle_Steering
> Lane_Departure_Warning_System → with_Lane_Departure_Warning_System
> Front_Sensors_Driver_Assistance_System → with_Front_Sensors_Driver_Assistance_System
> Diagnosis_RCTA → tone_via_PLA
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