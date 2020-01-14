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

### Плавное включение и выключение освещения в салоне

!!! tip ""
    Подсветка всех кнопок в салоне загорается и гаснет плавно, смотрится очень естественно и красиво. 
    
```
Блок 09 → Адаптация
> Suchbeleuchtung_allgemein
> KL58 Einschalten mit Rampe → Active
→ Применить
```
	
> логин-пароль 31347

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
	> Dimming direction CD 12 — maximum
	> Dimmwert CD 12 – 0 -> 110
	> Lichtfunktion С 12 — Lichthupe generell (было [VO]_Nebellicht rechts)
	→ Применить
	
	> Leuchte13NL RB5
	> Dimming direction CD 13 — maximum
	> Dimmwert CD 13 – 0 -> 110
	> Lichtfunktion С 13 — Lichthupe generell (было [VO]_Nebellicht rechts)
	→ Применить
	
> логин-пароль 31347

### Отключение освещения салона при открытии багажника

!!! tip ""
    Изначально при открытии крышки багажника загорался свет не только в нем, но и в салоне

```
Блок 09 → Адаптация
> Освещение салона 2го поколения - Innenlicht bei offenem Hechdeckei einschalten
> Не акт.
→ Применить
```

> логин-пароль 31347

### Изменение количества мигания поворотника в режиме обгона или перестроения

	Блок 09 → Адаптация
	> Aussenlicht_Blinker
	> Komfortblinken Blinkzyklen
	> (2)-Turn signal control → «3» выставляем нужное количество «5»
	→ Применить

> логин-пароль 31347

### Американский стиль поворотников (горят постоянно с ДХО в в пол-накала)

    Блок 09 → Адаптация
    
    > (9)-Leuchte 0BLK VL B36 Lichtfunktion D0 
    > Not Active > меняем на > Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht) 
    > (10)-Leuchte 0BLK VLB36 Dimmwert CD0 
    > значение «0» меняем на «30» 
    > (12)-Leuchte 0BLK VLB36 Lichtfunktion E0 
    > Not Active > меняем на > Blinken Links Dunkelphase
    > (15)-Leuchte 0BLK VLB36 Dimming Direction EF0
    > maximize > меняем на > minimize
    → Применить
    
    > (9)- Leuchte 1BLK VRB20 Lichtfunktion D1 
    > Not Active > меняем на > Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht)
    > (10)- Leuchte 1BLK VRB20 Dimmwert CD1 
    > значение «0» меняем на «30»
    > (12)- Leuchte 1BLK VRB20 Lichtfunktion E1 
    > Not Active > меняем на > Blinken Links Dunkelphase
    > (15)- Leuchte 1BLK VRB20 Dimming Direction EF1 
    > maximize > меняем на > minimize
    → Применить
    
> логин-пароль 31347

### Затемнение  ДХО  при  включении  поворотника: (Audi Style)

	> Leuchte2SL VLB10-Lichtfunktion G 2 → выбираем → Blinken links aktiv (Hellphase)
	→ Применить
	> Leuchte2SL VLB10-Dimmwert GH 2 → вводим значение «35»
	→ Применить
	> Leuchte2SL VLB10-Dimming Direction GH 2 → выбираем → minimize
	→ Применить
	> Leuchte3SL VRB21-Lichtfunktion G 3 → выбираем → Blinken rechts aktiv (Hellphase)
	→ Применить
	> Leuchte3SL VRB21-Dimmwert GH 3 → вводим значение «35»
	→ Применить
	> Leuchte3SL VRB21-Dimming Direction GH 3 → выбираем → minimize
	→ Применить
    
> логин-пароль 31347 

### Перемигивание поворотников с ДХО

	Блок 09 → Адаптация
	> Leuchte2SL VLB10-Lichtfunktion G 2 → выбираем → Blinken links aktiv (Hellphase)
	→ Применить
	> Leuchte2SL VLB10-Dimmwert GH 2 → вводим значение «0»
	→ Применить
	> Leuchte2SL VLB10-Dimming Direction GH 2 → выбираем → minimize
	→ Применить
	> Leuchte3SL VRB21-Lichtfunktion G 3 → выбираем → Blinken rechts aktiv (Hellphase)
	→ Применить
	> Leuchte3SL VRB21-Dimmwert GH 3 → вводим значение «0»
	→ Применить
	> Leuchte3SL VRB21-Dimming Direction GH 3 → выбираем → minimize
	→ Применить

> логин-пароль 31347

### Перемигивание задних габаритов и поворотников

!!! tip ""
    Задние габариты, при включении поворотника отключаются, при отключении загораются обратно (каждый цикл мигания поворотника)
    
