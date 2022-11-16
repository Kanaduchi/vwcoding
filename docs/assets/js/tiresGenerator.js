function addToDataset(dataset, info) {
    dataset.value += info;
}

function generateHeader(dataset, docType, ecuName, ecuOffset) {
    if (docType == "vcp") {
        addToDataset(dataset, "<ZDC>\n");
        addToDataset(dataset, "<IDENT>\n");
        addToDataset(dataset, "<DATEIID></DATEIID>\n");
        addToDataset(dataset, "<VERSION-TYP></VERSION-TYP>\n");
        addToDataset(dataset, "<VERSION-INHALT></VERSION-INHALT>\n");
        addToDataset(dataset, "<LOGIN>20103</LOGIN>\n");
        addToDataset(dataset, "<ALFID>24</ALFID>\n");
        addToDataset(dataset, "<PRNRREF></PRNRREF>\n");
        addToDataset(dataset, "</IDENT>\n");
        addToDataset(dataset, "<DATENBEREICHE>\n");
        addToDataset(dataset, "<DATENBEREICH>\n");
        addToDataset(dataset, "<DATEN-NAME>" + ecuName + "</DATEN-NAME>\n");
        addToDataset(dataset, "<DATEN-FORMAT-NAME>DFN_HEX</DATEN-FORMAT-NAME>\n");
        addToDataset(dataset, "<START-ADR>" + ecuOffset + "</START-ADR>\n");
        addToDataset(dataset, "<GROESSE-DEKOMPRIMIERT>0x0800</GROESSE-DEKOMPRIMIERT>\n");
        addToDataset(dataset, "<DATEN>");
    } else if (docType == "odis") {
        addToDataset(dataset, "<MESSAGE DTD=\"XMLMSG\" VERSION=\"V0.1\">\n");
        addToDataset(dataset, "<RESULT>\n");
        addToDataset(dataset, "<RESPONSE NAME=\"GetParametrizeData\" DTD=\"RepairHints\" VERSION=\"1.4.0.0\" ID=\"0\">\n");
        addToDataset(dataset, "<DATA>\n");
        addToDataset(dataset, "<PARAMETER_DATA DIAGNOSTIC_ADDRESS=\"0x65\" START_ADDRESS=\"" + ecuOffset + "\" PR_IDX=\"0\" ZDC_NAME=\"v09600047P6\" ZDC_VERSION=\"0204\" LOGIN=\"20103\" LOGIN_IND=\"\">");
    } else {
        addToDataset(dataset, "\n\nERROR! Unknown docType (" + docType + ")\n\n");
    }
}

function generateFooter(dataset, docType) {
    if (docType == "vcp") {
        addToDataset(dataset, "</DATEN>\n");
        addToDataset(dataset, "</DATENBEREICH>\n");
        addToDataset(dataset, "</DATENBEREICHE>\n");
        addToDataset(dataset, "</ZDC>\n");
    } else if (docType == "odis") {
        addToDataset(dataset, "</PARAMETER_DATA>\n");
        addToDataset(dataset, "</DATA>\n");
        addToDataset(dataset, "</RESPONSE>\n");
        addToDataset(dataset, "</RESULT>\n");
        addToDataset(dataset, "</MESSAGE>\n");
    } else {
        addToDataset(dataset, "\n\nERROR! Unknown docType\n\n");
    }
}

function appendType(byteStream, ecuType) {
    var type = parseInt(ecuType, 16);

    byteStream.push(type);
}

function appendSetName(byteStream, setName) {
    byteStream.push(setName.length);

    for (var index = 0; index < setName.length; index++)
        byteStream.push(setName.charCodeAt(index));

    for (var index = setName.length; index < 61; index++)
        byteStream.push(0x00);
}

function calcPressureValue(pressureStr) {
    if (pressureStr.length == 0)
        return 0xFF;

    return Math.round(parseFloat(pressureStr) * 10);
}

