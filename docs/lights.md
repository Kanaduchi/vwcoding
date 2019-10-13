## Свет

### Изменение количества мигания поворотника в режиме обгона или перестроения

	Блок 09 → адаптация →
	> Ausenlicht_Blinker — Komfortblinken Blinkzyklen
	> (2)-Turn signal control → «3» выставляем нужное количество «5»
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