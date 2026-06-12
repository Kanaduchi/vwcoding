# RETROFIT

### [PR-PWH] Light assistant, Rain sensor, Coming/Leaving Home

!!! info "Sensor numbers"
5Q0 955 547A – 2016MY  
    5Q0 955 547B – 2017MY  
    The sensors are interchangeable. Those. 547A is suitable for 2016MY and vice versa.

``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 06 – Bits 0-1 select 02 Light sensor installed [PR-8K3/8K9+8N6]
Byte 06 – Bit 3: Activate
Byte 07 – Bits 0-1 Leaving: Seat/Škoda/Volkswagen
Byte 07 – Bit 5: enable
Byte 13 – Bit 5: enable
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Coding:
In the list of devices, select 5Q0 955 547B light/rain sensor (RLHS)
Byte 0 – Bytes 1-2 – select 185E or 984D
As a result, the encoding takes value - 00 18 5E
For cars with heated windshield - 00 98 4D
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Assistance light functions-Assistenzfahrlicht bei Regen – active
Assistance light functions-AFL Zeitverzoegerung – 2 000 ms
Assistance light functions-Lichtsensorempfindlichkeit – normal
Assistance light functions-Assistance_lighting_sensitivity_ajustable — present
Comfort illumination-Coming Home Verbaustatus – automatic
Comfort illumination-Menuesteuerung Coming Home Werkseinstellung – active
Comfort illumination-Menueeinstellung Cominghome – 10 s
Comfort illumination-Coming Home Leuchten – Low beam
Comfort illumination-Coming-home Einschaltereignis – Driver door
Comfort illumination-Helligkeitsschwelle Infrarot-Messung – 72.0
Comfort illumination-Leaving-Home Verbausstatus – Enabled
Comfort illumination-lho_aktiviert – active
Comfort illumination-lho_zeit – 10 s
Comfort illumination-Helligkeitsschwelle Forward-Messung – 100
Driving light and parking light-Menueeinstellung CHO LHO – Menuesteuerung Zeit aktivieren
Windshield wiper-Regensensor aktivieren – activated
Rear Window Wiper-Komfortwischen Heck – active
Rear Window Wiper-Menuesteuerung Komfortwischen HW – active
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte12NL LB40-Light_Function_B_12 - was Abbiegelicht links, set nicht active - save
Leuchte13NL RB3-Light_Function_B_13 - was Abbiegelicht rechts, set nicht active - save
Leuchte12NL LB40-Light_Function_C_12 – Abbiegelicht links
Leuchte12NL LB40-Dimming_CD_12 – 100
Leuchte13NL RB3-Light_Function_C_13 – Abbiegelicht rechts
Leuchte13NL RB3-Dimming_CD_13 – 100
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 0 – Bytes 1-2 – select 185E (984D)
or write a ready-made encoding: 00185E (00984D)
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Auxiliary lighting functions - Rain/light sensor → Rain/light sensor
Auxiliary lighting functions - Humidity sensor → set.
Auxiliary lighting functions - Will Beam assistant: responsivity adjustable via BAP → available
Aussenlicht_uebergreifend-Light rotary sw. with AFL → Yes
Windshield wiper-rain_sensor_function → installed.
Auxiliary lighting functions - Assistenzfahrlicht bei Regen – active
Auxiliary lighting functions - AFL Zeitverzoegerung – 0 ms
Auxiliary lighting functions - Lichtsensorempfindlichkeit - normal
Aussenlicht_uebergreifend-Coming Home Verbaustatus – automatically
Aussenlicht_uebergreifend-Menuesteuerung Coming Home Werkseinstellung – active
Aussenlicht_uebergreifend-Menueeinstellung Cominghome – 10 s
Aussenlicht_uebergreifend-Coming Home Leuchten – Low beam
Aussenlicht_uebergreifend-Coming-home Einschaltereignis – Driver door
Aussenlicht_uebergreifend-Helligkeitsschwelle Infrarot-Messung – 72.0
Aussenlicht_uebergreifend-Leaving-Home Verbausstatus – allowed
Aussenlicht_uebergreifend-lho_aktiviert – active
Aussenlicht_uebergreifend-lho_zeit – 10 s
Aussenlicht_uebergreifend-Helligkeitsschwelle Forward-Messung – 100
Aussenlicht_uebergreifend-Menueeinstellung CHO LHO – Menuesteuerung Zeit aktivieren
Aussenlicht_uebergreifend-Lichtdrehschalter_mit_Nebellicht_bei_Assistenzfahrlicht – Yes
Windshield wiper — Regensensor aktivieren – active
→ Apply
```


### [PR-8X0] Replacing standard halogen headlights with standard xenon ones

``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 06 – Bits 5-6 – change 00 to 20
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte6ABL LB44 – Type_Of_Load_6 – select Xenon Abblendlicht
Leuchte7ABL RB5 – Type_Of_Load_7 – select Xenon Abblendlicht
→ Apply
```


