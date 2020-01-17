# Свет

### Регулировка Датчика Освещённости

    Блок 09 → Адаптация 
    > Датчик Освещённости
    > Helligkeitsgrenze_Licht__einschalten - с 1200 на 400 (200 поправил что бы ещё позже включался)
    > Helligkeitsgrenze_Licht_ausschalten - с 2200 на 600 (400 поправил что бы ещё позже включался)
    
    ODIS E
    > IDE08786-ENG115724 -- Assistance light functions - Lichtsensorempfindlichkeit 
    по умолчанию – "normal", ставим - "non sensitive"
	→ Применить
	
> логин-пароль 31347

??? note "Кодирование в VCDS"
    09 - Электроника бортовой сети  
    Кодирование - 07 → Длинное кодирование 
    > Меняем байты 0 и 2 что бы получилось 3С А8 D7. 
    > Просто нажать на значение и вбить новое, так проще, но можно и биты самому поставить в нулевом 2,3,4,5 биты а во втором — 0,1,2,4,6,7

!!! tip
    Варианты: 3C88D7, 3С88D2

### Световая индикация при резком (аварийном) торможении
 
    Блок 09 → Кодирование
    16 Байт (1 бит): предупреждение об экстренном торможении через стосигналы → включить
    либо
    16 Байт (2 бит): предупреждение об экстренном торможении через указатели поворотов (аварийной сигнализацией) → включить
    → Применить
    
??? note "Кодирование в VCDS"    
    09 - Электроника бортовой сети  
    Кодирование - 07 → Длинное кодирование  
    Байт 16 → 1 бит: предупреждение об экстренном торможении через стосигналы → включить  
    либо  
    Байт 16 → 2 бит: предупреждение об экстренном торможении через указатели поворотов (аварийной сигнализацией) → включить  
    Выход   
    Сохранить  
    ![Screenshot](../images/signals.jpg)    
    
!!! warning
    нельзя одновременно включать 2 параметра

> логин-пароль 31347

### Маневровый свет от зеркал при парковке

    Блок 09 → Адаптация
    > Aussenlicht_uebergreifend 
    >> Umfeldleuchte_als_Manoevrierleuchte → Активировано 
    → Применить
    
    Блок 6C → Кодирование
    > Manoeuvre_Light
    Старое значение: выкл.
    Новое значение: вкл.    
    → Применить (с перезагрузкой блока)

> логин-пароль 31347

### Включение ПТФ при включении дальнего света

	Блок 09 → Адаптация 
	> Leuchte12NL LB45
	>> Lichtfunktion B 12 — Fernlicht links (было nicht aktiv)
	→ Применить
	
	> Leuchte13NL RB5
	>> Lichtfunktion B 13 — Fernlicht links (было nicht aktiv)
	→ Применить

> логин-пароль 31347	

### Перемигивание дальнего света и ПТФ при включенных ПТФ (стробоскоп)

	Блок 09 → Адаптация
	> Aussenlicht_Front (Driving light and parking light)
	> Zahl der aktivern Sheinwerfer Auf 2 limitieren
	Старое значение: in Betrieb lassen  
    Новое значение: limitieren  
	→ Применить
	
> логин-пароль 31347	

??? note "Кодирование в OBD11"
    09 Блок управления бортовой сети → Безопасный доступ (Логин: 31347) → Адаптация   
    > Aussenlicht_Front - Zahl der aktiven Scheinwerfer auf 2 limitieren  
    Старое значение: in Betrieb lassen  
    Новое значение: limitieren  
	
### Перемигивание дальнего света и ПТФ при выключенных ПТФ (стробоскоп)

	Блок 09 → Адаптация 
	> Leuchte12NL LB45
	>> Dimming direction CD 12 — maximum
	>> Dimmwert CD 12 – 0 -> 110
	>> Lichtfunktion C 12 — Lichthupe generell (было [VO]_Nebellicht rechts)
	→ Применить
	
	> Leuchte13NL RB5
	>> Dimming direction CD 13 — maximum
	>> Dimmwert CD 13 – 0 -> 110
	>> Lichtfunktion C 13 — Lichthupe generell (было [VO]_Nebellicht rechts)
	→ Применить
	
> логин-пароль 31347

### Изменение количества мигания поворотника в режиме обгона или перестроения

	Блок 09 → Адаптация
	> Aussenlicht_Blinker
	>> Komfortblinken Blinkzyklen (Turn signal control)
	«3» меняем на нужное количество «5»
	→ Применить

> логин-пароль 31347

### Американский стиль поворотников (горят постоянно с ДХО в в пол-накала)

    Блок 09 → Адаптация
   
    > Leuchte 0BLK VL B36 
    >> Lichtfunktion D0 → меняем на Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht) 
    >> Dimmwert CD0 → значение «0» меняем на «30» 
    >> Lichtfunktion E0 → меняем на Blinken Links Dunkelphase
    >> Dimming Direction EF0 → maximize меняем на minimize
    → Применить
    
    > Leuchte 1BLK VRB20
    >> Lichtfunktion D1 → меняем на Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht)
    >> Dimmwert CD1 → значение «0» меняем на «30»
    >> Lichtfunktion E1 → меняем на Blinken Links Dunkelphase
    >> Dimming Direction EF1 → maximize меняем на minimize
    → Применить
    
