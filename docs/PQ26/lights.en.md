# LIGHT CONTROL

### Turn off the license plate light when opening the trunk

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte 25KZL HA60-Light_Control_HD_AB_25 – instead of “Always”, select the value “Only if closed”
→ Apply
```


### Deactivation of interior lighting when opening the trunk

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Interior lighting-Innenlicht bei offenem Heckdeckel einschalten, “active change” to value “not active”
→ Apply
```


### Flashing turn signals with LED DRLs

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte4TFL LB43-Light_Function_G_4, Blinken links/rechts Hellphase
Leuchte4TFL LB43-Dimming_GH_4, 0
Leuchte4TFL LB43-Dimming_Direction_GH_4, minimize
Leuchte5 TFL RB6-Light_Function_G_5, Blinken links/rechts Hellphase
Leuchte5 TFL RB6-Dimming_GH_5, 0
Leuchte5 TFL RB6-Dimming_Direction_GH_5, minimize
→ Apply
```


### DRL extinguishing when raising the handbrake

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Daytime running lights-Tagfahrlicht Dauerfahrlicht bei Handbremse abschalten — active
For 2019 model year::
Aussenlicht_Front-Tagfahrlicht_Dauerfahrlicht_bei_Handbremse_abschalten: Activate
→ Apply
```


### DRL only in AUTO light switch position

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Daytime running lights-Tagfahrlicht nur in Schalterstellung AUTO,active
For 2019 model year::
Aussenlicht_Front — Tagfahrlicht nur in Schalterstellung AUTO,active
→ Apply
```


### CORNER function (fog lights turning corners)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
:
Leuchte12NL LB40-Light_Function_B_12 — Abbiegelicht links
Leuchte13NL RB3-Light_Function_B_13 — Abbiegelicht rechts
:
Leuchte12NL LB40-Light_Function_C_12 – Abbiegelicht links
Leuchte12NL LB40-Dimming_CD_12 – 100
Leuchte12NL LB40-Dimming_Direction_CD_12 – maximize
Leuchte13NL RB3-Light_Function_C_13 – Abbiegelicht rechts
Leuchte13NL RB3-Dimming_CD_13 – 100
Leuchte13NL RB3-Dimming_Direction_CD_13 – maximize
Setting the CORNER on/off speed:
static AFS light-Lower speed threshold, 0.0 km/h
static AFS light-Upper speed threshold, 40.0 km/h 
Turning on both PTFs when reverse gear is engaged
static AFS light-bei Rueckwaertsfahrt – both sides
→ Apply
```


### LED license plate illumination (adaptation)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte25KZL HA60-Type_Of_Load_25 — 2* 5W – change value to «LED Kleinleistung ohne Open Load Diagnose» (LED)
Leuchte25KZL HA60-Dimming_AB_25 – 100 – change to value «127»
→ Apply
```


### Activation of the right rear PTF

```
Not available on Rapid. There is no channel for the right rear fog light alone. The wire to the lamp is missing.
It can be wired from the left lamp.
```


### Turning on the rear lights along with DRLs (with license plate and instrument lights illuminated)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Daytime running lights-Tagfahrlicht-Dauerfahrlicht aktiviert zusaetzlich Standlicht: active
For 2019 model year::
Aussenlicht_Front-Tagfahrlicht-Dauerfahrlicht aktiviert zusaetzlich Standlicht: active
→ Apply
```


### Turning on the rear lights in DRL mode (without license plate and instrument lights)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte23SL HLC7-Light_Function_D_23 → select – Daytime running lights → save
Leuchte24SL HRA69-Light_Function_D_24 → select → Daytime running lights → save
Leuchte23SL HLC7-Dimming_CD_23:  «75» → save
Leuchte24SL HRA69-Dimming_CD_24:  «75» → save
→ Apply
```


### Strobes: PTF - High beam

!!! warning "" 
With this encoding it is impossible to use the high beam with fog lights.
  
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Driving light and parking light:
- max_scheinwerfer_2limitieren: Activate
For 2019 model year::
Aussenlicht_Front:
- max_scheinwerfer_2limitieren → in_Betrieb_lassen: Activate
→ Apply
```