### [PR-PXE] Bi-xenon installation

``` yaml title="Login code: 31347"
Block 09 → Coding:
Lower_beam_lamp_typ – GDL
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte 0 BLK VL B35 - aka left front turn signal:
- Dimming_AB_0 — 128
- Light_Function_A_0 — Blinken links Hellphase
- Type_Of_Load_0 — LED Blinkleuchten
Leuchte 1 BLK VR B23 - aka right front turn signal:
- Dimming_AB_1 — 128
- Light_Function_A_1 — Blinken rechts Hellphase
- Type_Of_Load_1 — LED Blinkleuchten
Leuchte2SL VL B22 - it’s also the front left clearance:
- Dimming_AB_2 — 100
- Dimming_CD_2 — 30
- Dimming_Direction_CD_2 — maximize
- Dimming_Direction_EF_2 — minimize
- Dimming_EF_2 — 28
- Light_Function_A_2 — Daytime running lights
- Light_Function_C_2 — Parking light
- Light_Function_D_2 — Parking light left
- Light_Function_E_2 — Blinken links Hellphase
- Type_Of_Load_2 — LED Tagfahrlichtmodul Signal
Leuchte3SL VR B36 - aka front right clearance:
- Dimming_AB_3 — 100
- Dimming_CD_3 — 30
- Dimming_Direction_CD_3 — maximize
- Dimming_Direction_EF_3 — minimize
- Dimming_EF_3 — 28
- Light_Function_A_3 — Daytime running lights
- Light_Function_C_3 — Parking light
- Light_Function_D_3 — Parking light right
- Light_Function_E_3 — Blinken rechts Hellphase
- Type_Of_Load_3 — LED Tagfahrlichtmodul Signal
Leuchte4TFL LB43 - aka left DRL:
- Dimming_AB_4 — 127
- Dimming_CD_4 — 127
- Dimming_Direction_CD_4 — maximize
- Dimming_Direction_EF_4 — minimize
- Dimming_EF_4 — 0
- Light_Function_A_4 — Daytime running lights
- Light_Function_C_4 — Parking light
- Light_Function_D_4 — Parking light left
- Light_Function_E_4 — Blinken links aktiv
- Type_Of_Load_4 — LED Tagfahrlichtmodul Versorgung
Leuchte5 TFL RB6—aka right DRL:
- Dimming_AB_5 — 127
- Dimming_CD_5 — 127
- Dimming_Direction_CD_5 — maximize
- Dimming_Direction_EF_5 — minimize
- Dimming_EF_5 — 0
- Light_Function_A_5 — Daytime running lights
- Light_Function_C_5 — Parking light
- Light_Function_D_5 — Parking light right
- Light_Function_E_5 — Blinken rechts aktiv
- Type_Of_Load_5 — LED Tagfahrlichtmodul Versorgung
Leuchte6ABL LB44 - aka near left:
- Dimming_AB_6 — 100
- Dimming_CD_6 — 100
- Dimming_Direction_CD_6 — maximize
- Light_Function_A_6 — Abblendlicht links
- Light_Function_B_6 — ComingHome LeavingHome
- Light_Function_C_6 — Left high beam
- Light_Function_D_6 — Headlamp flasher
- Type_Of_Load_6 — Xenon Abblendlicht
Leuchte7ABL RB5 - aka right middle:
- Dimming_AB_7 — 100
- Dimming_CD_7 — 100
- Dimming_Direction_CD_7 — maximize
- Light_Function_A_7 — Abblendlicht rechts
- Light_Function_B_7 — ComingHome LeavingHome
- Light_Function_C_7 — Right high beam
- Light_Function_D_7 — Headlamp flasher
- Type_Of_Load_7 — Xenon Abblendlicht
Leuchte8FL LB42 - aka far left:
- Dimming_AB_8 — 100
- Light_Function_A_8 — Left high beam
- Light_Function_B_8 — Headlamp flasher
- Type_Of_Load_8 — Shutter
Leuchte9FL RB7 - also far right:
- Dimming_AB_9 — 100
- Light_Function_A_9 — Right high beam
- Light_Function_B_9 — Headlamp flasher
- Type_Of_Load_9 — Shutter
→ Apply
```


