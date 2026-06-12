# Head unit (ICAS)

!!! warning ""
    ECU **5F** on MEB is **SFD**-protected. Use ODIS online for writes.

### Video in Motion

!!! note ""
Video lock speed threshold is set in ECU 5F. Channel name depends on ICAS version (Discover Pro / Max).

``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Video_speed_threshold: 0 km/h
→ Apply
```


Alternative via parameter file — see [MQB / Head unit](../MQB/headDevice.en.md) (Video in motion) and the FEC generator in [utils](../utils/fec.en.md).

### Disable volume jump at startup

``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Loudness_normalization_startup: deactivated
→ Apply
```


!!! tip ""
If the channel is missing, check a current parameter set for your ICAS at [mibsolution.one](https://mibsolution.one).

### Developer / engineering menu

Similar to MQB Evo — via SWaP/FEC or ODIS Engineering.  
See [MQB-Evo / Head unit](../MQB-Evo/headControlUnit.en.md).