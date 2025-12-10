"use strict";

function addToDataset(dataset, info) {
  dataset.value += info;
}

function generateHeader(dataset, docType, ecuName, ecuOffset) {
  if (docType === "vcp") {
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
  } else if (docType === "odis") {
    addToDataset(dataset, "<MESSAGE DTD=\"XMLMSG\" VERSION=\"V0.1\">\n");
    addToDataset(dataset, "<RESULT>\n");
    addToDataset(dataset, "<RESPONSE NAME=\"GetParametrizeData\" DTD=\"RepairHints\" VERSION=\"1.4.0.0\" ID=\"0\">\n");
    addToDataset(dataset, "<DATA>\n");
    addToDataset(
      dataset,
      "<PARAMETER_DATA " +
        "DIAGNOSTIC_ADDRESS=\"0x65\" " +
        "START_ADDRESS=\"" + ecuOffset + "\" " +
        "PR_IDX=\"0\" " +
        "ZDC_NAME=\"v09600047P6\" " +
        "ZDC_VERSION=\"0204\" " +
        "LOGIN=\"20103\" LOGIN_IND=\"\">"
    );
  } else {
    addToDataset(dataset, "\n\nERROR! Unknown docType (" + docType + ")\n\n");
  }
}

function generateFooter(dataset, docType) {
  if (docType === "vcp") {
    addToDataset(dataset, "</DATEN>\n");
    addToDataset(dataset, "</DATENBEREICH>\n");
    addToDataset(dataset, "</DATENBEREICHE>\n");
    addToDataset(dataset, "</ZDC>\n");
  } else if (docType === "odis") {
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
  const type = parseInt(ecuType, 16);
  byteStream.push(Number.isNaN(type) ? 0x00 : type);
}

function appendSetName(byteStream, setName) {
  let name = String(setName || "");
  let length = name.length;

  if (length > 60) {
    name = name.substring(0, 60);
    length = name.length;
  }

  byteStream.push(length);

  for (let i = 0; i < length; i++) {
    byteStream.push(name.charCodeAt(i));
  }

  for (let i = length; i < 61; i++) {
    byteStream.push(0x00);
  }
}

function calcPressureValue(pressureStr) {
  let trimmed = (pressureStr || "").trim();
  if (trimmed.length === 0) return 0xFF;

  trimmed = trimmed.replace(",", ".");
  const val = parseFloat(trimmed);

  if (Number.isNaN(val)) return 0xFF;

  let scaled = Math.round(val * 10);
  if (scaled < 0) scaled = 0;
  if (scaled > 0xFF) scaled = 0xFF;
  return scaled;
}

function appendSetPressure(byteStream, ecuName, pressureValues) {
  if (ecuName === "3AA907273H") {
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
  for (let i = 0; i < 61; i++) {
    byteStream.push(0x00);
  }

  appendSetName(byteStream, tireSet.name);
  appendSetPressure(byteStream, ecuName, tireSet);

  for (let i = 0; i < 6; i++) {
    byteStream.push(0x00);
  }
}

function appendVersion(byteStream, ecuVersion) {
  const v = String(ecuVersion || "");
  const version1 = v.charCodeAt(0) || 0x00;
  const version2 = v.charCodeAt(1) || 0x00;

  byteStream.push(version1);
  byteStream.push(version2);
}

function appendCRC(byteStream) {
  const lookupTable = [];

  for (let i = 0; i < 256; i++) {
    let c = i;

    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }

    lookupTable[i] = c;
  }

  let crc = 0xFFFFFFFF;

  for (let i = 0; i < byteStream.length; i++) {
    crc = (crc >>> 8) ^ lookupTable[(crc ^ byteStream[i]) & 0xFF];
  }

  crc = crc ^ 0xFFFFFFFF;

  byteStream.push((crc >>> 24) & 0xFF);
  byteStream.push((crc >>> 16) & 0xFF);
  byteStream.push((crc >>> 8) & 0xFF);
  byteStream.push(crc & 0xFF);
}

function generateDataset(ecuName, ecuType, ecuVersion, tireSets) {
  const byteStream = [];

  appendType(byteStream, ecuType);
  byteStream.push(0x00);

  for (let i = 0; i < 11; i++) {
    appendTireSet(byteStream, ecuName, tireSets[i]);
  }

  for (let i = 0; i < 555; i++) {
    byteStream.push(0xFF);
  }

  appendVersion(byteStream, ecuVersion);
  appendCRC(byteStream);

  return byteStream;
}

function generateBody(dataset, ecuName, ecuType, ecuVersion, tireSets) {
  const byteStream = generateDataset(ecuName, ecuType, ecuVersion, tireSets);

  for (let i = 0; i < byteStream.length; i++) {
    let str = byteStream[i].toString(16).toUpperCase();

    if (str.length < 2) {
      str = "0" + str;
    }

    if (i > 0) {
      addToDataset(dataset, ",0x" + str);
    } else {
      addToDataset(dataset, "0x" + str);
    }
  }
}

function doGenerate() {
  const numTireSetsRaw = document.getElementById("numTireSets").value;
  let numTireSets = parseInt(numTireSetsRaw, 10);
  if (Number.isNaN(numTireSets)) numTireSets = 0;

  if (numTireSets < 1) {
    window.alert("Количество комплектов шин должно быть больше 0.\nNumber of tire sets should be greater than 0.");
    return;
  }

  const dataset = document.getElementById("dataset");
  dataset.value = "";

  const docType = document.getElementById("docType").value;
  const ecuObj = document.getElementById("ecuModel");
  const ecuOptions = ecuObj.options[ecuObj.selectedIndex];
  const ecuName = ecuOptions.text;
  const ecuOffset = ecuOptions.getAttribute("ecuOffset");
  const ecuVersion = ecuOptions.getAttribute("ecuVersion");
  const ecuType = ecuOptions.getAttribute("ecuType");

  const tireSets = [];

  for (let index = 1; index <= 11; index++) {
    const table = document.getElementById("t" + index);
    const isHidden = table.hasAttribute("hidden");

    if (isHidden) {
      tireSets.push({
        name: "",
        frontFull: "",
        rearFull: "",
        frontPartial: "",
        rearPartial: "",
        frontComfort: "",
        rearComfort: ""
      });
    } else {
      const nameValue = document.getElementById("t" + index + "name").value;

      if (!/^[a-zA-Z]+$/.test(nameValue)) {
        window.alert(
          "Имя конфигурации #" + index + " может содержать только латинские буквы.\n" +
          "Configuration name should have only latin symbols."
        );
        return;
      }

      const comfortHidden = document.getElementById("trcomfort" + index).hasAttribute("hidden");

      const set = {
        name: nameValue,
        frontFull: document.getElementById("t" + index + "pff").value,
        rearFull: document.getElementById("t" + index + "prf").value,
        frontPartial: document.getElementById("t" + index + "pfp").value,
        rearPartial: document.getElementById("t" + index + "prp").value,
        frontComfort: comfortHidden ? "" : document.getElementById("t" + index + "pfc").value,
        rearComfort: comfortHidden ? "" : document.getElementById("t" + index + "prc").value
      };

      tireSets.push(set);
    }
  }

  if (docType === "binary") {
    const byteStream = generateDataset(ecuName, ecuType, ecuVersion, tireSets);

    for (let i = 0; i < byteStream.length; i++) {
      if ((i % 16) === 0) {
        if (i > 0) addToDataset(dataset, "\n");

        let offset = i.toString(16).toUpperCase();
        while (offset.length < 4) offset = "0" + offset;
        addToDataset(dataset, offset + " ");
      }

      let value = byteStream[i].toString(16).toUpperCase();
      if (value.length < 2) value = "0" + value;

      addToDataset(dataset, value + " ");
    }

    return new Uint8Array(byteStream);
  } else {
    generateHeader(dataset, docType, ecuName, ecuOffset);
    generateBody(dataset, ecuName, ecuType, ecuVersion, tireSets);
    generateFooter(dataset, docType);

    const text = dataset.value;
    const byteStreamXml = new Uint8Array(text.length);

    for (let i = 0; i < text.length; i++) {
      byteStreamXml[i] = text.charCodeAt(i);
    }

    return byteStreamXml;
  }
}

function doGenerateDl() {
  const content = doGenerate();
  if (!content) return;

  const blob = new Blob([content], { type: "application/octet-stream" });
  const element = window.document.createElement("a");

  if ("download" in element) {
    const docType = document.getElementById("docType").value;
    const ecuObj = document.getElementById("ecuModel");
    const ecuOptions = ecuObj.options[ecuObj.selectedIndex];
    const ecuName = ecuOptions.text;
    const ext = (docType === "binary") ? ".bin" : ".xml";

    element.href = window.URL.createObjectURL(blob);
    element.download = ecuName + ext;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  } else {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      location.href = this.result;
    };
    fileReader.readAsDataURL(blob);
  }
}

