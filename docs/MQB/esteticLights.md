disqus: https-mqb-readthedocs-io
# Освещение салона

### Плавное включение и выключение освещения в салоне

!!! tip ""
    Подсветка всех кнопок в салоне загорается и гаснет плавно, смотрится очень естественно и красиво. 
    
```
Блок 09 → Адаптация
> Suchbeleuchtung_allgemein
>> KL58 Einschalten mit Rampe → Active
→ Применить
```
	
> логин-пароль 31347

### Пульсация кнопки Старт-Стоп Engine

```
Блок В7 Kessy Безопасный доступ → Адаптация 
> DeveloperCoding Search lights
>> ZAT_illumination_concept_mybeat_clamp58xt: [VN]_activated
>> ZAT_illumination_modus_mybeat_clamp58xt: [VN]_activated
→ Применить
```

> логин-пароль 20103

### Прорисовка "солнышек" в меню Эстетической подсветки

!!! note ""
    Не работает на composition color (у него нет визуализации зон, у него зоны идут списком).  
    Данная кодировка возможна только через OBD11 или ODIS   

Данное кодирование актуально тем, у кого с завода стоит только подсветка ног, и нет эстетической подсветки.  
Часто в этом случае при активации эстетической подсветки пропадает возможность регулировки зоны подсветки ног, а именно того самого солнышка и визуализации этой подсветки. 

Кроме того, данная информация пригодится для тех кто все таки установил дополнительные лампы подсветки, или только собирается это сделать. 

За активацию дополнительных зон в меню Эстетической подстветки в 9 блоке отвечают 3 параметра адаптации *Освещение салона, параметры / Interior_light_parameter*
```
>> p_ambientelicht_verbauinformation_HMI
```
|Бит|Описание|
|---|---|
| 0 | Освещение ног (визуализация фонарей освещения ног)*   |
| 1 | Освещение ног (без визуализации)   |
| 2 | Освещение пер.панели (визуализация полоски)*  |
| 3 | Пусто   |
| 4 | Центральная консоль (без визуализации)   |
| 5 | Освещение пер.панели (без визуализации)   |
| 6 | Освещение пер.панели (без визуализации)   |
| 7 | Освещение пер.панели (без визуализации)   |

```
>> p_ambientelicht_verbauinformation_HMI2
```
|Бит|Описание|
|---|---|
| 0 | Центральная консоль (без визуализации)    |
| 1 | Центральная консоль (без визуализации)   |
| 2 | Освещение двери (визуализация фонарей подсветки ручек)*  |
| 3 | Освещение двери (без визуализации)  |
| 4 | Освещение двери (визуализация полосок)*   |
| 5 | Освещение двери (без визуализации)   |
| 6 | Освещение двери (без визуализации)   |
| 7 | Освещение двери (без визуализации)   |

```
>> p_ambientelicht_verbauinformation_HMI3
```
|Бит|Описание|
|---|---|
| 0 | Освещение двери (без визуализации)    |
| 1 | Освещение потолка (без визуализации)   |
| 2 | Освещение потолка (визуализация освещения фонаря)*  |
| 3 | Освещение потолка (без визуализации)  |
| 4 | Пусто   |
| 5 | Пусто   |
| 6 | Пусто   |
| 7 | Пусто   |

