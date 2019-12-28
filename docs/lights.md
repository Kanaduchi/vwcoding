## Свет

### Перемигивание дальнего света и ПТФ (стробоскоп)

	Блок 09 → адаптация →
	> Ausenlicht_Blinker — driveng light and parking lightZahl der aktivern Sheinwerfer Auf 2 limitieren
	> aktiv
	→ Применить

    Аналог:
	> Aussenlicht_Front-Zahl der aktiven Scheinwerfer auf 2 limitieren
	> in Betrieb lassen поменять на limitieren
	→ Применить

	Дополнительные кодировки:
	Блок 09 → адаптация → Leuchte12NL LB45
	> Dimming direction CD 12 — maximum
	> Dimmwert CD 12 – 110
	> Lichtfunktion С 12 — Lichthupe generell
	> Leuchte13NL RB5 —
	> Dimming direction CD 13 — maximum
	> Dimmwert CD 13 – 110
	> Lichtfunktion С 13 — Lichthupe generell
	→ Применить
	
> логин-пароль 31347

### Отключение освещения салона при открытии багажника

	Блок 09 → адаптация →
	> Освещение салона 2го поколения - Innenlicht bei offenem Hechdeckei einschalten
	> Не акт.
	→ Применить

> логин-пароль 31347

### Изменение количества мигания поворотника в режиме обгона или перестроения

	Блок 09 → адаптация →
	> Ausenlicht_Blinker — Komfortblinken Blinkzyklen
	> (2)-Turn signal control → «3» выставляем нужное количество «5»
	→ Применить

> логин-пароль 31347

### Отключение ДХО при поднятом ручном тормозе

	Блок 09 → адаптация →
	> Aussenlicht_Front - Tagfahrlicht Dauerfahrlicht bei Handbremse abschalten
	> активировать
	→ Применить

> логин-пароль 31347

### Перемигивание поворотников с ДХО

	Блок 09 → адаптация →
	> Leuchte2SL VLB10-Lichtfunktion G 2 → выбираем → Blinken links aktiv (Hellphase)
	→ Применить
	> Leuchte2SL VLB10-Dimmwert GH 2 → вводим значение «0»
	→ Применить
	> Leuchte2SL VLB10-Dimming Direction GH 2 → выбираем → minimize
	→ Применить
	> Leuchte3SL VRB21-Lichtfunktion G 3 → выбираем → Blinken rechts aktiv (Hellphase)
	→ Применить
	> Leuchte3SL VRB21-Dimmwert GH 3 → вводим значение «0»
	→ Применить
	> Leuchte3SL VRB21-Dimming Direction GH 3 → выбираем → minimize
	→ Применить

> логин-пароль 31347

### Включение задних габаритов в режиме только ДХО

	Блок 09 → адаптация →
	> (6) Tagfahrlicht-Dauerfahrlicht aktiviert zusaetzlich Standlicht auswählen
	→ активировать
	→ Применить

> логин-пароль 31347

### Светодиоды в ПТФ

	Блок 09 → адаптация →
	> [VO]_Leuchte12NL LB45 → выбираем → [LO]_Lasttyp 12 → выбираем в поле "ввод данных" → [VO_6-LED Lichtmodul]
	→ Применить
	> [VO]_Leuchte13NL RB5 → выбираем → [LO]_Lasttyp 13 → выбираем в поле "ввод данных" [VO_6-LED Lichtmodul]
	→ Применить

	Уменьшение яркости светодиодов:
	> [VO]_Leuchte12NL LB45 → [LO]_DimmwertAB 12 → 60
	→ Применить
	> [VO]_Leuchte13NL RB5 → [LO]_DimmwertAB 13 → 60
	→ Применить

> логин-пароль 31347

### Автоматическое провожание, а не морганием дальним перед выходом из машины

	Блок 09 → адаптация → 
	> Aussenlicht_uebergreifend
	> Coming Home Verbaustatus и ставим значение Авто. И конечно применяем изменения.
	> можно увеличить время свечения в пункте Menueeinstellung Cominghome там уже на свой вкус ставите значение.
	→ Применить

> логин-пароль 31347

### Пульсация кнопки Старт-Стоп Engine

	Блок В7 Kessy Безопасный доступ → адаптация → 
	> DeveloperCoding Search lights
	> ZAT_illumination_concept_mybeat_clamp58xt: [VN]_activated
	> ZAT_illumination_modus_mybeat_clamp58xt: [VN]_activated
	→ Применить

> логин-пароль 31347

### Система освещения поворотов (CORNER)

	Блок 09 → адаптация →
	> Leuchte 12NL LB45-Lichtfunktion B 12 → Abblendlicht links
	> Leuchte 13NL RB5-Lichtfunktion B 13 → Abblendlicht rechts
	→ Применить

> логин-пароль 31347
