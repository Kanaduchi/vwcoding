disqus: https-mqb-readthedocs-io
# Активация ACC и pACC (SWaP)

!!! warning ""
    Все действия вы делаете на свой страх и риск! Мы не несем ответственность за испорченное оборудование.
  
Архив с генератором SWaP, прошивками и параметриями можно скачать [тут](../firmwares/accGenerator.zip)  

pACC (Predictive ACC) — это адаптивный круиз-контроль, который может автоматически устанавливать скорость движения с помощью картографических данных (прогнозируемых данных, PSD) и распознаваемых дорожных знаков.  

??? tip "Функциональные FEC коды для 2Q0/3QF/5Q0/5QF радаров"
    10009001	MRR-Paket 1: ACClow (Basis-ACC) + FrontAssist inkl. CityANB  
    10009002	MRR-Paket 2: ACClow (ACC FTS) + FrontAssist inkl. CityANB   
    10009003	MRR-Paket 3: ACClow (ACC S&G) + FrontAssist inkl. CityANB   
    10009004	MRR-Paket 4: FrontAssist inkl. CityANB (без ACC)   
    10009005	MRR-Paket 5: CityANB (без ACC)   
    10009006	MRR-Paket 6: ACChigh (Basis-ACC) + FrontAssist inkl. CityANB   
    10009007	MRR-Paket 7: ACChigh (ACC FTS) + FrontAssist inkl. CityANB    
    10009008	MRR-Paket 8: ACChigh (ACC S&G) + FrontAssist inkl. CityANB   
    10009101	ACC-Funktionserweiterungs-Paket "predictiveACC"   
    10009102	ACC-Funktionserweiterungs-Paket "StauAssistent" (Ассистент пробок)  
    10009103	ACC-Funktionserweiterungs-Paket "predictiveACC & StauAssistent"   
    10009201	AWV-Auspraegung "AWV1,2 - Warnung nur visuell & auditiv" (предупреждение только визуальное и слуховое)    
    10009202	AWV-Auspraegung "AWV1,2"   
    10009203	AWV-Auspraegung "AWV1,2,3"   
    10009204	AWV-Auspraegung "AWV1,2,3, vFGS   
    10009205	AWV-Auspraegung "AWV1,2,3, vFGS, vRFS“  
    10009300	AWV-Funktionserweiterungs-Paket "Elektronische Parkbremse"  
    10009301	AWV-Funktionserweiterungs-Paket "EmergencyAssist"   
    10009302	AWV-Funktionserweiterungs-Paket "Abbiegeassistent"   
    10009303	AWV-Funktionserweiterungs-Paket "AWV-Gegenverkehr"   
    10009304	AWV-Funktionserweiterungs-Paket "Abbiegeassistent & AWV-Gegenverkehr"   
    10009305	AWV-Funktionserweiterungs-Paket "EmergencyAssist & AWV-Gegenverkehr"   
    10009306	AWV-Funktionserweiterungs-Paket "EmergencyAssist & Abbiegeassistent"   
    10009307	AWV-Funktionserweiterungs-Paket "EmergencyAssist & Abbiegeassistent & AWV-Gegenverkehr"   
    10009500	Verkehrszeichenerkennung (VZE)  
    10009600	Vorrausschauender Fussgaengerschutz (VFS) - FCWP    
  
    FGS = Fußgängerschutz (Pedestrian Protection)  
    RFS = Radfahrer-Schutz (Bicycle Protection)  