Пример кодирования - активация "солнышка" и визуализации подсветки потолка
![Screenshot](../images/MQB/dach.png)
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_ambientelicht_verbauinformation_HMI3 → 110
→ Применить
```

Пример кодирования - активация визуализации подсветки ручек
![Screenshot](../images/MQB/door.png)
```
Блок 09 → Адаптация
> Освещение салона, параметры / Interior_light_parameter
>> p_ambientelicht_verbauinformation_HMI2 → 100
→ Применить
```  

### Цветовые профили

+ [ODIS_E шкала на 30 цветов для машин без RGB для 09 блока (адаптации)](../odis-files/09 - Шкала на 30 цветов.PRE)    
+ [ODIS_E шкала на 10 цветов для машин без RGB для 09 блока (адаптации)](../odis-files/09 - Шкала на 9 цветов.PRE)

	Блок 09 → Адаптация
	> Освещение салона 2-го поколения
	>> Mittelkonsolenbeleuchtung mehrfarbig:
	Старое значение: не акт.
	Новое значение: акт.
	→ Применить
	
	> Освещение салона, конфигурация фонарей
	>> Ambientemenue mit globalem aus → акт.
	>> Ambientemenue mit alle Zonen → акт.
	>> Ambient_Farbliste_HMI → акт.
	→ Применить
	
	> Ambientelicht Farbliste (Эстетическая подсветка)
	Старое значение у всех: 0
    — Rotwert Farbe 1- 217
    — Gruenwert Farbe 1- 221
    — Blauwert Farbe 1 — 235
    — Rotwert Farbe 2 — 255
    — Gruenwert Farbe 2 — 172
    — Blauwert Farbe 2 — 5
    — Rotwert Farbe 3 — 253
    — Gruenwert Farbe 3 — 108
    — Blauwert Farbe 3 — 55
    — Rotwert Farbe 4 — 222
    — Gruenwert Farbe 4 — 70
    — Blauwert Farbe 4 — 20
    — Rotwert Farbe 5 — 252
    — Gruenwert Farbe 5 — 116
    — Blauwert Farbe 5 — 240
    — Rotwert Farbe 6 — 132
    — Gruenwert Farbe 6 — 76
    — Blauwert Farbe 6 — 222
    — Rotwert Farbe 7 — 0
    — Gruenwert Farbe 7 — 102
    — Blauwert Farbe 7 — 225
    — Rotwert Farbe 8 — 1
    — Gruenwert Farbe 8 — 192
    — Blauwert Farbe 8 — 255
    — Rotwert Farbe 9 — 0
    — Gruenwert Farbe 9 — 204
    — Blauwert Farbe 9 — 0
    — Rotwert Farbe 10 — 182
    — Gruenwert Farbe 10 — 255
    — Blauwert Farbe 10 — 57
	→ Применить
	
??? note "Расширенные цвета"
    Расширеные цвета задаются в адаптации 9 блока: 
    > Ambience_lightning_color_list_2
    
> логин-пароль 31347

### Выбор цвета в зависимости от профиля движения

+ [ODIS_E Кодирование 19 блока](../odis-files/19 - (кодировка) FPA AMB.PRE)
+ [ODIS_E Привязка профилей движения для 09 блока (адаптации)](../odis-files/09 - Привязка профилей движения.PRE)

!!! warning ""
    Установленный гейт должен иметь версию софта не ниже 4344 или 5344 и иметь индекс Q и выше

Меню эстетической подсветки
    
    Блок 19 → Кодирование
    > FPA_Funktion_AMB — включить
    → Применить (с перезагрузкой блока)

    Блок 5F → Адаптация
    > Car_Function_Adaptations_Gen2
    >> Menu_display_ambient_illumination — Включ
    >> Menu_display_ambient_illumination_clamp_15_off — не активир.
    >> Menu_display_ambient_illumination_over_threshold_high — Включ.
    >> Menu_display_ambient_illumination_standstill — не активир.
    >> Menu_display_ambient_illumination_after_disclaimer — не активир.
    → Применить 
    
    Блок 09 → Адаптация
	> Освещение салона, конфигурация фонарей
	>> Ambientemenue mit globalem aus — акт.
    >> Ambientemenue mit alle Zonen — акт.
    >> Ambient_Farbliste_HMI — акт.
    >> Ambience_light_colorlist_default — 1
    
    Освещение салона 2-го поколения
    >> Ambiente_Fahrprofil_Individual — 7
    >> Ambiente_Farbwahl_FPA_waehlbare_Kopplung — active
    >> Ambiente_Farbwahl_FPA_waehlbare_Kopplung_Status_hmi_default — сопряжены (coupled)
	→ Применить
	
    > Освещение салона 2 го поколения: конфигурация фонарей
    >> Mittelkonsolenbeleuchtung mehrfarbig — акт.
    >> Cockpitbeleuchtung mehrfarbig — акт.
    → Применить
    
Профили движения

!!! tip "Расшифровка профилей"
    Fahrprofil_0 — при открытии дверей на заглушенном авто  
    Fahrprofil_2 — обычный — синий  
    Fahrprofil_3 — спорт — красный  
    Fahrprofil_4 — бездорожье — сиреневый  
    Fahrprofil_5 — эко — зеленый  
    Fahrprofil_7 — индивидуальный — фиолетовый  
    Fahrprofil_10 — снег — голубой  
    Fahrprofil_11 — индивидуальный режим бездорожье  

```
Блок 09 → Адаптация
> Ambientelicht Zuordnung der Farbe zum Fahrprofi
>> Fahrprofil_0 — 1
>> Fahrprofil_1 — 1
>> Fahrprofil_2 — 7
>> Fahrprofil_3 — 4
>> Fahrprofil_4 — 6
>> Fahrprofil_5 — 9
>> Fahrprofil_6 — 8
>> Fahrprofil_7 — 5
>> Fahrprofil_8 — 1
>> Fahrprofil_9 — 1
>> Fahrprofil_10 — 8
>> Fahrprofil_11 — 1
>> Fahrprofil_12 — 1
>> Fahrprofil_13 — 1
>> Fahrprofil_14 — 1
>> Fahrprofil_15 — 1
→ Применить
```

Скорость переключения профилей
```
Блок 19 → Адаптация
> Driving Profile Selection Parameter 
>> Driving Profile Selection Toogle Time Adaptation — вместо 2000 мс ставим 0
→ Применить
```

> логин-пароль 31347

### Отключение освещения салона при открытии багажника

!!! tip ""
    Изначально при открытии крышки багажника загорался свет не только в нем, но и в салоне

```
Блок 09 → Адаптация
> Освещение салона 2го поколения - Innenlicht bei offenem Hechdeckei einschalten
> Не акт.
→ Применить
```

> логин-пароль 31347