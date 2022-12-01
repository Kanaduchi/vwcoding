# ДВЕРИ, СТЕКЛА, ЦЗ, БРЕЛОК ДУ И ШТАТНАЯ СИГНАЛИЗАЦИЯ

### Отключение предупреждения о не пристёгнутом ремне безопасности
``` yaml
Блок 17 (5JA 920 7XX) → Длинное кодирование:
Байт 00 – Бит 2-4: заменить на значение 00
→ Применить
```

### Выключение (звука/сообщения) о включенном зажигании при открытии двери
``` yaml
Блок 17 (5JA 920 7XX) → Адаптация:
Ignition active message - actuator — было “Driver door“, ставим “No display“
→ Применить
```

### Включение (звука/сообщения) о включенном зажигании при открытии любой двери
``` yaml
Блок 17 (5JA 920 7XX) → Адаптация:
Ignition active message - actuator — было “Driver door“, ставим “All Doors“
→ Применить
```

### Автоматическая блокировка/разблокировка дверей для комплектаций Entry/Activ без Swing/Bolero:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control - automatisches Verriegeln bei Geschwindigkeit: Активировать
Access control - automatisches Entriegeln: Активировать
Access control - Autolock Autounlock wirkt auf Heck —→ active 
→ Применить
```
Для 19 м.г.:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
ZV Autolock - Autolock_Autounlock_wirkt_auf_Heck: акт.
ZV Autolock - automatisches_Entriegeln: акт.
ZV Autolock - Automatisches_Verriegeln_bei_Geschwindigkeit: акт.
→ Применить
```

### Автоматическое закрытие дверей при наборе скорости 15 км/ч и открытие их по извлечению ключа.

!!! tip "Возможные варианты"
    Clobal Entriegelung - все двери разом  
    Einzeltuerentriegelung – водительская дверь открывается отдельно  
    Seitenselektive Oeffnung – все двери на одной стороне  
    Individuell selective Oeffnung Kessy – отдельное открытие при использовании системы безключевого доступа  
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control - automatisches Verriegeln bei Geschwindigkeit: Активировать
Access control - automatisches Entriegeln: Активировать
Access control - ZV Türentriegelung → было Clobal Entriegelung
→ Применить
```

### Работа радиоканала брелока при запущенном двигателе
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control - Funk bei Klemme 15 ein: Активировать
→ Применить
```
Для 19 м.г.
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
ZV allgemein - Funk bei Klemme 15 ein: Активировать
→ Применить
```

### Работа сигнала при выключенном зажигании
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Auxiliary functions - Signalhorn ohne KL15: Активировать
→ Применить
```

### Активация штатной сигнализации
``` yaml title="логин-пароль: 31347"
Блок 09 → Длинное кодирование:
Байт 12 – Бит 0: Активировать
→ Применить
```
Будет срабатывать при открытии двери ключом после закрытия машины со штатного брелка:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control - Akustischer Alarm Signalhorn: Активировать
→ Применить
```
Срабатывание при проворачивании цилиндра замка двери ключом:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control - DWA Alarmverzoegerung → меняем с "immidiat_driver_door_contact_thatcham" на "delay_driver_door_lock_cylinder_skoda"
→ Применить
```

!!! note ""
    Для применения требуется перечитать настройки блока из памяти (поставить/снять машину на штатную охрану на 5-10 сек)

