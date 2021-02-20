disqus: https-mqb-readthedocs-io
# Кодирование новых возможностей освещения салона

!!!note ""
    За помощь в создании данной инструкции выражаю благодарность [Вячеславу](https://www.drive2.ru/users/slavian116)   

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

Для подключения диодов необходимо найти свободные пины на ВСМ. Это зависит от комплектации. 
Затем ищется соответствующий свободный канал, например, владельцы MID LED могут подключить лампу на пин 36,  
а затем задать настроить свободный канал в кодировках Leuchte0BLK VLB36 и прописать в нем диод и функцию.  

Возможные функции: 

|Функция|Описание|
|---|---|
| Ambientelicht 1 | Солнышко над бардочком |
| Ambientelicht 2 | Солнышко над бардочком |
| Ambientelicht 3 | Солнышко двери |
| Ambientelicht 4 | Пусто |
| Ambientelicht 5 | Пусто |

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
Все значения можно к примеру взять из уже имеющегося канала, например, подсветка ног: fussraum

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

## Задержка включения внутреннего освещения

Кодировки в 9 блоке позволяют реализовать возможность последовательного включения света в салоне. 

За это отвечают следующие параметры:
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_t verzoegerung einstieg innenlicht — задержка включения внутреннего освещения при входе, зажигание выключено
>> p_t verzoegerung ausstieg innenlicht — задержка включения внутреннего освещения при выходе, зажигание выключено
>> p_t verzoegerung oeffnen innenlicht — задержка включения внутреннего освещения при открытии двери, зажигание включено
>> p_t verzoegerung entriegelt innenlicht — задержка включения внутреннего освещение при разблокировки центрального замка
>> p_t verzoegerung schliessen innenlicht — задержка выключения внутреннего освещения при закрытии двери, зажигание включено
>> p_t verzoegerung schluessel ab innenlicht — задержка выключения внутреннего освещения при включении зажигания
>> p_t verzoegerung verriegelt innenlicht — задержка выключения внутреннего освещения при блокировки центрального замка
```
Всего по 7 функций на каждый фонарь. Все остальные фонари аналогичны внутреннему освещению (плафону потолка).

Например,  
Включение для ламп двери ставим 0.8с, внутреннего освещения ставим 1.6с.   
Подсветка ног остается так же и загорается первой, потом двери потом потолок.
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_t_verzoegerung_einstieg_fussraum:	    0,0 [UN]_s
>> p_t_verzoegerung_einstieg_tueren:	    0.8 [UN]_s
>> p_t_verzoegerung_einstieg_innenlicht:    1,6 [UN]_s
→ Применить
```

Выключения для дверей ставим так же 0.8с, для ног ставим 1.6с.   
Свет с внутреннего освещения тухнет первым. Потом двери и потом только ноги.
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_t_verzoegerung_ausstieg_fussraum:	    1,6 [UN]_s
>> p_t_verzoegerung_ausstieg_tueren:	    0.8 [UN]_s
>> p_t_verzoegerung_ausstieg_innenlicht:    0,0 [UN]_s
→ Применить
```