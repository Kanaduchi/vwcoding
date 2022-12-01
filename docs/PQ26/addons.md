# ДООСНАЩЕНИЕ

### [PR-PWH] Ассистент освещения, Датчик дождя, Coming/Leaving Home

!!! info "Номера датчика"
    5Q0 955 547A — 2016MY  
    5Q0 955 547B — 2017MY  
    Датчики взаимозаменяемые. Т.е. на 2016MY подходит 547A и наоборот.

``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 06 – Биты 0-1 выбрать 02 Датчик света установлен [PR-8K3/8K9+8N6]
Байт 06 – Бит 3: Активировать
Байт 07 – Биты 0-1 выбрать 03 тип функции Coming/Leaving: Seat/Skoda/Volkswagen
Байт 07 – Бит 5:  включить
Байт 13 – Бит 5:  включить
→ Применить (с перезагрузкой блока)
```

``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
В списке устройств выбираем 5Q0 955 547B датчик света/дождя (RLHS)
Байт 0 – Байты 1-2 – выбираем 185E или 984D (для машин с обогревом лобового стекла)
В итоге кодировка принимает значение — 00 18 5E
Для машин с обогревом лобового стекла — 00 98 4D
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Assistance light functions-Assistenzfahrlicht bei Regen – active
Assistance light functions-AFL Zeitverzoegerung – 2 000 ms
Assistance light functions-Lichtsensorempfindlichkeit – normal
Assistance light functions-Assistance_lighting_sensitivity_ajustable — present
Comfort illumination-Coming Home Verbaustatus – automatic
Comfort illumination-Menuesteuerung Coming Home Werkseinstellung – active
Comfort illumination-Menueeinstellung Cominghome – 10 s
Comfort illumination-Coming Home Leuchten – Low beam
Comfort illumination-Coming-home Einschaltereignis – Driver door
Comfort illumination-Helligkeitsschwelle Infrarot-Messung – 72.0
Comfort illumination-Leaving-Home Verbausstatus – Enabled
Comfort illumination-lho_aktiviert – active
Comfort illumination-lho_zeit – 10 s
Comfort illumination-Helligkeitsschwelle Forward-Messung – 100
Driving light and parking light-Menueeinstellung CHO LHO – Menuesteuerung Zeit aktivieren
Windshield wiper-Regensensor aktivieren – activated
Rear Window Wiper-Komfortwischen Heck – active
Rear Window Wiper-Menuesteuerung Komfortwischen HW – active
→ Применить
```

Corner с поддержкой функций Coming Home/Leaving Home через ПТФ
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte12NL LB40-Light_Function_B_12 — было Abbiegelicht links, ставим nicht aktive – сохранить
Leuchte13NL RB3-Light_Function_B_13 — было Abbiegelicht rechts, ставим nicht aktive – сохранить
Leuchte12NL LB40-Light_Function_C_12 – Abbiegelicht links
Leuchte12NL LB40-Dimming_CD_12 – 100
Leuchte13NL RB3-Light_Function_C_13 – Abbiegelicht rechts
Leuchte13NL RB3-Dimming_CD_13 – 100
→ Применить
```

Для 19 м.г.:
``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 0 – Байты 1-2 – выбираем 185E (984D)
или прописываем готовую кодировку: 00185Е (00984D)
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Функции вспомогательного освещения-Rain/light sensor → Rain/light sensor
Функции вспомогательного освещения-Humidity sensor → установл.
Функции вспомогательного освещения-Will Beam assistant: responsivity adjustable via BAP → имеется
Aussenlicht_uebergreifend-Light rotary sw. with AFL → Да
Windshield wiper-rain_sensor_function → установл.
Функции вспомогательного освещения-Assistenzfahrlicht bei Regen – акт.
Функции вспомогательного освещения-AFL Zeitverzoegerung – 0 ms
Функции вспомогательного освещения-Lichtsensorempfindlichkeit – нормально
Aussenlicht_uebergreifend-Coming Home Verbaustatus – автоматически
Aussenlicht_uebergreifend-Menuesteuerung Coming Home Werkseinstellung – акт.
Aussenlicht_uebergreifend-Menueeinstellung Cominghome – 10 s
Aussenlicht_uebergreifend-Coming Home Leuchten – Ближний свет
Aussenlicht_uebergreifend-Coming-home Einschaltereignis – Driver door
Aussenlicht_uebergreifend-Helligkeitsschwelle Infrarot-Messung – 72.0
Aussenlicht_uebergreifend-Leaving-Home Verbausstatus – разрешено
Aussenlicht_uebergreifend-lho_aktiviert – акт.
Aussenlicht_uebergreifend-lho_zeit – 10 s
Aussenlicht_uebergreifend-Helligkeitsschwelle Forward-Messung – 100
Aussenlicht_uebergreifend-Menueeinstellung CHO LHO – Menuesteuerung Zeit aktivieren
Aussenlicht_uebergreifend-Lichtdrehschalter_mit_Nebellicht_bei_Assistenzfahrlicht – Да
Windshield wiper — Regensensor aktivieren – акт.
→ Применить
```

