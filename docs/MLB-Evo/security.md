
# Безопасность

### Блокировка дверей (ЦЗ) по зажиганию
:octicons-verified-24: Audi
``` yaml
Блок 46 → Кодирование:
> central_locking_system_lock_unlock_at_engine_running: not_active: Активировать
→ Применить
```

### Автоматическое открытие авто (только открытие, закрывать автоматически не будет)
:octicons-verified-24: Audi
``` yaml
Блок 46 → Кодирование:
> automatic_opening: not_active: Активировать
> automatic_closing: not_active: Активировать
> keyless_light_illumination: not_active: Активировать
→ Применить
```

``` yaml
Блок 46 → Адаптация:
> Personalized_settings_vehicle
>> Keyless_access_automatic_open: not_active: Активировать
→ Применить
```

### Закрытие автомобиля при работающем двигателе

``` yaml
Блок 46 → Кодирование:
> Байт 9 – Бит 7: Активировать 
→ Применить (с перезагрузкой блока)
```

### Звуковое подтверждение при снятии постановки на охрану

!!! note ""
    При условии наличия штатной сигнализации
    
``` yaml
Блок 46 → Кодирование:
> Байт 4 – Бит 6: Активировать 
→ Применить (с перезагрузкой блока)
```
``` yaml
Блок 46 → Адаптация:
> Sounder_settings
>> Beeptime_opening_central_locking → double_beep
→ Применить
```

в ГУ появится соответствующее меню

### Открытие/закрытие заведенной машины с кнопки на двери

``` yaml
Блок 46 → Кодирование:
> central_locking_system_lock_unlock_then_engine_running: yes
> unlocking_hatchback_via_kessy_at_s_contact_active: yes
```


