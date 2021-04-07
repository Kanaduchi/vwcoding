disqus: https-mqb-readthedocs-io
# Головное устройство

### Расшифровка кодировок

menu_display_xxx_clamp_15_off - работа при выкл зажигании  
menu_display_xxx_over_threshold_high - работа в движении  
menu_display_xxx_standstill - работа в режиме ожидания  
menu_display_xxx_after_disclaimer - работа после какой-то фигни  

### Смена скина автомобиля
Иногда при замене ГУ на другой, бывает что на нем установлен профиль другого автомобиля VW.   

Пример для VW Tiguan:   
```
Блок 5F → Кодирование
> [LO]_byte_0_brand → _VW
> [LO]_byte_1_Car_Class → 3
> [LO]_byte_1_Car_Generation → 7
> [LO]_byte_2_Car_Derivate → 6
> [LO]_byte_2_Car_Derivate_Supplement → 0
→ Применить 
```

### Возможность одновременного подключения двух телефонов по bluetooth

```
Блок 5F → Адаптация
> function_configuration_phone:
>> Support_second_phone: [VO]_none -> меняем
>> Support_for_response_and_hold: [VN]_off -> on
>> Dtmf_without_active_call: [VN]_off -> on
>> _user_menu_three_way_calling: [VN]_not_installed -> installed
→ Применить 
```

```
Блок 17 → Кодирование  
> telephone2_BAP - no -> yes
→ Применить
```

### Отключение скачка громкости при старте магнитолы
Иногда при включении ГУ громкость включается намного сильнее, чем она была задана при выключении машины.

```
Блок 5F → Адаптация
> Adjustment_fm_tuner_mono_stereo
>> l_hf_stereo_lower_threshold → 20 [UN]_dBµV (было 37 [UN]_dBµV)
→ Применить 
```

### Деактивация AM диапазона в магнитоле
Слева внизу вместо ненужного "переключателя" AM/FM появляется иконка настройки радиостанций вручную
![Screenshot](../images/MQB/fm.jpg)

=== "Кодирование в ODIS"
    ```
    Блок 5F → Кодирование
    > [LO]_byte_14_AM_disable
    выбираем «Вкл»
    → Применить (с перезагрузкой блока)
    ```
    ```
    ODIS E: 5F → кодирование → [LO]_byte_14_AM_disable: ативировать
    ```

=== "Кодирование в VCDS"
    ```
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 1 → Бит 1: byte_14_AM_disable  → ставим галочку  
    Выход  
    Сохранить
    ```
    ![Screenshot](../images/MQB/am_radio.jpg) 
    
> логин-пароль 20103

### Заставка ГУ

```
Блок 5F → Кодирование
> 18 байт - меняем 00 на
    01 — Hybrid
    02 — GTD
    03 — GTI
    04 — BlueMotion
    05 — E-Golf
    06 — R-Line
    07 — Golf R
→ Применить (с перезагрузкой блока)
```

Логотип музыкальной системы
```
Блок 5F → Адаптация
> Startup_screen_sticker_hmi (по умолчанию стоит 0000) - меняем на
    1 — fender premium audio system
    2 — dynaudio
→ Применить 
```

### Изменение картинки меню ГУ с перелистывания на плитку

=== "Кодирование в ODIS"
	```
	Блок 5F → Кодирование
    > [LO]_byte_17_Skinning
    Старое значение: Skin_1
    Новое значение: Skin_5
    → Применить (с перезагрузкой блока)
    ```
    
=== "Кодирование в VCDS"
    ```
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 17 → меняем Skin_1 на Skin_5  
    Выход  
    Сохранить  
    ```

### Воспроизведение видео в движении через MirrorLink

Для Discover PRO

```
Блок 5F → Адаптация
> nhtsa_properties:
>> nhtsa_limitation_switches_for_carplay_no_softKeyboard: [VN]_activated -> _not_activated (CarPlay, возможность вызова клавиатуры в движении)
>> nhtsa_limitation_switches_for_androidauto_limit_displayed_message_length: [VN]_activated -> _not_activated (AA,отключение ограничения длины выводимого сообщения в движении)
>> nhtsa_limitation_switches_for_androidauto_no_setup_configuration: [VN]_activated -> _not_activated (AA, возможность заходить в настройки в движении)
>> nhtsa_limitation_switches_for_androidauto_no_text_input: [VN]_activated -> _not_activated (AA, отключение запрета ввода текста в движении)
>> nhtsa_limitation_switches_for_androidauto_no_video_playback: [VN]_activated -> _not_activated (АА, возможность проигрывать видео в движении)
→ Применить 
```

