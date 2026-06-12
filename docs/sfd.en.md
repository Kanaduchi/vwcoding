---
template: ./main.en.html
title: Coding of VW cars
status: new
---
# SFD and SFD2 — VAG diagnostic protection

!!! warning "Important"
    Starting with **MQB Evo** (Golf 8, Octavia 4, Leon 4, ID.3, etc.), many write operations (coding, adaptations, parameter uploads) require **SFD** (*Schutz Fahrzeug Diagnose*) unlock.

    On vehicles from roughly **2024 model year**, **SFD2** adds a separate token for each write operation.

## SFD (first version, from ~2020)

|                      |                                                                                |
|----------------------|--------------------------------------------------------------------------------|
| **Where used**       | MQB Evo, MEB, some newer MLB                                                   |
| **What it protects** | ECU writes (coding, adaptations, parameter files)                              |
| **How to unlock**    | ODIS Service **online** + GeKo / UMA account (dealer or partner access)        |
| **Duration**         | Usually **90 minutes** or until the session ends                               |
| **Tools**            | ODIS Service, ODIS Engineering; OBD11 — with SFD support and an active account |

!!! tip ""
    SFD vehicles often use gateway part numbers such as **5WA 907 530**. MQB-Evo pages on this site mark SFD requirements with `:octicons-verified-24: SFD: yes`.

### Typical ODIS workflow

1. Connect VAS6154 / ENET and launch ODIS Service online.
2. Read the ECU → **Access authorization** → request an SFD token (online).
3. After a successful unlock, perform coding or adaptations.
4. When the session ends, the ECU is protected again.

## SFD2 (from ~2024 MY)

SFD2 was introduced for **UNECE R155/R156** cybersecurity requirements.

| SFD v1                                   | SFD v2                                                              |
|------------------------------------------|---------------------------------------------------------------------|
| Diagnostic session access / basic unlock | Protection of a **specific write** (coding, adaptation, parameters) |
| One window for work with the ECU         | Separate checksum token **for each write operation**                |

!!! danger ""
    On many 2024+ vehicles **VCDS and some third-party dongles cannot obtain SFD2 tokens**. Use **ODIS Service online** with an active VW Group subscription for writes.

### Examples of SFD2 models (incomplete list)

VW Golf 8 (from 04.2024), Polo AE1, T-Roc, Tiguan Allspace, Touran, Taigo, ID.3/ID.4/ID.5 (2024+), Skoda Octavia NX (GP1), Fabia PJ, Scala, Kamiq, Karoq, Seat Leon KL/KU, Cupra Formentor, etc. — verify by production date and PR codes.

## Tool compatibility

This table is indicative — capabilities depend on software version, subscription, and **production date**.

| Tool                      | SFD v1 (Evo ~2020–2023) | SFD2 (2024+ MY) | Notes                                            |
|---------------------------|-------------------------|-----------------|--------------------------------------------------|
| **ODIS Service online**   | ✅                       | ✅               | Reference tool; GeKo/UMA + VAS6154/ENET          |
| **ODIS Engineering**      | ✅                       | ✅               | Parameters, flashing; same account requirements  |
| **OBDeleven Pro** (SFD)   | ✅ often                 | ⚠️ limited      | Depends on model support and OBD11 servers       |
| **VCDS**                  | ⚠️ rare                 | ❌ usually no    | Read often works; SFD2 writes — no               |
| **Car Scanner / VAG OBD** | ⚠️                      | ❌               | Mostly live data; not meant for protected writes |
| **VCP, other dongles**    | ⚠️                      | ❌               | Verify current SFD2 support for your VIN         |

!!! tip ""
    Before buying a tool “for Golf 8 / Octavia 4 2024”, confirm **SFD2 support for your VIN**, not just SFD v1.

## ECUs commonly protected

On **MQB-Evo / MEB**, writes typically require SFD for:

| ECU         | Function                             | SFD       | SFD2 (2024+) |
|-------------|--------------------------------------|-----------|--------------|
| **19**      | Gateway, topology                    | yes       | yes          |
| **09**      | BCM, lights, comfort                 | often     | often        |
| **17**      | Instrument cluster                   | often     | often        |
| **5F**      | Infotainment / ICAS                  | yes       | yes          |
| **A5**      | Assistance camera                    | yes       | yes          |
| **44**      | Steering assist (Travel Assist, ALC) | yes       | yes          |
| **13**      | ACC / Front Assist                   | sometimes | sometimes    |
| **76**      | Park Assist                          | sometimes | sometimes    |
| **4B**      | IQ.Light / MFK                       | yes       | yes          |
| **C5 / 8C** | HV battery (MEB)                     | yes       | yes          |

On MQB-Evo pages, `:octicons-verified-24: SFD: yes/no` applies to the **specific coding**, not necessarily every channel in the ECU.

## Common errors and fixes

| Symptom                                 | Likely cause                        | Action                                                              |
|-----------------------------------------|-------------------------------------|---------------------------------------------------------------------|
| «Access denied» / write rejected        | SFD not unlocked or token expired   | ODIS online → Access authorization → new SFD                        |
| Write rejected on 2024+ with SFD active | **SFD2** token needed per operation | ODIS Service online; VCDS/OBD11 often fail                          |
| SFD OK but channel not applied          | Wrong ECU SW or channel missing     | Match SW version; not all channels exist on all PR codes            |
| Hood / handbrake required               | ODIS condition for MQB 2021+        | Meet conditions before writing (see [MQB / index](MQB/index.en.md)) |
| Error after parameter upload            | Incompatible parameter file         | Backup first; use parameters for your HW/SW                         |
| Gateway 19 topology error               | Incorrect module installation       | Do not code blindly; verify PR and ECU 19 coding                    |

## Classic MQB (pre-Evo)

Classic **MQB** (Octavia A7, Tiguan AD1, pre-Evo Passat B8) usually has **no SFD**. Block login codes are enough.

For **2021 MY and older** MQB cars, ODIS may require before writing to some ECUs:

- hood open;
- handbrake engaged.

See [MQB / General information](MQB/index.md).

## Recommendations

1. **Back up** ECU coding and adaptations before changes.
2. Check the **SFD: yes/no** label on MQB-Evo pages.
3. For newer cars, allow time for an **online ODIS session**.
4. Do not rely on old VCDS-only guides for Evo and MEB without checking SFD requirements.

## See also

- [Software and adapters](utils/programs.md)
- [ODIS E instruction](utils/odis-e.md)
- [MQB-Evo](MQB-Evo/index.md)
- [MEB](MEB/index.md)