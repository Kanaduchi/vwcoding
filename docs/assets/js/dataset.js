/**
 * Convert big-endian hex to little-endian hex and vice-versa
 */
function setEndianConvert(value) {
    let result = '';
    if (value.length % 2) {
        value = '0' + String(value);
    }
    for (let n = 0; n < value.length; n += 4) {
        const str = value.substring(n, n + 4);
        result += str.replace(/(..)(..)?/g, "$2$1");
    }
    return result;
}

/**
 * Check if hex is little-endian. Example: 5216 = true; 1652 = false
 */
function isLittleEndian(value) {
    if (value.length % 2) {
        value = '0' + String(value);
    }
    let array = hexToDecimalArray(value.substring(0, 4));
    if (array[0] === array[1]) {
        return isLittleEndian(value.substring(4));
    }
    return array[0] > array[1];
}

/**
 * Convert hex string to decimal array. Example: FF -> 255
 */
function hexToDecimalArray(hex) {
    if (!hex.match(/^[0-9a-fA-F]+$/)) {
        throw new Error('is not a hex string.');
    }
    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }
    const bytes = [];
    for (let n = 0; n < hex.length; n += 2) {
        const code = parseInt(hex.substring(n, n + 2), 16);
        bytes.push(code);
    }
    return bytes;
}

/**
 * Convert ascii representation to hex string. Example: Ex -> 4578
 */
function asciiToHex(str) {
    const arr1 = [];
    let n = 0, l = str.length;
    for (; n < l; n++) {
        const hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

/**
 * Convert hex string to ascii representation. Example: 4578 -> Ex
 */
function hexToAscii(str1) {
    const hex = str1.toString();
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substring(n, n + 2), 16));
    }
    return str;
}

/**
 * Convert hex value to readable array. Example: 0x45,0x78 -> 45,78
 */
function parseHexValueToArray(str) {
    const list = str.replace(/,/g, " ").replace(/[^A-Fa-f0-9 ]/g, "").split(' ');
    const result = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i].length === 0)
            continue;
        result.push(list[i].substring(1));
    }
    return result;
}

/**
 * Convert hex value to readable string. Example: 0x45,0x78 -> 4578
 */
function parseHexValueToString(str) {
    const list = str.replace(/,/g, " ").replace(/[^A-Fa-f0-9 ]/g, "").split(' ');
    let result = "";

    for (let i = 0; i < list.length; i++) {
        if (list[i].length === 0)
            continue;
        result += list[i].substring(1);
    }
    return result;
}

/**
 * Convert readable string to hex value. Example: 4578 or 45 78 -> 0x45,0x78
 */
function parseStringValueToHex(str) {
    const matches = str.matchAll(/[^\s]{1,2}/g);
    let result = "";
    for (const match of matches) {
        result += "0x" + match + ",";
    }
    return result.substring(0, result.length - 1);
}

/**
 * Clean hex value. Example: 45 78 -> 4548
 */
function cleanHexValue(str) {
    const matches = str.matchAll(/[^\s]{1,2}/g);
    let result = "";
    for (const match of matches) {
        result += match;
    }
    return result;
}

/**
 * Convert hex value to readable string array delimited by 16 bytes. Example: 4578... or 45 78... -> 45 78 ... /n
 */
function parseValue(byteStream) {
    let resultValue = "";
    let bytes;

    if (!Array.isArray(byteStream)) {
        bytes = byteStream.match(/[^\s]{1,2}/g);
    } else {
        bytes = byteStream;
    }

    for (let index = 0; index < bytes.length; index++) {
        if (((index % 16) === 0) && (index > 0)) {
            resultValue += "\n";
        }

        let value = bytes[index].toString(16).toUpperCase();
        if (value.length < 2) {
            value = '0' + value;
        }
        resultValue += value + " ";
    }
    return resultValue;
}

function addToDataset(dataset, info) {
    dataset.value += info;
}