Для всех остальных устройств необходимо загружать дополнительно специальный ZDC контейнер или XML параметрию для ODIS
[(Параметрия под ODIS)](../firmwares/5F_3Q0035864C_V03935274HX_VIM_MIM.xml)
    
### Меню в магнитоле для настройки приборной панели

!!! tip ""
    Проверено для Skoda Octavia  

```
Блок 5F → Адаптация
>> Car_function_list_bap_gen2_extended
> display_configuration_0x45 → activate
> display_configuration_0x45_msg_bus → CAN_Comfort
→ Применить 
```
    
### Off Road Display

![Screenshot](../images/MQB/offroad.jpg)
    
!!! note ""
    На Тигуанах второго поколения работает в информационно командных системах Composition Media 6", Discover Media, Discover Pro без кодирования в 5F блоке.  

```
Блок 5F → Адаптация
> Car_Function_Adaptations_Gen2
> menu_display_compass → "active" (default not active)
> menu_display_compass_over_threshold_high → "active" (default not active) 
> menu_display_compass_clamp_15_off  → "active" (default not active)
→ Применить  
    
> Car_Function_List_BAP_Gen2
> compass_0x15 "active" (default not active)
→ Применить 
``` 
    
!!! warning ""
    Для Composition Media 8" необходимо выполнить кодировку 5F блока.   
    После кодирования в блоке будет висеть нестираемая ошибка, никак не влияющая на функциональность
    
=== "Кодирование в ODIS"
    ```
    Блок 5F → Кодирование
    > 24 байт (Navigation System)
    > бит 02 → включить (было "02" 00000010, стало "06" 00000110)
    → Применить (с перезагрузкой блока)
    ```
    
=== "Кодирование в VCDS"
    ```
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 24 → Бит 2: (Navigation System) → ставим галочку  
    либо правим двоичное значение - было "02" 00000010, стало "06" 00000110  
    Выход  
    Сохранить
    ```  
    
> логин-пароль 20103 

### Режим автошкола

!!! tip ""
    После адаптации необходимо перезагрузить магнитолу
    
```
Блок 5F → Адаптация
>> Car_Function_Adaptations_Gen2
> menu_display_driving_school - не активир.меняем на активир.
> menu_display_driving_school_over_threshold_high - не активир меняем на активир.
>> Car_Function_List_CAN_Gen2
>> Driving_school - недоступ. меняем на доступен
→ Применить
```

### Включение персонализации

```
Блок 17 → Кодирование  
> Байт 10 - Персонализация
выбираем «Вкл»
→ Применить
```

> логин-пароль 20103

```
Блок 09 → Адаптация
> Персонализация / Personalisierung
>> Personalisierung_Profilfunkion → profiles_active
>> Profil_Variante → Konto (v. 2.x)
>> Personalisierung_aktiv → Active
>> Aktivierungsoption_im_HMI-Menue_sichtbar → Active
>> Benutzerkontenverwaltung_in_HMI-Menue_sichtbar → Active
>> Personalisierungsfunktionen_in_HMI-Menue_sichtbar → Active
>> PSO_FSG_Setup2_Bit_1 → Active
>> PSO_FSG_Setup2_Bit_2 → Active
→ Применить
```

> логин-пароль 31347

### Использование глонасс антенны для навигации и компаса

!!! warning ""
    Только для Discover Pro / Discover Media
    
```
Блок 5F → Адаптация
> Navigation_GNSS_Receiver_Setting:
>> default_hw_reception: [VN]_not_activated
>> gps: [VN]_not_activated (было activated)
>> galileo: [VN]_not_activated
>> glonass: [VN]_not_activated
>> compass: [VN]_not_activated
>> external_gps_1: [VN]_activated (было not_activated)
>> external_gps_2: [VN]_not_activated
→ Применить
```

```
Блок 75 → Адаптация
> GPS: [VO]_internal_GPS_output_on_CAN
> Navigation_Type: [VO]_Type_2
>> Gnss_data_rate:
> Data Rate: 5 [UN]_Hz (было 1)
→ Применить
```

