
# Кодирование освещения салона

### Плавное включение и выключение освещения в салоне

!!! tip ""
    Подсветка всех кнопок в салоне загорается и гаснет плавно, смотрится очень естественно и красиво. 
    
``` yaml
Блок 09 → Адаптация:
> Suchbeleuchtung_allgemein
>> KL58 Einschalten mit Rampe →  Active
→ Применить
```
	
> логин-пароль 31347

### Пульсация кнопки Старт-Стоп Engine

``` yaml
Блок В7 Kessy Безопасный доступ → Адаптация:
> DeveloperCoding Search lights
>> ZAT_illumination_concept_mybeat_clamp58xt: Активировать
>> ZAT_illumination_modus_mybeat_clamp58xt: Активировать
→ Применить
```

> логин-пароль 20103

### Цветовые профили

+ [ODIS_E шкала на 30 цветов для машин без RGB для 09 блока (адаптации)](../odis-files/09 - Шкала на 30 цветов.PRE)    
+ [ODIS_E шкала на 10 цветов для машин без RGB для 09 блока (адаптации)](../odis-files/09 - Шкала на 9 цветов.PRE)

``` yaml
Блок 09 → Адаптация:
> Interior_light_2nd_generation / Освещение салона 2-го поколения
>> Mittelkonsolenbeleuchtung mehrfarbig:
Старое значение: не акт.
Новое значение: акт.
→ Применить
---
> Interior_light_lamp_configuration / Освещение салона, конфигурация фонарей
>> Ambientemenue mit globalem aus → акт.
>> Ambientemenue mit alle Zonen → акт.
>> Ambient_Farbliste_HMI → акт.
→ Применить
---
> Ambience_lightning_color_list / Ambientelicht Farbliste / Эстетическая подсветка
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
```

??? tip "Что это за цифры?"
    > Rotwert Farbe 1: 217
    > Gruenwert Farbe 1: 221
    > Blauwert Farbe 1: 235
    
    Это цвета в формате RGB для шкалы выбора цвета. 
    Можно перед адаптацией составить свой список желаемых цветов, используя калькулятор цвета (например, https://www.colorspire.com/rgb-color-wheel)
	
??? note "Расширенные цвета"
    Расширенные цвета задаются в адаптации 9 блока: 
    > Ambience_lightning_color_list_2
    
> логин-пароль 31347

### Выбор цвета в зависимости от профиля движения

+ [ODIS_E Кодирование 19 блока](../odis-files/19 - (кодировка) FPA AMB.PRE)
+ [ODIS_E Привязка профилей движения для 09 блока (адаптации)](../odis-files/09 - Привязка профилей движения.PRE)

!!! warning ""
    Установленный гейт должен иметь версию софта не ниже 4344 или 5344 и иметь индекс Q и выше

Меню эстетической подсветки

``` yaml
Блок 19 → Кодирование:
> FPA_Funktion_AMB: Активировать
→ Применить (с перезагрузкой блока)
```

``` yaml
Блок 5F → Адаптация:
> Car_Function_Adaptations_Gen2
>> Menu_display_ambient_illumination — Включ
>> Menu_display_ambient_illumination_clamp_15_off — не активир.
>> Menu_display_ambient_illumination_over_threshold_high — Включ.
>> Menu_display_ambient_illumination_standstill — не активир.
>> Menu_display_ambient_illumination_after_disclaimer — не активир.
→ Применить 
```

``` yaml
Блок 09 → Адаптация:
> Interior_light_lamp_configuration / Освещение салона, конфигурация фонарей
>> Ambientemenue mit globalem aus — акт.
>> Ambientemenue mit alle Zonen — акт.
>> Ambient_Farbliste_HMI — акт.
>> Ambience_light_colorlist_default — 1 (или 0)
>> Farbwahl ueber HMI — не акт.
>> Farbwahl ueber Fahrprofil — не акт.
→ Применить

> Interior_light_2nd_generation / Освещение салона 2-го поколения
>> Ambiente_Fahrprofil_Individual — 7
>> Ambiente_Farbwahl_FPA_waehlbare_Kopplung — active
>> Ambiente_Farbwahl_FPA_waehlbare_Kopplung_Status_hmi_default — сопряжены (coupled)
>> Mittelkonsolenbeleuchtung mehrfarbig — акт.
→ Применить
```

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

``` yaml
Блок 09 → Адаптация:
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
``` yaml
Блок 19 → Адаптация:
> Driving Profile Selection Parameter 
>> Driving Profile Selection Toogle Time Adaptation — вместо 2000 мс ставим 0
→ Применить
```

> логин-пароль 31347

### Отключение освещения салона при открытии багажника

!!! tip ""
    Изначально при открытии крышки багажника загорался свет не только в нем, но и в салоне

``` yaml
Блок 09 → Адаптация:
> Освещение салона 2го поколения
>> Innenlicht bei offenem Hechdeckei einschalten: Деактивировать
→ Применить
```

> логин-пароль 31347