function appendSetPressure(byteStream, ecuName, pressureValues) {
    if (ecuName == "3AA907273H") {
        byteStream.push(calcPressureValue(pressureValues.frontPartial));
        byteStream.push(calcPressureValue(pressureValues.frontFull));
        byteStream.push(calcPressureValue(pressureValues.frontComfort));
        byteStream.push(calcPressureValue(pressureValues.rearPartial));
        byteStream.push(calcPressureValue(pressureValues.rearFull));
        byteStream.push(calcPressureValue(pressureValues.rearComfort));
    } else {
        byteStream.push(calcPressureValue(pressureValues.frontFull));
        byteStream.push(calcPressureValue(pressureValues.frontPartial));
        byteStream.push(calcPressureValue(pressureValues.frontComfort));
        byteStream.push(calcPressureValue(pressureValues.rearFull));
        byteStream.push(calcPressureValue(pressureValues.rearPartial));
        byteStream.push(calcPressureValue(pressureValues.rearComfort));
    }
}

function appendTireSet(byteStream, ecuName, tireSet) {
    for (var index = 0; index < 61; index++)
        byteStream.push(0x00);

    appendSetName(byteStream, tireSet.name);
    appendSetPressure(byteStream, ecuName, tireSet);

    for (var index = 0; index < 6; index++)
        byteStream.push(0x00);
}

function appendVersion(byteStream, ecuVersion) {
    var version1 = ecuVersion.charCodeAt(0);
    var version2 = ecuVersion.charCodeAt(1);

    byteStream.push(version1);
    byteStream.push(version2);
}

function appendCRC(byteStream) {
    var lookupTable = [];

    for (var index = 0; index < 256; index++) {
        var c = index;

        for (var k = 0; k < 8; k++)
            c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);

        lookupTable[index] = c;
    }

    var crc = 0xFFFFFFFF;

    for (var index = 0; index < byteStream.length; index++)
        crc = (crc >>> 8) ^ lookupTable[(crc ^ byteStream[index]) & 0xFF];

    crc = crc ^ 0xFFFFFFFF;

    byteStream.push((crc >>> 24) & 0xFF);
    byteStream.push((crc >>> 16) & 0xFF);
    byteStream.push((crc >>> 8) & 0xFF);
    byteStream.push(crc & 0xFF);
}

function generateDataset(ecuName, ecuType, ecuVersion, tireSets) {
    var byteStream = [];

    appendType(byteStream, ecuType);
    byteStream.push(0x00);

    for (var index = 0; index < 11; index++)
        appendTireSet(byteStream, ecuName, tireSets[index]);

    for (var index = 0; index < 555; index++)
        byteStream.push(0xFF);

    appendVersion(byteStream, ecuVersion);
    appendCRC(byteStream);

    return byteStream;
}

function generateBody(dataset, ecuName, ecuType, ecuVersion, tireSets) {
    var byteStream = generateDataset(ecuName, ecuType, ecuVersion, tireSets);

    for (var index = 0; index < byteStream.length; index++) {
        var str = byteStream[index].toString(16).toUpperCase();

        if (str.length < 2)
            str = '0' + str;

        if (index > 0)
            addToDataset(dataset, ",0x" + str);
        else
            addToDataset(dataset, "0x" + str);
    }
}