### [PR-8X0] Замена штатных галогенных фар на штатные ксеноновые
``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 06 – Биты 5-6 – меняем 00 на 20
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte6ABL LB44 - Type_Of_Load_6 – выбираем Xenon Abblendlicht
Leuchte7ABL RB5 - Type_Of_Load_7 – выбираем Xenon Abblendlicht
→ Применить 
```

### [PR-PXE] Установка би-ксенона
``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Lower_beam_lamp_typ - GDL
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte 0 BLK VL B35 — оно же левый передний поворотник
- Dimming_AB_0 — 128
- Light_Function_A_0 — Blinken links Hellphase
- Type_Of_Load_0 — LED Blinkleuchten
Leuchte 1 BLK VR B23 — оно же правый передний поворотник
- Dimming_AB_1 — 128
- Light_Function_A_1 — Blinken rechts Hellphase
- Type_Of_Load_1 — LED Blinkleuchten
Leuchte2SL VL B22 — оно же передний левый габарит
- Dimming_AB_2 — 100
- Dimming_CD_2 — 30
- Dimming_Direction_CD_2 — maximize
- Dimming_Direction_EF_2 — minimize
- Dimming_EF_2 — 28
- Light_Function_A_2 — Daytime running lights
- Light_Function_C_2 — Parking light
- Light_Function_D_2 — Parking light left
- Light_Function_E_2 — Blinken links Hellphase
- Type_Of_Load_2 — LED Tagfahrlichtmodul Signal
Leuchte3SL VR B36 — оно же передний правый габарит
- Dimming_AB_3 — 100
- Dimming_CD_3 — 30
- Dimming_Direction_CD_3 — maximize
- Dimming_Direction_EF_3 — minimize
- Dimming_EF_3 — 28
- Light_Function_A_3 — Daytime running lights
- Light_Function_C_3 — Parking light
- Light_Function_D_3 — Parking light right
- Light_Function_E_3 — Blinken rechts Hellphase
- Type_Of_Load_3 — LED Tagfahrlichtmodul Signal
Leuchte4TFL LB43 — оно же левый ДХО
- Dimming_AB_4 — 127
- Dimming_CD_4 — 127
- Dimming_Direction_CD_4 — maximize
- Dimming_Direction_EF_4 — minimize
- Dimming_EF_4 — 0
- Light_Function_A_4 — Daytime running lights
- Light_Function_C_4 — Parking light
- Light_Function_D_4 — Parking light left
- Light_Function_E_4 — Blinken links aktiv
- Type_Of_Load_4 — LED Tagfahrlichtmodul Versorgung
Leuchte5 TFL RB6— оно же правый ДХО
- Dimming_AB_5 — 127
- Dimming_CD_5 — 127
- Dimming_Direction_CD_5 — maximize
- Dimming_Direction_EF_5 — minimize
- Dimming_EF_5 — 0
- Light_Function_A_5 — Daytime running lights
- Light_Function_C_5 — Parking light
- Light_Function_D_5 — Parking light right
- Light_Function_E_5 — Blinken rechts aktiv
- Type_Of_Load_5 — LED Tagfahrlichtmodul Versorgung
Leuchte6ABL LB44 — оно же ближний левый
- Dimming_AB_6 — 100
- Dimming_CD_6 — 100
- Dimming_Direction_CD_6 — maximize
- Light_Function_A_6 — Abblendlicht links
- Light_Function_B_6 — ComingHome LeavingHome
- Light_Function_C_6 — Left high beam
- Light_Function_D_6 — Headlamp flasher
- Type_Of_Load_6 — Xenon Abblendlicht
Leuchte7ABL RB5 — оно же правый ближний
- Dimming_AB_7 — 100
- Dimming_CD_7 — 100
- Dimming_Direction_CD_7 — maximize
- Light_Function_A_7 — Abblendlicht rechts
- Light_Function_B_7 — ComingHome LeavingHome
- Light_Function_C_7 — Right high beam
- Light_Function_D_7 — Headlamp flasher
- Type_Of_Load_7 — Xenon Abblendlicht
Leuchte8FL LB42 — оно же дальний левый
- Dimming_AB_8 — 100
- Light_Function_A_8 — Left high beam
- Light_Function_B_8 — Headlamp flasher
- Type_Of_Load_8 — Shutter
Leuchte9FL RB7 — оно же дальний правый
- Dimming_AB_9 — 100
- Light_Function_A_9 — Right high beam
- Light_Function_B_9 — Headlamp flasher
- Type_Of_Load_9 — Shutter
→ Применить 
```

