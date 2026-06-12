---
hide:
  - toc
status: new
---

# MEB platform coding

!!! warning "SFD required"
    On MEB (ID.3, ID.4, ID.5, Enyaq, Born, etc.), ECU writes require **SFD** / **SFD2** via ODIS online.  
    Details: [SFD and SFD2](../sfd.en.md).

### Cars on this platform

VW ID.3, ID.4, ID.5, ID. Buzz  
Audi Q4 e-tron  
Škoda Enyaq  
SEAT/Cupra Born  

### Main ECUs

    > Block 03 – ABS/ESP – code: 20103

    > Block 08 – Climate / HV heater

    > Block 09 – BCM – code: 31347

    > Block 13 – ACC / Front Assist (if fitted)

    > Block 17 – Instrument cluster – code: 20103

    > Block 19 – Gateway

    > Block 5F – Infotainment (ICAS)

    > Block A5 – Assistance camera (if fitted)

    > Block C5 – HV battery management

!!! tip ""
    This section is being expanded. Basic codings are on the subpages below.

### Sections

- [Driver assistance](assistants.en.md)
- [Climate and HV heating](climate.en.md)
- [Charging and HV battery](charging.en.md)
- [BCM — lights and comfort](bcm.en.md)
- [Head unit](headUnit.en.md)

## See also

- [Driver assistance](assistants.en.md)
- [Head unit](headUnit.en.md)
- [MQB-Evo](../MQB-Evo/index.en.md) — similar infotainment and SFD architecture
