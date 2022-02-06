
??? note "Экспериментальная функция по упрощению зашифрованной параметрии"
    1 - Расшифровываем base64 <COMPRESSED_DATA> объекта. Расшифрованное значение имеет набор параметров в виде структур <SW-CNT>  
    2 - У значения поля <DATEN> в каждой структуре <SW-CNT> отсекаем первые 8 байт (версия) и последние 8 байт (CRC-32 хэш)  
    3 - Полученное значение переворачиваем в формат little-endian  
    4 - Сохраняем его в соответствующее <PARAMETER_DATA> и калькулируем CRC-16 хэш  

??? note "Experimental function of dataset simplification"
    1 - Decode base64 value of <COMPRESSED_DATA> object. Value has structure of <SW-CNT>   
    2 - Cut first 8 bytes (version) and last 8 bytes (CRC-32 sum) of value of <DATEN> field  
    3 - Convert result value in little-endian format  
    4 - Save it in the corresponding <PARAMETER_DATA> object and calculate CRC-16 hash  