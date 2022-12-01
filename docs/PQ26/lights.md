
# УПРАВЛЕНИЕ ОСВЕЩЕНИЕМ

### Отключение освещения номерного знака при открытии багажника
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte 25KZL HA60-Light_Control_HD_AB_25 - вместо «Always» выбираем значение «Only if closed»
→ Применить
```

### Деактивация салонного освещения при открытии багажника
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Interior lighting-Innenlicht bei offenem Heckdeckel einschalten, “active поменять” на значение "not active"
→ Применить
```

### Перемигивание указателей поворота с LED ДХО
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte4TFL LB43-Light_Function_G_4, Blinken links/rechts Hellphase
Leuchte4TFL LB43-Dimming_GH_4, 0
Leuchte4TFL LB43-Dimming_Direction_GH_4, minimize
Leuchte5 TFL RB6-Light_Function_G_5, Blinken links/rechts Hellphase
Leuchte5 TFL RB6-Dimming_GH_5, 0
Leuchte5 TFL RB6-Dimming_Direction_GH_5, minimize
→ Применить
```

### Гашение ДХО при поднятии ручника
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Daytime running lights-Tagfahrlicht Dauerfahrlicht bei Handbremse abschalten — active
Для 19 м.г.:
Aussenlicht_Front-Tagfahrlicht_Dauerfahrlicht_bei_Handbremse_abschalten: Активировать
→ Применить
```

### ДХО только в положении переключателя света AUTO
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Daytime running lights-Tagfahrlicht nur in Schalterstellung AUTO,active
Для 19 м.г.:
Aussenlicht_Front — Tagfahrlicht nur in Schalterstellung AUTO,акт.
→ Применить
```

### Функция CORNER (подсвечивание поворотов противотуманными фарами)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
(Для авто без Coming Home/Leaving Home):
Leuchte12NL LB40-Light_Function_B_12 — Abbiegelicht links
Leuchte13NL RB3-Light_Function_B_13 — Abbiegelicht rechts
(Для авто с активированным Coming Home/Leaving Home):
Leuchte12NL LB40-Light_Function_C_12 – Abbiegelicht links
Leuchte12NL LB40-Dimming_CD_12 – 100
Leuchte12NL LB40-Dimming_Direction_CD_12 – maximize
Leuchte13NL RB3-Light_Function_C_13 – Abbiegelicht rechts
Leuchte13NL RB3-Dimming_CD_13 – 100
Leuchte13NL RB3-Dimming_Direction_CD_13 – maximize
Настройка скорости включения/отключения CORNER:
static AFS light-Lower speed threshold, 0.0 km/h
static AFS light-Upper speed threshold, 40.0 km/h (можно поставить 50 км/ч)
Включение обеих ПТФ при включении заднего хода (стандартно при наличии функции с завода)
static AFS light-bei Rueckwaertsfahrt – both sides
→ Применить
```

### Светодиодная подсветка номера (адаптация)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte25KZL HA60-Type_Of_Load_25 — 2* 5W – меняем значение на «LED Kleinleistung ohne Open Load Diagnose» (LED)
Leuchte25KZL HA60-Dimming_AB_25 – 100 – меняем на значение «127»
→ Применить
```

### Активация правого заднего ПТФ
```
На Rapid недоступна. Нет канала, отвечающего отдельно за правую заднюю ПТФ. Провод к лампе отсутствует.
Можно запитать проводом от левого фонаря.
```

### Включение задних габаритов вместе с ДХО (с подсветкой номера и приборки)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Daytime running lights-Tagfahrlicht-Dauerfahrlicht aktiviert zusaetzlich Standlicht: active
Для 19 м.г.:
Aussenlicht_Front-Tagfahrlicht-Dauerfahrlicht aktiviert zusaetzlich Standlicht: акт.
→ Применить
```

### Включение задних габаритов в режиме ДХО (без подсветки номера и приборки)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte23SL HLC7-Light_Function_D_23 → выбираем - Daytime running lights → сохранить
Leuchte24SL HRA69-Light_Function_D_24 → выбираем → Daytime running lights → сохранить
Leuchte23SL HLC7-Dimming_CD_23:  «75» → сохранить
Leuchte24SL HRA69-Dimming_CD_24:  «75» → сохранить
→ Применить
```

### Стробоскопы: ПТФ — Дальний свет

!!! warning "" 
    При такой кодировке невозможно использовать дальний вместе с противотуманками.
    
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Driving light and parking light:
- max_scheinwerfer_2limitieren: Активировать
Для 19 м.г.:
Aussenlicht_Front:
- max_scheinwerfer_2limitieren → in_Betrieb_lassen: Активировать
→ Применить
```

