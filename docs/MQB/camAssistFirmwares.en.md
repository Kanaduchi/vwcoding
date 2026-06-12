---
hide:
  - toc
---
# Firmware for camera assistants

For full operation of the assistant camera, you need the correct firmware and parameters for it.  
Cameras can be of 3 options:  

* 5Q0... - MFK 1.0 (Lane Assist, Sign Assist, DLA)  
* 3Q0/3QD... - MFK 2.0 (Lane Assist, Sign Assist, Traffic Jam Assist, DLA)  
* 2Q0... - MFK 3.0 (Lane Assist, Sign Assist, Traffic Jam Assist, Pedestrian Assist, DLA)  

Parameters for firmware L and H with increased warning time (60s) for different machines can be found at [https://mibsolution.one](https://mibsolution.one/#/1/9/Datasets/MQB/A5/60+%20Mod)

## MQB-Evo — camera A5 (5WA 980 653)

**MQB-Evo** uses camera **5WA 980 653** (not 3Q0/2Q0). Firmware and parameters are **not interchangeable** with classic MQB without verification.

| Hardware   | SW range (example) | Features                                       | SFD        |
|------------|--------------------|------------------------------------------------|------------|
| 5WA980653A | 3129 – 3303        | Lane Assist, Sign Assist, basic Travel Assist  | yes        |
| 5WA980653D | **3403+**          | + **Auto Lane Change** (with Side Assist, PLA) | yes        |
| 5WA980653  | 3405+              | TA 2024+, enhanced TA (PR/market dependent)    | yes / SFD2 |

!!! warning ""
    - **Auto Lane Change** — see [MQB-Evo Travel Assist](../MQB-Evo/travelAssist.en.md#auto-lane-change-optional) and [additional assistants](../MQB-Evo/driverAssistExtras.en.md).  
    - Pick Evo parameters by **VIN / HW / SW** in ODIS or [mibsolution.one](https://mibsolution.one) (MEB/MQB Evo → A5).  
    - Flash A5 on Evo only via **ODIS online** + SFD; wrong parameters can disable assistants until backup restore.

## Firmware for cameras like MFK3

| Equipment ID                 |                         Firmware                          |                                  Parameter<br/>(ODIS XML)                                  | Notes |
|------------------------------|:---------------------------------------------------------:|:------------------------------------------------------------------------------------------:|:-----:|
| FL_2Q0980653_1400_2Q0980653D | [(Download)](../firmwares/FL_2Q0980653D_1400_MEAPP_S.pdx) | [(Download for Škoda)](../parameters/A5_2Q0980653D_1400_VHL125933Q1A_MFK_3G0_0831.xml.zip) |       |

## Firmware for cameras like MFK2

!!! warning "Important!"
The update order should be as follows: G → H → L → T → Q → R → S → T  
    Changing this order in reverse will damage your camera

Generation 4:  

| Equipment ID |                    Firmware |                Parameter<br/>(ODIS XML) |                                  Notes |
|------------------------------|:-----------------------------------------------:|:--------------------------------------------------------:|:-----------------------------------------------------------------------------:|
| FL_3Q0980654_0920_3Q0980654S | [(Download)](../firmwares/FL_3Q0980654_0920.frf) | [(Download)](../parameters/A5_3Q0980654S_BW2_STA.xml.zip) | Not recommended for Tiguan 2G.<br/>There are problems with lane keeping |
| FL_3Q0980654_0460_3Q0980654R |                                                 |                                                          |                                                                               |
| FL_3Q0980654_0881_3Q0980654Q |                                                 |                                                          |                                                                               |
| FL_3Q0980654_0451_3Q0980654M |                                                 |                                                          |                                                                               |

Generation 3:  

| Equipment ID |                    Firmware |                             Parameter<br/>(ODIS XML) |                     Notes |
|------------------------------|:-----------------------------------------------:|:----------------------------------------------------------------------------------:|:---------------------------------------------------:|
| FL_3Q0980654_0611_3QD980654T |                                                 |                                                                                    | Firmware for Tiguan 2G from the 2020 model range |
| [(Download)](../firmwares/FL_3Q0980654_0610.frf) | [(Download for VW Tiguan (60s))](../parameters/A5_3Q0980654L_wTJ_Tiguan_60+.xml.zip) |                                                     |
| FL_3QD980654_1611_3QD980654A | [(Download)](../firmwares/FL_3QD980654_1611.odx) |    [(Download for Škoda and Seat)](../parameters/A5_3Q0980654L_SEAT_Leon.xml.zip) |                                                     |

Generation 2:  

| Equipment ID |                    Firmware |                             Parameter<br/>(ODIS XML) | Notes |
|------------------------------|:-----------------------------------------------:|:----------------------------------------------------------------------------------:|:----------:|
| FL_3Q0980654_0272_3QD980654H | [(Download)](../firmwares/FL_3Q0980654_0272.frf) | [(Download for VW Tiguan (60s))](../parameters/A5_3Q0980654H_wTJ_Tiguan_60+.xml.zip) |            |
| FL_3QD980654_1272_3QD980654 |                                                 |          [(Download)](../parameters/A5_3Q0980654H_wTJ_Tiguan_60+.xml.zip) |            |
| FL_3Q0980654_0231_3QD980654G | [(Download)](../firmwares/FL_3Q0980654_0231.frf) |                                                                                    |            |
| FL_3Q0980654_0220_3QD980654F |                                                 |                                                                                    |            |

Generation 1:

| Equipment ID | Firmware | Parameter<br/>(ODIS XML) | Notes |
|------------------------------|:--------:|:-------------------------:|:----------:|
| FL_3Q0980654_0024_3Q0980654D |          |                           |            |
| FL_3Q0980654_0010_3Q0980654C |          |                           |            |