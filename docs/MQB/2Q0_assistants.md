disqus: https-mqb-readthedocs-io
# Кодирование 2Q0* (MFK 3.0) камеры ассистентов

### Описание 

**Данная инструкция подходит только для камер 2Q0980653**  

Lane Assist с адаптивным ведением по полосе — адаптивное ведение исключает "пин-понг" от полосы к полосе.  
Опция отличная, позволяет расслабиться за рулем и не вылавливать центр полосы, по трассе просто незаменима. 

Traffic Jam Assist — Ассистент движения в пробке.  
Это расширение работы Lane Assist для работы с 0 км/ч. В пробке машина подруливает, разгоняется и тормозит сама, без участия водителя. При остановке более 3 секунд для старта нужно нажать RES или тапнуть педаль газа.

Emergency Assist — Ассистент медицинской остановки.  
Если водитель не желает или не может принимать участие в управлении автомобилем, то машина начинает его будить, сначала звуком, потом резким схватыванием тормозов,   
если и далее человек не принимает управление, то машина сама включает аварийку и останавливается.

Sign Assist — Ассистент распознавания дорожных знаков. Показывает знаки, которые считывает камера. 

## Прошивка камеры ассистентов

Расположены тут: [Прошивки и параметрия][1]

[1]: camAssistFirmwares.md

## Активации ассистентов

### Активация помощника удержания в полосе (Lane Assist) 

Включаем отображение Line Assist на приборной панели
```
Блок 17 (комбинация приборов/ActiveInfoDisplay)  → Кодирование
> Lane_assist: yes
 (Байт 04: бит 6 → активировать (Lane_assist: no → yes))
> Lane_assist_BAP: yes.
 (Байт 11: бит 1 → активировать (Lane_assist_BAP: no → yes))
```

HCA - Указание блоку рулевого управления о наличии Line Assist
```
Блок 44 (усилитель рулевого) → Кодирование
> Heading_control_assist: Spurhalteassistent auf "aktiv"   
 (Байт 03: бит 1 → активировать)   
→ Применить 
```
> логин-пароль 19249

Включаем в меню новые функции
```    
Блок 5F (мультимедия) → Адаптация 
> Car_Function_List_BAP_Gen2
>> LDW_HCA_0x19: activated
>> LDW_HCA_0x19_msg_bus: CAN_Extended
> Car_Function_Adaptations_Gen2
>> menu_display_Lane_Departure_Warning: activated;
>> menu_display_Lane_Departure_Warning_over_threshold_high: activated;
→ Применить 
```

Указание блоку парковочного ассистента о наличии Line Assist (У кого PLA3.0 12 Датчиков)

!!! note ""
    PLA3.0 может стоять в системе как 10 блок, а не 76
    
```
Блок 76 → Кодирование 
Ассистент движения по полосе, связ. с усилителем рул. управления
> HeadingControl Unterstutzung Auswahl: Spurhalteassistent aktiviert (Heading-Control)
(3 байт 5 бит)
→ Применить 
```

Конфигурация камеры ассистентов
```
Блок A5 (камера ассистентов) → Кодирование 
> Byte 08 > Bit 5-7 - Point_of_intervention: A0 late, setting over menu
> Byte 09 > Bit 0-1 - Configuration_for_lane_departure_warning_Kl15: 03 Last_setting
> Byte 09 > Bit 7 - HC: 1 coded
> Byte 09 > Bit 2-3 - Lane_assist_system_mode: 0C Selection_over_menu
> Byte 09 > Bit 4-5 - HC advanced takeover request: coded
> Byte 17 > Bit 0 - HC messages: 1 coded
→ Применить 
```
