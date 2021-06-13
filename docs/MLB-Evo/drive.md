disqus: https-mqb-readthedocs-io
# Движение и управление

### Отключение запрета на обгон справа при активном круиз-контроле
```
Блок 03 → Кодирование
> Overtaking_right_prevention: activated → deactivated
```

### Уменьшение рывка при трогании с autohold'a
```
Блок 03 → Адаптация
> Treshold_for_drive_away_assist
>> Data: normal → early
→ Применить
```

### Настройка системы просушки дисков
```
Блок 03 → Адаптация
> brake disk wiper
>> Param to DOP: normal → strong
→ Применить
```

### Включение системы компенсации бокового увода при разгоне
```
Блок 03 → Адаптация
> Straigt_line_control
>> Data: off → activated
→ Применить
```