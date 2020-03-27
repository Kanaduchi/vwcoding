disqus: https-mqb-readthedocs-io
# Кодирование новых возможностей освещения салона  <br> (в разработке)

!!!note ""
    За помощь в создании данной инструкции выражаю благодарность [Вячеславу](https://www.drive2.ru/users/slavian116)   

!!!tip ""    
    Если вы заметили неточность, просьба сообщить о ней в комментариях внизу страницы или написать [Вячеславу](https://www.drive2.ru/users/slavian116) через личные сообщения на Drive2

## Установка дополнительных ламп освещения салона

!!! note ""
    Для установки дополнительных ламп освещения салона необходимо выполнить несколько действий:  
    - прописать "солнышко"  
    - активировать фонарь  
    - выставить яркость  
    - подвесить лампу на свободный канал, и прописать сам канал  

### Прорисовка "солнышек" в меню Эстетической подсветки

За активацию дополнительных зон в меню Эстетической подстветки в 9 блоке отвечают 3 параметра адаптации:

```
> Освещение салона, параметры / Interior_light_parameter
>> p_ambientelicht_verbauinformation_HMI
>>> Bit 0 - Освещение ног (визуализация фонарей освещения ног) 
>>> Bit 1 - Освещение ног  (без визуализации)
>>> Bit 2 - Освещение пер.панели (визуализация полоски)
>>> Bit 3 - Пусто
>>> Bit 4 - Центральная консоль (без визуализации)
>>> Bit 5 - Освещение пер.панели (без визуализации)
>>> Bit 6 - Освещение пер.панели (без визуализации)
>>> Bit 7 - Освещение пер.панели (без визуализации)

>> p_ambientelicht_verbauinformation_HMI2
>>> Bit 0 - Центральная консоль (без визуализации)
>>> Bit 1 - Центральная консоль (без визуализации)
>>> Bit 2 - Освещение двери (визуализация фонарей подсветки ручек)
>>> Bit 3 - Освещение двери (без визуализации)
>>> Bit 4 - Освещение двери (визуализация полосок)
>>> Bit 5 - Освещение двери (без визуализации)
>>> Bit 6 - Освещение двери (без визуализации)
>>> Bit 7 - Освещение двери (без визуализации)

>> p_ambientelicht_verbauinformation_HMI3
>>> Bit 0 - Освещение двери (без визуализации)
>>> Bit 1 - Освещение потолка (без визуализации)
>>> Bit 2 - Освещение потолка (визуализация освещения фонаря)
>>> Bit 3 - Освещение потолка (без визуализации)
>>> Bit 4 - Пусто
>>> Bit 5 - Пусто
>>> Bit 6 - Пусто
>>> Bit 7 - Пусто
```

Пример кодирования - активация "солнышка" подсветки потолка
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_ambientelicht_verbauinformation_HMI3 → 100
→ Применить
```

### Активация фонаря

Если какое то "солнышко" после включения не появилось, то необходимо активировать сам фонарь.  
Например, активация фонаря подсветки потолка:
```
> Освещение салона, конфигурация фонарей / Interior_light_lamp_configuration
>> Panoramaschiebedachbeleuchtung → installed
```

??? tip "Список существующих фонарей"
    Ambiente_Applikationsleisten_in_Tuertafel - подсветка дверной панели 
    Ambiente_Lautsprecher - подсветка динамиков  
    Ambiente_Applikationsleisten_in_Instrumententafel - подсветка ниши беспроводной зарядки    
    Cockpitbeleuchtung - подсветка передней консоли  
    Mittelkonsolenbeleuchtung - подсветка ниши беспроводной зарядки  
    Dachbeleuchtung - подсветка крыши  
    Panoramaschiebedachbeleuchtung - подсветка панорамы    
    Fussraumbeleuchtung - подсветка ног  
    
### Установка яркости подсветки

За значения яркости конкретного фонаря в 9 блоке отвечают следующие параметры:
```
> Освещение салона, параметры / Interior_light_parameter
p_adaption_kundenwunsch_
p_helligkeit_entriegelt_
p_helligkeit_max_
p_helligkeit_HD_auf_zuendung_ein_
p_helligkeit_HD_auf_zuendung_aus_
p_helligkeit_dieseTuer_auf_zuendung_ein_
p_helligkeit_andereTuer_auf_zuendung_ein_
p_helligkeit_Fzg_geschlossen_zuendung_ein_
p_helligkeit_dieseTuer_auf_zuendung_aus_
p_helligkeit_andereTuer_auf_zuendung_aus_
p_helligkeit_einausstieg_
p_helligkeit_Fzg_geschlossen_zuendung_aus_
p_helligkeit_Tueren_geschlossen_HD_auf_zuendung_aus_
p_helligkeit_Tueren_geschlossen_HD_zu_zuendung_aus_
p_helligkeit_Tueren_geschlossen_schluessel_ab_
p_helligkeit_Fzg_geschlossen_schluessel_ab_
```
Все значения можно к примеру взять из уже имеющегося канала, например, подсветка ног: tueren

Яркость плафонов по умолчанию
```
> Освещение салона 2 го поколения / Interior_light_2nd_generation
>> Defaultwert Ambienteprofil Mittelkonsole → 80
>> Defaultwert Ambienteprofil Dach → 80
>> Defaultwert Ambienteprofil Farbe → 80
>> Defaultwert Ambienteprofil Fussraum → 80
>> Defaultwert Ambienteprofil Tuer → 80
```

Регулировка яркости
```
> Освещение салона 2-го поколения / Interior_light_2nd_generation
>> Helligkeit Mittelkonsolenbeleuchtung nicht berechnen → акт (выключаем запрет на регулировку)
```

??? tip "Список обозначения зон регулировки яркости"  
    innenlicht - внутренне освещение салона  
    fussraum - ноги  
    tueren - дверь  
    cockpit - передняя панель (ниша беспроводной зарядки)
    miko - центральная консоль  
    dach - крышка  

### Установка фонаря на свободный канал

В зависимости от комплектации ищем свободный канал в кодировках, например, Leuchte31AMBL 1C61
```
Lasttyp 31 — LED Kleinleistung
Lichtfunktion A 31 - Ambientelicht 1
Dimmwert AB 31 — 99
```

### Общие кодировки

Данная адаптация выполняется для фонаря, который был установлен

```
Освещение салона 2-го поколения / Interior_light_2nd_generation

Helligkeit Mittelkonsolenbeleuchtung nicht berechnen — не акт. (выключаем запрет на регулировку)
Farbausgabe Mittelkonsolenbeleuchtung nicht berechnen — акт. (регулировка яркости)
```

??? tip "Список существующих фонарей"
    Ambiente_Applikationsleisten_in_Tuertafel - подсветка дверной панели 
    Ambiente_Lautsprecher - подсветка динамиков  
    Ambiente_Applikationsleisten_in_Instrumententafel - подсветка ниши беспроводной зарядки    
    Cockpitbeleuchtung - подсветка передней консоли  
    Mittelkonsolenbeleuchtung - подсветка ниши беспроводной зарядки  
    Dachbeleuchtung - подсветка крыши  
    Panoramaschiebedachbeleuchtung - подсветка панорамы    
    Fussraumbeleuchtung - подсветка ног  