```
Блок 09 → Адаптация
> Leuchte16BLK SLB35BLK SL KC9
Lichtfunktion G 16 — от not active до Blinken rechts Hellphase
> Leuchte16SL HLC10
Dimming Direction GH 1 — от maximize до minimize
   
> Leuchte17TFL R BLK SRB3TFL R BLK SR KC3
Lichtfunktion G 17 — от not active до Blinken links Hellphase
> Leuchte17SL HLC10
Dimming Direction GH 17 — от maximize до minimize
   
> Leuchte23SL HLC10
Lichtfunktion G 23 — от not active до Blinken links Hellphase
Dimming Direction GH 23 — от maximize до minimize
    
> Leuchte24SL HRA65
Lichtfunktion G 24 — от not active до Blinken rechts Hellphase
Dimming Direction GH 24 — от maximize до minimize
``` 

> логин-пароль 31347    

### Перемигивание  ламп  заднего  хода  с поворотниками при включении задней скорости и аварийки

	Блок 09 → Адаптация 
    > Leuchte 28RFL LC11 
    Lichtfunktion C → Active → меняем на → Blinken Links Hellphase
    Lichtfunktion D → остается → Not Active
    Dimmwert СD → остается «0»
    Dimming Direction CD → maximize → меняем на → minimize
    → Применить

    > Leuchte 29RFL RA64 
    Lichtfunktion C → Active → меняем на → Blinken Rechts Hellphase
    Lichtfunktion D → остается → Not Active
    Dimmwert СD → остается «0»
    Dimming Direction CD → maximize → меняем на → minimize
    → Применить
    
> логин-пароль 31347  

### Включение задних габаритов постоянно с ДХО – Буквы «F» горят всегда (для 3D Led)

    Блок 09 → Адаптация
    > Leuchte23SL HLC10 (левый фонарь)
    > Lichtfunktion C 23:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    > Dimmwert CD 23:
    Старое значение: 0
    Новое значение: 127
    
    > Leuchte24SL HRA65 (правый фонарь)
    > Lichtfunktion C 24:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    > Dimmwert CD 24:
    Старое значение: 0
    Новое значение: 127
    
    > Leuchte16BLK SLB35BLK SL KC9
    > Lichtfunktion C 16:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    > Dimmwert CD 16:
    Старое значение: 0
    Новое значение: 127
    
    > Leuchte17TFL R BLK SRB3TFL R BLK SR KC3
    > Lichtfunktion C 17:
    Старое значение: nicht aktiv
    Новое значение: Tagfahrlicht
    > Dimmwert CD 17:
    Старое значение: 0
    Новое значение: 127
    → Применить

> логин-пароль 31347  

### Отключение оповещения о ближнем свете фар / ДХО

    Блок 09 → Адаптация
    > Aussenlicht_uebergreifend
    > Aussenlicht_uebergreifend - Fahrlichtwarnung_Hinweis_Konfig
    Старое значение: Hinweis_in_LDS-Stellung_Null_und_SL
    Новое значение: kein_Hinweis
    → Применить

> логин-пароль 31347

### Включение задних габаритов в режиме только ДХО

	Блок 09 → Адаптация
	> Aussenlicht_front
	> Tagfahrlicht Dauerfahrlicht aktiviert zusaetzlich Standlicht
	→ активировать
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
	> [VO]_Leuchte12NL LB45 → 
	> [LO]_Lasttyp 12 → [VO_6-LED Lichtmodul]
	→ Применить
	> [VO]_Leuchte13NL RB5 → 
	> [LO]_Lasttyp 13 → [VO_6-LED Lichtmodul]
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

### Пульсация кнопки Старт-Стоп Engine

	Блок В7 Kessy Безопасный доступ → Адаптация 
	> DeveloperCoding Search lights
	> ZAT_illumination_concept_mybeat_clamp58xt: [VN]_activated
	> ZAT_illumination_modus_mybeat_clamp58xt: [VN]_activated
	→ Применить

> логин-пароль 20103

### Система освещения поворотов (CORNER)

	Блок 09 → Адаптация
	> Leuchte12NL LB45
	> Lichtfunktion B 12 → Abbieglicht links (было nicht aktiv)
	> Leuchte13NL RB5
	> Lichtfunktion B 13 → Abbieglicht rechts (было nicht aktiv)
	→ Применить
	
Изменение скорости включения освещения поворотов

    Блок 09 → Адаптация
    > Система статического адаптивного освещения
    > Untere Geschwindigkeitsschwelle - 0 км\ч
    > Obere Geschwindigkeitsschwelle - 50 км\ч
    → Применить

> логин-пароль 31347

### Подсветка в зеркалах при круговом обзоре

    Блок 09 → Адаптация
    > Aussenlicht_uebergreifend - Umfeldleuchte als Manoevrierleuchte
    Старое значение: не акт.
    Новое значение: акт.
    
> логин-пароль 31347    

    Блок 6С → Кодирование
    Manoeuvre_Light
    Старое значение: выкл.
    Новое значение: вкл.