function generateHeader(dataset) {
    addToDataset(dataset, "<MESSAGE DTD=\"XMLMSG\" VERSION=\"V0.1\">\n");
    addToDataset(dataset, "	<RESULT>\n");
    addToDataset(dataset, "		<RESPONSE NAME=\"GetParametrizeData\" DTD=\"RepairHints\" VERSION=\"1.4.0.0\" ID=\"0\">\n");
    addToDataset(dataset, "			<DATA>\n");
    addToDataset(dataset, "				<REQUEST_ID>000000000</REQUEST_ID>\n");

    const rows = document.getElementById('dataParams').rows;
    if (rows.length > 3) {
        let previousRow = "";
        for (let i = 1; i < rows.length - 1; i++) {
            if (rows[i].id && previousRow !== rows[i].id) {
                previousRow = rows[i].id;
                addToDataset(dataset, "				<PARAMETER_DATA DIAGNOSTIC_ADDRESS=\"" + document.getElementById('diagAddr_' + previousRow).value + "\"");
                addToDataset(dataset, " START_ADDRESS=\"" + document.getElementById('flashOffset_' + previousRow).value + "\"");
                addToDataset(dataset, " PR_IDX=\"0\"");
                addToDataset(dataset, " ZDC_NAME=\"" + document.getElementById('datasetName_' + previousRow).value + "\"");
                addToDataset(dataset, " ZDC_VERSION=\"" + document.getElementById('datasetVersion_' + previousRow).value + "\"");
                addToDataset(dataset, " LOGIN=\"" + document.getElementById('login_' + previousRow).value + "\"");
                addToDataset(dataset, " LOGIN_IND=\"\"");
                addToDataset(dataset, " DSD_TYPE=\"" + document.getElementById('datasetType_' + previousRow).value + "\"");
                addToDataset(dataset, " SESSIONNAME=\"\"");
                addToDataset(dataset, " FILENAME=\"" + document.getElementById('fileName_' + previousRow).value + "\">");
                addToDataset(dataset, doCreateParam(previousRow, false));
                addToDataset(dataset, "</PARAMETER_DATA>\n");
            }
        }
    }
    addToDataset(dataset, "				<COMPOUNDS>\n");
    addToDataset(dataset, "				    <COMPOUND COMPOUND_ID=\"1\">\n");
    addToDataset(dataset, "				        <SW_NAME/>\n");
    addToDataset(dataset, "			            <SW_VERSION/>\n");
    addToDataset(dataset, "			            <SW_PART_NO/>\n");
    addToDataset(dataset, "			        </COMPOUND>\n");
    addToDataset(dataset, "			        <COMPOUND COMPOUND_ID=\"2\">\n");
    addToDataset(dataset, "			            <SW_NAME/>\n");
    addToDataset(dataset, "			            <SW_VERSION/>\n");
    addToDataset(dataset, "			            <SW_PART_NO/>\n");
    addToDataset(dataset, "			        </COMPOUND>\n");
    addToDataset(dataset, "			        <COMPOUND COMPOUND_ID=\"3\">\n");
    addToDataset(dataset, "			            <SW_NAME/>\n");
    addToDataset(dataset, "			            <SW_VERSION/>\n");
    addToDataset(dataset, "			            <SW_PART_NO/>\n");
    addToDataset(dataset, "			        </COMPOUND>\n");
    addToDataset(dataset, "			        <COMPOUND COMPOUND_ID=\"4\">\n");
    addToDataset(dataset, "			            <SW_NAME/>\n");
    addToDataset(dataset, "			            <SW_VERSION/>\n");
    addToDataset(dataset, "			            <SW_PART_NO/>\n");
    addToDataset(dataset, "			        </COMPOUND>\n");
    addToDataset(dataset, "			        <COMPOUND COMPOUND_ID=\"5\">\n");
    addToDataset(dataset, "			            <SW_NAME/>\n");
    addToDataset(dataset, "			            <SW_VERSION/>\n");
    addToDataset(dataset, "			            <SW_PART_NO/>\n");
    addToDataset(dataset, "			        </COMPOUND>\n");
    addToDataset(dataset, "			    </COMPOUNDS>\n");
    addToDataset(dataset, "			    <INFORMATION>\n");
    addToDataset(dataset, "			        <CODE/>\n");
    addToDataset(dataset, "			    </INFORMATION>\n");
}

function generateFooter(dataset) {
    addToDataset(dataset, "			</DATA>\n");
    addToDataset(dataset, "      </RESPONSE>\n");
    addToDataset(dataset, "  </RESULT>\n");
    addToDataset(dataset, "</MESSAGE>\n");
}

