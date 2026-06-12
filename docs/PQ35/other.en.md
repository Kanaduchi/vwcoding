# OTHER FUNCTIONS

### Tachometer and speedometer needle test

When the ignition is turned on, the tachometer and speedometer needles move from the minimum to maximum positions. There is no functionality, but it looks impressive!
``` yaml
Block 17 → Adaptation: 
channel “IDE01087” → test → select “active” → execute
```


### Changing the sound of the alarm siren

You can personalize the sound of the standard alarm siren.

!!! note "4 sound options"
    0 – modulated tenfold,  
    1 – intermittent tenfold,  
    2 – modulated single,  
    3 - intermittent single.
  
``` yaml
Block 09 → Adaptation: 
13 channel → test → enter the required value → save
```


!!! warning "Note"
    Modulated sound sounds like “viu-viu-viu”, intermittent sound sounds like “pik-pik-pik”.

### Disarming the standard alarm system via the door lock

If this function is active, then you can remove the car from the standard alarm using the door lock, i.e. radio electronics are not involved in this process and just the key blade is enough.  
Perhaps someone needs this, but it is still better to disable the function, otherwise an attacker will be able to open the car with a regular mechanical hack.
``` yaml
Block 09 → Coding → Long coding:
Byte 6 – Bit 2: Deactivate
```


### Changing the service interval

For various reasons, it may be necessary to change the distance and time of the service interval.
``` yaml
Block 17 → Adaptation: 
channel “IDE01153” → enter the required value in kilometers → save
channel “IDE001154” → enter the required value in days → save
```


### Reset service interval

Those who do not have MaxiDot can reset the service interval via VAG-COM - accordingly, we reset the kilometers and days until the next maintenance.
``` yaml
Block 17 → Adaptation: 
channel “IDE00510” → enter “0” → save
channel “IDE00511” → enter “0” → save
```


!!! warning "Note"
    You can also reset it using the “Reset” button in the main menu of the program, but this is not so romantic!

### Disabling airbags

The need to disable any airbag can be dictated by a variety of circumstances, such as remodeling of the interior, the actual absence of an airbag, religion, etc.  
Be that as it may, each airbag can be disabled separately, as a result, the error for this airbag will also go away.  
Think twice before turning off your airbag without a good reason!

!!! note "Features"
    Channel 01 – front airbag on the right side (passenger) – above the glove compartment;  
    Channel 02 – front airbag on the left side (driver’s) – in the steering wheel;  
    Channel 03 – side airbag on the right side (passenger) – in the side of the seat back;  
    Channel 04 – side airbag on the left side (driver’s) – in the side of the seat back;  
    Channel 07 – “curtain” on the right side (passenger) – in the A-pillar;  
    Channel 08 – “curtain” on the left side (driver’s) - in the A-pillar.
  
``` yaml
Block 15 → Adaptation: 
Channel no. → enter «1» → save
```


!!! warning "Note"
    I am categorically against disabling airbags in order to disguise their absence in a car in order to fool a new buyer.  
    If the airbag is turned off precisely for these purposes, then God will be your judge, but I would spit in your face!

### Disabling seat belt tensioners

The adequate need to disable the seat belt tensioner is unclear to me, however, it can be done. 
Think twice before disabling your seat belt tensioner without a good reason!

!!! note "Features"
    Channel 05 – front passenger belt tensioner;
    Channel 06 – driver’s belt tensioner.
  
``` yaml
Block 15 → Adaptation: 
Channel no. → enter «1» → save
```


!!! warning "Note"
    I am categorically against disabling seat belt tensioners in order to disguise their absence in the car in order to fool the new buyer.  
    If such a shutdown is carried out precisely for these purposes, then God will be your judge, but I would spit in your face!