### Включение звукового подтверждения открытия и закрытия штатным пультом (без штатной сигнализации)
\+ пункт управления функцией в меню Swing2
``` yaml
Блок 09 → Длинное кодирование: 
Байт 5 – Бит 0: Активировать
Байт 5 – Бит 2: Активировать
Байт 5 – Бит 4: Активировать
→ Применить
```
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Acknowledgement signals — Akustische Rueckmeldung entriegeln:  "Active" (звук при открытии)
Acknowledgement signals — Akustische Rueckmeldung verriegeln:  "Active" (звук при закрытии)
Acknowledgement signals — Dauer der Akustischen Rueckmeldung vom Einfachhorn:  kurz (kurz — короткий сигнал (по ощущениям только начинается сигнал и тут же обрывается); normal — нормальный, чуть длиннее чем короткий (звук как при обычном начатии на "бибикалку"))
Acknowledgement signals - Optical feedback during locking → Decelerate
Acknowledgement signals - Optische Rueckmeldung Komfortschliessen: Активировать
Acknowledgement signals - Optische Rueckmeldung 3.Bremsleuchte → not active
Acknowledgement signals — Menuesteuerung akustische Rueckmeldung:  "Active" (пункт в Swing'е в разделе "отпирание/запирание…")
Acknowledgement signals - Akustische Rueckmeldung global: Активировать
Acknowledgement signals — Akustische Rueckmeldung Signalhorn:  "Active" (звук)
→ Применить
```

### Сигнализация вскрытия авто через штатный звуковой сигнал (19 м.г.)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Anti-theft device - Akustischer_Alarm_Signalhorn: акт.
Anti-theft device - anti_theft_alarm_system: акт.
Anti-theft device - Alarmsignal: frequency modulated
Anti-theft device - Sirenen_Alarmzahl: 10 Alarme
→ Применить
```

### Работа стеклоподъемников при выключенном зажигании
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control 2 - Freigabenachlauf FH bei Kl 15 aus → not active меняем на active
→ Применить
```
Для 19 м.г.:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
ZV Komfort (Fensterheber) - Freigabenachlauf FH bei Kl 15 aus: акт.
→ Применить
```

### Настройка продолжительности работы стеклоподъемника водительской двери после выключения зажигания
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control 2-FH SAD Kl15Aus Freigabezeit: 600 s (10 мин после выключения зажигания)
→ Применить
```
Для 19 м.г.:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
ZV Komfort (Fensterheber)-FH SAD Kl15Aus Freigabezeit → 600 s
→ Применить
```

### Работа стеклоподъемников при открытой двери
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control 2-Freigabenachlauf FH bei Tueroeffnen → not active, ставим active
→ Применить
```
Для 19 м.г.:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
ZV Komfort (Fensterheber)-Freigabenachlauf FH bei Tueroeffnen: Активировать
→ Применить
```

### Комфортное управление стеклоподъемником двери водителя с штатного брелока
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control 2 - Comfort closing: Активировать
Access control 2 - Comfort opening: Активировать
Access control 2 - Fahrertuerbedienung Fensterheber oeffnen: Активировать
Access control 2 - Fahrertuerbedienung Fensterheber schliessen: Активировать
Access control 2 - Funk Komfort oeffnen: Активировать
Access control 2 - Funk Komfort schliessen: Активировать
Access control 2 - Komfortbedienung global: Активировать
Access control 2 - Menuesteuerung Komfortbedienung einstellbar → adjustable
→ Применить
```
Далее требуется включить соответствующую опцию в появившемся меню магнитолы.

У кого простая магнитола blues достаточно активировать:
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
Access control 2 - Comfort closing: Активировать
Access control 2 - Comfort opening: Активировать
Access control 2 - Funk Komfort oeffnen: Активировать
Access control 2 - Funk Komfort schliessen: Активировать
Access control 2 - Komfortbedienung global: Активировать
→ Применить
```

### Автозакрытие стекла двери водителя при закрывании авто (19 м.г.)
``` yaml title="логин-пароль: 31347"
Блок 09 → Адаптация:
ZV Komfort (Fensterheber) - комфортное закрывание: акт.
ZV Komfort (Fensterheber) - комфортное открывание: не акт.
ZV Komfort (Fensterheber) - BAP_Komfortschliessen: акт.
ZV Komfort (Fensterheber) - Fahrertuerbedienung Fensterheber oeffnen: акт.
ZV Komfort (Fensterheber) - Fahrertuerbedienung Fensterheber schliessen: акт.
ZV Komfort (Fensterheber) - Funk Komfort oeffnen: акт.
ZV Komfort (Fensterheber) - Funk Komfort schliessen: акт.
ZV Komfort (Fensterheber) - Komfortbedienung global: акт.
ZV Komfort (Fensterheber) - Menuesteuerung Komfortbedienung einstellbar: adjustable
ZV Komfort (Fensterheber) - Schliesszylinder_Komfort_oeffnen: акт.
ZV Komfort (Fensterheber) - Schliesszylinder_Komfort_schliessen: акт.
→ Применить
```