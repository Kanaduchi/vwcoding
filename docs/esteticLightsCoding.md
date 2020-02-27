disqus: https-mqb-readthedocs-io
# Кодирование новых возможностей освещения салона  <br> (в разработке)

Если у кого то появилось желание управлять яркостью подсветки внутренних ручек открывания дверей, то нужно активировать следующий канал адаптации в 09 блоке:
[LO]_Tuerinnengriff mit Tuertafel: [VN]_installed

!!!note ""
    За помощь в создании данной инструкции выражаю благодарность [Вячеславу](https://www.drive2.ru/users/slavian116)   
    Если вы заметили неточность, просьба сообщить о ней в комментариях внизу страницы или написать [Вячеславу](https://www.drive2.ru/users/slavian116) через личные сообщения на Drive2

## Общая информация

??? tip "Список обозначения зон регулировки яркости"  
    innenlicht - внутренне освещение салона  
    fussraum - ноги  
    tueren - дверь  
    cockpit - передняя панель (ниша беспроводной зарядки)
    miko - центральная консоль  
    dach - крышка  
    
??? tip "Список существующих фонарей"
    Ambiente_Applikationsleisten_in_Tuertafel - подсветка дверной панели 
    Ambiente_Lautsprecher - подсветка динамиков  
    Ambiente_Applikationsleisten_in_Instrumententafel - подсветка ниши беспроводной зарядки    
    Cockpitbeleuchtung - подсветка передней консоли  
    Mittelkonsolenbeleuchtung - подсветка ниши беспроводной зарядки  
    Dachbeleuchtung - подсветка крыши  
    Panoramaschiebedachbeleuchtung - подсветка панорамы    
    Fussraumbeleuchtung - подсветка ног  

!!! note ""
    Данные кодировки возможны только через OBD11 или ODIS   
      
    Для установки дополнительных ламп освещения салона необходимо выполнить несколько действий:  
    - установить фонарь, подвесить его на свободный фонарь
    - активировать фонарь  
    - выставить яркость  
   
### Установка фонаря на свободный канал

Смотрим схемы и подключаем диоды к свободным пинам на ВСМ.  

В зависимости от комплектации ищем свободный канал в кодировках, например, Leuchte0BLK VLB36 для владельцев MID LED, и прописываем в нем диод и функцию.  

Возможные функции: Ambientelicht 1, Ambientelicht 2, Ambientelicht 3, Ambientelicht 4, Ambientelicht 5 
```
Lasttyp 0 — LED Kleinleistung
Lichtfunktion A 0 - Ambientelicht 1
Dimmwert AB 0 — 99
```   
   
### Активация фонаря

Если какое то "солнышко" после включения не появилось, то необходимо активировать сам фонарь.  
Например, активация фонаря подсветки ног:
```
> Освещение салона, конфигурация фонарей / Interior_light_lamp_configuration
>> Fussraumbeleuchtung → installed
```
   
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
>> Helligkeit Mittelkonsolenbeleuchtung nicht berechnen — не акт. (запрет на регулировку)
>> Farbausgabe Mittelkonsolenbeleuchtung nicht berechnen — акт. (регулировка яркости)
```

## Задержка включения внутренного освещения

Кодировки в 9 блоке позволяют реализовать возможность последовательного включения света в салоне.  

За это отвечают следующие параметры:
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_t_verzoegerung_einstieg_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_ausstieg_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_oeffnen_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_entriegelt_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_schliessen_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_schluessel_ab_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_verriegelt_innenlicht:	0,0 [UN]_s
>> p_t_verzoegerung_einstieg_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_ausstieg_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_oeffnen_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_entriegelt_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_schliessen_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_schluessel_ab_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_verriegelt_tueren:	0,0 [UN]_s
>> p_t_verzoegerung_einstieg_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_ausstieg_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_oeffnen_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_entriegelt_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_schliessen_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_schluessel_ab_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_verriegelt_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_einstieg_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_ausstieg_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_oeffnen_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_entriegelt_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_schliessen_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_schluessel_ab_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_verriegelt_cockpit:	0,0 [UN]_s
>> p_t_verzoegerung_einstieg_miko:	0,0 [UN]_s
>> p_t_verzoegerung_ausstieg_miko:	0,0 [UN]_s
>> p_t_verzoegerung_oeffnen_miko:	0,0 [UN]_s
>> p_t_verzoegerung_entriegelt_miko:	0,0 [UN]_s
>> p_t_verzoegerung_schliessen_miko:	0,0 [UN]_s
>> p_t_verzoegerung_schluessel_ab_miko:	0,0 [UN]_s
>> p_t_verzoegerung_verriegelt_miko:	0,0 [UN]_s
>> p_t_verzoegerung_einstieg_dach:	0,0 [UN]_s
>> p_t_verzoegerung_ausstieg_dach:	0,0 [UN]_s
>> p_t_verzoegerung_oeffnen_dach:	0,0 [UN]_s
>> p_t_verzoegerung_entriegelt_dach:	0,0 [UN]_s
>> p_t_verzoegerung_schliessen_dach:	0,0 [UN]_s
>> p_t_verzoegerung_schluessel_ab_dach:	0,0 [UN]_s
>> p_t_verzoegerung_verriegelt_dach:	0,0 [UN]_s
```

Например, при открытии двери сначала включается подсветка ног, а только потом потолок.
```Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_t_verzoegerung_einstieg_fussraum:	0,0 [UN]_s
>> p_t_verzoegerung_einstieg_tueren:	2,2 [UN]_s
>> p_t_verzoegerung_einstieg_dach:	    0,4 [UN]_s
→ Применить
```