function generateBody(dataset, data) {
    addToDataset(dataset, "			    <DSD_DATA>\n");
    addToDataset(dataset, "			        <COMPRESSED_DATA");
    addToDataset(dataset, "	BYTES_COMPRESSED=\"" + document.getElementById('compressedBytes').value + "\"");
    addToDataset(dataset, "	BYTES_UNCOMPRESSED=\"" + document.getElementById('uncompressedBytes').value + "\"");
    addToDataset(dataset, "	CONTENT=\"" + document.getElementById('content').value + "\"");
    addToDataset(dataset, "	CONTENT_TRANSFER_ENCODING=\"base64\"");
    addToDataset(dataset, " CONTENT_TYPE=\"application/tar\">");

    if (document.getElementById('uncompressedBytes').value !== '0' &&
        document.getElementById('compressedBytes').value !== '0') {
        addToDataset(dataset, data);
    }

    addToDataset(dataset, "</COMPRESSED_DATA>\n");
    addToDataset(dataset, "			    </DSD_DATA>\n");
}

function doGenerate() {
    doOriginal();
    const dataset = document.getElementById('dataset');
    dataset.value = "";

    const data = document.getElementById('data');

    generateHeader(dataset);
    generateBody(dataset, data);
    generateFooter(dataset);

    const byteStream = new Uint8Array(dataset.value.length);
    document.getElementById("generatedData").style.display = "table";
    return byteStream;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function doClearParams() {
    while (document.getElementById('dataParams').rows.length > 3) {
        const rows = document.getElementById('dataParams').rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].id) {
                document.getElementById('dataParams').deleteRow(i);
            }
        }
    }
}

function doClearParsedParams() {
    document.getElementById("parsedCompressedParams").style.display = "none";

    while (document.getElementById('parsedCompressedParams').rows.length > 3) {
        const rows = document.getElementById('parsedCompressedParams').rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].id) {
                document.getElementById('parsedCompressedParams').deleteRow(i);
            }
        }
    }
}

function doClearFields() {
    doClearParams();

    document.getElementById('data').value = "";
    document.getElementById('dataset').value = "";

    document.getElementById('isCompressed').checked = false;
    document.getElementById('content').value = '0';
    document.getElementById('uncompressedBytes').value = '0';
    document.getElementById('compressedBytes').value = '0';

    document.getElementById("compressedData").style.display = "none";
    document.getElementById("generatedData").style.display = "none";

    doClearParsedParams();
}

function deleteRow(row, shouldBreak) {
    const rows = document.getElementById('dataParams').rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === row) {
            document.getElementById('dataParams').deleteRow(i);
            if (shouldBreak) {
                return;
            }
            deleteRow(row, true);
        }
    }
}

function doCreateParsedParam(row, showDialog) {
    let result = '';
    let raw = cleanHexValue(document.getElementById('parsedParam_' + row).value);
    if (raw) {
        doCRC32Calc(row);
        result = asciiToHex(document.getElementById('parsedVersion_' + row).value) + raw +
            document.getElementById("crc32_" + row).value;
        if (showDialog) {
            window.prompt("Parameter", result);
        }
    }
    return result;
}

function doCRC32Calc(row) {
    let raw = cleanHexValue(document.getElementById('parsedParam_' + row).value);
    if (document.getElementById('parsedVersion_' + row).value && raw) {
        document.getElementById('crc32_' + row).value = crc32(hexToDecimalArray(
            asciiToHex(document.getElementById('parsedVersion_' + row).value) + raw)).toUpperCase();
    }
}

function doCreateParam(row, showDialog) {
    let result = '';
    let raw = cleanHexValue(document.getElementById('param_' + row).value);
    if (raw) {
        doCRC16Calc(row);
        result = raw + asciiToHex(document.getElementById('version_' + row).value.substring(0, 2)) +
            document.getElementById("crc16_" + row).value;
        if (document.getElementById('littleEndian_' + row).checked && !isLittleEndian(raw)) {
            result = setEndianConvert(result);
        }
        if (showDialog) {
            window.prompt("Parameter", parseStringValueToHex(result));
        }
    }
    return parseStringValueToHex(result);
}

function doCRC16Calc(row) {
    let raw = cleanHexValue(document.getElementById('param_' + row).value);
    if (document.getElementById('version_' + row).value && raw) {
        let hexValue = CRC16_CCITT(hexToDecimalArray(
            raw + asciiToHex(document.getElementById('version_' + row).value.substring(0, 2)))).toUpperCase();
        if (isLittleEndian(raw)) {
            hexValue = CRC16_CCITT(hexToDecimalArray(
                raw + setEndianConvert(asciiToHex(document.getElementById('version_' + row).value.substring(0, 2))))).toUpperCase()
        }
        document.getElementById('crc16_' + row).value = hexValue;
    }
}

