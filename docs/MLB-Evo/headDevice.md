disqus: https-mqb-readthedocs-io
# Головное устройство

### Деактивация AM диапазона в магнитоле

Результат: слева внизу вместо ненужного "переключателя" AM/FM появляется иконка настройки радиостанций вручную

```
Блок 5F → Кодирование
> byte_14_AM_disable
выбираем «Вкл»
→ Применить (с перезагрузкой блока)
```
```
ODIS E: 5F → кодирование → byte_14_AM_disable: ативировать
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

### Отключение автоматического запуска CarPlay или AndroidAuto при подключении смартфона
:octicons-verified-24: Audi
```
Блок 5F - адаптация
> function_configuration_media
>> app_start_automatically_on_customer_device: on → off
→ Применить
```

> логин-пароль 20103 

### Просмотр фото с USB или SD
:octicons-verified-24: Audi
```
Блок 5F - адаптация
> function_configuration_media
>> picture_viewer: off → on
→ Применить
```

> логин-пароль 20103 

### Активация MirrorLink (Для автомобилей, где активирован Audi Smartphone Interface)
:octicons-verified-24: Audi
```
Блок 5F - адаптация
> function_configuration_connectivity
>> Mirror_link: off → on
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
:octicons-verified-24: Audi
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
:octicons-verified-24: Audi
```
5F → Кодирование
byte_16_Bluetooth_Headphones: off
→ Применить
```

### Отключение блокировки части функций в MMI во время движения
:octicons-verified-24: Audi
```
5F → Адаптация
> Vehicle_configuration
>> unblock_functions_while_piloted_driving: blocked
→ Применить
```

> логин-пароль 20103 

### Отключение экрана выбора пользователя
:octicons-verified-24: Audi
```
Блок 5F - адаптации
> menu_IAA_PSO_over_threshold_high: activated → not_activated
> menu_IAA_PSO_clamp_15_off: activated → not_activated
> menu_IAA_PSO: activated → not_activated
→ Применить
```

> логин-пароль 20103 

### Звук приветствия водителя
:octicons-verified-24: Audi
```
Блок 5F - адаптации
> function_configuration_audio
>> welcome_sound: off → on
→ Применить и перезагрузить ГУ
```