function generatePD(id) {
  let html = "";

  html += "<select id=\"" + id + "\" size=\"1\">";
  html += "<option></option>";

  for (let index = 0; index < 36; index++) {
    html += "<option>" + (1.5 + 0.1 * index).toFixed(1) + "</option>";
  }

  html += "</select>";

  return html;
}

function updateTireSets() {
  const numTireSetsRaw = document.getElementById("numTireSets").value;
  let numTireSets = parseInt(numTireSetsRaw, 10);
  if (Number.isNaN(numTireSets)) numTireSets = 0;

  const enableIndividual = document.getElementById("enableIndividual").checked;
  const enableComfort = document.getElementById("enableComfort").checked;

  for (let index = 1; index <= 11; index++) {
    const table = document.getElementById("t" + index);
    const br1 = document.getElementById("br1" + index);
    const trcomfort = document.getElementById("trcomfort" + index);

    const shouldShowThisSet =
      ((index === 11) && enableIndividual) ||
      (index <= numTireSets);

    if (shouldShowThisSet) {
      table.removeAttribute("hidden");
      br1.removeAttribute("hidden");
    } else {
      table.setAttribute("hidden", "");
      br1.setAttribute("hidden", "");
    }

    if (enableComfort) {
      trcomfort.removeAttribute("hidden");
    } else {
      trcomfort.setAttribute("hidden", "");
    }
  }
}

