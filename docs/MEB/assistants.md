# Ассистенты водителя

!!! warning ""
    Запись в блоки A5 и 13 требует **SFD** (на автомобилях 2024+ — **SFD2**). См. [SFD](../sfd.md).

### Отключение запрета обгона справа (ACC)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок 13 → Кодирование:
Overtaking_right_prevention: deactivated
→ Применить
```

### Lane Assist — раннее вмешательство (A5)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок A5 → Кодирование:
HC_point_of_intervention: early_setting_over_menu
→ Применить
```

### Travel Assist

Полная инструкция на платформе MQB-Evo:

→ [Travel Assist (MQB-Evo)](../MQB-Evo/travelAssist.md)  
→ [Emergency Assist, TJA, блок 44](../MQB-Evo/driverAssistExtras.md)

### Front Assist / экстренное торможение

!!! note ""
    Активация зависит от установленного radar и камеры. Без дооснащения hardware кодирование не добавит функцию.

``` yaml title="Login code: 20103"
Блок A5 → Кодирование:
Front_Assist: activated
→ Применить
```

!!! danger ""
    Меняйте только те каналы, которые уже присутствуют в вашей SW. Отсутствующий канал означает другую комплектацию или необходимость параметрии.
