# ДВЕРИ, СТЕКЛА, ЦЗ, БРЕЛОК ДУ И ШТАТНАЯ СИГНАЛИЗАЦИЯ

### Отключение предупреждения о не пристёгнутом ремне безопасности
```
Блок 17 (5JA 920 7XX) → Длинное кодирование  
> 00 Байт – биты 2-4 – заменить на значение 00
→ Применить
```

### Выключение (звука/сообщения) о включенном зажигании при открытии двери
```
Блок 17 (5JA 920 7XX) → Адаптация 
> Ignition active message - actuator — было “Driver door“, ставим “No display“
→ Применить
```

### Включение (звука/сообщения) о включенном зажигании при открытии любой двери
```
Блок 17 (5JA 920 7XX) → Адаптация 
> Ignition active message - actuator — было “Driver door“, ставим “All Doors“
→ Применить
```

### Автоматическая блокировка/разблокировка дверей для комплектаций Entry/Activ без Swing/Bolero:
```
Блок 09 → Адаптация 
> Access control - automatisches Verriegeln bei Geschwindigkeit → active
> Access control - automatisches Entriegeln → active
> Access control - Autolock Autounlock wirkt auf Heck —→ active 
→ Применить
```
Для 19 м.г.:
```
Блок 09 → Адаптация 
> ZV Autolock - Autolock_Autounlock_wirkt_auf_Heck → акт.
> ZV Autolock - automatisches_Entriegeln → акт.
> ZV Autolock - Automatisches_Verriegeln_bei_Geschwindigkeit → акт.
→ Применить
```
> логин-пароль 31347

### Автоматическое закрытие дверей при наборе скорости 15 км/ч и открытие их по извлечению ключа.

!!! tip "Возможные варианты"
    Clobal Entriegelung - все двери разом  
    Einzeltuerentriegelung – водительская дверь открывается отдельно  
    Seitenselektive Oeffnung – все двери на одной стороне  
    Individuell selective Oeffnung Kessy – отдельное открытие при использовании системы безключевого доступа  
```
Блок 09 → Адаптация 
> Access control - automatisches Verriegeln bei Geschwindigkeit → active
> Access control - automatisches Entriegeln → active
> Access control - ZV Türentriegelung → было Clobal Entriegelung
→ Применить
```
> логин-пароль 31347

### Работа радиоканала брелока при запущенном двигателе
```
Блок 09 → Адаптация 
> Access control - Funk bei Klemme 15 ein → active
→ Применить
```
Для 19 м.г.
```
Блок 09 → Адаптация
> ZV allgemein - Funk bei Klemme 15 ein → active
→ Применить
```
> логин-пароль 31347

### Работа сигнала при выключенном зажигании
```
Блок 09 → Адаптация 
> Auxiliary functions - Signalhorn ohne KL15 → active
→ Применить
```
> логин-пароль 31347

### Активация штатной сигнализации
```
Блок 09 → Длинное кодирование  
> 12 байт — 0 бит — включить
→ Применить
```
Будет срабатывать при открытии двери ключом после закрытия машины со штатного брелка:
```
Блок 09 → Адаптация 
> Access control - Akustischer Alarm Signalhorn → меняем с "не акт." на "акт."
→ Применить
```
Срабатывание при проворачивании цилиндра замка двери ключом:
```
Блок 09 → Адаптация 
> Access control - DWA Alarmverzoegerung → меняем с "immidiat_driver_door_contact_thatcham" на "delay_driver_door_lock_cylinder_skoda"
→ Применить
```

!!! note ""
    Для применения требуется перечитать настройки блока из памяти (поставить/снять машину на штатную охрану на 5-10 сек)
    
> логин-пароль 31347

### Включение звукового подтверждения открытия и закрытия штатным пультом (без штатной сигнализации)
\+ пункт управления функцией в меню Swing2
```
Блок 09 → Длинное кодирование  
> Байт 5 — бит 0 – включить
> Байт 5 — бит 2 – включить
> Байт 5 — бит 4 – включить
→ Применить
```
```
Блок 09 → Адаптация 
> Acknowledgement signals — Akustische Rueckmeldung entriegeln → значение "Active" (звук при открытии)
> Acknowledgement signals — Akustische Rueckmeldung verriegeln → значение "Active" (звук при закрытии)
> Acknowledgement signals — Dauer der Akustischen Rueckmeldung vom Einfachhorn → значение kurz (kurz — короткий сигнал (по ощущениям только начинается сигнал и тут же обрывается); normal — нормальный, чуть длиннее чем короткий (звук как при обычном начатии на "бибикалку"))
> Acknowledgement signals - Optical feedback during locking → Decelerate
> Acknowledgement signals - Optische Rueckmeldung Komfortschliessen → active
> Acknowledgement signals - Optische Rueckmeldung 3.Bremsleuchte → not active
> Acknowledgement signals — Menuesteuerung akustische Rueckmeldung → значение "Active" (пункт в Swing'е в разделе "отпирание/запирание…")
> Acknowledgement signals - Akustische Rueckmeldung global → active
> Acknowledgement signals — Akustische Rueckmeldung Signalhorn → значение "Active" (звук)
→ Применить
```
> логин-пароль 31347