function createTireSets() {
  let html = "";

  for (let index = 1; index <= 11; index++) {
    html += "          <table id=\"t" + index + "\" class=\"bordered\">";
    html += "            <tr>";

    if (index === 11) {
      html += "              <th colspan=\"3\">Индивидуальная настройка давления в шинах / Tire set Individual</th>";
    } else {
      html += "              <th colspan=\"3\">Настройка давления в шинах / Tire set: #" + index + "</th>";
    }

    html += "            </tr>";
    html += "            <tr>";
    html += "              <td>Имя</td>";
    html += "              <td colspan=\"2\"><input id=\"t" + index + "name\" style=\"height: 25px; color: #ffff00; font-weight: bold; background-color:#4051b5; width: 100%;\"></td>";
    html += "            </tr>";
    html += "            <tr>";
    html += "              <td class=\"sub\"><b>Тип загрузки машины / Load situation</b></td>";
    html += "              <td class=\"sub\"><b>Передние колеса / Front wheels</b></td>";
    html += "              <td class=\"sub\"><b>Задние колеса / Rear wheels</b></td>";
    html += "            </tr>";
    html += "            <tr>";
    html += "              <td>Полная загрузка / Full load</td>";
    html += "              <td>" + generatePD("t" + index + "pff") + "</td>";
    html += "              <td>" + generatePD("t" + index + "prf") + "</td>";
    html += "            </tr>";
    html += "            <tr>";
    html += "              <td>Стандартная загрузка / Standard load</td>";
    html += "              <td>" + generatePD("t" + index + "pfp") + "</td>";
    html += "              <td>" + generatePD("t" + index + "prp") + "</td>";
    html += "            </tr>";
    html += "            <tr id=\"trcomfort" + index + "\">";
    html += "              <td>Комфортная загрузка / Comfort load</td>";
    html += "              <td>" + generatePD("t" + index + "pfc") + "</td>";
    html += "              <td>" + generatePD("t" + index + "prc") + "</td>";
    html += "            </tr>";
    html += "          </table>";
    html += "          <br id=\"br1" + index + "\">";
  }

  document.getElementById("tireSetList").innerHTML = html;
  updateTireSets();
}

let configVersion = "1.0";

const configFields = [
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
  const result = window.prompt(
    "Восстановление конфигурации. Load configuration\n\n" +
    "Пожалуйста введите код, созданный ранее в данном приложении.\n" +
    "Please enter configuration code, created earlier with this tool",
    ""
  );

  if (result === null) return;

  let code;
  try {
    code = window.atob(result);
  } catch (e) {
    window.alert("Введён некорректный код конфигурации (не base64).\nInvalid configuration code.");
    return;
  }

  const keyValue = code.split("&");

  for (let i = 0; i < keyValue.length; i++) {
    const data = keyValue[i].split("=");

    if (data.length !== 2) continue;

    if (data[0] === "configVersion") {
      if (data[1] !== configVersion) {
        window.alert(
          "Введенный код конфигурации не может может быть восстановлен\n" +
          "Configuration was created using an incompatible version of this tool and can not be restored\n\n" +
          "Created version: " + data[1] + "\nCurrent version: " + configVersion
        );
        return;
      }
    } else if (data[0].charAt(0) === "@") {
      const idCheck = data[0].substr(1);
      const elCheck = document.getElementById(idCheck);
      if (elCheck) {
        elCheck.checked = (data[1] === "true");
      }
    } else {
      const el = document.getElementById(data[0]);
      if (el) {
        el.value = data[1];
      }
    }
  }

  updateTireSets();
}

function saveConfig() {
  let code = "configVersion=" + configVersion + "&";

  for (let i = 0; i < configFields.length; i++) {
    const fieldName = configFields[i];

    if (fieldName.charAt(0) === "@") {
      const idCheck = fieldName.substr(1);
      const elCheck = document.getElementById(idCheck);
      code += fieldName + "=" + (elCheck ? elCheck.checked : false) + "&";
    } else {
      const el = document.getElementById(fieldName);
      code += fieldName + "=" + (el ? el.value : "") + "&";
    }
  }

  const encoded = window.btoa(code);

  window.prompt(
    "Сохранить настройки. Save configuration\n\n" +
    "Пожалуйста, сохраните код, приведённый ниже. Он может быть использован для восстановления настроек в любое время.\n" +
    "Please backup the configuration code below, it can be used to restore the current configuration at a later point in time.",
    encoded
  );
}

window.onload = function () {
  createTireSets();
};