Для 19 м.г.:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Aussenlicht_Front-Low beam: bulb type → HID
Leuchte 0 BLK VL B35-Dimming_AB_0 → 127
Leuchte 0 BLK VL B35-Light_Function_A_0 → Blinken links Hellphase
Leuchte 0 BLK VL B35-Type_Of_Load_0 → LED Blinkleuchten
Leuchte1BLK VRB23-Dimming_AB_1 → 127
Leuchte1BLK VRB23-Light_Function_A_1 → Blinken rechts Hellphase
Leuchte1BLK VRB23-Type_Of_Load_1 → LED Blinkleuchten
Leuchte2SL VLB22-Dimming_AB_2 → 100
Leuchte2SL VLB22-Dimming_CD_2 → 30
Leuchte2SL VLB22-Dimming_Direction_CD_2 → maximize
Leuchte2SL VLB22-Dimming_Direction_EF_2 → minimize
Leuchte2SL VLB22-Dimming_EF_2 → 0
Leuchte2SL VLB22-Light_Function_A_2 → Daytime running lights
Leuchte2SL VLB22-Light_Function_B_2 → not active
Leuchte2SL VLB22-Light_Function_C_2 → Parking light
Leuchte2SL VLB22-Light_Function_D_2 → Parking light left
Leuchte2SL VLB22-Light_Function_E_2 → Blinken links aktiv
Leuchte2SL VLB22-Light_Function_F_2 → not active
Leuchte2SL VLB22-Light_Function_G_2 → not active
Leuchte2SL VLB22-Light_Function_H_2 → not active
Leuchte2SL VLB22-Type_Of_Load_2 → LED Tagfahrlichtmodul Signal
Leuchte3SL VRB36-Dimming_AB_3, 100
Leuchte3SL VRB36-Dimming_CD_3, 30
Leuchte3SL VRB36-Dimming_Direction_CD_3 → maximize
Leuchte3SL VRB36-Dimming_Direction_EF_3 → minimize
Leuchte3SL VRB36-Dimming_EF_3 → 0
Leuchte3SL VRB36-Light_Function_A_3 → Daytime running lights
Leuchte3SL VRB36-Light_Function_B_3 → not active
Leuchte3SL VRB36-Light_Function_C_3 → Parking light
Leuchte3SL VRB36-Light_Function_D_3 → Parking light right
Leuchte3SL VRB36-Light_Function_E_3 → Blinken rechts aktiv
Leuchte3SL VRB36-Light_Function_F_3 → not active
Leuchte3SL VRB36-Light_Function_G_3 → not active
Leuchte3SL VRB36-Light_Function_H_3 → not active
Leuchte3SL VRB36-Type_Of_Load_3 → LED Tagfahrlichtmodul Signal
Leuchte4TFL LB43-Dimming_AB_4 → 127
Leuchte4TFL LB43-Dimming_CD_4 → 127
Leuchte4TFL LB43-Dimming_Direction_CD_4 → maximize
Leuchte4TFL LB43-Dimming_Direction_EF_4 → minimize
Leuchte4TFL LB43-Dimming_EF_4 → 0
Leuchte4TFL LB43-Light_Function_A_4 → Daytime running lights
Leuchte4TFL LB43-Light_Function_C_4 → Parking light
Leuchte4TFL LB43-Light_Function_D_4 → Parking light left
Leuchte4TFL LB43-Light_Function_E_4 → Blinken links aktiv
Leuchte4TFL LB43-Type_Of_Load_4 → LED Tagfahrlichtmodul Versorgung
Leuchte5 TFL RB6-Dimming_AB_5 → 127
Leuchte5 TFL RB6-Dimming_CD_5 → 127
Leuchte5 TFL RB6-Dimming_Direction_CD_5 → maximize
Leuchte5 TFL RB6-Dimming_Direction_EF_5 → minimize
Leuchte5 TFL RB6-Dimming_EF_5 → 0
Leuchte5 TFL RB6-Light_Function_A_5 → Daytime running lights
Leuchte5 TFL RB6-Light_Function_C_5 → Parking light
Leuchte5 TFL RB6-Light_Function_D_5 → Parking light right
Leuchte5 TFL RB6-Light_Function_E_5 → Blinken rechts aktiv
Leuchte5 TFL RB6-Type_Of_Load_5 → LED Tagfahrlichtmodul Versorgung
Leuchte6ABL LB44-Dimming_AB_6 → 100
Leuchte6ABL LB44-Dimming_CD_6 → 100
Leuchte6ABL LB44-Dimming_Direction_CD_6 → maximize
Leuchte6ABL LB44-Light_Function_A_6 → Abblendlicht links
Leuchte6ABL LB44-Light_Function_B_6 → ComingHome LeavingHome
Leuchte6ABL LB44-Light_Function_C_6 → Left high beam
Leuchte6ABL LB44-Light_Function_D_6 → Headlamp flasher
Leuchte6ABL LB44-Type_Of_Load_6 → Xenon Abblendlicht
Leuchte7ABL RB5-Dimming_AB_7 → 100
Leuchte7ABL RB5-Dimming_CD_7 → 100
Leuchte7ABL RB5-Dimming_Direction_CD_7 → maximize
Leuchte7ABL RB5-Light_Function_A_7 → Abblendlicht rechts
Leuchte7ABL RB5-Light_Function_B_7 → ComingHome LeavingHome
Leuchte7ABL RB5-Light_Function_C_7 → Right high beam
Leuchte7ABL RB5-Light_Function_D_7 → Headlamp flasher
Leuchte7ABL RB5-Type_Of_Load_7 → Xenon Abblendlicht
Leuchte8FL LB42-Dimming_AB_8 → 127
Leuchte8FL LB42-Light_Function_A_8 → Left high beam
Leuchte8FL LB42-Light_Function_B_8 → Headlamp flasher
Leuchte8FL LB42-Type_Of_Load_8 → Shutter (Camera lock)
Leuchte9FL RB7-Dimming_AB_9 → 127
Leuchte9FL RB7-Light_Function_A_9 → Right high beam
Leuchte9FL RB7-Light_Function_B_9 → Headlamp flasher
Leuchte9FL RB7-Type_Of_Load_9 → Shutter (Camera lock)
→ Применить 
```

### Замена задних фонарей на LED
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte23SL HLC7 - Type_Of_Load_23 → Allgemeine LED mit Open Load Diagnose 
Leuchte23SL HLC7 - Dimming_AB_23 → 100
Leuchte24SL HRA69 - Type_Of_Load_24 → Allgemeine LED mit Open Load Diagnose 
Leuchte24SL HRA69 - Dimming_AB_24 → 100
```

