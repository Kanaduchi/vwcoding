# BCM (ECU 09) — lights and comfort

!!! warning ""
    Writes to **09** on MEB require **SFD** (2024+ — **SFD2**).

### Coming Home / Leaving Home duration

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Coming_home_time:
- Coming_home_time: 30 s
Leaving_home_time:
- Leaving_home_time: 30 s
→ Apply
```

Adjust seconds to preference. Channel names may be `Coming_home` / `Leaving_home` in your SW.

### Auto-fold mirrors on lock

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 31347"
Block 09 → Coding:
Mirror_fold_in: automatic
→ Apply
```

If the channel is missing, the feature may be menu-only or not available for your PR codes.

### Comfort open/close (hold key on remote)

:octicons-verified-24: SFD: yes

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Comfort_open:
- Comfort_open: active
Comfort_close:
- Comfort_close: active
→ Apply
```

### Ambient lighting (if fitted)

Ambient zone coding on MEB is similar to [MQB-Evo / aestheticLights](../MQB-Evo/aestheticLights.en.md). Verify ambient PR codes.
