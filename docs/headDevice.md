# Головное устройство

### Деактивация AM диапазона в магнитоле

	Блок 5F → Кодирование
	> [LO]_byte_14_AM_disable
	выбираем «Вкл»
	→ Применить (с перезагрузкой блока)
	
	ODIS E: 5F -> кодирование -> [LO]_byte_14_AM_disable: ативировать

> логин-пароль 20103

??? note "Кодирование в VCDS"
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 1 → Бит 1: byte_14_AM_disable  → ставим галочку  
    Выход  
    Сохранить  
    ![Screenshot](../images/am_radio.jpg) 

### Заставка ГУ

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

Логотип музыкальной системы

    Блок 5F → Адаптация
    > EGN117919 (по умолчанию стоит 00 00) - меняем на
        00 11 — fender premium audio system
        00 1E — dynaudio
    → Применить 

### Изменение картинки меню ГУ с перелистывания на плитку

	Блок 5F → Кодирование
    > [LO]_byte_17_Skinning
    Старое значение: Skin_1
    Новое значение: Skin_5
    → Применить (с перезагрузкой блока)
    
??? note "Кодирование в VCDS"
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 17 → меняем Skin_1 на Skin_5  
    Выход  
    Сохранить  

### Воспроизведение видео в движении через MirrorLink

    ODIS E
    Блок 007: 005F
    > [VO]_nhtsa_properties
    > ... no_video_playback
    Включить

### 3D Area View для камеры заднего вида

    Блок 6C - Система камеры заднего вида → Кодирование
    > 3D_Presentation
    Старое значение: выкл.
    Новое значение: вкл.    
    
### Меню в магнитоле для настройки приборной панели

!!! tip ""
    Проверено для Skoda Octavia

    Блок 5F → Адаптация
    >> Car_function_list_bap_gen2_extended
    > display_configuration_0x45 → activate
    > display_configuration_0x45_msg_bus → CAN_Comfort
    → Применить 
    
### Off Road Display

![Screenshot](../images/offroad.jpg)
    
!!! note ""
    На Тигуанах второго поколения работает в информационно командных системах Composition Media 6", Discover Media, Discover Pro без кодирования в 5F блоке.  

```
Блок 5F → Адаптация
> Car_Function_Adaptations_Gen2
> menu_display_compass -> "active" (default not active)
> menu_display_compass_over_threshold_high -> "active" (default not active) 
> menu_display_compass_clamp_15_off  -> "active" (default not active)
→ Применить  
  
> Car_Function_List_BAP_Gen2
> compass_0x15 "active" (default not active)
→ Применить 
``` 

!!! warning ""
    Для Composition Media 8" необходимо выполнить кодировку 5F блока
```
Блок 5F → Кодирование
> 24 байт (Navigation System)
> бит 02 → включить (было "02" 00000010, стало "06" 00000110)
→ Применить (с перезагрузкой блока)
```
    
??? note "Кодирование в VCDS"
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 24 → Бит 2: (Navigation System) → ставим галочку  
    либо правим двоичное значение - было "02" 00000010, стало "06" 00000110  
    Выход  
    Сохранить  
    
> логин-пароль 20103    