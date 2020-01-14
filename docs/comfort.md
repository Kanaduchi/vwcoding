# Комфорт

### Тест стрелок

!!! warning ""
    Кодирование выполняется только при включенном зажигании и не запущенном двигателе

```
Блок 17 → Кодирование
> Демонстрация
выбираем «Вкл»
→ Применить (с перезагрузкой блока)
```
```
ODIS E: 006: 0017 → [LN]_scenering → yes
```
	
> логин-пароль 20103
  
??? note "Кодирование в VCDS"
    7 - Панель приборов  
    Кодирование - 07 → Длинное кодирование  
    Байт 1 → Бит 0: (Gauge test/ Needle Sweep / Staging) → ставим галочку  
    Выход  
    Сохранить  
    ![Screenshot](../images/staging.jpg)
  
### Остаток в баках

!!! warning ""
    Кодирование выполняется только при включенном зажигании и не запущенном двигателе

```   
Блок 17 → Кодирование  
> Объем, который необходимо заправить
выбираем «Вкл»
→ Применить (с перезагрузкой блока)
```
```
ODIS E: 006: 0017 -> [IDE04848] Объем, который необходимо заправить -> Да
```
    
> логин-пароль 20103
    
!!! tip ""
    Шаг показаний сколько заливать топлива кратен 5 литрам т.е. 5-10-15-20 и т.д  
    (проверено, влезает даже чуть больше чем показывает - показывал 30 свободно, влезло 32 литра)
    
??? note "Кодирование в VCDS"    
    17 - Панель приборов  
    Кодирование - 07 → Длинное кодирование  
    Байт 10 → Бит 4: Display "Volume to be Replenished" → ставим галочку  
    Выход  
    Сохранить  
    ![Screenshot](../images/refill.jpg)
    
### Таймер круга

!!! warning ""
    Кодирование выполняется только при включенном зажигании и не запущенном двигателе

```
Блок 17 → Кодирование  
> Таймер круга
выбираем «Вкл»
→ Применить (с перезагрузкой блока)
```

> логин-пароль 20103

??? note "Кодирование в VCDS"    
    17 - Панель приборов  
    Кодирование - 07 → Длинное кодирование  
    Байт 1 → Бит 3: Lap Timer active → ставим галочку  
    Выход  
    Сохранить  
    ![Screenshot](../images/staging.jpg) 

### Смена скина приборной панели

	Блок 17 → Адаптация  
	> Tube_version
	Заменить Variante 2 на variant_4
	> Отображение на дисплее
	Заменить исполнение_1 на исполнение_3 - включение "золота"
	→ Применить

> логин-пароль 20103

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

Логотип музыкальной системы

    Блок 5F → Адаптация
    > EGN117919 (по умолчанию стоит 00 00) - меняем на
        00 11 — fender premium audio system
        00 1E — dynaudio

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

### Цветовые профили

	Блок 09 → Адаптация
	> Освещение салона 2-го поколения
	> Mittelkonsolenbeleuchtung mehrfarbig:
	Старое значение: не акт.
	Новое значение: акт.
	→ Применить
	
	> Освещение салона, конфигурация фонарей
	> Ambientemenue mit globalem aus → акт.
	> Ambientemenue mit alle Zonen → акт.
	> Ambient_Farbliste_HMI → акт.
	→ Применить
	
	> Ambientelicht Farbliste (Эстетическая подсветка)
	Старое значение у всех: 0
	Rotwert Farbe 1: 217
	Gruenwert Farbe 1: 221
	Blauwert Farbe 1: 235
	Rotwert Farbe 2: 169
	Gruenwert Farbe 2: 169
	Blauwert Farbe 2: 169
	Rotwert Farbe 3: 253
	Gruenwert Farbe 3: 108
	Blauwert Farbe 3: 55
	Rotwert Farbe 4: 242
	Gruenwert Farbe 4: 0
	Blauwert Farbe 4: 40
	Rotwert Farbe 5: 254
	Gruenwert Farbe 5: 88
	Blauwert Farbe 5: 240
	Rotwert Farbe 6: 124
	Gruenwert Farbe 6: 63
	Blauwert Farbe 6: 190
	Rotwert Farbe 7: 0
	Gruenwert Farbe 7: 102
	Blauwert Farbe 7: 255
	Rotwert Farbe 8: 0
	Gruenwert Farbe 8: 204
	Blauwert Farbe 8: 255
	Rotwert Farbe 9: 0
	Gruenwert Farbe 9: 204
	Blauwert Farbe 9: 0
	Rotwert Farbe 10: 136
	Gruenwert Farbe 10: 255
	Blauwert Farbe 10: 57
	→ Применить
	
