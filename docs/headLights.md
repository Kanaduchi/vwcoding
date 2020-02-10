# Свет

??? tip "Расшифровка каналов передних фонарей"
    Leuchte0BLK VLB36 — Левый передний поворотник  
    Leuchte1BLK VRB20 — Правый передний поворотник  
    Leuchte2SL VLB10 — Левый передний габарит  
    Leuchte3SL VRB21 — Правый передний габарит  
    Leuchte4TFL LB44 — Левый передний ДХО  
    Leuchte5TFL RB32 — Правый передний ДХО  
    Leuchte6ABL LC5 — Левый ближний свет  
    Leuchte7ABL RB1 — Правый ближний свет  
    Leuchte8FL LB39 — Левый дальний свет  
    Leuchte9FL RB2 — Правый дальний свет  
    Leuchte12NL LB45 — Левая передняя ПТФ  
    Leuchte13NL RB5 — Правая передняя ПТФ  
    
??? tip "Параметры применяемые для функций освещения"
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

### Регулировка Датчика Освещённости

    Блок 09 → Адаптация 
    > Датчик Освещённости
    > Helligkeitsgrenze_Licht__einschalten - с 1200 на 400 (200 поправил что бы ещё позже включался)
    > Helligkeitsgrenze_Licht_ausschalten - с 2200 на 600 (400 поправил что бы ещё позже включался)
    
    ODIS E
    > IDE08786-ENG115724 -- Assistance light functions - Lichtsensorempfindlichkeit 
    по умолчанию – "normal", ставим - "non sensitive"
	→ Применить
	
	Блок 09 → Кодирование → подблок RLНS
	3СА8DD — фары включаются не так поздно, где то при 1200lx
    3CA8D7 — фары включаются совсем поздно, при 800lx
	
> логин-пароль 31347

??? note "Кодирование в VCDS"
    09 - Электроника бортовой сети  
    Кодирование - 07 → подблок RLНS
    > Меняем байты 0 и 2 что бы получилось 3С А8 D7. 
    > Просто нажать на значение и вбить новое, так проще, но можно и биты самому поставить в нулевом 2,3,4,5 биты а во втором — 0,1,2,4,6,7

!!! tip
    Варианты: 3C88D7, 3С88D2

### Маневровый свет от зеркал при парковке

!!! note ""
    Адаптация подходит только для автомобилей с установленным круговым обзором Area View

```
Блок 09 → Адаптация
> Aussenlicht_uebergreifend 
>> Umfeldleuchte_als_Manoevrierleuchte → Активировано 
→ Применить
    
Блок 6C → Кодирование
> Manoeuvre_Light
Старое значение: выкл.
Новое значение: вкл.    
→ Применить (с перезагрузкой блока)
```

> логин-пароль 31347

??? note "Кодирование в VCDS"    
    6С — Система камеры заднего вида  
    Кодирование - 07 → Длинное кодирование    
    Байт 8 → 2 бит: Manoeuvre_Light → включить  
    Выход   
    Сохранить  
    ![Screenshot](../images/Manoeuvre_Light.jpg)    

### Включение ПТФ при включении дальнего света

Левая передняя ПТФ
```
Блок 09 → Адаптация 
> Leuchte12NL LB45
>> Lichtfunktion B 12 — Fernlicht links (Горит при дальнем левом свете), было nicht aktiv
→ Применить
```
Правая передняя ПТФ
```
Блок 09 → Адаптация 
> Leuchte13NL RB5
>> Lichtfunktion B 13 — Fernlicht rechts (Горит при дальнем правом свете), было nicht aktiv
→ Применить
```
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
    
### Перемигивание дальнего света и ближнего (вариант стробоскопа для обычных фар)

Левый ближний свет
```
Блок 09 → Адаптация
> Leuchte6ABL LC5
>> Lichtfunktion B 6 → Lichthupe generell меняем на not active
>> Lichtfunktion C 6 → not active меняем на Lichthupe generell
>> Dimming Direction CD 6 → maximize меняем на minimize
→ Применить
```

Правый ближний свет
```
Блок 09 → Адаптация
> Leuchte7ABL RB1
>> Lichtfunktion B 7 → Lichthupe generell меняем на not active
>> Lichtfunktion C 7 → not active меняем на Lichthupe generell
>> Dimming Direction CD 7 → maximize меняем на minimize
→ Применить
```

> логин-пароль 31347	
	
### Перемигивание дальнего света и ПТФ при выключенных ПТФ (стробоскоп)

Левая передняя ПТФ
```
Блок 09 → Адаптация 
> Leuchte12NL LB45
>> Dimming direction CD 12 -> maximum
>> Dimmwert CD 12 – 0 -> 110
>> Lichtfunktion C 12 -> Lichthupe generell (было Nebellicht rechts)
→ Применить
```

Правая передняя ПТФ
```
Блок 09 → Адаптация 
> Leuchte13NL RB5
>> Dimming direction CD 13 -> maximum
>> Dimmwert CD 13 – 0 -> 110
>> Lichtfunktion C 13 -> Lichthupe generell (было Nebellicht rechts)
→ Применить
```
	
> логин-пароль 31347

### Изменение количества мигания поворотника в режиме обгона или перестроения

```
Блок 09 → Адаптация
> Aussenlicht_Blinker
>> Komfortblinken Blinkzyklen (Turn signal control)
«3» меняем на нужное количество «5»
→ Применить
```

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

!!! tip "Audi Style"
    Lichtfunktion G 2 → выбираем Blinken links aktiv (beide Phase)   
    Dimmwert GH 2 → вводим значение от 20 до 35  
    Lichtfunktion G 2 → выбираем Blinken links aktiv (beide Phase)  
    Dimmwert GH 3 → вводим значение от 20 до 35  
   
### Отключение оповещения о ближнем свете фар / ДХО

    Блок 09 → Адаптация
    > Aussenlicht_uebergreifend 
    >> Fahrlichtwarnung_Hinweis_Konfig
    Старое значение: Hinweis_in_LDS-Stellung_Null_und_SL
    Новое значение: kein_Hinweis
    → Применить

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
	> Leuchte12NL LB45 → Lasttyp 12 → [VO_6-LED Lichtmodul]
	→ Применить
	
	> Leuchte13NL RB5 → Lasttyp 13 → [VO_6-LED Lichtmodul]
	→ Применить

Уменьшение яркости светодиодов:

	> Leuchte12NL LB45 → DimmwertAB 12 → 60
	→ Применить
	> Leuchte13NL RB5 → DimmwertAB 13 → 60
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
    > Система статического адаптивного освещения (Static AFS light)
    > Untere Geschwindigkeitsschwelle - 0 км\ч
    > Obere Geschwindigkeitsschwelle - 50 км\ч
    → Применить

> логин-пароль 31347