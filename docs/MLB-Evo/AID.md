
# Приборная панель

### Свободное место в баке

``` yaml title="логин-пароль: 20103"
Блок 17 → Кодирование:
Байт 10 – Бит 4 (refuel_volume): Активировать
→ Применить (с перезагрузкой блока)
```

### Отключение звукового и визуального предупреждения, если при заведенном автомобиле ключ оказался вне салона
``` 
Блок 17 → Кодирование:
Leaving_warning → no
→ Применить (с перезагрузкой блока)
```

### Добавление промежуточных шкал на спидометр
:octicons-verified-24: Audi
``` 
Блок 17 → Кодирование:
Tachometer_erweiterte_Skalenteilung: yes
→ Применить (с перезагрузкой блока)
```

### Отображение lap timer и температуры масла
:octicons-verified-24: Audi + e-tron
``` 
Блок 17 → Кодирование:
Байт 1 - Бит 3 (lap timer active): yes
→ Применить (с перезагрузкой блока)
```
В некоторых моделях данная кодировка может называться "Lap counter"

### Меню "Спорт"
:octicons-verified-24: Audi e-tron
``` 
Блок 17 → Кодирование:
Acceleration display: on
→ Применить
```

### Отображение замера ускорения
:octicons-verified-24: Audi
``` 
Блок 17 → Адаптация:
Displayable_content_configuration:
- Drag_indicator: no_display → readout
- Acceleration measurement: Display # (1)!
→ Применить
```

1. Для некоторых машин может потребоваться данная опция

![Screenshot](../images/MLB/drag_info.jpeg) 

### Настройка отображения текущей передачи (в обычном режиме, в S или в обоих)
:octicons-verified-24: Audi
``` yaml
Блок 02 → Кодирование:
Block 3 - Functions: → выбираем необходимое
```
или
``` yaml
Блок 02 → Адаптация:
Activate_gear_information_display:
- Activate_gear_information_display: → выбираем необходимое
```

### Отображение на проекционном дисплее
:octicons-verified-24: Audi
``` yaml
Блок 82 → Кодирование:
Navigation System: not available → available (Отображение указаний навигационной системы)
Laptimer_activated: not available → available (Отображение запущенного таймера круга)
clock: not available → available (Отображение текущего времени)
Telephone: not available → available (Отображение входящего звонка)
speedlimiter: not available → available (Отображение включенного лимитера)
predictive_efficiency_assistant: not available → available (Отображение указаний эко-ассистента)
→ Применить
```

### Тест стрелок

``` yaml title="логин-пароль: 20103"
Блок 17 → Кодирование:
Байт 01 – Бит 0 (Демонстрация/Staging/Gauge Test/Needle Sweep active): Активировать
→ Применить (с перезагрузкой блока)
```

### Рекомендация переключения на более высокую передачу (при езде на "ручном" режиме)
:octicons-verified-24: Audi
``` yaml title="логин-пароль: 20103"
Блок 17 → Адаптация:
Upshift_indicator_in_the_centre_display: no_display меняем на display
→ Применить
```