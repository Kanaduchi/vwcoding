# Комфорт

### Тест стрелок

	Блок 17 → кодир-длин.кодир →
	> 01 Байт → бит 0
	
	→ Применить

> логин-пароль 20103

!!! Важно
    Для сохранения настроек необходимо выключить зажигание, открыть дверь, закрыть дверь, включить зажигание

### Деактивация звукового оповещения о включенном зажигании при открытии двери

	Блок 17 → адаптация →
	> Ignition active message; trigger
	выбираем «No display (tbd)»
	
	→ Применить

> логин-пароль 20103

!!! Важно
    Есть 3 значения: No display (tbd), Driver door, All doors.

### Звуковое сопровождение при открытии/закрытии центрального замка

	Блок 9 → Адаптация
    > канал: Ответные сигналы - Akustische Rueckmeldung entriegeln (открытие авто)
    Старое значение: не акт.
    Новое значение: акт.
    
    > канал: Ответные сигналы - Akustische Rueckmeldung verriegeln (закрытие авто)
    Старое значение: не акт.
    Новое значение: акт.
    
    > канал: Ответные сигналы - Menuesteuerung akustische Rueckmeldung
    Старое значение: не акт.
    Новое значение: акт.
    
    > канал: Ответные сигналы - Akustische Rueckmeldung global
    Старое значение: не акт.
    Новое значение: акт.
    
    > канал: Ответные сигналы - Akustische Rueckmeldung Signalhorn
    Старое значение: не акт.
    Новое значение: акт.

	→ Применить

> логин-пароль 31347

### Закрытие багажника по однократному нажатию кнопки пульта/в салоне

    Блок 9 → Адаптация    
    > (3)-Activation using rear lid opening button in remote key - Touch function for closing
    Set — not active
    > (4)-Activation using rear lid opening button in remote key - Tap function for closing
    Set — active
    > (3)-Activation using rear lid remote unlocking switch - Touch function for closing
    Set — not active
    > (4)-Activation using rear lid remote unlocking switch - Tap function for closing
    Set — active
    
    → Применить

> логин-пароль 31347

### Остаток в баках

	Блок 17 → адаптация →  
	> Volume to be replenished. 
	Поменять с "No display" на "Display"
	
	→ Применить

> логин-пароль 20103

### Смена скина приборной панели

	Блок 17 → адаптация →  
	> Tube_version → Variante 2
	Новое значение: variant_4
	
	→ Применить

> логин-пароль 20103

### Деактивация AM диапазона в магнитоле

	Блок 5F → Кодирование → Длинное кодирование
	> byte_14_AM_disable -> активировано
	(14 Байт → бит 01 → включить (было «00» стало «02»))
	
	→ Применить

> логин-пароль 20103

### Цветовые профили

	Блок 09 → Адаптация
	Освещение салона 2-го поколения
	Mittelkonsolenbeleuchtung mehrfarbig:
	Старое значение: не акт.
	Новое значение: акт.
	Освещение салона, конфигурация фонарей
	Ambient_Farbliste_HMI:
	Старое значение: не акт.
	Новое значение: акт.
	Ambientelicht Farbliste
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

> логин-пароль 31347

### Раскладывание зеркал при включении двигателя

	Блок 9 → Адаптация →
    > Spiegelverstellung
    > Signalisierung_Spiegelanklappung
	> Не активир.
	
	→ Применить

> логин-пароль 31347

### Cкладывание боковых зеркал удержанием кнопки закрытия дверей или кнопкой закрытия оригинального брелка

	Блок 9 → Адаптация
    > Spiegelverstellung 
    > Funk Spiegelanklappung Modus
	Старое значение: by look command via remote control key
    Новое значение: by convenience operation via remote control key
    
	→ Применить

> логин-пароль 31347

### Изменение картинки меню ГУ с перелистывания на плитку

    Блок 5F → Электронная информационная система → Длинное кодирование
    > byte_17_Skinning
    Старое значение: Skin_1
    Новое значение: Skin_5

!!! Важно
    После активации надо перезагрузить ГУ долгим удержанием кнопки включения

### Настройка продолжительности работы стеклоподъемников после выключения зажигания

При выключенном зажигании стеклоподъемники продолжают работать, но если открыли / закрыли дверь - стеклоподъемники выключаются.

    Блок 9 → Адаптация
    > ZV Komfort-FH SAD Kl15Aus Freigabezeit
    (вариант: Access control 2-FH SAD Kl15Aus Freigabezeit)
    Старое значение: 600 s (10 минут после выключения зажигания)
    Новое значение: ставите нужное значение в секундах

    → Применить