For 19 months:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Aussenlicht_Front-Low beam: bulb type → HID
Leuchte 0 BLK VL B35-Dimming_AB_0 → 127
Leuchte 0 BLK VL B35-Light_Function_A_0 → Blinken links Hellphase
Leuchte 0 BLK VL B35-Type_Of_Load_0 → LED Blinkleuchten
Leuchte1BLK VRB23-Dimming_AB_1 → 127
Leuchte1BLK VRB23-Light_Function_A_1 → Blinken rechts Hellphase
Leuchte1BLK VRB23-Type_Of_Load_1 → LED Blinkleuchten
Leuchte2SL VLB22-Dimming_AB_2 → 100
Leuchte2SL VLB22-Dimming_CD_2 → 30
Leuchte2SL VLB22-Dimming_Direction_CD_2 → maximize
Leuchte2SL VLB22-Dimming_Direction_EF_2 → minimize
Leuchte2SL VLB22-Dimming_EF_2 → 0
Leuchte2SL VLB22-Light_Function_A_2 → Daytime running lights
Leuchte2SL VLB22-Light_Function_B_2 → not active
Leuchte2SL VLB22-Light_Function_C_2 → Parking light
Leuchte2SL VLB22-Light_Function_D_2 → Parking light left
Leuchte2SL VLB22-Light_Function_E_2 → Blinken links aktiv
Leuchte2SL VLB22-Light_Function_F_2 → not active
Leuchte2SL VLB22-Light_Function_G_2 → not active
Leuchte2SL VLB22-Light_Function_H_2 → not active
Leuchte2SL VLB22-Type_Of_Load_2 → LED Tagfahrlichtmodul Signal
Leuchte3SL VRB36-Dimming_AB_3, 100
Leuchte3SL VRB36-Dimming_CD_3, 30
Leuchte3SL VRB36-Dimming_Direction_CD_3 → maximize
Leuchte3SL VRB36-Dimming_Direction_EF_3 → minimize
Leuchte3SL VRB36-Dimming_EF_3 → 0
Leuchte3SL VRB36-Light_Function_A_3 → Daytime running lights
Leuchte3SL VRB36-Light_Function_B_3 → not active
Leuchte3SL VRB36-Light_Function_C_3 → Parking light
Leuchte3SL VRB36-Light_Function_D_3 → Parking light right
Leuchte3SL VRB36-Light_Function_E_3 → Blinken rechts aktiv
Leuchte3SL VRB36-Light_Function_F_3 → not active
Leuchte3SL VRB36-Light_Function_G_3 → not active
Leuchte3SL VRB36-Light_Function_H_3 → not active
Leuchte3SL VRB36-Type_Of_Load_3 → LED Tagfahrlichtmodul Signal
Leuchte4TFL LB43-Dimming_AB_4 → 127
Leuchte4TFL LB43-Dimming_CD_4 → 127
Leuchte4TFL LB43-Dimming_Direction_CD_4 → maximize
Leuchte4TFL LB43-Dimming_Direction_EF_4 → minimize
Leuchte4TFL LB43-Dimming_EF_4 → 0
Leuchte4TFL LB43-Light_Function_A_4 → Daytime running lights
Leuchte4TFL LB43-Light_Function_C_4 → Parking light
Leuchte4TFL LB43-Light_Function_D_4 → Parking light left
Leuchte4TFL LB43-Light_Function_E_4 → Blinken links aktiv
Leuchte4TFL LB43-Type_Of_Load_4 → LED Tagfahrlichtmodul Versorgung
Leuchte5 TFL RB6-Dimming_AB_5 → 127
Leuchte5 TFL RB6-Dimming_CD_5 → 127
Leuchte5 TFL RB6-Dimming_Direction_CD_5 → maximize
Leuchte5 TFL RB6-Dimming_Direction_EF_5 → minimize
Leuchte5 TFL RB6-Dimming_EF_5 → 0
Leuchte5 TFL RB6-Light_Function_A_5 → Daytime running lights
Leuchte5 TFL RB6-Light_Function_C_5 → Parking light
Leuchte5 TFL RB6-Light_Function_D_5 → Parking light right
Leuchte5 TFL RB6-Light_Function_E_5 → Blinken rechts aktiv
Leuchte5 TFL RB6-Type_Of_Load_5 → LED Tagfahrlichtmodul Versorgung
Leuchte6ABL LB44-Dimming_AB_6 → 100
Leuchte6ABL LB44-Dimming_CD_6 → 100
Leuchte6ABL LB44-Dimming_Direction_CD_6 → maximize
Leuchte6ABL LB44-Light_Function_A_6 → Abblendlicht links
Leuchte6ABL LB44-Light_Function_B_6 → ComingHome LeavingHome
Leuchte6ABL LB44-Light_Function_C_6 → Left high beam
Leuchte6ABL LB44-Light_Function_D_6 → Headlamp flasher
Leuchte6ABL LB44-Type_Of_Load_6 → Xenon Abblendlicht
Leuchte7ABL RB5-Dimming_AB_7 → 100
Leuchte7ABL RB5-Dimming_CD_7 → 100
Leuchte7ABL RB5-Dimming_Direction_CD_7 → maximize
Leuchte7ABL RB5-Light_Function_A_7 → Abblendlicht rechts
Leuchte7ABL RB5-Light_Function_B_7 → ComingHome LeavingHome
Leuchte7ABL RB5-Light_Function_C_7 → Right high beam
Leuchte7ABL RB5-Light_Function_D_7 → Headlamp flasher
Leuchte7ABL RB5-Type_Of_Load_7 → Xenon Abblendlicht
Leuchte8FL LB42-Dimming_AB_8 → 127
Leuchte8FL LB42-Light_Function_A_8 → Left high beam
Leuchte8FL LB42-Light_Function_B_8 → Headlamp flasher
Leuchte8FL LB42-Type_Of_Load_8 → Shutter (Camera lock)
Leuchte9FL RB7-Dimming_AB_9 → 127
Leuchte9FL RB7-Light_Function_A_9 → Right high beam
Leuchte9FL RB7-Light_Function_B_9 → Headlamp flasher
Leuchte9FL RB7-Type_Of_Load_9 → Shutter (Camera lock)
→ Apply
```


### Replacing rear lights with LED

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte23SL HLC7 – Type_Of_Load_23 → Allgemeine LED mit Open Load Diagnose 
Leuchte23SL HLC7 – Dimming_AB_23 → 100
Leuchte24SL HRA69 – Type_Of_Load_24 → Allgemeine LED mit Open Load Diagnose 
Leuchte24SL HRA69 – Dimming_AB_24 → 100
```


