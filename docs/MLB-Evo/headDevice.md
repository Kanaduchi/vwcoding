
# Головное устройство

### Деактивация AM диапазона в магнитоле

Результат: слева внизу вместо ненужного "переключателя" AM/FM появляется иконка настройки радиостанций вручную

``` yaml title="логин-пароль: 20103"
Блок 5F → Кодирование:
byte_14_AM_disable
выбираем «Вкл»
→ Применить (с перезагрузкой блока)
```

### Включение камеры 360 в режиме помощи при парковке
:octicons-verified-24: Audi e-tron с камерой 360
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
Visual display for park assist: OPS display → with OPS 360°
→ Применить
```

### Включение камеры заднего вида при скорости > 30 км/ч
:octicons-verified-24: Audi e-tron
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
Switch-off speed for parking assist: 150 → 140
→ Применить
```

### Беспроводной Car Play
:octicons-verified-24: Audi
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
Конфигурация:
- Apple_DIO_Wireless: Активировать
- Google_GAL_Wireless: Активировать
- wlan_5ghz_switch: Активировать
→ Применить
```

### Отключение автоматического запуска CarPlay или AndroidAuto при подключении смартфона
:octicons-verified-24: Audi
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
function_configuration_media:
- app_start_automatically_on_customer_device: on → off
→ Применить
```

### Просмотр фото с USB или SD
:octicons-verified-24: Audi
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
function_configuration_media:
- picture_viewer: off → on
→ Применить
```

### Активация MirrorLink (Для автомобилей, где активирован Audi Smartphone Interface)
:octicons-verified-24: Audi
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
function_configuration_connectivity:
- Mirror_link: off → on
→ Применить
```

### Активация видео в движении

``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
Speed:
- testmode_video_speed_off: 255
→ Применить
```

!!! note ""
    Необходимо использовать development mode  

### Активация работы с навигацией во время движения

``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
locked menu contents:
- FB_NAV_3: non_blocked
→ Применить
```

### Возможность звонков с сим-карты
:octicons-verified-24: Audi
!!! note ""
    Для автомобилей, оборудованных слотом под сим-карту возможность звонить с этой симки

``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
Vehicle_configuration:
- Phone_module_operation_mode: data_only → voice_and_data
- Support_for_response_and_hold: off → on
- Support_of_threeway_calling: off → on
- sim_data_only_sms_support: on → off
- Internal_SIM_card_usage: Never → Always
→ Применить
```

### Возможность подключения bluetooth-наушников к мультимедиа системе
:octicons-verified-24: Audi
```
Блок 5F → Кодирование:
byte_16_Bluetooth_Headphones: off
→ Применить
```

### Отключение блокировки части функций в MMI во время движения
:octicons-verified-24: Audi
``` title="логин-пароль: 20103"
Блок 5F → Адаптация:
Vehicle_configuration:
- unblock_functions_while_piloted_driving: blocked
→ Применить
```

### Отключение экрана выбора пользователя
:octicons-verified-24: Audi
``` yaml title="логин-пароль: 20103"
Блок 5F → Адаптация:
menu_IAA_PSO_over_threshold_high: Деактивировать
menu_IAA_PSO_clamp_15_off: Деактивировать
menu_IAA_PSO: Деактивировать
→ Применить
```

### Звук приветствия водителя
:octicons-verified-24: Audi
``` yaml
Блок 5F → Адаптация:
function_configuration_audio:
- welcome_sound: off → on
→ Применить и перезагрузить ГУ
```