### Strobe: PTF - high beam (when blinking high beam)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte12NL LB40-Light_Function_G_12: with not active change to Headlamp flasher
Leuchte12NL LB40-Dimming_Direction_GH_12: with maximize change to minimize
Leuchte13NL RB3-Light_Function_G_13: with not active change to Headlamp flasher
Leuchte13NL RB3-Dimming_Direction_GH_13: with maximize change to minimize
→ Apply
```


### Strobe: Low beam - High beam (when blinking high beam)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte6ABL LB44-Light_Function_C_6, with “not active” change to “Headlamp flasher”
Leuchte6ABL LB44-Dimming_Direction_CD_6, with “maximize” change to minimize
Leuchte7ABL RB5-Light_Function_C_7, with “not active” change to “Headlamp flasher”
Leuchte7ABL RB5-Dimming_Direction_CD_7, “with maximize” change to minimize
→ Apply
```


### Strobe: LED DRL - High beam

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte4TFL LB43-Light_Function_G_4 – Lichthupe (Headlamp flasher)*
Leuchte4TFL LB43-Dimming_GH_4 → 0
Leuchte4TFL LB43-Dimming_Direction_GH_4 – minimize
Leuchte5 TFL RB6-Light_Function_G_5 – Lichthupe (Headlamp flasher)*
Leuchte5 TFL RB6-Dimming_GH_5 – 0
Leuchte5 TFL RB6-Dimming_Direction_GH_5 – minimize
→ Apply
```


### Coming Home (seeing off with light)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Comfort illumination-Coming Home Verbaustatus – automatic or manual
Comfort illumination-Menuesteuerung Coming Home Werkseinstellung – active
Comfort illumination-Menueeinstellung Cominghome – 10 s 
Comfort illumination-Coming Home Leuchten – Low beam or Fog light
Comfort illumination-Coming-home Einschaltereignis – Driver door or Ignition
Comfort illumination-Helligkeitsschwelle Infrarot-Messung –0
If low beam headlights are selected:
Leuchte6ABL LB44-Light_Function_B_6 – Coming Home Leaving Home
Leuchte7ABL RB5-Light_Function_B_7 – Coming Home Leaving Home
If fog lights are selected:
Leuchte12NL LB40-Light_Function_B_12 — Coming Home Leaving Home
Leuchte13NL RB3-Light_Function_B_13 — Coming Home Leaving Home
Welcome light — Leaving-Home 
Comfort illumination-Leaving-Home Verbausstatus – Enabled
Comfort illumination-lho_aktiviert – active
Comfort illumination-lho_zeit – 10 s
Coming Home/Leaving Home with reverse lights
Leuchte28RFL C3-Light_Function_C_28 – Coming Home Leaving Home
Leuchte28RFL C3-Dimming_CD_28 – 100
Leuchte28RFL C3-Dimming_Direction_CD_28 – maximize
For 2019 model year::
Aussenlicht_uebergreifend – Coming Home Verbaustatus – automatic or manual
Aussenlicht_uebergreifend — Menuesteuerung Coming Home Werkseinstellung – active
Aussenlicht_uebergreifend — Menueeinstellung Cominghome – 10 s
Aussenlicht_uebergreifend – Coming Home Leuchten – Low beam or Fog light
Aussenlicht_uebergreifend – Coming-home Einschaltereignis – Driver door or Ignition
Aussenlicht_uebergreifend — Helligkeitsschwelle Infrarot — Messung – 72.0
If low beam headlights are selected:
Leuchte6ABL LB44 — Light_Function_B_6 – Coming Home Leaving Home
Leuchte7ABL RB5 — Light_Function_B_7 – Coming Home Leaving Home
If fog lights are selected:
Leuchte6ABL LB44 – Light_Function_B_6 – change to not active
Leuchte7ABL RB5 – Light_Function_B_7 – change to not active
Leuchte12NL LB40-Light_Function_B_12 — Coming Home Leaving Home
Leuchte13NL RB3-Light_Function_B_13 — Coming Home Leaving Home
Welcome light — Leaving-Home 
Aussenlicht_uebergreifend — Leaving-Home Verbausstatus – Enabled 
Aussenlicht_uebergreifend — lho_aktiviert – active
Aussenlicht_uebergreifend — lho_zeit – 10 s
→ Apply
```


### Comfort turn signal (19 y.o.)

!!! note ""
Possible names to search for: Au?enlicht_Blinker, Komfortblinken, Blinkzyklen.
  
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Aussenlicht_Blinker:
- Komfortblinken_Blinkzyklen – select value from 1 to 5
→ Apply
```
