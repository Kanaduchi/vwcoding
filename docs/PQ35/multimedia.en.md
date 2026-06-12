# MULTIMEDIA

### Improving the sound of the standard radio

Better customization of the preset equalizer. The sound quality is close to that of the Superb with 12 speakers.
``` yaml
Block 56 → Coding → Long coding:
Byte 5 – Bit 0-7 → select 04: Seat Altea XL (5P), Škoda Superb
```


### Changing the battery life of the head unit

When the key is removed from the ignition, the radio operates for 30 minutes by default. This time can be increased.  
You don’t have to worry about the condition of the battery - monitoring the load on the battery will turn off consumers (including the radio) when the charge is critical.  
The automatic shutdown value is entered in minutes.  
To deactivate this function, enter the value “255”.
``` yaml
Block 56 → Adaptation: 
3 channel → enter the required value → execute
```


### Russification of the instrument panel and head unit Swing

Changing the language of the instrument panel, including changing the language of the standard Swing radio (RCD-310), only if the radio was released no earlier than the second half of 2011.
``` yaml
Block 17 → Adaptation: 
channel “IDE00343” → select the desired language → save
```


### Speed readings on Swing

The so-called “driving school function” allows you to display the current speed on the radio display. Readings are displayed only when turned on on the radio itself.
``` yaml
Block 56 → Adaptation: 
2 channel → test → enter value “1” → save
```


!!! warning "Note"
    Switching on: the engine is started, the radio is turned off - press the right “twist” and turn on the radio. 
    Shutdown: the engine is started, the radio is turned off - press “Eject” and turn on the radio.

### Service menu Swing / Bolero / Columbus

From the service menu of the radio you can get a lot of information and make some settings.
``` yaml
Block 56 → Adaptation: 
50 channel → test → enter value “1” → save
```


### Changing DVD Region Columbus

It’s not entirely clear why, but you can change the DVD region of the standard Columbus radio.
``` yaml
Block 56 → Adaptation: 
130 channel → select the desired region → save
```


 
!!! warning "Note"
    A value of "0" opens all regions.

### Columbus color scheme change

The standard color scheme of the RNS-510 Columbus is green. But it can be changed to gray-red from VW.

!!! note "Features"
    There is no such value in the drop-down list and therefore the bits must be enabled through the binary code window.  
    After saving the encoding, you need to reboot the radio by simultaneously holding down (about 10 seconds) the “Eject”, “microphone” and “Setup” buttons.
  
``` yaml
Block 56 → Coding → Long coding:
Byte 7 – Bit 4: Activate
Byte 7 – Bit 5: Activate
```


### Install the Bolero welcome screensaver in a new style

The old welcome screen is being replaced with a version with a new logo from 2011
``` yaml
Block 56 → Coding → Long coding:
Byte 0 – Bit 4: Activate
```


!!! warning "Note"
    Doesn't work on all firmware.

### Installing the Amundsen welcome screensaver in a new style

The old welcome screen is being replaced with a version with a new logo from 2011
``` yaml
Block 56 → Coding → Long coding:
Byte 8 – Bit 0: Activate
```


!!! warning "Note"
    Works on models 3T0 035 193 B and newer.

### Installing the Columbus welcome screensaver in a new style

The old welcome screen is being replaced with a version with a new logo from 2011
``` yaml
Block 56 → Coding → Long coding:
Byte 8 – Bit 4: Activate
```


### Bluetooth Audio

If there is a Bluetooth module, the default radios allow you to play music via Bluetooth-Audio, i.e. from the phone. 
If this feature is annoying because of its intrusiveness, then you can disable it.

``` yaml
Block 77 → Coding → Long coding:
Byte 4 – Bit 0: Activate
```


### Alert sound when your phone is connected to the Bluetooth module

By default, when you connect/disconnect your phone to the Bluetooth module, the sound on the radio is temporarily muted and a beep sounds.  
Disabling this function allows you to mute the connection sound and not mute the sound of the radio when connecting the phone.  
Automatic muting of the radio when there is a call and conversation remains.
``` yaml
Block 77 → Adaptation: 
channel “IDE02504” → set value “OFF” → execute
```


### Switching the PTT key to “Mute” mode

When the Bluetooth module is installed, the PTT key (pressing the volume control) activates voice control of the phone.  
If voice control of the phone is not needed, then this PTT key can easily be switched to the “Mute” operating mode.  

!!! note "Features"
    Useful only for owners of cars with a standard Bluetooth module.
  
``` yaml
Block 16 → Coding → Long coding:
Byte 1 – Bit 3: Deactivate
```


### Reducing the volume of the radio when turning on the parking sensors

If the volume of the radio is excessive when the parking sensors are turned on, the volume of the music being played can be reduced to contrast the sound of the signal from the parking sensors itself.

!!! note "Features"
    On the radio itself, this function must also be activated in the settings.
``` yaml
Block 10 → Adaptation: 
channel "IDE01169": Activate
```