??? note "Расширенные цвета"
    Блок 09 → Адаптация
    > Ambientelicht Farbliste / Эстетическая подсветка, перечень цветов  
    Rotwert Farbe 1: 128  
    Gruenwert Farbe 1: 0  
    Blauwert Farbe 1: 0  
    Rotwert Farbe 2: 121  
    Gruenwert Farbe 2: 61  
    Blauwert Farbe 2: 0  
    Rotwert Farbe 3: 255  
    Gruenwert Farbe 3: 64  
    Blauwert Farbe 3: 0  
    Rotwert Farbe 4: 255  
    Gruenwert Farbe 4: 128  
    Blauwert Farbe 4: 0  
    Rotwert Farbe 5: 255  
    Gruenwert Farbe 5: 191  
    Blauwert Farbe 5: 0  
    Rotwert Farbe 6: 255  
    Gruenwert Farbe 6: 255  
    Blauwert Farbe 6: 0  
    Rotwert Farbe 7: 218  
    Gruenwert Farbe 7: 165  
    Blauwert Farbe 7: 32  
    Rotwert Farbe 8: 166  
    Gruenwert Farbe 8: 241  
    Blauwert Farbe 8: 10  
    Rotwert Farbe 9: 191  
    Gruenwert Farbe 9: 255  
    Blauwert Farbe 9: 0  
    Rotwert Farbe 10: 128  
    Gruenwert Farbe 10: 255  
    Blauwert Farbe 10: 0  
    > Ambience_lightning_color_list_2  
    Rotwert Farbe 11: 64  
    Gruenwert Farbe 11: 255  
    Blauwert Farbe 11: 0  
    Rotwert Farbe 12: 0  
    Gruenwert Farbe 12: 255  
    Blauwert Farbe 12: 0  
    Rotwert Farbe 13: 0  
    Gruenwert Farbe 13: 255  
    Blauwert Farbe 13: 64  
    Rotwert Farbe 14: 0  
    Gruenwert Farbe 14: 255  
    Blauwert Farbe 14: 128  
    Rotwert Farbe 15: 0  
    Gruenwert Farbe 15: 255  
    Blauwert Farbe 15: 191  
    Rotwert Farbe 16: 0  
    Gruenwert Farbe 16: 255  
    Blauwert Farbe 16: 255  
    Rotwert Farbe 17: 0  
    Gruenwert Farbe 17: 191  
    Blauwert Farbe 17: 255  
    Rotwert Farbe 18: 0  
    Gruenwert Farbe 18: 128  
    Blauwert Farbe 18: 255  
    Rotwert Farbe 19: 0  
    Gruenwert Farbe 19: 64  
    Blauwert Farbe 19: 255  
    Rotwert Farbe 20: 0  
    Gruenwert Farbe 20: 0  
    Blauwert Farbe 20: 255  
    Rotwert Farbe 21: 64  
    Gruenwert Farbe 21: 0  
    Blauwert Farbe 21: 255  
    Rotwert Farbe 22: 128  
    Gruenwert Farbe 22: 0  
    Blauwert Farbe 22: 255  
    Rotwert Farbe 23: 191  
    Gruenwert Farbe 23: 0  
    Blauwert Farbe 23: 255  
    Rotwert Farbe 24: 255  
    Gruenwert Farbe 24: 0   
    Blauwert Farbe 24: 255  
    Rotwert Farbe 25: 255  
    Gruenwert Farbe 25: 0  
    Blauwert Farbe 25: 191  
    Rotwert Farbe 26: 255  
    Gruenwert Farbe 26: 0  
    Blauwert Farbe 26: 128  
    Rotwert Farbe 27: 255  
    Gruenwert Farbe 27: 0  
    Blauwert Farbe 27: 64  
    Rotwert Farbe 28: 255  
    Gruenwert Farbe 28: 0  
    Blauwert Farbe 28: 0  
    Rotwert Farbe 29: 255  
    Gruenwert Farbe 29: 255  
    Blauwert Farbe 29: 255  
    Rotwert Farbe 30: 159  
    Gruenwert Farbe 30: 159  
    Blauwert Farbe 30: 159  

