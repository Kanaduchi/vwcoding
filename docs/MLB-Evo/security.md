disqus: https-mqb-readthedocs-io
# Безопасность

### Блокировка дверей (ЦЗ) по зажиганию
:octicons-verified-24: Audi
```
Блок 46 → Кодирование
> central_locking_system_lock_unlock_at_engine_running: not_active → active
→ Применить
```

### Автоматическое открытие авто (только открытие, закрывать автоматически не будет)
:octicons-verified-24: Audi
```
Блок 46 → Кодирование
> automatic_opening: not_active → active
> automatic_closing: not_active → active
> keyless_light_illumination: not_active → active
→ Применить
```

```
Блок 46 → Адаптация
> Personalized_settings_vehicle
>> Keyless_access_automatic_open: not_active → active
→ Применить
```

### Закрытие автомобиля при работающем двигателе

```
Блок 46 → Кодирование
> Байт 9 бит 7 → включить 
→ Применить (с перезагрузкой блока)
```

### Звуковое подтверждение при снятии постановки на охрану

!!! note ""
    При условии наличия штатной сигнализации
    
```
Блок 46 → Кодирование
> Байт 4 бит 6 → включить 
→ Применить (с перезагрузкой блока)
```
```
Блок 46 → Адаптация
> Sounder_settings
>> Beeptime_opening_central_locking → double_beep
→ Применить
```

в ГУ появится соответствующее меню

### Открытие/закрытие заведенной машины с кнопки на двери

```
Блок 46 → Кодирование
> central_locking_system_lock_unlock_then_engine_running: yes
> unlocking_hatchback_via_kessy_at_s_contact_active: yes
```