> логин-пароль 31347

### Перемигивание поворотников с ДХО

```
Блок 09 → Адаптация

> Leuchte2SL VLB10
>> Lichtfunktion G 2 → выбираем Blinken links (Hellphase)
>> Dimmwert GH 2 → вводим значение «0»
>> Dimming Direction GH 2 → выбираем minimize
→ Применить

> Leuchte3SL VRB21
>> Lichtfunktion G 3 → выбираем Blinken rechts (Hellphase)
>> Dimmwert GH 3 → вводим значение «0»
>> Dimming Direction GH 3 → выбираем minimize
→ Применить
```

> логин-пароль 31347

??? note "Параметры применяемые для функций освещения"
    Blinken links Hellphase — работает при загорании левого поворотника  
    Blinken links Dunkelphase — работает при притухании левого поворотника  
    Blinken rechts Hellphase — работает при загорании правого поворотника  
    Blinken rechts Dunkelphase — работает при притухании правого поворотника  
    Blinken links aktiv (beide Phase) — работает постоянно при работе левого поворотника  
    Blinken rechts aktiv (beide Phase) — постоянно при работе правого поворотника  
    Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht) — горит в режиме габаритов  
    Parklicht links (beidseitiges Parklicht aktiviert li & re) — горит в режиме парковочного огня левый (зажигание выкл.)  
    Parklicht rechts — горит в режиме парковочного огня правый (зажигание выкл.)  
    Abblendlichts links — горит при ближнем левом огне  
    Abblendlicht rechts — горит при ближнем правом огне  
    Fernlicht links — горит при дальнем левом огне  
    Fernlicht rechts — горит при дальнем правом огне  
    Lichthupe generell — включается при моргании дальним  
    Nebellicht links — горит при включении левого птф  
    Nebellicht rechts — горит при включении правого птф  
    Tagfahrlicht — горит при ДХО  
    Bremslicht — горит при нажатии на тормоз  
    Rueckfahrlicht — горит при включенной задней передаче  
    Nebelschlusslicht — горит при включении заднего птф  
    Heckdeckel offen — загорается при открытии багажника  
    Heckdeckel geschlossen — загорается при закрытии багажника  
    Dimmung klemme 58xs — регулируется яркость регулятором из салона  
    Innenlicht — внутреннее освещение, плавно включается при открытии двери  
    Kofferraumlicht — горит при включении света в багажнике (при открытом багажнике)  
    Fussraumlicht — освещение для ног  
    Tuerausstiegslicht vorn links — загорается при открытии передней левой двери  
    Tuerausstiegslicht vorn rechts — загорается при открытии передней правой двери  
    Tuerausstiegslicht hinten links — загорается при открытии задней левой двери  
    Tuerausstiegslicht hinten rechts — загорается при открытии задней правой двери  
    Tuerausstiegslichtv links — загорается при открытии двери с левой стороны  
    Tuerausstiegslichtv rechts — загорается при открытии двери с правой стороны  

!!! tip "Audi Style"
    Lichtfunktion G 2 → выбираем Blinken links aktiv (beide Phase)   
    Dimmwert GH 2 → вводим значение от 20 до 35  
    Lichtfunktion G 2 → выбираем Blinken links aktiv (beide Phase)  
    Dimmwert GH 3 → вводим значение от 20 до 35  
   
### Перемигивание задних габаритов и поворотников

!!! tip ""
    Задние габариты, при включении поворотника отключаются, при отключении загораются обратно (каждый цикл мигания поворотника)
    
```
Блок 09 → Адаптация
> Leuchte16BLK SLB35BLK SL KC9
>> Lichtfunktion G 16 — от not active до Blinken rechts Hellphase
> Leuchte16SL HLC10
>> Dimming Direction GH 1 — от maximize до minimize
   
> Leuchte17TFL R BLK SRB3TFL R BLK SR KC3
>> Lichtfunktion G 17 — от not active до Blinken links Hellphase
> Leuchte17SL HLC10
>> Dimming Direction GH 17 — от maximize до minimize
   
> Leuchte23SL HLC10
>> Lichtfunktion G 23 — от not active до Blinken links Hellphase
>> Dimming Direction GH 23 — от maximize до minimize
    
> Leuchte24SL HRA65
>> Lichtfunktion G 24 — от not active до Blinken rechts Hellphase
>> Dimming Direction GH 24 — от maximize до minimize
``` 

> логин-пароль 31347    

### Перемигивание ламп заднего хода с поворотниками при включении задней скорости и аварийки

	Блок 09 → Адаптация 
	
    > Leuchte 28RFL LC11 
    >> Lichtfunktion C → Active → меняем на → Blinken Links Hellphase
    >> Lichtfunktion D → остается → Not Active
    >> Dimmwert СD → остается «0»
    >> Dimming Direction CD → maximize → меняем на → minimize
    → Применить

    > Leuchte 29RFL RA64 
    >> Lichtfunktion C → Active → меняем на → Blinken Rechts Hellphase
    >> Lichtfunktion D → остается → Not Active
    >> Dimmwert СD → остается «0»
    >> Dimming Direction CD → maximize → меняем на → minimize
    → Применить
    