### Replacing the battery

!!! tip "Battery options"
61Ah 300A(DIN) or 540(EN)  
    70Ah 340A(DIN) or 570(EN)  
    80Ah 380A(DIN) or 640(EN)  
    92Ah 520A(DIN) or 870(EN)  
    95Ah 450A(DIN) or 750(EN)  
    110Ah 520A(DIN) or 870(EN)
``` yaml
Block 19 → Adaptation:
Battery Adaption – Battery capacity – enter the required value
Battery Adaption – Battery serial number – value increased by 1.
→ Apply (with block reboot)
```


### [PR-QQ8] LED interior lighting

Implementation via one free circuit, via connection to the T46b/45 output.  
Pin number - A 018 545 8626  
Compartment lighting in the center console - 7P6 919 390 A KT1  
Connector housing - 8K0 973 754  
Pins for connector – N907 647 01  
Footlight lamp - 8J0947409A  
Connector for foot lamp - 4B0 971 832

``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 17 – Bit 0: Activate
Byte 17 – Bit 4: Activate
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Leuchte10SHUTTER LRB45 – Dimming_AB_10 – 100
Leuchte10SHUTTER LRB45 – Fehlerort_mittleres_Byte_DTC-DFCC_10 – 03
Leuchte10SHUTTER LRB45 – Light_Function_A_10 – Ambientelicht 1
Leuchte10SHUTTER LRB45 – Type_Of_Load_10 – LED Kleinleistung ohne Open Load Diagnose.
→ Apply
```


The default brightness is set in the channel:
``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Ambient lighting – Defaultwert Ambienteprofil Vorn – 80%
→ Apply
```


### [PR-8T6] Speed limiter

Implementation available with active cruise control [PR-8T2].  
Article number of the required steering column switch for 2016. - 6C0953513FIGI  
for 2017 - 6C6953513DIGI  
The article number for the pedal that supports the [PR-8T6] function is 6C1723503B.

``` yaml
Block 01 → Coding:
Byte 6 – Bit 2: Activate
→ Apply
```


