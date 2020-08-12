disqus: https-mqb-readthedocs-io
# Передние фары
  
### Регулировка Датчика Освещённости

=== "Кодирование в ODIS"
    ```
    Блок 09 → Кодирование
    >> подблок RLНS:
    > 3СА8DD — фары включаются не так поздно, где то при 1200lx
    > 3CA8D7 — фары включаются совсем поздно, при 800lx
    ```
    
=== "Кодирование в VCDS"
    ```
    09 - Электроника бортовой сети  
    Кодирование - 07 → подблок RLНS
    > Меняем байты 0 и 2 что бы получилось 3С А8 D7. 
    > Просто нажать на значение и вбить новое, так проще, но можно и биты самому поставить в нулевом 2,3,4,5 биты а во втором — 0,1,2,4,6,7
    ```

> логин-пароль 31347

### Маневровый свет от зеркал при парковке

!!! note ""
    Адаптация подходит только для автомобилей с установленным круговым обзором Area View

=== "Кодирование в ODIS"
    ```
    Блок 09 → Адаптация
    > Aussenlicht_uebergreifend 
    >> Umfeldleuchte_als_Manoevrierleuchte → Активировано 
    → Применить
    ```
    ```
    Блок 6C → Кодирование
    > Manoeuvre_Light
    Старое значение: выкл.
    Новое значение: вкл.    
    → Применить (с перезагрузкой блока)
    ```

=== "Кодирование в VCDS"
    ```
    6С — Система камеры заднего вида  
    Кодирование - 07 → Длинное кодирование    
    Байт 8 → 2 бит: Manoeuvre_Light → включить  
    Выход   
    Сохранить  
    ```
    ![Screenshot](../images/MQB/Manoeuvre_Light.jpg)   

> логин-пароль 31347

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

=== "Кодирование в ODIS"
    ```
    Блок 09 → Адаптация
    > Aussenlicht_Front (Driving light and parking light)
    > Zahl der aktivern Sheinwerfer Auf 2 limitieren
    Старое значение: in Betrieb lassen  
    Новое значение: limitieren  
    → Применить
    ```

=== "Кодирование в OBD11"
    ```
    9 Блок управления бортовой сети → Безопасный доступ (Логин: 31347) → Адаптация   
    > Aussenlicht_Front - Zahl der aktiven Scheinwerfer auf 2 limitieren  
    Старое значение: in Betrieb lassen  
    Новое значение: limitieren 
    ```

> логин-пароль 31347	
    
### Перемигивание дальнего света и ближнего (вариант стробоскопа для галогеновых фар)

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

### Американский стиль поворотников для галогеновых фар (горят постоянно с ДХО в в пол-накала)

!!! note ""
    Актуально для автомобилей с поворотниками, в которых стоят лампы накаливания

```
Блок 09 → Адаптация
> Leuchte0BLK VLB36 
>> Lichtfunktion D0 → меняем на Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht) 
>> Dimmwert CD0 → значение «0» меняем на «30» 
>> Lichtfunktion E0 → меняем на Blinken Links Dunkelphase
>> Dimming Direction EF0 → maximize меняем на minimize
→ Применить
```
```
> Leuchte1BLK VRB20
>> Lichtfunktion D1 → меняем на Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht)
>> Dimmwert CD1 → значение «0» меняем на «30»
>> Lichtfunktion E1 → меняем на Blinken Rechts Dunkelphase
>> Dimming Direction EF1 → maximize меняем на minimize
 → Применить
```

> логин-пароль 31347

### Перемигивание поворотников с ДХО (для галогеновых фар)

```
Блок 09 → Адаптация

> Leuchte2SL VLB10
>> Lichtfunktion G 2 → выбираем Blinken links Hellphase
>> Dimmwert GH 2 → вводим значение «0»
>> Dimming Direction GH 2 → выбираем minimize
→ Применить

> Leuchte3SL VRB21
>> Lichtfunktion G 3 → выбираем Blinken rechts Hellphase
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

![Screenshot](../images/MQB/daylight.jpg)

	Блок 09 → Адаптация
	> Aussenlicht_Front
	> Tagfahrlicht aktivierung durch BAP oder Bedienfolge moeglich
	→ активировать
	→ Применить

> логин-пароль 31347

В меню настройки освещения, появляется пункт "дневные ходовые огни":

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
	> Lichtfunktion D 12 → Abbieglicht links (было nicht aktiv)
	> Leuchte13NL RB5
	> Lichtfunktion D 13 → Abbieglicht rechts (было nicht aktiv)
	→ Применить
	
Изменение скорости включения освещения поворотов

    Блок 09 → Адаптация
    > Система статического адаптивного освещения (Static AFS light)
    > Untere Geschwindigkeitsschwelle - 0 км\ч
    > Obere Geschwindigkeitsschwelle - 50 км\ч
    → Применить

> логин-пароль 31347