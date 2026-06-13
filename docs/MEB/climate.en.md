# Climate and HV heating

!!! warning ""
    ECU **08** on MEB controls cabin climate and is linked to the **HV heater**. Writes require **SFD** (2024+ — **SFD2**). See [SFD](../sfd.en.md).

Block 08 on MEB EVs is similar to MQB-Evo, but some channels are missing or named differently — verify adaptations in ODIS for your SW.

### Save Air Care (cabin filtration) setting

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block 08 → Adaptation:
Filtering_interior_air_saving:
- Filtering_interior_air_saving: active
→ Apply
```

Values: `not_active` — do not store; `active` — store; `depending_on_standing_time` — depends on parking time.

### Save recirculation mode

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block 08 → Adaptation:
Save air recirculation status at terminal 15 off:
- Save air recirculation status at terminal 15 off: storing
→ Apply
```

### Save seat heating level (disable auto step-down)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block 08 → Adaptation:
Time for seat heating power reduction Level 3 to level 2:
- param_Time_for_seat_heating_power_reduction_Level_3_to_level_2: 0 min
Time for seat heating power reduction Level 2 to level 1:
- param_Time_for_seat_heating_power_reduction_Level_2_to_level_1: 0 min
→ Apply
```

`0 min` disables automatic power reduction (keeps the selected level).

### Cabin preconditioning (app / timer)

Factory **departure timer** and heating via **We Connect / MyŠkoda** are configured in the car menu and app. Block 08 usually does not need a separate adaptation for this.

For **HV battery preconditioning** before DC charging see [Charging and HV](charging.en.md) — different path (ECU **8C**), not climate 08.
