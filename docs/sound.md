# Звук

### Деактивация AM диапазона в магнитоле

	Блок 5F → Кодирование
	> [LO]_byte_14_AM_disable
	выбираем «Вкл»
	→ Применить (с перезагрузкой блока)
	
	ODIS E: 5F -> кодирование -> [LO]_byte_14_AM_disable: ативировать

> логин-пароль 20103

??? note "Кодирование в VSDS"
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 1 → Бит 1: byte_14_AM_disable  → ставим галочку  
    Выход  
    Сохранить  
    ![Screenshot](../images/am_radio.jpg)

### Улучшение звучания

	Блок 5F → Кодирование
	> [LO]_byte_11_Sound_System
	Выбираем [VO]_Sound_System_no_Allocation или [VO]_Sound_System_Internal 
	→ Применить (с перезагрузкой блока)

> логин-пароль 20103 

??? note "Кодирование в VSDS"
    5F - MMI / RNS  
    Кодирование - 07 → Длинное кодирование  
    Байт 11 → Выбираем [VO]_Sound_System_no_Allocation или [VO]_Sound_System_Internal либо  
    заменить 01 бит на 04 бит  
    Выход  
    Сохранить  

### Повышение чувствительности микрофона

	Блок 5F → Адаптация
	> Microfone sensivity (Mikrofonempfindlichtkeit)
	> 2Db
	→ Применить 

> логин-пароль 20103 