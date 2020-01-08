# Параметры омывателя фар и дворников

### Отключение автоматичечкого омывателя фар

    Блок 09 → Адаптация
    > Scheinwerferreinigung
    > Anzahl Betaetigungen Frontwaschanlage pro SRA Aktivierung:
    Старое значение: 10
    Новое значение: 0
    
    Аналог:
    [VO]_Scheinwerferreinigunglage -> неактив
    → Применить

    Cрабатывание после долго удержания рычага омывания стекла
    > Scheinwerferreinigung
    > SRA Verzoegerungszeit:
    Старое значение: 0 мс
    Новое значение: 2500 мс
    → Применить
    
> логин-пароль 31347
    
### Убираем второй "пшик" на фары

    Блок 09 → Адаптация
    > Scheinwerferreinigung
    > SRA Nachwaschzeit
    Старое значение: 10
    Новое значение: 0 ms
    → Применить

> логин-пароль 31347

### Сервисное положение дворников

	Блок 09  → Адаптация
	> Service position → вводим нужное значение
	→ Применить
	> Alternative position 2 (позиция дворников при выключенном зажигании)
	→ Применить
	
	Меню в магнитоле
    > Front wiper
    > Menuesteuerung Frontwischer — active
    → Применить

> логин-пароль 31347

!!! info
    Service position: по умолчанию 166.505329 градусов, меняем в меньшую сторону.  
    Меню в ГУ появляется не на всех машинах

### Дотирка капель – Лобовое стекло

	Блок 09 → Адаптация
	> Front_wiper 
	> Traenenwischen Front Status → активировать
	→ Применить

> логин-пароль 31347

### Работа заднего дворника во время дождя

    Блок 09 → Адаптация
    > Heckwischersteuerung (Rear Wiper / Задний стеклоочиститель)
    > Automatisches Heckwischen  → активировать
    > Einzelansteuerung Heckintervallwischen Zeitintervall 1
    Поменять с 7s на 15s
	→ Применить
	
	ODIS E:
	IDE02711-ENG116690-Rear Window Wiper-Automatisches Heckwischen
	
!!! warning
    Данное кодирование почему-то присутствует не на всех машинах

> логин-пароль 31347