function doGenerate() {
    var dataset = document.getElementById('dataset');
    dataset.value = "";

    var docType = document.getElementById('docType').value;
    var ecuObj = document.getElementById('ecuModel');
    var ecuOptions = ecuObj.options[ecuObj.selectedIndex];
    var ecuName = ecuOptions.text;
    var ecuOffset = ecuOptions.getAttribute('ecuOffset');
    var ecuVersion = ecuOptions.getAttribute('ecuVersion');
    var ecuType = ecuOptions.getAttribute('ecuType');

    var tireSets = [];

    for (var index = 1; index <= 11; index++) {
        if (document.getElementById("t" + index).hasAttribute("hidden")) {
            var set = {
                name: "",
                frontFull: "",
                rearFull: "",
                frontPartial: "",
                rearPartial: "",
                frontComfort: "",
                rearComfort: ""
            };

            tireSets.push(set);
        } else {
            var value = document.getElementById("t" + index + "name").value;
            if (!/^[a-zA-Z]+$/.test(value)) {
                window.alert("Имя конфигурации может содержать только латинские буквы.\nConfiguration name should have only latin symbols.");
                return;
            }
            var set = {
                name: value,
                frontFull: document.getElementById("t" + index + "pff").value,
                rearFull: document.getElementById("t" + index + "prf").value,
                frontPartial: document.getElementById("t" + index + "pfp").value,
                rearPartial: document.getElementById("t" + index + "prp").value,
                frontComfort: document.getElementById("trcomfort" + index).hasAttribute("hidden") ? "" : document.getElementById("t" + index + "pfc").value,
                rearComfort: document.getElementById("trcomfort" + index).hasAttribute("hidden") ? "" : document.getElementById("t" + index + "prc").value
            };

            tireSets.push(set);
        }
    }

    if (docType == "binary") {
        var byteStream = generateDataset(ecuName, ecuType, ecuVersion, tireSets);

        for (var index = 0; index < byteStream.length; index++) {
            if ((index % 16) == 0) {
                if (index > 0)
                    addToDataset(dataset, "\n");

                var offset = index.toString(16).toUpperCase();

                while (offset.length < 4)
                    offset = '0' + offset;

                addToDataset(dataset, offset + " ");
            }

            var value = byteStream[index].toString(16).toUpperCase();

            if (value.length < 2)
                value = '0' + value;

            addToDataset(dataset, value + " ");
        }

        return new Uint8Array(byteStream);
    } else {
        generateHeader(dataset, docType, ecuName, ecuOffset);
        generateBody(dataset, ecuName, ecuType, ecuVersion, tireSets);
        generateFooter(dataset, docType);

        var byteStream = new Uint8Array(dataset.value.length);

        Array.prototype.forEach.call(dataset.value, function(character, index) {
            byteStream[index] = character.charCodeAt(0);
        });

        return byteStream;
    }
}

function doGenerateDl() {
    var content = doGenerate();
    var blob = new Blob([content], {
        type: "application/octet-stream"
    });

    var element = window.document.createElement('a');

    if ('download' in element) {
        var docType = document.getElementById('docType').value;
        var ecuObj = document.getElementById('ecuModel');
        var ecuOptions = ecuObj.options[ecuObj.selectedIndex];
        var ecuName = ecuOptions.text;
        var ext = (docType == "binary") ? ".bin" : ".xml";

        element.href = window.URL.createObjectURL(blob);
        element.download = ecuName + ext;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    } else {
        var fileReader = new FileReader();

        fileReader.onload = function(event) {
            location.href = this.result;
        };

        fileReader.readAsDataURL(blob);
    }
}

function generatePD(id) {
    var html = "";

    html += "<select id=\"" + id + "\" size=\"1\">";
    html += "<option></option>";

    for (var index = 0; index < 36; index++)
        html += "<option>" + (1.5 + 0.1 * index).toFixed(1) + "</option>";

    html += "</select>";

    return html;
}

function updateTireSets() {
    var numTireSets = document.getElementById("numTireSets").value;
    var enableIndividual = document.getElementById("enableIndividual").checked;
    var enableComfort = document.getElementById("enableComfort").checked;

    for (var index = 1; index <= 11; index++) {
        var table = document.getElementById("t" + index);
        var br1 = document.getElementById("br1" + index);
        var trcomfort = document.getElementById("trcomfort" + index);

        if ((!((index == 11) && (enableIndividual))) && (index > numTireSets)) {
            table.setAttribute("hidden", "");
            br1.setAttribute("hidden", "");
        } else {
            table.removeAttribute("hidden");
            br1.removeAttribute("hidden");
        }

        if (enableComfort)
            trcomfort.removeAttribute("hidden");
        else
            trcomfort.setAttribute("hidden", "");
    }
}

