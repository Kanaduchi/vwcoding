# DYNAMICS

### Disabling trailer stabilization 

Many people notice the effect of turning off trailer stabilization in the form of a slight decrease in fuel consumption, an increase in coasting, and a decrease in the effect of engine braking.
``` yaml
Block 3 → Adaptation: 
56 channel → enter “0” → save
```


### Enabling the Electronic Differential Lock (XDS) 

XDS (Electronic Differential Lock) improves cornering dynamics through an extended differential lock (also called ride comfort).
``` yaml
Block 3 → Adaptation: 
67 channel → enter “1” → save There are only two values: “0” – disabled, “1” – active.
```


### Hill Hold Assist (HHA) 

HHA (Hill Hold Assistant) holds the vehicle on a downhill or uphill slope and prevents it from rolling away until the driver presses the gas pedal.  
HHA levels: 0 – standard, 1 – fast (from low speeds), 2 – long (from high speeds).
``` yaml
Block 3 → Coding → Long coding:
Byte 16 – Bit 0: Activate
→ Apply
---
Block 3 → Adaptation: 
58 channel → enter the required level value
→ save
```


### Setting Brake Assist (BAS) 

BAS (Brake Assist System) helps the driver in a critical situation to realize maximum force on the brake pedal in the first moments of emergency braking.  
BAS levels: 0 – medium, 1 – low, 2 – high (default “medium”)
``` yaml
Block 3 → Adaptation: 
09 channel → enter the required level value → save
```


### Brake Disc Cleaning System (BDW) 

BDW (Brake Disc Wiper) is a function for drying and cleaning brake discs.  
The function periodically performs incomplete and short-term compression, essentially just touching the brake pads to the brake discs (with a pressure of up to 2 bar), thereby removing the water film formed from the wet road surface, and also periodically cleans the brake discs from the deposits of dirt and grease that have formed on them.  
The function comes into operation at a car speed of at least 70 km/h, as well as when the wipers are turned on and continue to work for at least 5 seconds.  
When the wipers are turned on once, the function operates once. For the driver, this function is not noticeable in any way.
``` yaml
Block 3 → Adaptation: 
55 channel → enter the required value → test → save
```


There are four values: “0” – disabled, “1” – Stage 1, “2” – Stage 2, “3” – Stage 3.

### Torque Compensation System (TSC) 

When accelerating sharply, front-wheel drive cars drift slightly to the right. TSC (Torque Steer Compensation) eliminates this drift.
``` yaml
Block 44 → closed area → enter “26485” → Adaptation:
05 channel → enter «1» → save
```


There are only two values: “0” – disabled, “1” – active.

### Setting up steering assist (DSR) 

Driving Steering Recommendation (DSR) helps when steering in difficult conditions, for example when the road is very dense.
``` yaml
Block 44 → closed area → enter “51514” → Adaptation:
03 channel → enter «1» → save
```


There are only two values: “0” – disabled, “1” – active, although the hint says the opposite.