> логин-пароль 31347

### Деактивация звукового оповещения о включенном зажигании при открытии двери

	Блок 17 → Адаптация
	> Ignition active message; trigger (Сообщение Поджиг активен, пиропатрон)
	выбираем «No display (tbd)»
	→ Применить

> логин-пароль 20103

!!! tip
    Есть 3 значения: No display (tbd), Driver door, All doors.

### Раскладывание зеркал при включении двигателя

!!! tip ""
    Зеркала будут раскладываться только при включении зажигания, а не при каждом открытии автомобиля. Меньший износ механизмов

```
Блок 9 → Адаптация
> Spiegelverstellung - Signalisierung_Spiegelanklappung
> Не активир.
→ Применить
```

> логин-пароль 31347

??? note "Кодирование в OBD11"
    09 Блок управления бортовой сети → Безопасный доступ (Логин: 31347) → Адаптация  
    > Spiegelverstellung - Signalisierung_Spiegelanklappung:  
    Старое значение: активир.  
    Новое значение: не активир.  

### Cкладывание боковых зеркал удержанием кнопки закрытия дверей или кнопкой закрытия оригинального брелка

	Блок 9 → Адаптация
    > Spiegelverstellung - Funk Spiegelanklappung Modus
	Старое значение: by look command via remote control key
    Новое значение: by convenience operation via remote control key
	→ Применить

> логин-пароль 31347

### Работа стеклоподъёмников при выключенном зажигании и продолжительности их работы

!!! tip ""
    При выключенном зажигании стеклоподъемники продолжают работать, но если открыли / закрыли дверь - стеклоподъемники выключаются
    
```
Блок 09 → Адаптация
> Acces control (ZV Komfort)
> Freigabenachlauf FH bei Tueroeffnen abbrechen
→ меняем Activ на NotActiv
> FH SAD Kl15Aus Freigabezeit
Старое значение: 600 s (10 минут после выключения зажигания)
Новое значение: ставите нужное значение в секундах
→ Применить
```

> логин-пароль 31347

??? note "Кодирование в OBD11"
    09 Блок управления бортовой сети → Безопасный доступ (Логин: 31347) → Адаптация   
    > ZV Komfort - Freigabenachlauf FH bei Tueroeffnen abbrechen  
    Старое значение: активир.  
    Новое значение: не активир.  

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
    
### Комфортная посадка

!!! tip ""
    При посадке сидение водителя переводится в нижнее положение
    
```Блок 36 - Блок Регулировка сиденья водителя → Кодирование
    > Easy_Entry_front
    Старое значение: не акт.
    Новое значение: акт.
```

### Открытие и закрытие люка при удерживании кнопок на брелке

	Блок 9 → Адаптация
    > Schiebedach
	>> SAD Komfort schliessen: «не акт» на «акт»
    >> SAD Komfort oeffnen: «не акт» на «акт»
    → Применить
    
Открывание люка целиком

    > Komfortfunktionen
    >> Заданное положение при комфортном открывании
    Старое значение: Положение — подъём
    Новое значение: Положение сдвиг
    → Применить
