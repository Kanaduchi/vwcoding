disqus: https-mqb-readthedocs-io
# Головное устройство

### Деактивация AM диапазона в магнитоле

Результат: слева внизу вместо ненужного "переключателя" AM/FM появляется иконка настройки радиостанций вручную

```
Блок 5F → Кодирование
> [LO]_byte_14_AM_disable
выбираем «Вкл»
→ Применить (с перезагрузкой блока)
```
```
ODIS E: 5F → кодирование → [LO]_byte_14_AM_disable: ативировать
```

> логин-пароль 20103

### Беспроводной Car Play

```
Блок 5F → Адаптация
> Конфигурация
>> Apple_DIO_Wireless → Акт.
>> Google_GAL_Wireless → Акт.
>> wlan_5ghz_switch → Акт.
→ Применить
```

> логин-пароль 20103 

### Активация видео в движении

```
Блок 5F → Адаптация
> Speed
>> testmode_video_speed_off → 255.
→ Применить
```

> логин-пароль 20103 

!!! note ""
    Необходимо использовать development mode  

### Возможность звонков с сим-карты

!!! note ""
    Для автомобилей, оборудованных слотом под сим-карту возможность звонить с этой симки

```
5F → Адаптация
> Vehicle_configuration
>> Phone_module_operation_mode: data_only → voice_and_data
>> Support_for_response_and_hold: off → on
>> Support_of_threeway_calling: off → on
>> sim_data_only_sms_support: on → off
>> Internal_SIM_card_usage: Never → Always
→ Применить
```

> логин-пароль 20103 

### Возможность подключения bluetooth-наушников к мультимедиа системе

```
5F → Кодирование
byte_16_Bluetooth_Headphones: off
→ Применить
```

### Отключение блокировки части функций в MMI во время движения

```
5F → Адаптация
> Vehicle_configuration
>> unblock_functions_while_piloted_driving: blocked
→ Применить
```

> логин-пароль 20103 

### Отключение экрана выбора пользователя
```
Блок 5F - адаптации
> menu_IAA_PSO_over_threshold_high: activated → not_activated
> menu_IAA_PSO_clamp_15_off: activated → not_activated
> menu_IAA_PSO: activated → not_activated
→ Применить
```

> логин-пароль 20103 