### Стробоскоп: ПТФ — дальний свет (при моргании дальним)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte12NL LB40-Light_Function_G_12: с not active меняем на Headlamp flasher
Leuchte12NL LB40-Dimming_Direction_GH_12: с maximize меняем на minimize
Leuchte13NL RB3-Light_Function_G_13: с not active меняем на Headlamp flasher
Leuchte13NL RB3-Dimming_Direction_GH_13: с maximize меняем на minimize
→ Применить
```

### Стробоскоп: Ближний – Дальний свет (при моргании дальним)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte6ABL LB44-Light_Function_C_6, с “not active” меняем на “Headlamp flasher”
Leuchte6ABL LB44-Dimming_Direction_CD_6, с “maximize” меняем на minimize
Leuchte7ABL RB5-Light_Function_C_7, с “not active” меняем на “Headlamp flasher”
Leuchte7ABL RB5-Dimming_Direction_CD_7, “с maximize” меняем на minimize
→ Применить
```

### Стробоскоп: ДХО LED – Дальний свет
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Leuchte4TFL LB43-Light_Function_G_4 - Lichthupe (Headlamp flasher)*
Leuchte4TFL LB43-Dimming_GH_4 → 0
Leuchte4TFL LB43-Dimming_Direction_GH_4 - minimize
Leuchte5 TFL RB6-Light_Function_G_5 - Lichthupe (Headlamp flasher)*
Leuchte5 TFL RB6-Dimming_GH_5 - 0
Leuchte5 TFL RB6-Dimming_Direction_GH_5 - minimize
→ Применить
```

### Coming Home (провожание светом)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Comfort illumination-Coming Home Verbaustatus – automatic (для авто с датчиком света) или manual (для авто без датчика света)
Comfort illumination-Menuesteuerung Coming Home Werkseinstellung – active
Comfort illumination-Menueeinstellung Cominghome – 10 s (продолжительность работы функции)
Comfort illumination-Coming Home Leuchten – Low beam (через фары ближнего света) или Fog light (через противотуманные фары)
Comfort illumination-Coming-home Einschaltereignis – Driver door(срабатывание от водительской двери) или Ignition (срабатывание от зажигания)
Comfort illumination-Helligkeitsschwelle Infrarot-Messung –0
Если выбраны фары ближнего света:
Leuchte6ABL LB44-Light_Function_B_6 – Coming Home Leaving Home
Leuchte7ABL RB5-Light_Function_B_7 – Coming Home Leaving Home
Если выбраны противотуманные фары:
Leuchte12NL LB40-Light_Function_B_12 — Coming Home Leaving Home
Leuchte13NL RB3-Light_Function_B_13 — Coming Home Leaving Home
Приветствие светом — Leaving-Home (только при наличии датчика света)
Comfort illumination-Leaving-Home Verbausstatus – Enabled
Comfort illumination-lho_aktiviert – active
Comfort illumination-lho_zeit – 10 s
Coming Home/ Leaving Home с фонарями заднего хода
Leuchte28RFL C3-Light_Function_C_28 – Coming Home Leaving Home
Leuchte28RFL C3-Dimming_CD_28 – 100
Leuchte28RFL C3-Dimming_Direction_CD_28 – maximize
Для 19 м.г.:
Aussenlicht_uebergreifend — Coming Home Verbaustatus – automatic (для авто с датчиком света) или manual (для авто без датчика света)
Aussenlicht_uebergreifend — Menuesteuerung Coming Home Werkseinstellung – active
Aussenlicht_uebergreifend — Menueeinstellung Cominghome – 10 s
Aussenlicht_uebergreifend — Coming Home Leuchten – Low beam (фары ближнего света) или Fog light (противотуманные фары)
Aussenlicht_uebergreifend — Coming-home Einschaltereignis – Driver door (для авто с датчиком света) или Ignition (для авто без датчика света)
Aussenlicht_uebergreifend — Helligkeitsschwelle Infrarot — Messung – 72.0
Если выбраны фары ближнего света:
Leuchte6ABL LB44 — Light_Function_B_6 – Coming Home Leaving Home
Leuchte7ABL RB5 — Light_Function_B_7 – Coming Home Leaving Home
Если выбраны противотуманные фары:
Leuchte6ABL LB44 — Light_Function_B_6 – изменить на not active
Leuchte7ABL RB5 — Light_Function_B_7 – изменить на not active
Leuchte12NL LB40-Light_Function_B_12 — Coming Home Leaving Home
Leuchte13NL RB3-Light_Function_B_13 — Coming Home Leaving Home
Приветствие светом — Leaving-Home (только при наличии датчика света)
Aussenlicht_uebergreifend — Leaving-Home Verbausstatus – Enabled (разрешено)
Aussenlicht_uebergreifend — lho_aktiviert – active
Aussenlicht_uebergreifend — lho_zeit – 10 s
→ Применить
```

### Комфортный указатель поворота (19 м.г.)

!!! note ""
    Возможные названия для поиска: Au?enlicht_Blinker, Komfortblinken, Blinkzyklen.
    
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Aussenlicht_Blinker 
- Komfortblinken_Blinkzyklen – выбрать значение от 1 до 5 (с завода по умолчанию – 3)
→ Применить
```
