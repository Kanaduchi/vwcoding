# Свет

??? tip "Расшифровка каналов задних фонарей"
    Leuchte16BLK SLB35BLK SL KC9 > Левый внутренний габарит (для 3D LED)   
    Leuchte17TFL R BLK SRB3TFL R BLK SR KC3 > Правый внутренний габарит (для 3D LED)  
    Leuchte18BLK HLA60 > Задний левый поворотник  
    Leuchte19BLK HRC31 > Задний правый поворотник  
    Leuchte20BR LA71 > Тормозной сигнал левый  
    Leuchte21BR RC8 > Тормозной сигнал правый  
    Leuchte22BR MA57 > Центральный стоп сигнал  
    Leuchte23SL HLC10 > Левый задний габарит, внешняя секция  
    Leuchte24SL HRA65 > Правый задний габарит, внешняя секция   
    Leuchte25KZL HA59 > Подсветка номерного знака  
    Leuchte26NSL LA72 > Левая задняя ПТФ  
    Leuchte27NSL RC6 > Внутренняя секция стоп-сигнала на крышке (для 3D LED) или Правая задняя ПТФ (для обычных фонарей)  
    Leuchte28RFL LC11 > Левый задний ход (при движении назад)  
    Leuchte29RFL RA64 > Правый задний ход (при движении назад)  
    Leuchte30FR LC72 — Освещение ног
    
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
    Tagfahrlicht (Daytime Running Lights) — горит при ДХО  
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

### Включение задних габаритов в режиме только ДХО

!!! warning ""
    В интернете полно советов по кодировке: 
    Tagfahrlicht — Dauerfahrlicht aktiviert zusaetzlich Standlicht auswählen  
    Она некорректна!

```
Блок 09 → Адаптация
> Leuchte23SL HLC10 (левый фонарь)
>> Lichtfunktion D 23 → Daytime running lights (было nicht aktiv)
Новое значение: Daytime running lights
    
> Leuchte24SL HRA65 (правый фонарь)
>> Lichtfunktion D 24 → Daytime running lights (было nicht aktiv)
→ Применить
```

> логин-пароль 31347

### Включение секций задних габаритов для простых (не 3d led) фар

![Screenshot](../images/basicPTF.PNG)

Фонарь на крышке левый
```
Блок 09 → Адаптация
> Leuchte23SL HLC10
>> Lichtfunktion C 23 → Daytime running lights
>> Lichtfunktion E 23 → Освещение багажного отсека или Luggage compartment light
>> Lichtfunktion F 23 → Стоп-сигнал или Brake light
>> Dimming Direction EF 23 → minimize
>> Dimmwert CD 23 → 60
→ Применить
```

Фонарь на крышке правый
```
Блок 09 → Адаптация
> Leuchte24SL HRA65
>> Lichtfunktion C 24 → Daytime running lights -16
>> Lichtfunktion E 24 → Освещение багажного отсека или Luggage compartment light
>> Lichtfunktion F 24 → Стоп-сигнал или Brake light
>> Dimming Direction EF 24 → minimize
>> Dimmwert CD 24 → 60
→ Применить
```

Фонарь на крыле левый
```
Блок 09 → Адаптация
> Leuchte20BR LA71
>> Lichtfunktion C 20 → Daytime running lights
>> Lichtfunktion E 20 → Стоп-сигнал или Brake light
>> Dimmwert CD 20 → 13
>> Dimmwert EF 20 → 60
→ Применить
```

Фонарь на крыле правый
```
Блок 09 → Адаптация
> Leuchte21BR RC8
>> Lichtfunktion C 21 → Daytime running lights
>> Lichtfunktion E 21 → Стоп-сигнал или Brake light 
>> Dimmwert CD 21 → 13
>> Dimmwert EF 21 → 60
→ Применить
```

> логин-пароль 31347

### Задние ПТФ на основе стоп-сигналов

![Screenshot](../images/newPTF.PNG)

Отключаем основную ПТФ
```
Блок 09 → Адаптация
> Leuchte26NSL LA72 
>> Lichtfunktion A — nicht aktiv (было Nebelschlusslicht wenn kein Anhaenger gesteckt und Rechtsverkehr)
→ Применить
```

Включаем секции стоп-сигналов
```
Блок 09 → Адаптация
> Leuchte27NSL RC6
>> Lichtfunktion B — Nebelschlusslicht wenn kein Anhaenger gesteckt und Rechtsverkehr (было Nicht aktiv)
>> Lichtfunktion C — Kofferraumlicht (было Nebelschlusslicht wenn kein Anhaenger gesteckt und Rechtsverkehr)
→ Применить
```

Если надо включить еще и огни заднего хода то дополнительно:
```
Блок 09 → Адаптация
> Leuchte28RFL LC11 и Leuchte29RFL RA64
>> Lichtfunktion В — Nebelschlusslicht wenn kein Anhaenger gesteckt und Rechtsverkehr (было Nicht aktiv)
→ Применить
```