??? tip "Функциональные FEC коды для 3Q0 радаров"
    10003100	MRR-Paket 1: ACClow (Basis-ACC) + FrontAssist inkl. CityANB  
    10003200	MRR-Paket 2: ACClow (ACC FTS) + FrontAssist inkl. CityANB  
    10003300	MRR-Paket 3: ACClow (ACC S&G) + FrontAssist inkl. CityANB  
    10003400	MRR-Paket 4: FrontAssist inkl. CityANB (ohne ACC)  
    10003500	MRR-Paket 5: CityANB (ohne ACC)  
    10003600	MRR-Paket 6: ACChigh (Basis-ACC) + FrontAssist inkl. CityANB  
    10003700	MRR-Paket 7: ACChigh (ACC FTS) + FrontAssist inkl. CityANB  
    10003800	MRR-Paket 8: ACChigh (ACC S&G) + FrontAssist inkl. CityANB  
    10003900	MRR-Paket 9: ACChigh konservativ (Basis-ACC) + FrontAssist inkl. CityANB  
    10003A00	MRR-Paket 10: ACChigh konservativ (ACC FTS) + FrontAssist inkl. CityANB  
    10003B00	MRR-Paket 11: ACChigh konservativ (ACC S&G) + FrontAssist inkl. CityANB  
    10004000	zFAS AreaView3  
    10004100	zFAS Bildverarbeitung AV3/IPA  
    10004200	zFAS Anhaenger-Rangier-Assistent  
    10004300	zFAS Aktionsgenerierung Warnen  
    10004600	zFAS AWC Ladeplattenerkennung  
    10005000	Personalisierung  
    10006100	ACC-Funktionserweiterungs-Paket "predictiveACC"  
    10006200	ACC-Funktionserweiterungs-Paket "StauAssistent"  
    10006300	ACC-Funktionserweiterungs-Paket "predictiveACC&StauAssistent"  
    10007100	AWV-Auspraegung "AWV1,2 – Warnung nur visuell&auditiv"  
    10007200	AWV-Auspraegung "AWV1,2"  
    10007300	AWV-Auspraegung "AWV1,2,3"  
    10007400	AWV-Auspraegung "AWV1,2,3, vFGS  
    10008100	AWV-Funktionserweiterungs-Paket "EmergencyAssist"  
    10008200	AWV-Funktionserweiterungs-Paket "Abbiegeassistent"  
    10008300	AWV-Funktionserweiterungs-Paket "AWV-Gegenverkehr"  
    10008400	AWV-Funktionserweiterungs-Paket "Abbiegeassistent&AWV-Gegenverkehr"  
    10008500	AWV-Funktionserweiterungs-Paket "EmergencyAssist&AWV-Gegenverkehr"  
    10008600	AWV-Funktionserweiterungs-Paket "EmergencyAssist&Abbiegeassistent"  
    10008700	AWV-Funktionserweiterungs-Paket "EmergencyAssist&Abbiegeassistent&AWV-Gegenverkehr"  

### Структура параметрии

![Screenshot](../images/MQB/swap_info.jpeg)  

### Соответствие радаров и прошивок  

| ID оборудования | Прошивка X          | Прошивка            | Параметрия<br/>(ODIS XML)  |
| ---------------:|:-------------------:|--------------------:|:--------------------------:|
| 2Q0907572       | FL_2Q0907572T_X383  | FL_2Q0907572T_0383  | ARBEITS_DATEI_DSDL2.xml* |
| 3QF_5QF907572   | FL_5Q0907572M_X720  | FL_5Q0907572S_0780  | 13_5Q0907572R_EU_RDW.xml                      |
| 3Q0907572       | FL_3Q0907572A_X180  | FL_3Q0907572C_0196  | DA_013_7200_3H0_V002_VW483A2RDW.xml           |
| 5Q0907572       | FL_5Q0907572E_X312  | FL_5Q0907572K_0402  | 13_5Q0907572K.xml                             |

Для активации адаптивного круиз контроля необходимо сначала узнать текущую версию радара, который установлен:  
```
Обозначение системы: ACCCONTIMQB  
Версия ПО: 0372  
Версия АО: H01  
Номер детали VW/Audi: 2Q0907572R  
Номер детали АО: 2Q0907572B  
```

### Прошивка и генерация SWaP кода

!!! warning ""
    Для прошивки необходим ODIS Engineering 12 версии. Более ранние версии могут выдавать ошибку при прошивке - "Не распознаны варианты"  

!!! note "Особенности 2Q0 радаров"
    Перед установкой X прошивки сначала необходимо установить прошивку FL_2Q0907572H_0380_BOOTLOADER.  
    Параметрии для корректной работы pACC в России в свободном доступе в настоящий момент нет.

1. Принудительно на радаре активировать защиту компонентов через ODIS Online  
   
2. Установка X прошивки в соответствии с таблицей выше. Например, FL_2Q0907572T_X383___S.odx
```    
Прошивка Х должна поменять открытый ключ в радаре (в измеряемых величинах):  
для 2Q0.. - A6 2C 69 ...  
для 5Q0/3QF.. - 9C 47 73...  
для 3Q0.. - D2 C3 3E...  
для 5Q0.. - "8F 51 4A...  
```

3. Снять защиту компонентов через ODIS Online  

