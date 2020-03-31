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