> логин-пароль 31347  

### Включение задних габаритов постоянно с ДХО – Буквы «F» горят всегда (для 3D Led)

    Блок 09 → Адаптация
    
    > Leuchte23SL HLC10 (левый фонарь)
    >> Lichtfunktion C 23:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    >> Dimmwert CD 23:
    Старое значение: 0
    Новое значение: 127
    
    > Leuchte24SL HRA65 (правый фонарь)
    >> Lichtfunktion C 24:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    >> Dimmwert CD 24:
    Старое значение: 0
    Новое значение: 127
    
    > Leuchte16BLK SLB35BLK SL KC9
    >> Lichtfunktion C 16:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    >> Dimmwert CD 16:
    Старое значение: 0
    Новое значение: 127
    
    > Leuchte17TFL R BLK SRB3TFL R BLK SR KC3
    >> Lichtfunktion C 17:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    >> Dimmwert CD 17:
    Старое значение: 0
    Новое значение: 127
    → Применить

> логин-пароль 31347  

### Отключение оповещения о ближнем свете фар / ДХО

    Блок 09 → Адаптация
    > Aussenlicht_uebergreifend 
    >> Fahrlichtwarnung_Hinweis_Konfig
    Старое значение: Hinweis_in_LDS-Stellung_Null_und_SL
    Новое значение: kein_Hinweis
    → Применить

> логин-пароль 31347

### Включение задних габаритов в режиме только ДХО

!!! warning ""
    В интернете полно советов по кодировке: 
    Tagfahrlicht — Dauerfahrlicht aktiviert zusaetzlich Standlicht auswählen  
    Она некорректна!

```
Блок 09 → Адаптация
    
> Leuchte23SL HLC10 (левый фонарь)
>> Lichtfunktion D 23:
Старое значение: nicht aktiv
Новое значение: Daytime running lights
    
> Leuchte24SL HRA65 (правый фонарь)
>> Lichtfunktion D 24:
Старое значение: nicht aktiv
Новое значение: Daytime running lights
```

> логин-пароль 31347

### Отключение ДХО при поднятом ручном тормозе

	Блок 09 → Адаптация
	> Aussenlicht_Front
	> Tagfahrlicht Dauerfahrlicht bei Handbremse abschalten
	> активировать
	→ Применить

> логин-пароль 31347

### Отключение ДХО в положении 0 на переключателе света

	Блок 09 → Адаптация
	> Aussenlicht_Front
	> Tagfahrlicht nur in Schalterstellung AUTO
	→ активировать
	→ Применить

> логин-пароль 31347

### Пункт меню настроек "Дневной свет", чтоб отключать ДХО только по необходимости

	Блок 09 → Адаптация
	> Aussenlicht_Front
	> Tagfahrlicht aktivierung durch BAP oder Bedienfolge moeglich
	→ активировать
	→ Применить

> логин-пароль 31347

### Светодиоды в ПТФ

	Блок 09 → Адаптация
	> [VO]_Leuchte12NL LB45 → [LO]_Lasttyp 12 → [VO_6-LED Lichtmodul]
	→ Применить
	
	> [VO]_Leuchte13NL RB5 → [LO]_Lasttyp 13 → [VO_6-LED Lichtmodul]
	→ Применить

Уменьшение яркости светодиодов:

	> [VO]_Leuchte12NL LB45 → [LO]_DimmwertAB 12 → 60
	→ Применить

	> [VO]_Leuchte13NL RB5 → [LO]_DimmwertAB 13 → 60
	→ Применить

> логин-пароль 31347

### Автоматическое провожание, а не морганием дальним перед выходом из машины

	Блок 09 → Адаптация 
	> Aussenlicht_uebergreifend
	> Coming Home Verbaustatus и ставим значение Авто. И конечно применяем изменения.
	> можно увеличить время свечения в пункте Menueeinstellung Cominghome там уже на свой вкус ставите значение.
	→ Применить

> логин-пароль 31347

### Активация передних ПТФ при включении заднего хода

	Блок 09 → Адаптация 
	> Система статического адаптивного освещения (Static AFS light)
	> Bei Rueckwaertsfahrt
	Выставляем в double sided (С обеих сторон)
	→ Применить

> логин-пароль 31347

### Система освещения поворотов (CORNER)

	Блок 09 → Адаптация
	> Leuchte12NL LB45
	> Lichtfunktion E 12 → Abbieglicht links (было nicht aktiv)
	> Leuchte13NL RB5
	> Lichtfunktion E 13 → Abbieglicht rechts (было nicht aktiv)
	→ Применить
	
Изменение скорости включения освещения поворотов

    Блок 09 → Адаптация
    > Система статического адаптивного освещения
    > Untere Geschwindigkeitsschwelle - 0 км\ч
    > Obere Geschwindigkeitsschwelle - 50 км\ч
    → Применить

> логин-пароль 31347