4. Для генерирования SWaP кодов понадобится VCRN (Vehicle Component Registration Number). Данный код можно вытянуть из измеряемых величин 13 блока:  
```
003 — Измеряемые величины → индивидуализирующий признак (VCRN) 
``` 
   
5. Выбор нужных FEC кодов  
Максимально - 4 штуки. Они зависят от того, зависит от того какие свапы поддерживает сам радар.  
```
003 — Измеряемые величины → Список всех функций SWaP
```
![Screenshot](../images/MQB/swap_avail.jpeg)  
Например, радар 3qf907561d поддерживает: 10009000 10009100 10009200 10009300  
```
10009008 — ACC High 210 & stop and go & fts  
10009204 — front assist  
10009101 — pre acc  
10009307
```

6. С помощью утилиты afcg.exe сгенерировать SWaP код. Для генерации кода понадобится ввести: VIN, VCRN (из 3 шага) и набор FEC кодов через пробел     

7. Полученный SWaP код необходимо ввести в адаптации 13 блока (Передача кода разблокировки функции SWaP):  
```
> 009 — Диагностический сеанс → Режим при сходе с конвейера (EOL)  
> 008 — Право доступа → код 20103  
> 007 — Адаптации - Передача кода разблокировки функции SWaP → Ввод сгенерированного кода в поле "Ввод данных"  
> 005 — Базовая установка UDS → Разблокировка функции SWaP  
> 003 — Измеряемые величины → Статус всех функций SWaP
```
   
8. Установка обычной прошивки, не X в соответствии с таблицей   

9. Заливка нужной параметрии в соответствии с таблицей  

10. Проведение кодировок и адаптаций:  

**Настройка электроники двигателя**  
```
Блок 01 → Кодирование
> Байт 5 — Бит 6 → вкл. 
→ Применить (с перезагрузкой блока)
```
**Настройка тормозной системы**  
```
Блок 03 → Кодирование
> Байт 24 — Бит 3 → вкл. 
→ Применить (с перезагрузкой блока)
```
**Сохранение номеров выбранных FEC кодов**  
В FSID группы необходимо по порядку прописать последние цифры выбранных FEC кодов (1 — 90, 2 — 91, 3 — 92, 4 — 93)  
Например, выбраны FEC коды: 10009008, 10009101, 10009204, 10009307  
```
Блок 13 → Кодирование
> SWaP_FSID_group_1: 8
> SWaP_FSID_group_2: 1
> SWaP_FSID_group_3: 4
> SWaP_FSID_group_4: 7
→ Применить (с перезагрузкой блока)
```
**Настройка блока адаптивного круиз-контроля** 
```
Блок 13 → Кодирование
> Automatic_driveaway_by_pretrigger → activated  
> Automatic_driveaway_after_short_stop → activated  
> Driveaway_by_triggerleaver → activated  
> Pretriggertime_reduction → deactivated (увеличение времени ожидания при остановке до 10 секунд)  
> FPK_functions → installed
→ Применить (с перезагрузкой блока)
```
```
Блок 13 → Адаптации
> Distance_Setting - par_Distance_Setting → on
> Adjustment_mode_time_slot_adaptive_distance_control - Adjustment_mode_time_slot_adaptive_distance_control → on
> Overtaking_right_prevention → deactivated (обгон справа)
> Drive_pmode_selection → MMI_menu_ACC (выбор режима работы в меню ассистентов на магнитоле) 
→ Применить
```
> логин-пароль 14117 

**Настройка приборной панели** 
```
Блок 17 → Кодирование
> adaptive_cruise_control → yes
→ Применить (с перезагрузкой блока)
```
**Настройка гейтвея** 
```
Блок 19 → Кодирование
> FPA_Funktion_ACC → включить
→ Применить (с перезагрузкой блока)
```
```
Блок 19 → Адаптация
> Multi_function_steering_wheel_control_module Coding Value
>> variant → ACC-High
→ Применить
```
**Настройка ГУ** 
```
Блок 5F → Адаптация
> Car_Function_Adaptations_Gen2 - menu_display_ACC → activated
> Car_Function_Adaptations_Gen2 - menu_display_ACC_over_threshold_high → activated
> Car_Function_List_BAP_Gen2 - ACC_0x05 → activated
→ Применить
```
> логин-пароль 20103

**Настройка парковочного ассистента** 
```
Блок 76 → Кодирование
> Adaptive_cruise_control → activated
→ Применить (с перезагрузкой блока)
```