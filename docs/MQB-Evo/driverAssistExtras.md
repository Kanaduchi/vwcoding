# Дополнительные ассистенты (EA, TJA, блок 44)

Инструкции для **MQB-Evo** помимо базового [Travel Assist](travelAssist.md).  
Дооснащение «железом» (радар, камера, руль) — см. [MQB / Дооснащение](../MQB/addons.md) по аналогии; здесь только **кодирование** при уже установленном hardware.

!!! warning ""
    Запись в **A5**, **44**, **13** требует **SFD**; на автомобилях 2024+ — **SFD2** на каждую операцию. См. [SFD](../sfd.md).

## Emergency Assist (ассистент экстренной остановки)

EA останавливает авто с аварийкой, если водитель не реагирует (нет KLR / нет рук на руле длительное время).

### Активация EA (при установленных ACC + A5)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок A5 → Кодирование:
- Emergency_assist_variante: EA_Variante_2
→ Применить
```

``` yaml title="Login code: 20103"
Блок 13 → Кодирование:
- Emergency_assist: activated
→ Применить
```

!!! note ""
    Для **Travel Assist** те же каналы часто выставляются вместе — см. [Travel Assist](travelAssist.md).  
    Workaround **без KLR** (отключение EA) — там же; используйте только временно.

## Traffic Jam Assist (ассистент в пробке)

TJA = ACC + адаптивный Lane Assist на **низкой скорости** (обычно до ~60 km/h). Нужны **ACC (13)**, **камера A5** и совместимая **прошивка/параметрия** камеры.

!!! warning ""
    На Evo камера **5WA 980 653** — другая линейка SW, чем MFK2/3 на классическом MQB. Параметрии с [MQB / camAssistFirmwares](../MQB/camAssistFirmwares.md) **не подходят** без проверки.

### Типовые каналы A5

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Блок A5 → Кодирование:
- HC_Variante: Hc_variante_2
- HC_point_of_intervention: early_setting_over_menu
- Traffic_jam_assist: activated
→ Применить
```

### Блок 13 — камера установлена

:octicons-verified-24: SFD: no (на части SW)

``` yaml title="Login code: 20103"
Блок 13 → Кодирование:
- Front_camera: installed
→ Применить
```

### Блок 44 — связь с усилителем руля (HCA)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 19249"
Блок 44 → Кодирование:
- Heading_control_assist: activated
→ Применить
```

### Меню на ГУ (5F)

``` yaml title="Login code: 20103"
Блок 5F → Адаптация:
Car_Function_List_BAP_Gen2:
- LDW_HCA_0x19: activated
Car_Function_Adaptations_Gen2:
- menu_display_Lane_Departure_Warning: activated
→ Применить
```

!!! tip ""
    Полный набор для **классического MQB** (3Q0 + параметрия) — [MQB / 3Q0_assistants](../MQB/3Q0_assistants.md). На Evo сверяйте наличие каждого канала.

## Блок 44 — усилитель рулевого управления

Используется для **Travel Assist**, **TJA**, **Auto Lane Change**:

| Канал | Назначение |
|-------|------------|
| `Heading_control_assist` | Lane Assist / TJA через электроусилитель |
| `Qfk_ma_function` | Auto Lane Change (см. [Travel Assist](travelAssist.md)) |

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 19249"
Блок 44 → Кодирование:
- Heading_control_assist: activated
→ Применить
```

Login **19249** — типичный для блока 44; уточняйте в ODIS для вашего SW.

## Travel Assist 2024+ (V2X, Golf 8.5, T-Roc FL)

С **~2024 MY** VW расширил Travel Assist:

- **V2X / swarm data** — удержание полосы при одной разметке, если есть данные других авто или впереди идущий транспорт  
- **Assisted lane change** на магистрали (см. [Auto Lane Change](travelAssist.md#auto-lane-change-opcionalno))  
- **Предупреждение о повороте** — рекомендуемая скорость перед кривой (зависит от навигации)

!!! note ""
    **Отдельного «V2X: on» в ODIS обычно нет** — функция включается комплектом **SW gateway 19 + A5 + 13 + навигация + PR IQ.DRIVE**.  
    После обновления SW проверьте, что **Travel Assist** и **Side Assist** активны в меню; кодирование — только если каналы были в «not coded».

### Что проверить после OTA / обновления дилера

1. Версии SW **19**, **A5**, **13** — не ниже рекомендованных для вашей модели.  
2. Каналы `Travel_Assist`, `KLR_installed` в 13 — см. [Travel Assist](travelAssist.md).  
3. Наличие **ёмкостного руля (KLR)** для полного TA (не workaround).  
4. На **2024+** — **SFD2** для любой записи.

## См. также

- [Travel Assist](travelAssist.md)
- [Кодирование ACC](acc.md)
- [Камера A5](headCameraUnit.md)
- [Прошивки камеры Evo](../MQB/camAssistFirmwares.md#mqb-evo-kamera-a5-5wa-980-653)
- [SFD](../sfd.md)
