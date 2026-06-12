# MULTIMEDIA

### Changing the sound circuit settings of the RCD-310 radio 

Better customization of the preset equalizer. The quality is close to the sound of the Škoda Superb.
``` yaml
Block 56 → Coding → Long coding:
Byte 5 – Bit 0-7 → select 04: Škoda Superb
```


### Changing the battery life of the head unit 

When the key is removed from the ignition, the radio operates for 60 minutes by default. This time can be increased.  
You don’t have to worry about the condition of the battery - monitoring the load on the battery will turn off consumers (including the radio) when the charge is critical.  
The automatic shutdown value is entered in minutes. The value 60 can be changed to a maximum of 99, which corresponds to 99 minutes.
``` yaml
Block 56 → Adaptation: 
3 channel → enter the required value → execute
```


### Speed and turn readings on Swing (RCD-310) 

The so-called “driving school” function allows you to display the current speed and turn on the direction indicators on the radio display.
``` yaml
Block 56 → Adaptation: 
2 channel → enter value “1” → save
```


With the engine running, turn off the radio, hold down the MENU button and turn on the radio. The speed reading will appear after 3 seconds.

### Service menu Swing / Bolero / Columbus 

From the service menu of the radio you can get a lot of information and make some settings.
``` yaml
Block 56 → Adaptation: 
50 channel → enter value “1” → save
```


When you press the MENU button and hold it for about 10 seconds, the service menu will appear on the radio when the radio is turned on. It allows you to check the quality of FM radio reception.