# BCM (блок 09) — свет и комфорт

!!! warning ""
    Запись в **09** на MEB требует **SFD** (2024+ — **SFD2**).

### Coming Home / Leaving Home — время

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 31347"
Блок 09 → Адаптация:
Coming_home_time:
- Coming_home_time: 30 s
Leaving_home_time:
- Leaving_home_time: 30 s
→ Применить
```

Подберите значение (секунды) под себя. Имена каналов могут быть `Coming_home` / `Leaving_home` в вашем SW.

### Автоматическое складывание зеркал при запирании

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 31347"
Блок 09 → Кодирование:
Mirror_fold_in: automatic
→ Применить
```

Если канала нет — функция может быть только через меню или отсутствовать на PR.

### Комфортное открытие стёкол (удержание ключа)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 31347"
Блок 09 → Адаптация:
Comfort_open:
- Comfort_open: active
Comfort_close:
- Comfort_close: active
→ Применить
```

### Эстетическая подсветка (если установлена)

Кодирование зон ambient на MEB близко к [MQB-Evo / aestheticLights](../MQB-Evo/aestheticLights.md). Сверяйте PR ambient package.

## См. также

- [MQB-Evo / Освещение](../MQB-Evo/lights.md)
- [MQB / Отпирание и запирание](../MQB/security.md) — классический MQB, часть логики схожа
