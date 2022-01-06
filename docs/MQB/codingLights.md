
# Кодирование светового оборудования

!!!note ""
    За помощь в создании данной инструкции выражаю благодарность [Вячеславу](https://www.drive2.ru/users/slavian116)   

### Схема работы каналов освещения

![Screenshot](../images/MQB/light_scheme.jpg)

У разных машин (Tiguan, Skoda, Golf, Passat) могут быть разные привязки ламп к каналам. 

### Список каналов передних фонарей VW Tiguan 2

| Названия ламп                                 |                 BASIS LED                 |                     MID LED |
|-----------------------------------------------|:-----------------------------------------:|----------------------------:|
| Leuchte0BLK VLB36 / Leuchte1BLK VRB20         |     Левый / Правый указатель поворота     |                             |
| Leuchte2SL VLB10 / Leuchte3SL VRB21           |       Левый / Правый управление ДХО       |                             |
| Leuchte4TFL LB44 / Leuchte5TFL RB32           |            Левый / Правый ДХО             |                             |
| Leuchte6ABL LC5 / Leuchte7ABL RB1             |        Левый / Правый ближний свет        | Левый / Правый ближний свет |
| Leuchte8FL LB39 / Leuchte9FL RB2              |        Левый / Правый дальний свет        |          Левый / Правый ДХО |
| Leuchte10SHUTTER LB23 / Leuchte11SHUTTER RB22 | Левый / Правый диагностика ближнего света |      Питание модуля / Пусто |
| Leuchte12NL LB45 / Leuchte13NL RB5            |            Левый / Правый ПТФ             |          Левый / Правый ПТФ |

### Список каналов задних фонарей VW Tiguan 2

| Названия ламп                                                              |                             BASIS                             |                                          HIGH |
|----------------------------------------------------------------------------|:-------------------------------------------------------------:|----------------------------------------------:|
| Leuchte16BLK SLB35BLK SL KC9 /<br/>Leuchte17TFL R BLK SRB3TFL R BLK SR KC3 |                                                               |                 Левый/Правый габаритный огонь |
| Leuchte18BLK HLA60 / Leuchte19BLK HRC31                                    |               Левый / Правый указатель поворота               |               Левый/Правый указатель поворота |
| Leuchte20BR LA71 / Leuchte21BR RC8                                         | Левый / Правый тормозной сигнал на крыльях + габаритный огонь |                 Левый/Правый тормозной сигнал |
| Leuchte22BR MA57                                                           |                    Центральный стоп-сигнал                    |                       Центральный стоп-сигнал |
| Leuchte23SL HLC10 / Leuchte24SL HRA65                                      |        Левый / Правый габаритный огонь на задней двери        | Левый/Правый габаритный огонь на задней двери |
| Leuchte25KZL HA59                                                          |                       Подсветка номера                        |                              Подсветка номера |
| Leuchte26NSL LA72 / Leuchte27NSL RC6                                       |                       Левый ПТФ / Пусто                       |              Левый ПТФ/ Cтоп-сигнал на крышке |
| Leuchte28RFL LC11 / Leuchte29RFL RA64                                      |                   пусто / Правый задний ход                   |                     Левый / Правый задний ход |
    
### Список других ламп

Leuchte 35 LED Warnblinktaster C48 - кнопка аварийной сигнализации    
Leuchte30FR LC72 - освещение ног в салоне
    
### Расшифровка каналов

На примере Leuchte9FL RB2.

Leuchte9FL RB2 - [Leuchte][9][FL] [R][B2]

[Leuchte] - лампа  
[9] - номер лампы  
[FL] - обозначение функции лампы (часто может не совпадать с реальностью)  
[R] - расположение - rechts (справа)/links (слева)  
[B2] - Контакт на BCM (разъём В, пин 2)

| Аббревиатура функции лампы | Немецкое название                                                                                                                    | Русское название      |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| ABL                        | <span style="font-weight:bold">A</span>b<span style="font-weight:bold">b</span>lend<span style="font-weight:bold">l</span>icht       | Ближний свет          |
| AMBL                       | <span style="font-weight:bold">Amb</span>iente<span style="font-weight:bold">l</span>icht                                            | Атмосферная подсветка |
| BLK                        | <span style="font-weight:bold">Bl</span>in<span style="font-weight:bold">k</span>en                                                  | Поворотник            |
| BR                         | <span style="font-weight:bold">Br</span>emslicht                                                                                     | Стоп-сигнал           |
| FL                         | <span style="font-weight:bold">F</span>ern<span style="font-weight:bold">l</span>icht                                                | Дальний свет          |
| FR                         | <span style="font-weight:bold">F</span>uss<span style="font-weight:bold">r</span>aumlicht                                            | Подсветка ног         |
| HD                         | <span style="font-weight:bold">H</span>eck<span style="font-weight:bold">d</span>eckel                                               | Крышка багажника      |
| KZL                        | <span style="font-weight:bold">K</span>enn<span style="font-weight:bold">z</span>eichen<span style="font-weight:bold">l</span>euchte | Подсветка номера      |
| NL                         | <span style="font-weight:bold">N</span>ebel<span style="font-weight:bold">l</span>icht                                               | ПТФ спереди           |
| NSL                        | <span style="font-weight:bold">N</span>ebel<span style="font-weight:bold">s</span>chluss<span style="font-weight:bold">l</span>icht  | ПТФ сзади             |
| RFL                        | <span style="font-weight:bold">R</span>ueck<span style="font-weight:bold">f</span>ahr<span style="font-weight:bold">l</span>icht     | Задний ход            |
| SL                         | <span style="font-weight:bold">S</span>tand<span style="font-weight:bold">l</span>icht                                               | Габариты              |
| TFL                        | <span style="font-weight:bold">T</span>ag<span style="font-weight:bold">f</span>ahr<span style="font-weight:bold">l</span>icht       | ДХО                   |

### Тип ламп

У каждой лампы можно указать её тип - Lasttypen

??? note "Возможные варианты ламп и их номер"
    | Номер типа лампы | Описание типа лампы  |
    |:------------------:|:------------------:|
    | 1 | LED Tagfahrlichtmodul Versorgung   |
    | 2 | Shutter; Diagnosesensierung für "LED low"   |
    | 3 | Xenon Abblendlicht   |
    | 4 | LED Tagfahrlichtmodul Signal   |
    | 5 | LED Abblendlicht   |
    | 6 | LED Lichtmodul   |
    | 7 | Reserved_07   |
    | 8 | allgemeine Glühlampe 12W   |
    | 9 | allgemeine Glühlampe 27W; auch H15   |
    | 10 | allgemeine Scheinwerfer   |
    | 11 | Abblendlicht   |
    | 12 | Blinkleuchten   |
    | 13 | Bremsleuchten   |
    | 14 | kombinierte Blink- Bremsleuchten   |
    | 15 | allgemeine Glühlampe 6W; auch H6W   |
    | 16 | 2* 3W   |
    | 17 | 4* 3W   |
    | 18 | 2* 5W   |
    | 19 | 3* 5W   |
    | 20 | 4* 5W   |
    | 21 | 2* 13W Blinker   |
    | 22 | 2* 16W Blinker   |
    | 23 | allgemeine Scheinwerfer   |
    | 24 | 2* 5W KZL + LED Sidemarker   |
    | 25 | allgemeine Glühlampe innen- oder Außenlicht   |
    | 32 | allgemeine LED bis 12W   |
    | 33 | LED-Modul Blinkleuchten   |
    | 34 | LED Bremsleuchten   |
    | 35 | kombinierte LED Blink-Bremsleuchten   |
    | 36 | LED Kleinleistung   |
    | 37 | allgemeine LED bis 12W   |
    | 38 | LED Blinkleuchten   |
    | 39 | LED Bremsleuchten   |
    | 40 | allgemeine LED   |
    | 41 | LED Kleinleistung   |
    | 42 | LED dritte Bremsleuchte   |
    | 43 | allgemeine LED   |
    | 44 | LED Fußraum- oder -Innenleuchte   |
    | 45 | allgemeine LED bis 6W   |
    | 46 | LED Kleinleistung  |


### 

Lampendefektbitposition и Fehlerort mittleres Byte DTC-DFCC — два поля с указанием битов, используемых для проверки наличия и работоспособности ламп.

Это диагностическая информация, которая передается по BAP шине

### Функции освещения

!!! warning "Предупреждение о VCDS"
    В VCDS или как его любят называть, Васе, зачем-то решили перевести эти функции. В результате в списке выбора куча значений имеют одинаковое имя.   
    Будьте осторожны

??? note "73 функции"
    
    | Название функции | Описание функции |
    |------------------|------------------|
    | nicht aktiv          | не включено  |
    | nicht_definiert_4c   | всегда работает с 30% яркостью, а при включении аварийной сигнализации чередуется между 50% и 100% яркости |
    | nicht_definiert_с4   | при включении аварийной сигнализации чередуется между 50% и 100% яркости |
    | aktiv 100% 	       | всегда включено  |
    | Blinken links Hellphase | работает при загорании левого поворотника |
    | Blinken links Dunkelphase | работает при притухании левого поворотника |
    | Blinken rechts Hellphase | работает при загорании правого поворотника |
    | Blinken rechts Dunkelphase | работает при притухании правого поворотника |
    | Blinken links aktiv (beide Phase) | работает постоянно при работе левого поворотника |
    | Blinken rechts aktiv (beide Phase) | работает постоянно при работе правого поворотника |
    | Standlicht allgemein (Schlusslicht, Positionslicht, Begrenzungslicht) | горит в режиме габаритов |
    | Parklicht links (beidseitiges Parklicht aktiviert li & re) | горит в режиме парковочного огня левый (зажигание выкл.) |
    | Parklicht rechts | горит в режиме парковочного огня правый (зажигание выкл.) |
    | Abblendlichts links | горит при ближнем левом огне |
    | Abblendlicht rechts | горит при ближнем правом огне |
    | Fernlicht links | горит при дальнем левом огне |
    | Fernlicht rechts | горит при дальнем правом огне |
    | Lichthupe generell | включается при моргании дальним |
    | Lichthupe bei bereits aktivem Abblendlicht oder bereits aktivem Dauerfahrlicht | Flasher with already active dimmed headlights or already active long-term driving light |
    | Lichthupe bei nicht aktivem Abblendlicht oder bereits aktivem Dauerfahrlicht | Flasher with not active dimmed headlights or already active long-term driving light |
    | Nebellicht links | горит при включении левого птф |
    | Nebellicht rechts | горит при включении правого птф |
    | Tagfahrlicht | горит при ДХО |
    | Dauerfahrlicht | горит при ДХО |
    | Abbiegelichts rlinks | горит при включении левого Corner |
    | Abbiegelichts rechts | горит при включении правого Corner |
    | Bremslicht | горит при нажатии на тормоз |
    | Rueckfahrlicht | горит при включенной задней передаче |
    | Nebelschlusslicht | горит при включении заднего птф |
    | Nebelschlusslicht wenn kein Anhaenger gesteckt und Rechtsverkehr | Rear fog light when no trailer attached and right-hand traffic |
    | Nebelschlusslicht wenn kein Anhaenger gesteckt und Linksverkehr | Rear fog light when no trailer attached and left-hand traffic |
    | Fernlicht über Assistent aktiviert | High beam assistant activated |
    | Coming Home oder Leaving Home aktiv | Coming Home Leaving Home or active |
    | Standlicht vorn (Positionslicht; Begrenzungslicht) | Auxiliary light (position light, parking light) |
    | Nebelschlusslicht auch wenn ein Anhaenger gesteckt | Rear fog light even when trailer fitted |
    | Heckdeckel offen | загорается при открытии багажника |
    | Heckdeckel geschlossen | загорается при закрытии багажника |
    | CCP-Lichtfunktion: Nach Kl.30-Reset auf 0 initialisiert und ueber CCP aenderbar | CCP-light function: After Terminal 30 reset is initialized to 0 and can be changed via CCP |
    | Quittierungsfunktion 1 | Acknowledge 1 |
    | Klemme 30G | Terminal 30G |
    | Dimmung klemme 58xs | регулируется яркость регулятором из салона |
    | Dimmung Klemme 58xt | Dimming terminal 58xt |
    | Dimmung Klemme 58xd | (Terminal 58xd dimmer)Terminal 58xd dimmer |
    | Klemme 15 mit Nachlauf bis Fahrzeugstillstand | Terminal 15 with a lag after vehicle standstill |
    | Klemme 15 ohne Nachlauf| Terminal 15 without running |
    | Innenlicht | внутреннее освещение, плавно включается при открытии двери |
    | Kofferraumlicht | горит при включении света в багажнике (при открытом багажнике) |
    | Fussraumlicht | освещение для ног |
    | Ambientelicht 1 | освещение центральной консоли 1 | 
    | Ambientelicht 2 | освещение центральной консоли 2 |
    | Ambientelicht 3 | освещение дверей 3 |
    | Ambientelicht 4 | Ambient lighting 4 |
    | Ambientelicht 5 | Ambient lighting 5 |
    | Umfeldbeleuchtung | Ambient lighting |
    | Tuerausstiegslicht vorn links | загорается при открытии передней левой двери |
    | Tuerausstiegslicht vorn rechts | загорается при открытии передней правой двери |
    | Tuerausstiegslicht hinten links | загорается при открытии задней левой двери |
    | Tuerausstiegslicht hinten rechts | загорается при открытии задней правой двери |
    | Tuerausstiegslichtv links | загорается при открытии двери с левой стороны |
    | Tuerausstiegslichtv rechts | загорается при открытии двери с правой стороны |
    | Fahrzeug mit Automatik Start-Stopp ist im Stopp-Modu(s) | Vehicle with automatic start-stop is in stop Modu (s) |
    | Klemme 75 Variante a_vfzg | Terminal 75 variant a_vfzg  |
    | Klemme 75 Variante vfzg | Terminal 75 variant vfzg  |
    | beidseitiges Dauerparklicht | Both sides permanent parking light |
    | Blinken links aktiv (beide Phasen); Auf- und Abdimmend mit p_t_blinken_rampe | Flashing left active (both phases);Dimming up and down with p_t_ flash ramp |
    | Blinken rechts aktiv (beide Phasen); Auf- und Abdimmend mit p_t_blinken_rampe | Flashing right active (both phases);Dimming up and down with p_t_ flash ramp |
    | Schlusslicht aktiv ohne Bremslicht aktiv;ist deaktiviert;wenn Bremslicht aktiv ist !!! | Taillight active  without stop light; disabled if the brake light is active !!! |
    | Aktive Blinkfunktion hat ein auf 1 gesetztes zugeordnetes Bit in pa_dynamisch_blinken | Active flashing function Bit1 is set t associated in pa_ dynamic_flash  |
    | Motorraumlicht| Загорается при открытие моторного отсека (капота) |
    | Fahrzeug ist nicht fahrbereit (Motor läuft nicht; Elektroantrieb nicht aktiv o.ä.) | Vehicle is not roadworthy (electric drive not active or similar, engine is not running) |
    | Handbremse ist angezogen| Hand brake is applied |
    | Debug-Lichtfunktion (in Anlehnung an CCP) | Debug light function (based on CCP) |
    | Debug-Lichtfunktion Fehlerspeicher | Debug light function error memory |
    | Versorgungsbedarf der LCM Module | Supply requirements of the LCM modules |
    | Zuschaltung Trennrelais für 2. Batterie | Switching cut-off relay for 2nd battery |
    
### Цепочки групп

Каждая лампа делится на максимум 8 функций, 4 значения яркости и 4 направления яркости.  

Lichtfunktion A, B, C, D, E, F, G, H — функции лампы в бортовой сети. Включаются при наступлении некоего события извне.  

В каждом канале есть четыре пары - АВ СD EF GH, то есть всего в одном канале можно прописать восемь функций.   
А так же каждой паре можно выставить свою цепочку работы.  

Чем выше группа освещения, тем важнее функция: GH > EF > CD > AB. Возникновение нового события перекрывает текущее, функция H имеет наивысший приоритет.

Если мигающая функция закодирована в группах AB и CD, а противотуманная фара закодирована как функция E, 
сигнал поворота на соответствующей стороне будет гореть постоянно, даже если вы мигаете, когда включена противотуманная фара!

В каждой группе функций есть опция яркости и направление изменения яркости.

Например, 
```
> Lichtfunktion C 6:	nicht aktiv  
> Lichtfunktion D 6:	nicht aktiv  
> Dimmwert CD 6:	0  
> Dimming Direction CD 6: maximize  
```

Это означает, что для функций освещения C и D можно установить только одно направление изменения яркости и только одно значение изменения яркости.  

Группа функций освещения AB не имеет направления регулировки яркости, так как свет в обычном положении выключен.  
Вместо этого есть «Lichtansteuerung HD AB» - HD обозначает крышку багажника и может кодироваться как «Always» и «only_if_closed».  
Поэтому, если вы хотите обратиться к источнику света только тогда, когда крышка багажника закрыта, то там должен быть закодирован «only_if_closed».

### Яркость

В каждой паре у канала есть опция диммирования лампы - Dimmwert.  

Для галогенных ламп регулировка осуществляется в диапазоне от 0 до 100.  
Для диодов регулировка осуществляется в диапазоне от 0 до 127.  

При установке значения 127 — они перестают реагировать на диммирование в интерфейсе, работает только вкл/выкл.  
При установке значения 126 — верхний предел яркости выше, и диммирование сохраняется.

Значения выше 127 для этого поля не принимаются. В отличие от всех остальных, оно — 7 битное, блок обнуляет восьмой бит.

!!! warning ""
    Не все диоды поддаются регулировки яркости.   
    Увеличение или уменьшение яркости свечения реализуется за счет увеличения или уменьшения скважности ШИМ-сигнала.  
    При установке слишком маленькой яркости (< 25) канал может выдавать ошибку.   

### Регулировка яркости

Для регулировки яркости есть опция - Dimming direction.  
Существует только два значения для направления затемнения:  

+ minimize (уменьшение яркости до установленного значения)  
+ maximize (увеличение яркости до установленного значения)

### Пример кодирования

Мы хотим, чтобы противотуманные фары мигали вместе с дальним светом.

1. Находим нужные фары: Leuchte12NL LB45 для левой стороны и Leuchte13NL RB5 для правой.
2. Находим свободную группу функций освещения. В нашем случае это CD
3. Задаем функции для левой фары:  
```
Lichtfunktion C 12 → Lichthupe generell (включается при моргании дальним)  
Dimming direction CD 12 → maximum  (увеличение яркости)  
Dimmwert CD 12 – 0 → 100
```
4. Задаем функции для правой фары: 
``` 
Lichtfunktion C 13 → Lichthupe generell (включается при моргании дальним)   
Dimming direction CD 13 → maximum  (увеличение яркости)  
Dimmwert CD 13 – 0 → 100  
```

### Базовая калибровка фар 
Проводится при наличии висящей AFS ошибки. Двигатель должен быть заведен, фары включены

``` yaml
Блок 4B → Базовые установки (04) 
> Базовая установка фар (002) → Прочитать
> Берем руками руль (а/м заведенный, фары горят), крутим руль в левую сторону до упора и держим в таком положении руль 3с. 
> Крутим руль в правую сторону то же до упора и держим те же 3с. далее ставим руль прямо, ждем 3с → Сохранить
> Подтверждение базовой установки (003) → Применить
```

> логин-пароль 20103
