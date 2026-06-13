# Additional assistants (EA, TJA, ECU 44)

Coding guides for **MQB-Evo** beyond basic [Travel Assist](travelAssist.en.md).  
Hardware retrofits (radar, camera, steering wheel) — see [MQB / Addons](../MQB/addons.en.md) for similar logic; this page covers **coding** when hardware is already fitted.

!!! warning ""
    Writes to **A5**, **44**, **13** require **SFD**; on 2024+ vehicles — **SFD2** per operation. See [SFD](../sfd.en.md).

## Emergency Assist

EA stops the car with hazard lights if the driver does not respond (no KLR / hands off for too long).

### Enable EA (with ACC + A5 fitted)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block A5 → Coding:
- Emergency_assist_variante: EA_Variante_2
→ Apply
```

``` yaml title="Login code: 20103"
Block 13 → Coding:
- Emergency_assist: activated
→ Apply
```

!!! note ""
    For **Travel Assist** these channels are often set together — see [Travel Assist](travelAssist.en.md).  
    The **no-KLR workaround** (disabling EA) is there too — temporary use only.

## Traffic Jam Assist

TJA = ACC + adaptive Lane Assist at **low speed** (typically up to ~60 km/h). Requires **ACC (13)**, **A5 camera**, and matching **firmware/parameters**.

!!! warning ""
    On Evo the camera is **5WA 980 653** — different SW line than MFK2/3 on classic MQB. Parameters from [MQB / camAssistFirmwares](../MQB/camAssistFirmwares.en.md) **do not apply** without verification.

### Typical A5 channels

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 20103"
Block A5 → Coding:
- HC_Variante: Hc_variante_2
- HC_point_of_intervention: early_setting_over_menu
- Traffic_jam_assist: activated
→ Apply
```

### ECU 13 — front camera fitted

:octicons-verified-24: SFD: no (on some SW)

``` yaml title="Login code: 20103"
Block 13 → Coding:
- Front_camera: installed
→ Apply
```

### ECU 44 — steering assist link (HCA)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 19249"
Block 44 → Coding:
- Heading_control_assist: activated
→ Apply
```

### Head unit menu (5F)

``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Car_Function_List_BAP_Gen2:
- LDW_HCA_0x19: activated
Car_Function_Adaptations_Gen2:
- menu_display_Lane_Departure_Warning: activated
→ Apply
```

!!! tip ""
    Full set for **classic MQB** (3Q0 + parameters) — [MQB / 3Q0_assistants](../MQB/3Q0_assistants.en.md). On Evo verify each channel exists.

## ECU 44 — steering assist

Used for **Travel Assist**, **TJA**, **Auto Lane Change**:

| Channel | Purpose |
|---------|---------|
| `Heading_control_assist` | Lane Assist / TJA via power steering |
| `Qfk_ma_function` | Auto Lane Change (see [Travel Assist](travelAssist.en.md)) |

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 19249"
Block 44 → Coding:
- Heading_control_assist: activated
→ Apply
```

Login **19249** is typical for ECU 44; confirm in ODIS for your SW.

## Travel Assist 2024+ (V2X, Golf 8.5, T-Roc FL)

From **~2024 MY** VW extended Travel Assist:

- **V2X / swarm data** — lane keeping with one line marking when swarm or lead vehicle data is available  
- **Assisted lane change** on highways (see [Auto Lane Change](travelAssist.en.md#auto-lane-change-optional))  
- **Corner ahead** speed hint (navigation dependent)

!!! note ""
    There is usually **no single «V2X: on» channel** in ODIS — the feature comes from **SW bundle 19 + A5 + 13 + navigation + IQ.DRIVE PR codes**.  
    After SW updates verify **Travel Assist** and **Side Assist** in the menu; code only if channels were «not coded».

### After OTA / dealer update

1. SW versions **19**, **A5**, **13** — meet model recommendations.  
2. Channels `Travel_Assist`, `KLR_installed` in 13 — see [Travel Assist](travelAssist.en.md).  
3. **Capacitive steering wheel (KLR)** for full TA (not the workaround).  
4. On **2024+** — **SFD2** for any write.