### Замена аккумуляторной батареи
!!! tip "Варианты аккумулятора"
    61Ah 300A(DIN) или 540(EN)  
    70Ah 340А(DIN) или 570(EN)  
    80Ah 380А(DIN) или 640(EN)  
    92Ah 520А(DIN) или 870(EN)  
    95Ah 450А(DIN) или 750(EN)  
    110Ah 520А(DIN) или 870(EN)  
``` yaml
Блок 19 → Адаптация:
Battery Adaption – Battery capacity – вписываем нужное значение
Battery Adaption – Battery serial number - значение увеличением на 1.
→ Применить (с перезагрузкой блока)
```

### [PR-QQ8] Фоновая светодиодная подсветка салона
Реализация по одной свободной цепи, через подключение к выходу T46b/45.  
Номер пина — А 018 545 8626  
Плафон подсветки отсека в центральной консоли - 7P6 919 390 A KT1  
Корпус разъема - 8K0 973 754  
Пины для разъема - N907 647 01  
Плафон подсветки ног - 8J0947409А  
Разъем на плафон подсветки ног - 4B0 971 832  

``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 17 – Бит 0: Активировать
Байт 17 – Бит 4: Активировать
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte10SHUTTER LRB45 - Dimming_AB_10 - 100
Leuchte10SHUTTER LRB45 - Fehlerort_mittleres_Byte_DTC-DFCC_10 - 03
Leuchte10SHUTTER LRB45 - Light_Function_A_10 - Ambientelicht 1
Leuchte10SHUTTER LRB45 - Type_Of_Load_10 - LED Kleinleistung ohne Open Load Diagnose.
→ Применить 
```
Яркость по умолчанию задается в канале:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Ambient lighting - Defaultwert Ambienteprofil Vorn - 80%
→ Применить 
```

