# Travel Assist

Travel Assist объединяет **ACC** и **Lane Assist**: автомобиль держит дистанцию и центрируется в полосе.

!!! warning "Важная информация"
    - Для полноценного Travel Assist нужны **ACC**, камера ассистентов **A5** и, как правило, **ёмкостное рулевое колесо (KLR)**.
    - На MQB-Evo почти все записи в блок **A5** и **13** требуют **SFD** — см. [SFD и SFD2](../sfd.md).
    - Перед кодированием сделайте backup блоков A5 и 13.

!!! note ""
    Кодировки проверялись на Golf 8, Octavia 4, Leon 4, Formentor. SW камеры и radar должны поддерживать функцию — сверяйте версии прошивок.

## Активация Travel Assist

### Шаг 1 — блок A5 (камера ассистентов)

:octicons-verified-24: SFD: yes

!!! tip ""
    Названия каналов могут отличаться в зависимости от SW. Ищите аналоги в ODIS/OBD11.

=== "Кодирование в ODIS"
    ``` yaml title="Login code: 20103"
    Блок A5 → Кодирование:
    - HC_point_of_intervention: early_setting_over_menu
    - HC_Variante: Hc_variante_2
    - Emergency_assist_variante: EA_Variante_2
    - Lane_Assist_off_Text: Deactivated
    - HC_advanced_takeover_request: Not_coded
    → Применить
    ```

=== "Кодирование в OBD11"
    ```yaml
    A5 Front sensor driver assist → Long coding:
    - HC point of intervention: early (via menu)
    - HC Variante: Variante 2
    - Emergency assist variante: EA Variante 2
    - Lane Assist off text: Disabled
    ```

### Шаг 2 — блок 13 (радар ACC)

:octicons-verified-24: SFD: no (для перечисленных каналов на части SW)

``` yaml title="Login code: 20103"
Блок 13 → Кодирование:
- KLR_installed: installed
- Travel_Assist: activated
- Overtaking_right_prevention: deactivated
→ Применить
```

!!! note ""
    `Overtaking_right_prevention: deactivated` — опционально, отключает запрет обгона справа при ACC (см. также [ACC](acc.md)).

### После кодирования

1. Очистить ошибки в A5 и 19 (Gateway), если появились.
2. Выключить зажигание, закрыть авто на 1–2 минуты.
3. Проверить пункт **Travel Assist** в меню ассистентов.

## Если Travel Assist «недоступен» (нет KLR)

На руле без ёмкостной полоски KLR система может показывать ошибку доступности.

**Временный workaround** (на свой риск — отключается Emergency Assist):

=== "Кодирование в OBD11"
    ```yaml
    A5 → Long coding:
    - Emergency_Assist: Not_coded
    - KLR: Not_coded
    ```
    Затем очистить DTC в A5 и Gateway, цикл зажигания.

!!! danger ""
    Emergency Assist не выполнит автоматическую остановку с аварийкой при отсутствии реакции водителя. Используйте только как временную меру до установки KLR-руля.

## Auto Lane Change (опционально)

Доступно **не на всех** комплектациях. Типичные требования (2023+):

- ACC + Side Assist (слепые зоны)
- камера A5 **5WA 980 653D**, SW **3403+**
- парковочный ассистент PLA (12K)
- навигация

Проверяйте совместимость по VIN и PR-номерам — функция зависит от завода и рынка.

### Настройка (если аппаратная часть поддерживает)

:octicons-verified-24: SFD: yes

!!! warning ""
    Делайте backup блоков **09**, **44**, **A5**. На автомобилях 2024+ может потребоваться **SFD2** на каждую запись.

=== "Кодирование в ODIS"

    ``` yaml title="Login code: 20103"
    Блок 09 → Адаптация:
    Функции BCM ассистентов поворотников:
    - Travel_Assist_Blinken: active
    → Применить
    ```

    ``` yaml title="Login code: 20103"
    Блок 44 → Кодирование:
    - Qfk_ma_function: active
    → Применить
    ```

    ``` yaml title="Login code: 20103"
    Блок A5 → Кодирование:
    - HC_Variante: Hc_variante_3 (или Hc_variante_5)
    - HC_mob_line: coded
    → Применить
    ```

!!! tip ""
    На части автомобилей в BCM вместо адаптации `Travel_Assist_Blinken` используется канал **Flashing function — Travel Assist → Active**.  
    Функция обычно активна **от ~90 km/h** на автомагистрали. Для PLA **12K** может потребоваться отдельное кодирование блока **76** — сверяйте SW и PR-коды.
