# MQB EEPROM

In the MQB platform, just like in the PQ, some of the settings can be made directly in the EEPROM memory

## Known BCM memory addresses

Adaptations in the BCM block (09) are responsible for this:
``` yaml
Parameter Write Adaptation:
- parameter address: FExxxx # (1)!
- parameter value: yyy # (2)!

Parameter Read Adaptation:
- parameter address: FExxxx
```


1. Parameter address
2. Value in HEX system. For example, `05h = 5 = 0.5 seconds`, `0Ah = 10 = 1 second`, `14h = 20 = 2 seconds`

| Memory address | Old meaning | New meaning | Description |
|:-------------|:---------------:|:--------------:|:--------------------------------------------------------------------------------|
| FE0207 |       40 |       20 | Time to hold the button to lower the windows |
| FE0208 |       40 |       20 | Button hold time hold time for windows up and mirrors folding |