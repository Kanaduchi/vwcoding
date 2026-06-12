# Климат и HV-отопление

!!! warning ""
    Блок **08** на MEB управляет салонным климатом и связан с **HV-отопителем**. Запись требует **SFD** (2024+ — **SFD2**). См. [SFD](../sfd.md).

Блок 08 на электромобилях MEB функционально близок к MQB-Evo, но часть каналов отсутствует или называется иначе — сверяйте список адаптаций в ODIS для вашего SW.

### Сохранение настройки Air Care (фильтрация воздуха)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок 08 → Адаптация:
Filtering_interior_air_saving:
- Filtering_interior_air_saving: active
→ Применить
```

Значения: `not_active` — не запоминать; `active` — запоминать; `depending_on_standing_time` — в зависимости от времени стоянки.

### Сохранение режима рециркуляции

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок 08 → Адаптация:
Save air recirculation status at terminal 15 off:
- Save air recirculation status at terminal 15 off: storing
→ Применить
```

### Сохранение уровня обогрева сидений

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок 08 → Адаптация:
Time for seat heating power reduction Level 3 to level 2:
- param_Time_for_seat_heating_power_reduction_Level_3_to_level_2: 0 min
Time for seat heating power reduction Level 2 to level 1:
- param_Time_for_seat_heating_power_reduction_Level_2_to_level_1: 0 min
→ Применить
```

`0 min` — отключить автоматическое снижение мощности (удерживать выбранный уровень).

### Предварительный прогрев салона (через приложение / таймер)

Штатный **departure timer** и прогрев через **We Connect / MyŠkoda** настраиваются в меню авто и приложении. Отдельная адаптация в 08 для этого обычно не требуется.

Для **прогрева HV-батареи** перед DC-зарядкой см. [Зарядка и HV](charging.md) — это другой контур (блок **8C**), не климат 08.

## См. также

- [MQB-Evo / Климат](../MQB-Evo/climate.md) — похожие каналы 08
- [Зарядка и HV](charging.md)
- [BCM](bcm.md)
