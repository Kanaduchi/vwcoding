# Tools for coding functions

There are several different adapters and programs for configuring, encoding and flashing VAG car units.

## ODIS

One of the most universal remedies. 

Features:  

* Firmware and loading of parameters into blocks  
* Coding and adaptation

Consists of 2 applications:

* ODIS S (Service) – basic program for coding and adaptation. Can read logs and reset errors
* ODIS E (Engineering) – a more advanced tool designed for firmware, parameterization of blocks

Current versions: ODIS E 12.2 and ODIS S 6.2  

The VAS5054 adapter is required for operation. This adapter can be purchased on AliExpress

## VCTools

VCTool is a software for activating hidden features in one click.  
Vehicle diagnostics and manual adjustment of control units. Full support for SFD protection system.  
Activation of more than 170 hidden functions.

Features:  

* Firmware and loading of parameters into blocks  
* Coding and adaptation

The program works with any J2534 adapters, including VAS5054A.

* [Program website](https://vctool.app/)

## ELM327 and CarScanner

Recommended Software: CarScanner  

* [Program website](https://www.carscanner.info/)
* [Which adapter to choose](https://www.carscanner.info/ru/choosing-obdii-adapter/)

The CarScanner application can load parameters into blocks! Parameters are currently available to activate TJA.

## VCDS

Tool for coding and adaptations. Can't reflash blocks

!!! warning "Attention"
    Recommended version: 25.3  
    Versions prior to 21.1.1 do not support 2021 model series vehicles  

     Cannot read the following blocks:  
        - 29, 39, D6, D7 – because it doesn’t read 4B  
        - 76 block in VCDS goes as 10  
        - CA

Available in 2 options: 

* [car2diag](https://car2diag.ru/) (Russian copy of the original - Vasya the diagnostician)
* [Ross-tech](https://www.ross-tech.com/) (original VCDS version)

Requires VAG COM adapter for operation

## ODBELEVEN (OBD11)

[OBD11](https://obdeleven.com/) is a convenient tool designed for coding and adapting blocks.  
Can't reflash blocks. Contains paid functions for credits.  

Able to load a limited set of parameters, for example, parameters for activating Video in Motion.  

Works only on mobile devices.

!!! warning ""
    For cars produced in 2021, to apply encodings, you must open the hood and turn on the handbrake

## ELM327

You can also encode and configure blocks using a cheap Chinese OBDII adapter.  

Recommended Software:

* [Car Scanner](https://www.carscanner.info/)

## VCP

[VCPSYSTEM](http://vcpsystem.ru/) – designed for diagnostics and programming of electronic components.  
Allows you to encode, configure and flash various blocks. The database contains a large set of parameters.  

Recommended version: VAG CAN PRO 8.7 and higher