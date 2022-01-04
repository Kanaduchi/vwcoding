disqus: https-mqb-readthedocs-io
# Приборная панель

### Свободное место в баке

``` yaml
Блок 17 → Кодирование:
> Байт 10 – Бит 4: Активировать
→ Применить (с перезагрузкой блока)
```
```
ODIS E: 006: 0017 → refuel_volume: yes
```

> логин-пароль 20103

### Отключение звукового и визуального предупреждения, если при заведенном автомобиле ключ оказался вне салона
``` 
Блок 17 → Кодирование:
> Leaving_warning → no
→ Применить (с перезагрузкой блока)
```

### Добавление промежуточных шкал на спидометр
:octicons-verified-24: Audi
``` 
Блок 17 → Кодирование:
> Tachometer_erweiterte_Skalenteilung → yes
→ Применить (с перезагрузкой блока)
```

### Отображение замера ускорения
:octicons-verified-24: Audi
``` 
Блок 17 → Адаптация:
> Displayable_content_configuration
>> Drag_indicator: no_display → readout
→ Применить
```

![Screenshot](../images/MLB/drag_info.jpeg) 

### Настройка отображения текущей передачи (в обычном режиме, в S или в обоих)
:octicons-verified-24: Audi
``` yaml
Блок 02 → Кодирование
> Block 3 - Functions: → выбираем необходимое
```
или
``` yaml
Блок 02 → Адаптация:
> Activate_gear_information_display
>> Activate_gear_information_display: → выбираем необходимое
```

### Отображение на проекционном дисплее
:octicons-verified-24: Audi
``` yaml
Блок 82 → Кодирование
> Navigation System: not available → available (Отображение указаний навигационной системы)
> Laptimer_activated: not available → available (Отображение запущенного таймера круга)
> clock: not available → available (Отображение текущего времени)
> Telephone: not available → available (Отображение входящего звонка)
> speedlimiter: not available → available (Отображение включенного лимитера)
> predictive_efficiency_assistant: not available → available (Отображение указаний эко-ассистента)
→ Применить
```

### Тест стрелок

``` yaml
Блок 17 → Кодирование
> Байт 01 – Бит 0 (Демонстрация/Staging): Активировать
→ Применить (с перезагрузкой блока)
```
```
ODIS E: 006: 0017 → scenering → yes
```
	
> логин-пароль 20103

### Рекомендация переключения на более высокую передачу (при езде на "ручном" режиме)
:octicons-verified-24: Audi
``` yaml
Блок 17 → Адаптация:
> Upshift_indicator_in_the_centre_display: no_display меняем на display
→ Применить
```

> логин-пароль 20103