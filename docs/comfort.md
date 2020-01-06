# Комфорт

### Тест стрелок

	Блок 17 → Кодирование
	> Демонстрация
	выбираем «Вкл»
	→ Применить (с перезагрузкой блока)
	
	ODIS E: 006: 0017 → [LN]_scenering → yes

> логин-пароль 20103

!!! note "Важно"
    Данное кодирование надо выполнять на выключенном двигателе

### Деактивация звукового оповещения о включенном зажигании при открытии двери

	Блок 17 → Адаптация
	> Ignition active message; trigger (Сообщение Поджиг активен, пиропатрон)
	выбираем «No display (tbd)»
	→ Применить

> логин-пароль 20103

!!! note "Важно"
    Есть 3 значения: No display (tbd), Driver door, All doors.
    
### Остаток в баках

	Блок 17 → Кодирование  
	> Объем, который необходимо заправить
	выбираем «Вкл»
	→ Применить (с перезагрузкой блока)

> логин-пароль 20103

    ODIS E: 006: 0017 -> [IDE04848] Объем, который необходимо заправить -> Да

!!! note "Важно"
    Данное кодирование надо выполнять на выключенном двигателе

### Смена скина приборной панели

	Блок 17 → Адаптация  
	> Tube_version
	Заменить Variante 2 на variant_4
	> Отображение на дисплее
	Заменить исполнение_1 на исполнение_3 - включение "золота"
	→ Применить

> логин-пароль 20103

### Изменение картинки меню ГУ с перелистывания на плитку

	Блок 5F → Кодирование
    > [LO]_byte_17_Skinning
    Старое значение: Skin_1
    Новое значение: Skin_5
    → Применить (с перезагрузкой блока)

!!! note "Важно"
    После активации надо перезагрузить ГУ долгим удержанием кнопки включения

### Цветовые профили

	Блок 09 → Адаптация
	> Освещение салона 2-го поколения
	> Mittelkonsolenbeleuchtung mehrfarbig:
	Старое значение: не акт.
	Новое значение: акт.
	→ Применить
	
	> Освещение салона, конфигурация фонарей
	> Ambient_Farbliste_HMI:
	Старое значение: не акт.
	Новое значение: акт.
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

> логин-пароль 31347

### Раскладывание зеркал при включении двигателя

	Блок 9 → Адаптация
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

### Настройка продолжительности работы стеклоподъемников после выключения зажигания

При выключенном зажигании стеклоподъемники продолжают работать, но если открыли / закрыли дверь - стеклоподъемники выключаются.

    Блок 9 → Адаптация
    > ZV Komfort-FH SAD Kl15Aus Freigabezeit
    (вариант: Access control 2-FH SAD Kl15Aus Freigabezeit)
    Старое значение: 600 s (10 минут после выключения зажигания)
    Новое значение: ставите нужное значение в секундах
    → Применить
    
### Воспроизведение видео в движении через MirrorLink

    ODIS E
    Блок 007: 005F
    > [VO]_nhtsa_properties
    > ... no_video_playback
    Включить

    