### [PR-8T6] Ограничитель скорости
Реализация доступна при активном круиз-контроле [PR-8T2].  
Артикул необходимого подрулевого переключателя для 2016 м.г. - 6C0953513FIGI  
для 2017 м.г. - 6C6953513DIGI  
Артикул педали с поддержкой функции [PR-8T6] — 6C1723503B.  

``` yaml
Блок 01 → Кодирование:
Байт 6 – Бит 2: Активировать
→ Применить 
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 18 – Бит 7: Активировать
→ Применить 
```

### [PR-KA1] Подключение камеры заднего вида
Камера заднего вида 5JA827566. Установка доступна на Swing (5JA035871D), Bolero (5Q0035840B).  
Подключение камеры согласно следующей схеме:  
T4/1pin — +12V;  
T4/2pin — масса;  
T4/3pin — не задействован;  
T4/4pin — к сигналу включения задней скорости (сине-черный провод).  
Видеокабель подключается к магнитоле к разъемам CVBS+ и CVBS-.  

``` yaml
Блок 5F → Кодирование:
Байт 19 – Бит 4:  включить
→ Применить 
```
При наличии блока парктроника
``` yaml
Блок 10 → Кодирование:
Байт 02 – Бит 0:  включить
Байт 02 – Бит 4:  включить
→ Применить 
```

### [PR-XXX +4LB, 4LC] Многофункциональное рулевое колесо
4LB Элемент управления для магнитолы    
4LC Элемент управления для магнитолы и телефона  
Варианты рулей (для информации):  
565064241B CXA. Многофункц. рул. колесо (кожа) черный/черный.  