function createTireSets() {
    var numTireSets = document.getElementById("numTireSets").value;

    var html = "";

    for (var index = 1; index <= 11; index++) {
        html += "          <table id=\"t" + index + "\" class=\"bordered\">";
        html += "            <tr>";

        if (index == 11)
            html += "              <th colspan=\"3\">Индивидуальная настройка давления в шинах. Tire set Individual</th>";
        else
            html += "              <th colspan=\"3\">Настройка давления в шинах. Tire set: #" + index + "</th>";

        html += "            </tr>";
        html += "            <tr>";
        html += "              <td>Имя</td>";
        html += "              <td colspan=\"2\"><input id=\"t" + index + "name\" style=\"height: 25px; color: #ffff00; font-weight: bold; background-color:#4051b5; width: 100%;\"></td>";
        html += "            </tr>";
        html += "            <tr>";
        html += "              <td class=\"sub\"><b>Тип загрузки машины. Situation</b></td>";
        html += "              <td class=\"sub\"><b>Передние колеса. Front</b></td>";
        html += "              <td class=\"sub\"><b>Задние колеса. Rear</b></td>";
        html += "            </tr>";
        html += "            <tr>";
        html += "              <td>Полная загрузка. Fully loaded</td>";
        html += "              <td>" + generatePD("t" + index + "pff") + "</td>";
        html += "              <td>" + generatePD("t" + index + "prf") + "</td>";
        html += "            </tr>";
        html += "            <tr>";
        html += "              <td>Стандартная загрузка. Standard load</td>";
        html += "              <td>" + generatePD("t" + index + "pfp") + "</td>";
        html += "              <td>" + generatePD("t" + index + "prp") + "</td>";
        html += "            </tr>";
        html += "            <tr id=\"trcomfort" + index + "\">";
        html += "              <td>Комфортная загрузка. Comfort load</td>";
        html += "              <td>" + generatePD("t" + index + "pfc") + "</td>";
        html += "              <td>" + generatePD("t" + index + "prc") + "</td>";
        html += "            </tr>";
        html += "          </table>";
        html += "          <br id=\"br1" + index + "\">";
    }

    document.getElementById("tireSetList").innerHTML = html;
    updateTireSets();
}

var configVersion = "1.0";

var configFields = [
    "docType", "ecuModel", "numTireSets", "@enableIndividual", "@enableComfort",
    "t1name", "t1pff", "t1prf", "t1pfp", "t1prp", "t1pfc", "t1prc",
    "t2name", "t2pff", "t2prf", "t2pfp", "t2prp", "t2pfc", "t2prc",
    "t3name", "t3pff", "t3prf", "t3pfp", "t3prp", "t3pfc", "t3prc",
    "t4name", "t4pff", "t4prf", "t4pfp", "t4prp", "t4pfc", "t4prc",
    "t5name", "t5pff", "t5prf", "t5pfp", "t5prp", "t5pfc", "t5prc",
    "t6name", "t6pff", "t6prf", "t6pfp", "t6prp", "t6pfc", "t6prc",
    "t7name", "t7pff", "t7prf", "t7pfp", "t7prp", "t7pfc", "t7prc",
    "t8name", "t8pff", "t8prf", "t8pfp", "t8prp", "t8pfc", "t8prc",
    "t9name", "t9pff", "t9prf", "t9pfp", "t9prp", "t9pfc", "t9prc",
    "t10name", "t10pff", "t10prf", "t10pfp", "t10prp", "t10pfc", "t10prc",
    "t11name", "t11pff", "t11prf", "t11pfp", "t11prp", "t11pfc", "t11prc"
];

function loadConfig() {

    var result = window.prompt("Восстановление конфигурации. Load configuration\n\nПожалуйста введите код, созданный ранее в данном приложении.\nPlease enter configuration code, created earlier with this tool", "");

    if (result == null)
        return;

    var code = window.atob(result);
    var keyValue = code.split("&");

    for (var index = 0; index < keyValue.length; index++) {
        var data = keyValue[index].split("=");

        if (data.length != 2)
            continue;

        if (data[0] == "configVersion") {
            if (data[1] != configVersion) {
                window.alert("Введенный код конфигурации не может может быть восстановлен\nConfiguration was created using an incompatible version of this tool and can not be restored\n\nCreated version: " + data[1] + "\nCurrent version: " + configVersion);
                return;
            }
        } else if (data[0].charAt(0) == '@')
            document.getElementById(data[0].substr(1)).checked = (data[1] == "true");
        else
            document.getElementById(data[0]).value = data[1];
    }

    updateTireSets();
}

function saveConfig() {
    var code = "configVersion=" + configVersion + "&";

    for (var index = 0; index < configFields.length; index++) {
        if (configFields[index].charAt(0) == '@')
            code += configFields[index] + "=" + document.getElementById(configFields[index].substr(1)).checked + "&";
        else
            code += configFields[index] + "=" + document.getElementById(configFields[index]).value + "&";
    }

    var result = window.prompt("Сохранить настройки. Save configuration\n\nПожалуйста, сохраните код, приведённый ниже. Он может быть использован для восстановления настроек в любое время.\nPlease backup the configuration code below, it can be used to restore the current configuration at a later point in time.", window.btoa(code));
}