### Сигнализация вскрытия авто через штатный звуковой сигнал (19 м.г.)
```
Блок 09 → Адаптация 
> Anti-theft device - Akustischer_Alarm_Signalhorn → акт.
> Anti-theft device - anti_theft_alarm_system → акт.
> Anti-theft device - Alarmsignal → frequency modulated
> Anti-theft device - Sirenen_Alarmzahl → 10 Alarme
→ Применить
```
> логин-пароль 31347

### Работа стеклоподъемников при выключенном зажигании
```
Блок 09 → Адаптация 
> Access control 2 - Freigabenachlauf FH bei Kl 15 aus → not active меняем на active
→ Применить
```
Для 19 м.г.:
```
Блок 09 → Адаптация 
> ZV Komfort (Fensterheber) - Freigabenachlauf FH bei Kl 15 aus → акт.
→ Применить
```
> логин-пароль 31347

### Настройка продолжительности работы стеклоподъемника водительской двери после выключения зажигания
```
Блок 09 → Адаптация 
> Access control 2-FH SAD Kl15Aus Freigabezeit → 600 s (10 мин после выключения зажигания)
→ Применить
```
Для 19 м.г.:
```
Блок 09 → Адаптация 
> ZV Komfort (Fensterheber)-FH SAD Kl15Aus Freigabezeit → 600 s
→ Применить
```
> логин-пароль 31347

### Работа стеклоподъемников при открытой двери
```
Блок 09 → Адаптация 
> Access control 2-Freigabenachlauf FH bei Tueroeffnen → not active, ставим active
→ Применить
```
Для 19 м.г.:
```
Блок 09 → Адаптация 
> ZV Komfort (Fensterheber)-Freigabenachlauf FH bei Tueroeffnen → active
→ Применить
```
> логин-пароль 31347

### Комфортное управление стеклоподъемником двери водителя с штатного брелока
```
Блок 09 → Адаптация 
> Access control 2 - Comfort closing → active
> Access control 2 - Comfort opening → active
> Access control 2 - Fahrertuerbedienung Fensterheber oeffnen → active
> Access control 2 - Fahrertuerbedienung Fensterheber schliessen → active
> Access control 2 - Funk Komfort oeffnen → active
> Access control 2 - Funk Komfort schliessen → active
> Access control 2 - Komfortbedienung global → active
> Access control 2 - Menuesteuerung Komfortbedienung einstellbar → adjustable
→ Применить
```
Далее требуется включить соответствующую опцию в появившемся меню магнитолы.

У кого простая магнитола blues достаточно активировать:
```
Блок 09 → Адаптация 
> Access control 2 - Comfort closing → active
> Access control 2 - Comfort opening → active
> Access control 2 - Funk Komfort oeffnen → active
> Access control 2 - Funk Komfort schliessen → active
> Access control 2 - Komfortbedienung global → active
→ Применить
```
> логин-пароль 31347

### Автозакрытие стекла двери водителя при закрывании авто (19 м.г.)
```
Блок 09 → Адаптация 
> ZV Komfort (Fensterheber) - комфортное закрывание → акт.
> ZV Komfort (Fensterheber) - комфортное открывание → не акт.
> ZV Komfort (Fensterheber) - BAP_Komfortschliessen → акт.
> ZV Komfort (Fensterheber) - Fahrertuerbedienung Fensterheber oeffnen → акт.
> ZV Komfort (Fensterheber) - Fahrertuerbedienung Fensterheber schliessen → акт.
> ZV Komfort (Fensterheber) - Funk Komfort oeffnen → акт.
> ZV Komfort (Fensterheber) - Funk Komfort schliessen → акт.
> ZV Komfort (Fensterheber) - Komfortbedienung global → акт.
> ZV Komfort (Fensterheber) - Menuesteuerung Komfortbedienung einstellbar → adjustable
> ZV Komfort (Fensterheber) - Schliesszylinder_Komfort_oeffnen → акт.
> ZV Komfort (Fensterheber) - Schliesszylinder_Komfort_schliessen → акт.
→ Применить
```
> логин-пароль 31347