# Sound

### Improved sound

!!! tip ""
This setting changes the sound of the radio very mediocre.  
    For better sound quality, you need to load the parameters into the block.

=== "Coding in ODIS"  
    
``` yaml title="Login code: 20103"
    Block 5F → Coding:
byte_11_Sound_System: Sound_System_no_Allocation or Sound_System_Internal
    → Apply (with block reboot)
    ```


=== "Coding in OBD11"
    
``` yaml title="Login code: 20103"
    5F – MMI / RNS → Coding - 07 → Long coding:
Byte 11 – Select 01 – Sound_System_no_Allocation or 04 – Sound_System_Internal
    Exit → Save  
    ```


### Increase microphone sensitivity

!!! tip ""
The driver's speech when making a call from the car became audible more clearly. The adjustment range is from -10 to 10. The most optimal values range from 2

=== "Coding in ODIS"
    
``` yaml title="Login code: 20103"
    Block 5F → Adaptation:
    Microfone sensivity (Mikrofonempfindlichtkeit)
- From 2 to 10Db
    → Apply 
    ```


=== "Coding in OBD11" 
    
``` yaml title="Login code: 20103"
Block 5F Electronic Information System → Adaptation:
Microphone sensitivity: 2-10 dB
    ```