function addNewParam() {
    const tableRef = document.getElementById('dataParams');
    let newRow = tableRef.insertRow(tableRef.rows.length - 1);
    const randomName = getRandomInt(10000);
    let html = "<td rowspan=\"2\" colspan=\"1\">" + (tableRef.rows.length - 2) / 2 + "</td>";
    html += "<td><input size=\"10\" id=\"diagAddr_" + randomName + "\"></td>";
    html += "<td><input size=\"10\" id=\"flashOffset_" + randomName + "\"></td>";
    html += "<td><input id=\"datasetName_" + randomName + "\"></td>";
    html += "<td><input size=\"10\" id=\"datasetVersion_" + randomName + "\"></td>";
    html += "<td><input size=\"10\" id=\"login_" + randomName + "\"></td>";
    html += "<td><input size=\"10\" id=\"datasetType_" + randomName + "\"></td>";
    html += "<td><input size=\"50\" id=\"fileName_" + randomName + "\"></td>";
    html += "<td rowspan=\"2\"><button class=\"pure-material-button-contained\" style=\"min-width:10px\" id=\"" + randomName + "\" type=\"button\" onclick=\"deleteRow(" + randomName + ", false)\">⌫</button></td>";
    newRow.innerHTML = html;
    newRow.id = randomName;

    newRow = tableRef.insertRow(tableRef.rows.length - 1);
    html = "<td rowspan=\"1\" colspan=\"3\">";
    html += "<textarea rows=\"5\" cols=\"25\" id=\"param_" + randomName + "\" style=\"width: 100%; font-family: Courier New, Courier, monospace;\"></textarea>";
    html += "</td><td rowspan=\"1\" colspan=\"4\">";
    html += "Bytes in little-endian format: <input type=\"checkbox\" id=\"littleEndian_" + randomName + "\"><br>";
    html += "Version of hex: <input size=\"2\" maxlength=\"2\" id=\"version_" + randomName + "\" defaultValue=\"0\"><br>";
    html += "CRC16 sum: <input size=\"10\" id=\"crc16_" + randomName + "\" defaultValue=\"0\" disabled> <button class=\"pure-material-button-contained\" style=\"min-width:10px\" type=\"button\" onclick=\"doCRC16Calc(" + randomName + ")\">⟳</button><br>";
    html += "<button class=\"pure-material-button-contained\" style=\"min-width:10px\" type=\"button\" onclick=\"doCreateParam(" + randomName + ", true)\">Generate</button>";
    html += "</td>";
    newRow.innerHTML = html;
    newRow.id = randomName;
    return randomName;
}

function addNewParsedParam() {
    const tableRef = document.getElementById('parsedCompressedParams');
    let newRow = tableRef.insertRow(tableRef.rows.length - 1);
    const randomName = getRandomInt(10000);
    let html = "<td rowspan=\"2\" colspan=\"1\">" + (tableRef.rows.length - 2) / 2 + "</td>";
    html += "<td><input size=\"10\" id=\"parsedFlashOffset_" + randomName + "\"></td>";
    html += "<td><input id=\"parsedDatasetName_" + randomName + "\"></td>";
    html += "<td><input size=\"10\" id=\"parsedDatasetVersion_" + randomName + "\"></td>";
    html += "<td><input size=\"50\" id=\"parsedFileName_" + randomName + "\"></td>";
    newRow.innerHTML = html;
    newRow.id = randomName;

    newRow = tableRef.insertRow(tableRef.rows.length - 1);
    html = "<td rowspan=\"1\" colspan=\"2\">";
    html += "<textarea rows=\"4\" cols=\"25\" id=\"parsedParam_" + randomName + "\" style=\"width: 100%; font-family: Courier New, Courier, monospace;\"></textarea>";
    html += "</td><td rowspan=\"1\" colspan=\"2\">";
    html += "Version of hex: <input size=\"4\" maxlength=\"4\" id=\"parsedVersion_" + randomName + "\" defaultValue=\"0\"><br>";
    html += "CRC32 sum: <input size=\"10\" id=\"crc32_" + randomName + "\" defaultValue=\"0\" disabled> <button class=\"pure-material-button-contained\" style=\"min-width:10px\" type=\"button\" onclick=\"doCRC32Calc(" + randomName + ")\">⟳</button><br>";
    html += "<button class=\"pure-material-button-contained\" style=\"min-width:10px\" type=\"button\" onclick=\"doCreateParsedParam(" + randomName + ", true)\">Generate</button>";
    html += "</td>";
    newRow.innerHTML = html;
    newRow.id = randomName;

    return randomName;
}