``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 18 – Bit 7: Activate
→ Apply
```


### [PR-KA1] Connecting a rear view camera

Rear view camera 5JA827566. Installation is available on Swing (5JA035871D), Bolero (5Q0035840B).  
Connect the camera according to the following diagram:  
T4/1pin - +12V;  
T4/2pin - ground;  
T4/3pin - not used;  
T4/4pin - to the reverse speed signal (blue-black wire).  
The video cable is connected to the radio to the CVBS+ and CVBS- connectors.

``` yaml
Block 5F → Coding:
Byte 19 – Bit 4: enable
→ Apply
```


If there is a parking sensor unit
``` yaml
Block 10 → Coding:
Byte 02 – Bit 0: enable
Byte 02 – Bit 4: enable
→ Apply
```


### [PR-XXX +4LB, 4LC] Multifunction steering wheel

4LB Control element for radio  
4LC Control element for radio and telephone  
Steering wheel options (for information):  
565064241B CXA. Multifunctional rul. wheel (leather) black/black.

``` yaml
Block 19 → Coding:
Byte 1 – Bit 0: Activate
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 20 – Bit 1: Activate
→ Apply
```


``` yaml title="Login code: 20103"
Block 5F → Adaptation:
Car_Function_List_CAN_Gen2 – MFL — available
Car_Function_List_BAP_Gen2 – MFA_0x0F — activated
→ Apply
```


### [PR-6E7] Installing USB sockets in the center armrest

Connection near the fuse box.  
Minus - to the bolt. Plus - to a free fuse (can be a permanently connected one, or one that works when the ignition is on).
1. USB sockets. Number: 5Q0 035 726L
2. Socket panel: 5JA 863 618 9B9
3. Left armrest cover: 5JA 864 279 B 9B9
4. Right armrest cover: 5JA 864 280 B 9B9
5. Connector: 8K0 973 754B
6. Pins for connector: N 907 647 01 – 2 pcs.
7. Wires about 3 m.

### Activation of aesthetic interior lighting after self-installation (19 months)

``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Aesthetic lighting-Ambience_borders_front → set.
Leuchte32AMBL 2C64-Dimming_AB_32 → 100
Leuchte32AMBL 2C64-Fehlerort_mittleres_Byte_DTC-DFCC_32 → 03
Leuchte32AMBL 2C64-Light_Control_HD_AB_32 → Always
Leuchte32AMBL 2C64-Light_Function_A_32 → Ambientelicht 1
Leuchte32AMBL 2C64-Type_Of_Load_32 → LED Kleinleistung ohne Open Load Diagnose
→ Apply
```


### [PR-8G1] High Beam Assist FLA 

Until 2017 (Need to check!)
``` yaml
Block 19 → Installation list:
0 : Activate
→ Apply (with block reboot)
```


``` yaml title="Login code: 31347"
Block 09 → Coding:
Byte 02 – Bits 0~2 – 01, lighting: halogen headlights with high beam assistant [PR-8ID+8G1]
→ Apply
```


``` yaml
Block 20 (8X0-857-511.lbl) → Coding:
Byte 00 – Bits 0-4 – 01 headlight type: halogen 02 headlight type: bi-xenon
Byte 01 – Bits 0-1 – 01 control: left-hand drive
Byte 02 – Bits 0-7 – 8f vertical offset Škoda Octavia (5E)
Byte 03 – Bits 0-7 – 6b correction bi-xenon Škoda Octavia (5E)
Byte 04 – Bits 0-7 – 76 halogen correction Škoda Octavia (5E)
Byte 05 – Bits 0-7 – 76 correction rear lights Škoda Octavia (5E)
Byte 06 – Bits 0-7 – 5D correction bi-xenon Škoda Octavia (5E)
Byte 07 – Bits 0-7 – 52 halogen correction Škoda Octavia (5E)
Byte 08 – Bits 0-7 – 52 correction rear lights Škoda Octavia (5E)
Byte 09 – Bits 0-7 – 20 correction (UCR) bi-xenon Škoda Octavia (5E)
Byte 10 – Bits 0-7 – 34 correction (UCR) halogen Škoda Octavia (5E)
Byte 11 – Bits 0-7 – 3E correction (UCR) rear lights Škoda Octavia (5E)
Byte 12 – Bits 0-7 – 00 Function Switch Memory Off 
→ Apply
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Assistance light functions – Menuesteuerung Fernlichtassistent, adjustable 
Assistance light functions – Menuesteuerung Fernlichtassistent Werkseinstellung, adjustable 
→ Apply
```


For 19 months:
``` yaml
Block 19 → Installation list:
0 : Activate
→ Apply (with block reboot)
```


``` yaml
Block 20 → Coding:
Byte 0 – value 01 or 02
Byte 1 – value 01 or 02
Byte 3 – value 0F
→ Apply
```


``` yaml title="Login code: 31347"
Block 09 → Adaptation:
Fernlicht_assistent-Expanded high beam control, Halogen change to Halogen, FLA
Fernlicht_assistent-Fernlichtassistent_Reset: active
Fernlicht_assistent-Menuesteuerung_Fernlichtassistent: installed
Fernlicht_assistent-Menuesteuerung_Fernlichtassistent_Werkseinstellung: installed
```
