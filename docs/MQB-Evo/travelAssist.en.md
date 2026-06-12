# Travel Assist

Travel Assist combines **ACC** and **Lane Assist**: the car maintains distance and stays centered in the lane.

!!! warning "Important information"
    - Full Travel Assist requires **ACC**, assistance camera **A5**, and usually a **capacitive steering wheel (KLR)**.
    - On MQB-Evo, most writes to **A5** and **13** require **SFD** — see [SFD and SFD2](../sfd.en.md).
    - Back up ECUs A5 and 13 before coding.

!!! note ""
    Codings were verified on Golf 8, Octavia 4, Leon 4, Formentor. Camera and radar software must support the feature.

## Activating Travel Assist
### Step 1 — ECU A5 (assistance camera)

:octicons-verified-24: SFD: yes

!!! tip ""
Channel names may differ by software version. Look for equivalents in ODIS/OBD11.

=== "Coding in ODIS"
    
``` yaml title="Login code: 20103"
    Block A5 → Coding:
    - HC_point_of_intervention: early_setting_over_menu
    - HC_Variante: Hc_variante_2
    - Emergency_assist_variante: EA_Variante_2
    - Lane_Assist_off_Text: Deactivated
    - HC_advanced_takeover_request: Not_coded
    → Apply
    ```


=== "Coding in OBD11"
    
```yaml
    A5 Front sensor driver assist → Long coding:
    - HC point of intervention: early (via menu)
    - HC Variante: Variante 2
    - Emergency assist variante: EA Variante 2
    - Lane Assist off text: Disabled
    ```


### Step 2 — ECU 13 (ACC radar)

:octicons-verified-24: SFD: no (for listed channels on the SW part)

``` yaml title="Login code: 20103"
Block 13 → Coding:
- KLR_installed: installed
- Travel_Assist: activated
- Overtaking_right_prevention: deactivated
→ Apply
```


!!! note ""
`Overtaking_right_prevention: deactivated` is optional — disables ACC right-lane overtaking lock (see also [ACC](acc.en.md)).

### After coding

1. Clear errors in A5 and 19 (Gateway), if they appear.
2. Turn off the ignition and close the car for 1–2 minutes.
3. Check the **Travel Assist** item in the assistants menu.

## If Travel Assist is «unavailable» (no KLR)

Without the capacitive KLR strip, the system may report Travel Assist as unavailable.

**Temporary workaround** (at your own risk — disables Emergency Assist):

=== "Coding in OBD11"
    
    ```yaml
      A5 → Long coding:
      - Emergency_Assist: Not_coded
      - KLR: Not_coded
    ```
    Then clear DTCs in A5 and Gateway and cycle ignition.

!!! danger ""
    Emergency Assist will not perform a controlled stop with hazard lights if the driver is unresponsive. Use only until a KLR steering wheel is installed.

## Auto Lane Change (optional)

Not available on all trims. Typical requirements (2023+):

- ACC + Side Assist (blind spot)
- A5 camera **5WA 980 653D**, SW **3403+**
- PLA parking assist (12K)
- navigation

Verify compatibility by VIN and PR codes — market and factory equipment vary.

### Configuration (when hardware supports it)

:octicons-verified-24: SFD: yes

!!! warning ""
    Back up ECUs **09**, **44**, and **A5**. On 2024+ vehicles **SFD2** may be required for each write.

=== "Coding in ODIS"

    ``` yaml title="Login code: 20103"
    Block 09 → Adaptation:
    BCM driver assistance turn signal functions:
    - Travel_Assist_Blinken: active
    → Apply
    ```

    ``` yaml title="Login code: 20103"
    Block 44 → Coding:
    - Qfk_ma_function: active
    → Apply
    ```

    ``` yaml title="Login code: 20103"
    Block A5 → Coding:
    - HC_Variante: Hc_variante_3 (or Hc_variante_5)
    - HC_mob_line: coded
    → Apply
    ```

!!! tip ""
    On some cars BCM uses **Flashing function — Travel Assist → Active** instead of `Travel_Assist_Blinken`.  
    The feature usually works **from ~90 km/h** on motorways. PLA **12K** may need separate coding of ECU **76** — check SW and PR codes.

## See also

- [Additional assistants (EA, TJA, ECU 44)](driverAssistExtras.en.md)
- [ACC / pACC MQB](../MQB/pACC.en.md)
- [ACC coding MQB-Evo](acc.en.md)
- [Assistance camera MQB-Evo](headCameraUnit.en.md)
- [SFD and SFD2](../sfd.en.md)