# Charging and HV battery

!!! warning ""
    ECUs **C5**, **8C**, **8B** (BMS) on MEB are protected by **SFD** / **SFD2**. DC/AC limits are set by the **BMS**, not by a single “max current” adaptation.

## Factory settings (no ODIS)

In the **Charging** menu on ID.3/ID.4/Enyaq:

- **Reduce AC charging current** (e.g. 8 A instead of 16 A) — weak home circuit  
- **Departure time** — delayed charging for off-peak tariff  
- **Minimum SOC** (0–50%) — do not discharge below threshold  
- **Optimize DC charging** — battery preconditioning via route with charging stops

These do not require coding.

## Diagnosing slow charging (ODIS / OBD)

Useful **live values** (names vary by SW):

| ECU | Value | Purpose |
|-----|-------|---------|
| **C5 / 8B** | Dynamic limit for charging (A) | Current BMS limit |
| **C5 / 8B** | HV battery min/max temperature | Cold pack = low DC |
| **8E** | AC charge power / phases | Onboard charger limit |
| **19** | Charging mode | AC / DC / cable fault |

!!! tip ""
    If **Dynamic limit** is high but the station delivers less — the **charger** is limiting. If BMS limit is low with a warm battery — check BMS faults, isolation, SW updates.

## Manual HV battery heating (8C, diagnostic only)

!!! danger ""
    **Not a factory user feature.** Used by enthusiasts before DC charging in cold weather. Warranty risk, HV faults, aborted tests. Stationary only, with ODIS access.

On some ID.3/ID.4 (ECU **8C** Battery Energy Module):

1. ODIS online, unlock **SFD** on 8C.  
2. **Change Service → Development Mode** (otherwise output test may fail).  
3. **Output test** — HV battery heater (name varies), ~300 s.  
4. Ignition ON; hood slightly open on first run if required.  
5. Monitor ~5–6 kW heater power in live data; pack temperature should rise.

Factory **navigation preconditioning** is safer and needs no development mode.

## ECU C5 — what is usually **not** coded

- Maximum DC power (135 kW etc.) — BMS and temperature dependent  
- Pack capacity (58 / 77 / 82 kWh) — hardware, not enabled by coding  
- Bidirectional charging (V2H) — PR, SW, and market specific

If charging power drops, check **C5/8C DTCs**, **12V** supply (weak AUX → wakeups), and **SW updates** via ODIS first.