``` yaml
Блок 19 → Кодирование:
Байт 1 – Бит 0: Активировать
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 20 – Бит 1: Активировать
→ Применить 
```
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
Car_Function_List_CAN_Gen2 - MFL — available
Car_Function_List_BAP_Gen2 - MFA_0x0F — activated
→ Применить
```

### [PR-6E7] Установка USB розеток в центральный подлокотник
1. USB розетки. Номер: 5Q0 035 726L  
2. Панель для розеток: 5JA 863 618 9B9  
3. Левый кожух подлокотника: 5JA 864 279 B 9B9  
4. Правый кожух подлокотника: 5JA 864 280 B 9B9  
5. Разъем: 8K0 973 754B  
6. Пины для разъема: N 907 647 01 – 2 шт.  
7. Провода около 3 м.  
Подключение в районе блока предохранителей.   
Минус – к болту. Плюс - к свободному предохранителю (можно к постоянно подключенному, можно к работающему при включенном зажигании).

### Активация эстетической подсветки салона после самостоятельной доустановки (19 м.г.)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Эстетическая подсветка-Ambience_borders_front → установл.
Leuchte32AMBL 2C64-Dimming_AB_32 → 100
Leuchte32AMBL 2C64-Fehlerort_mittleres_Byte_DTC-DFCC_32 → 03
Leuchte32AMBL 2C64-Light_Control_HD_AB_32 → Always
Leuchte32AMBL 2C64-Light_Function_A_32 → Ambientelicht 1
Leuchte32AMBL 2C64-Type_Of_Load_32 → LED Kleinleistung ohne Open Load Diagnose
→ Применить 
```

### [PR-8G1] Ассистент дальнего света FLA 

До 2017 м.г. (Необходимо проверить!)
``` yaml
Блок 19 → Список оборудования:
0 (Ассистент управления дальним светом): Активировать
→ Применить (с перезагрузкой блока)
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Кодирование:
Байт 02 – Биты 0~2 – 01, освещение: галогеновые фары с ассистентом дальнего света [PR-8ID+8G1] 
→ Применить 
```
``` yaml
Блок 20 (8X0-857-511.lbl) → Кодирование:
Байт 00 – Биты 0-4 – 01 тип фар: галогеновые 02 тип фар: би-ксеноновые 
Байт 01 – Биты 0-1 – 01 управление: левостороннее управление 
Байт 02 – Биты 0-7 – 8f вертикальное смещение Skoda Octavia (5E) 
Байт 03 – Биты 0-7 – 6b коррекция (красный) би-ксенон Skoda Octavia (5E) 
Байт 04 – Биты 0-7 – 76 коррекция (красный) галоген Skoda Octavia (5E) 
Байт 05 – Биты 0-7 – 76 коррекция (красный) задние фонари Skoda Octavia (5E) 
Байт 06 – Биты 0-7 – 5D коррекция (голубой) би-ксенон Skoda Octavia (5E) 
Байт 07 – Биты 0-7 – 52 коррекция (голубой) галоген Skoda Octavia (5E) 
Байт 08 – Биты 0-7 – 52 коррекция (красный) задние фонари Skoda Octavia (5E)
Байт 09 – Биты 0-7 – 20 коррекция (UCR) би-ксенон Skoda Octavia (5E)
Байт 10 – Биты 0-7 – 34 коррекция (UCR) галоген Skoda Octavia (5E)
Байт 11 – Биты 0-7 – 3E коррекция (UCR) задние фонари Skoda Octavia (5E) 
Байт 12 – Биты 0-7 – 00 Function Switch Memory Off 
→ Применить 
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Assistance light functions - Menuesteuerung Fernlichtassistent, adjustable 
Assistance light functions - Menuesteuerung Fernlichtassistent Werkseinstellung, adjustable 
→ Применить 
```

Для 19 м.г.:
``` yaml
Блок 19 → Список оборудования:
0 (Ассистент управления дальним светом): Активировать
→ Применить (с перезагрузкой блока)
```
``` yaml
Блок 20 → Кодирование:
Байт 0 – значение 01 или 02 (галоген/ксенон)
Байт 1 – значение 01 или 02 (галоген/ксенон)
Байт 3 – значение 0F
→ Применить 
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Fernlicht_assistent-Expanded high beam control, Halogen изменить на Halogen, FLA
Fernlicht_assistent-Fernlichtassistent_Reset: акт.
Fernlicht_assistent-Menuesteuerung_Fernlichtassistent: установлено
Fernlicht_assistent-Menuesteuerung_Fernlichtassistent_Werkseinstellung: установлено
```