function handleUpload() {
    const files = document.getElementById('uploadBinaryButton').files;
    const reader = new FileReader();
    const parser = new DOMParser();
    doClearFields();

    reader.onload = function () {
        const xmlDoc = parser.parseFromString(new TextDecoder().decode(reader.result), "text/xml");
        const errorNode = xmlDoc.querySelector('parsererror');

        if (errorNode) {
            const byteStream = new Uint8Array(reader.result);
            document.getElementById("compressedData").style.display = "table";
            document.getElementById('data').value = parseValue(byteStream);
        } else {
            if (xmlDoc.querySelector('MESSAGE')) {
                const parameterAbstract = xmlDoc.querySelectorAll("PARAMETER_DATA");
                parameterAbstract.forEach(a => {
                    const randomName = addNewParam();
                    document.getElementById('diagAddr_' + randomName).defaultValue = a.getAttribute("DIAGNOSTIC_ADDRESS");
                    document.getElementById('flashOffset_' + randomName).defaultValue = a.getAttribute("START_ADDRESS");
                    document.getElementById('datasetName_' + randomName).defaultValue = a.getAttribute("ZDC_NAME");
                    document.getElementById('datasetVersion_' + randomName).defaultValue = a.getAttribute("ZDC_VERSION");
                    document.getElementById('login_' + randomName).defaultValue = a.getAttribute("LOGIN");
                    document.getElementById('datasetType_' + randomName).defaultValue = a.getAttribute("DSD_TYPE");
                    document.getElementById('fileName_' + randomName).defaultValue = a.getAttribute("FILENAME");
                    if (a.textContent.length !== 0) {
                        const raw = parseHexValueToString(a.textContent.trim());
                        if (isLittleEndian(raw)) {
                            document.getElementById('littleEndian_' + randomName).checked = true;
                            document.getElementById("version_" + randomName).value = hexToAscii(setEndianConvert(raw.substring(raw.length - 8, raw.length - 4)));
                            document.getElementById("crc16_" + randomName).value = setEndianConvert(raw.substring(raw.length - 4, raw.length));
                        } else {
                            document.getElementById("version_" + randomName).value = hexToAscii(raw.substring(raw.length - 8, raw.length - 4));
                            document.getElementById("crc16_" + randomName).value = raw.substring(raw.length - 4, raw.length);
                        }
                        document.getElementById("param_" + randomName).value = parseValue(raw.substring(0, raw.length - 8));
                    }
                });

                if (xmlDoc.querySelector('COMPRESSED_DATA') &&
                    xmlDoc.querySelector('COMPRESSED_DATA').getAttribute("BYTES_UNCOMPRESSED") !== '0' &&
                    xmlDoc.querySelector('COMPRESSED_DATA').getAttribute("BYTES_COMPRESSED") !== '0') {
                    document.getElementById("compressedData").style.display = "table";
                    document.getElementById('isCompressed').checked = true;
                    document.getElementById('content').value = xmlDoc.querySelector('COMPRESSED_DATA').getAttribute("CONTENT");
                    document.getElementById('uncompressedBytes').value = xmlDoc.querySelector('COMPRESSED_DATA').getAttribute("BYTES_UNCOMPRESSED");
                    document.getElementById('compressedBytes').value = xmlDoc.querySelector('COMPRESSED_DATA').getAttribute("BYTES_COMPRESSED");
                    document.getElementById('data').value = xmlDoc.querySelector('COMPRESSED_DATA').textContent.trim();
                }
            } else if (xmlDoc.querySelector('SW-CNT')) {
                document.getElementById('diagAddr').defaultValue = '';
                document.getElementById('flashOffset').defaultValue = xmlDoc.querySelector('START-ADR').textContent.trim();
                document.getElementById('datasetName').defaultValue = xmlDoc.querySelector('DATEN-NAME').textContent.trim();
                document.getElementById('datasetVersion').defaultValue = xmlDoc.querySelector('CNT-VERSION-INHALT').textContent.trim();
                document.getElementById('login').defaultValue = xmlDoc.querySelector('LOGIN').textContent.trim();
                document.getElementById('datasetType').defaultValue = '';
                document.getElementById('fileName').defaultValue = xmlDoc.querySelector('CNT-DATEI').textContent.trim();
                document.getElementById('data').value = xmlDoc.querySelector('DATEN').textContent.trim();
            } else {
                window.alert("Uploaded file is not dataset file");
            }
        }
    }
    reader.readAsArrayBuffer(files[0]);
}

