# Головное устройство (ICAS)

!!! warning ""
    Блок **5F** на MEB защищён **SFD**. Для записи используйте ODIS online.

### Video in Motion (видео в движении)

!!! note ""
    Порог скорости блокировки видео задаётся в блоке 5F. Точное имя канала зависит от версии ICAS (Discover Pro / Max).

``` yaml title="Login code: 20103"
Блок 5F → Адаптация:
Video_speed_threshold: 0 km/h
→ Применить
```

Альтернатива через параметрию — см. [MQB / Головное устройство](../MQB/headDevice.md) (раздел Video in motion) и генератор FEC в [утилитах](../utils/fec.md).

### Отключение скачка громкости при старте

``` yaml title="Login code: 20103"
Блок 5F → Адаптация:
Loudness_normalization_startup: deactivated
→ Применить
```

!!! tip ""
    Если канал отсутствует, проверьте актуальную параметрию для вашего ICAS на [mibsolution.one](https://mibsolution.one).

### Developer menu / инженерное меню

Аналогично MQB Evo — через SWaP/FEC или инженерное меню ODIS Engineering.  
См. [MQB-Evo / Head unit](../MQB-Evo/headControlUnit.md).
