disqus: https-mqb-readthedocs-io
# Задние фары
  
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

### Включение задних габаритов постоянно с ДХО – Буквы «F» горят всегда для HIGH фонарей

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

### Включение секций задних габаритов для BASIS фонарей

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

Отключение фонарей на крышке багажника при её открытии:
```
Блок 09 → Адаптация
>> Leuchte23SL HLC10
>> Lichtfunktion G 23 → Rear lid open (было nicht aktiv)
>> Dimming Direction GH 23 → minimize
→ Применить
```
```
Блок 09 → Адаптация
>> Leuchte24SL HLC10
>> Lichtfunktion G 24 → Rear lid open (было nicht aktiv)
>> Dimming Direction GH 24 → minimize
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