function doDecode() {
    if (document.getElementById('uncompressedBytes').value !== '0' &&
        document.getElementById('compressedBytes').value !== '0' &&
        document.getElementById('isCompressed').checked) {
        document.getElementById('data').value = atob(document.getElementById('data').value);
        document.getElementById('isCompressed').checked = false;
        document.getElementById('uncompressedBytes').value = document.getElementById('data').value.length;
    }
}

function doOriginal() {
    if (document.getElementById('uncompressedBytes').value !== '0' &&
        document.getElementById('compressedBytes').value !== '0' &&
        !document.getElementById('isCompressed').checked) {
        document.getElementById('data').value = btoa(unescape(encodeURIComponent(document.getElementById('data').value)));
        document.getElementById('isCompressed').checked = true;
        document.getElementById('compressedBytes').value = document.getElementById('data').value.length;
    }
}

function doParseUncompressed() {
    if (document.getElementById('uncompressedBytes').value !== '0' &&
        document.getElementById('compressedBytes').value !== '0') {
        doDecode();
        const regexp = /<SW-CNT>[\s\S]*?<\/SW-CNT>/g;
        const matches = document.getElementById('data').value.matchAll(regexp);
        for (const match of matches) {
            const xmlDoc = new DOMParser().parseFromString(match[0], "text/xml");
            const randomName = addNewParsedParam();
            document.getElementById("parsedCompressedParams").style.display = "table";
            document.getElementById('parsedFlashOffset_' + randomName).defaultValue = xmlDoc.querySelector('START-ADR').textContent.trim();
            document.getElementById('parsedDatasetName_' + randomName).defaultValue = xmlDoc.querySelector('DATEN-NAME').textContent.trim();
            document.getElementById('parsedDatasetVersion_' + randomName).defaultValue = xmlDoc.querySelector('CNT-VERSION-INHALT').textContent.trim();
            document.getElementById('parsedFileName_' + randomName).defaultValue = xmlDoc.querySelector('CNT-DATEI').textContent.trim();

            const data = xmlDoc.querySelector('DATEN').textContent.trim();
            document.getElementById('parsedParam_' + randomName).value = parseValue(data.substring(8, data.length - 8));
            document.getElementById("parsedVersion_" + randomName).value = hexToAscii(data.substring(0, 8));
            document.getElementById("crc32_" + randomName).value = data.substring(data.length - 8, data.length);
        }
    }
}

function doSimplify() {
    const rows = document.getElementById('parsedCompressedParams').rows;
    const rows_params = document.getElementById('dataParams').rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].id) {
            let randomName;
            if (rows_params.length > 3) {
                for (let j = 2; j < rows_params.length - 2; j++) {
                    if (rows_params[j].innerHTML.includes(document.getElementById('parsedDatasetName_' + rows[i].id).value)) {
                        randomName = rows_params[j].id;
                        break;
                    }
                }
            }
            if (!randomName) {
                randomName = addNewParam();
            }
            document.getElementById('flashOffset_' + randomName).defaultValue = document.getElementById('parsedFlashOffset_' + rows[i].id).value;
            document.getElementById('datasetName_' + randomName).defaultValue = document.getElementById('parsedDatasetName_' + rows[i].id).value;
            document.getElementById("version_" + randomName).value = document.getElementById("parsedVersion_" + rows[i].id).value.substring(0, 2);
            document.getElementById("param_" + randomName).value = document.getElementById('parsedParam_' + rows[i].id).value;
            if (isLittleEndian(cleanHexValue(document.getElementById('parsedParam_' + rows[i].id).value))) {
                document.getElementById('littleEndian_' + randomName).checked = true;
            }
            doCRC16Calc(randomName);
        }
    }
    doClearParsedParams();
}