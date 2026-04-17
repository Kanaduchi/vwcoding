"use strict";

let curSelectedByte = -1;
let defaultByteSize = 30;
let labelsFromFile = null;

// ========== Additional methods ==========

function cleanHexValue(str) {
    if (!str) return "";
    return str.toUpperCase().replace(/[^0-9A-F]/g, "");
}

function trim(str) {
    return (str || "").replace(/^\s*|\s*$/g, "");
}

function calculateByteIdFromNumber(num) {
    return num < 10 ? "0" + num : String(num);
}

function from10toradix(value, radix) {
    const ConvArray = [
        "0","1","2","3","4","5","6","7","8","9",
        "A","B","C","D","E","F"
    ];

    let intnum = parseInt(value, 10);
    if (Number.isNaN(intnum)) {
        return "NaN";
    }

    if (intnum === 0) {
        return "0";
    }

    let retval = "";
    let i = 0;

    while (intnum > 0) {
        i++;
        const digit = intnum % radix;
        retval = ConvArray[digit] + retval;
        intnum = Math.floor(intnum / radix);

        if (i > 100) {
            return "NaN"; //
        }
    }

    return retval || "0";
}

function hexToBin(value) {
    const dezVal = parseInt(value, 16);
    const bitValueBin = from10toradix(dezVal, 2);
    return addLeadingZeros(bitValueBin);
}

function addLeadingZeros(binVal) {
    let retString = binVal || "";
    const anz = 8 - retString.length;
    for (let i = 0; i < anz; i++) {
        retString = "0" + retString;
    }
    return retString;
}

function activateFields() {
    const loading = document.getElementById("loading");
    const bitDescription = document.getElementById("bitDescription");
    if (loading) loading.style.display = "none";
    if (bitDescription) bitDescription.style.display = "block";
}

// ========== Initialisation ==========

function init() {
    const urlParams = new URLSearchParams(window.location.search);

    createByteDescription(defaultByteSize);
    createBitDescription();
    wireBitEvents();
    wireByteEvents();

    const codeParam = urlParams.get("code");
    const labelParam = urlParams.get("label");

    if (labelParam != null) {
        const langSel = document.getElementById("langBits");
        if (langSel) langSel.value = labelParam;
    }
    if (codeParam != null) {
        const orig = document.getElementById("origCode");
        if (orig) {
            orig.value = codeParam;
            checkOrig();
        }
    }
}

// ========== Main functions ==========

function checkOrig() {
    const filter = /^[A-F0-9]+$/;
    const origEl = document.getElementById("origCode");
    if (!origEl) return false;

    let orig = origEl.value;
    orig = cleanHexValue(orig);
    origEl.value = orig;

    const bitDescription = document.getElementById("bitDescription");
    if (bitDescription) bitDescription.style.display = "none";

    if (orig.length % 2 === 0 && orig.length > 0) {
        if (filter.test(orig)) {
            const loading = document.getElementById("loading");
            if (loading) loading.style.display = "inline-block";

            fillBytes();

            const langBits = document.getElementById("langBits");
            if (langBits && langBits.value !== "none") {
                fetch("../../labels/" + langBits.value + "_labels.txt")
                    .then(response => response.text())
                    .then(text => {
                        labelsFromFile = text.split("\n");
                    })
                    .then(() => {
                        selByte(0);
                    })
                    .catch(() => {
                        labelsFromFile = null;
                        selByte(0);
                    });
            } else {
                selByte(curSelectedByte >= 0 ? curSelectedByte : 0);
            }
            return true;
        } else {
            alert(
                "Кодировка содержит неверные символы. Поддерживаются только латинские буквы A-F и цифры 0-9. " +
                "Coding has wrong symbols. Latin characters A-F and digits 0-9 are allowed."
            );
            clearFields();
        }
    } else {
        if (orig.length > 0) {
            alert(
                "Неверное значение. Кодировка должна содержать чётное количество символов. " +
                "Incorrect value. Coding should have even number of symbols."
            );
        }
        clearFields();
    }
    return false;
}

function fillBytes() {
    const origEl = document.getElementById("origCode");
    const calcEl = document.getElementById("calcCode");
    if (!origEl || !calcEl) return;

    const orig = origEl.value;
    const newNum = orig.toString().match(/.{1,2}/g) || [];

    if (newNum.length > defaultByteSize) {
        defaultByteSize = newNum.length;
        createByteDescription(defaultByteSize);
        wireByteEvents();
    }

    for (let i = 0; i < newNum.length; i++) {
        const el = document.getElementById("byte" + calculateByteIdFromNumber(i));
        if (el) el.value = newNum[i];
    }

    calcEl.value = orig;
    curSelectedByte = 0;
}

function fillDezAndBits(bin) {
    for (let i = 0; i < 8; i++) {
        const bit = document.getElementById("bit" + i);
        if (bit) bit.value = bin.substr(7 - i, 1);
    }
}

function comparingOfBits(bin1, bin2) {
    if (bin1 === bin2) return true;

    const bin1a = bin1.split("").map(Number);
    const bin2a = bin2.split("").map(Number);

    let equal = false;
    for (let i = 0; i < bin2a.length; i++) {
        if (bin2a[i] === 1) {
            if (bin2a[i] === bin1a[i]) {
                equal = true;
            } else {
                return false;
            }
        }
    }
    return equal;
}

function calculateBitValue(binOld, binNew) {
    if (binNew === binOld) return binNew;

    const binNewAr = binNew.split("").map(Number);
    const binOldAr = binOld.split("").map(Number);

    for (let i = 0; i < binNewAr.length; i++) {
        if (binNewAr[i] !== binOldAr[i]) {
            const idx = 7 - i;
            const cb = document.getElementById("setModifiedBits" + idx);
            if (cb) cb.checked = binNewAr[i] === 1;
            chgBit(idx);
        }
    }
}

function fillBitCheckBoxes(bin, reduced) {
    for (let i = 0; i < 8; i++) {
        const cb = document.getElementById("setModifiedBits" + (7 - i));
        if (cb) cb.checked = bin.substr(i, 1) === "1";
    }

    const bitVariants = document.getElementById("bitVariants");
    if (bitVariants) bitVariants.innerHTML = "";

    for (let j = 0; j < 8; j++) {
        const label = document.getElementById("setModifiedBitsLabel" + j);
        if (label) label.innerHTML = " Bit " + j;
    }

    if (reduced && reduced.length) {
        reduced.forEach(label => {
            if (!label) return;

            if (!isNaN(label.bit)) {
                const lab = document.getElementById("setModifiedBitsLabel" + label.bit);
                if (lab) lab.innerHTML = " " + label.description;
            } else {
                if (!bitVariants) return;

                const wrapper = document.createElement("div");
                const text = document.createElement("span");
                text.textContent = label.description + " (bits " + label.bit + "): ";

                const selectElement = document.createElement("select");
                selectElement.id = "select" + label.bit;

                const variants = (label.variants || "").split(";");
                variants.forEach(vStr => {
                    const cleaned = trim(vStr);
                    if (!cleaned) return;

                    const parts = cleaned.split("-");
                    const hex = trim(parts[0] || "");
                    const desc = trim(parts[1] || cleaned);

                    const currentOption = comparingOfBits(bin, hexToBin(hex));

                    const opt = document.createElement("option");
                    opt.value = hex;
                    opt.textContent = desc;
                    if (currentOption) opt.selected = true;
                    selectElement.appendChild(opt);
                });

                let previous = selectElement.value;

                selectElement.addEventListener("focus", e => {
                    previous = e.target.value;
                });

                selectElement.addEventListener("change", e => {
                    const newVal = e.target.value;
                    if (previous !== newVal) {
                        calculateBitValue(hexToBin(previous), hexToBin(newVal));
                        previous = newVal;
                    }
                });

                wrapper.appendChild(text);
                wrapper.appendChild(selectElement);
                wrapper.appendChild(document.createElement("br"));
                wrapper.appendChild(document.createElement("br"));
                bitVariants.appendChild(wrapper);
            }
        });
    }

    activateFields();
}

function selByte(noByte) {
    const byteLabel = document.getElementById("Byte");
    if (byteLabel) byteLabel.innerHTML = "(Byte " + noByte + ")";

    curSelectedByte = noByte;

    const calcCode = document.getElementById("calcCode");
    if (!calcCode) return;

    const startPos = noByte * 2;
    const bitValueHex = calcCode.value.substr(startPos, 2);

    if (bitValueHex === "") {
        clearBits();
        for (let i = 0; i < 8; i++) {
            const bit = document.getElementById("bit" + i);
            if (bit) bit.value = "0";
        }
        toggleSelectedByteColor(noByte);
        return;
    }

    const fullBitString = hexToBin(bitValueHex);

    let reduced = null;
    if (labelsFromFile != null) {
        reduced = labelsFromFile.reduce((filtered, option) => {
            const opt = option.split(",");
            if (opt[0] == noByte) {
                const labelValue = {
                    byte: opt[0],
                    bit: opt[1],
                    description: opt[2],
                    variants: opt[3]
                };
                filtered.push(labelValue);
            }
            return filtered;
        }, []);
    }

    fillDezAndBits(fullBitString);
    fillBitCheckBoxes(fullBitString, reduced);
    toggleSelectedByteColor(noByte);
}

function chgBit(no) {
    const cb = document.getElementById("setModifiedBits" + no);
    const bit = document.getElementById("bit" + no);
    if (!cb || !bit) return;

    bit.value = cb.checked ? "1" : "0";
    setBits();
}

function setBits() {
    let tmpBitStr = "";
    for (let i = 7; i >= 0; i--) {
        const bit = document.getElementById("bit" + i);
        tmpBitStr += bit ? bit.value : "0";
    }

    if (!tmpBitStr) return false;

    const tmpVal = parseInt(tmpBitStr, 2);
    let hexValue = from10toradix(tmpVal, 16);

    if (hexValue.length === 1) hexValue = "0" + hexValue;
    else if (hexValue.length < 1) hexValue = "00";

    resetByteHex(hexValue);
    selByte(curSelectedByte);
    return true;
}

function resetCalcCode() {
    let tmpVal = "";
    for (let i = 0; i < defaultByteSize; i++) {
        const el = document.getElementById("byte" + calculateByteIdFromNumber(i));
        if (el) tmpVal += el.value;
    }
    const calcCode = document.getElementById("calcCode");
    if (calcCode) calcCode.value = trim(tmpVal);
}

function resetByteHex(hexVal) {
    const el = document.getElementById("byte" + calculateByteIdFromNumber(curSelectedByte));
    if (el) el.value = hexVal;
    resetCalcCode();
}

function clearBits() {
    for (let i = 0; i < 8; i++) {
        const bit = document.getElementById("bit" + i);
        if (bit) bit.value = "";
    }
    for (let j = 0; j < 8; j++) {
        const cb = document.getElementById("setModifiedBits" + j);
        if (cb) cb.checked = false;
        const label = document.getElementById("setModifiedBitsLabel" + j);
        if (label) label.innerHTML = " Bit " + j;
    }
    const bitVariants = document.getElementById("bitVariants");
    if (bitVariants) bitVariants.innerHTML = "";
}

function clearFields() {
    curSelectedByte = -1;
    const byteLabel = document.getElementById("Byte");
    if (byteLabel) byteLabel.innerHTML = "";

    for (let i = 0; i < defaultByteSize; i++) {
        const el = document.getElementById("byte" + calculateByteIdFromNumber(i));
        if (el) el.value = "";
    }

    clearBits();

    const calcCode = document.getElementById("calcCode");
    if (calcCode) calcCode.value = "";

    defaultByteSize = 30;
    createByteDescription(defaultByteSize);
    wireByteEvents();
}

function clearAll() {
    labelsFromFile = null;
    clearFields();

    const orig = document.getElementById("origCode");
    if (orig) orig.value = "";

    const bitDescription = document.getElementById("bitDescription");
    if (bitDescription) bitDescription.style.display = "none";

    const langBits = document.getElementById("langBits");
    if (langBits) langBits.value = "none";

    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "none";
}

function clearLabels() {
    labelsFromFile = null;
    clearBits();
    if (curSelectedByte >= 0) {
        selByte(curSelectedByte);
    }
}

function toggleSelectedByteColor(noByte) {
    for (let i = 0; i < defaultByteSize; i++) {
        const el = document.getElementById("byte" + calculateByteIdFromNumber(i));
        if (!el) continue;
        el.className = i === noByte ? "byteSelected" : "byteNotSelected";
    }
}

function selectAll(ctrl) {
    if (ctrl && typeof ctrl.select === "function") {
        ctrl.select();
    }
}

function isBinary(event) {
    const charCode = event.which ? event.which : event.keyCode;

    const controlKeys = [8, 9, 13, 35, 36, 37, 39, 46];
    if (controlKeys.includes(charCode)) {
        if (charCode === 13) setBits();
        return true;
    }

    if (charCode === 48 || charCode === 49) {
        return true;
    }

    event.preventDefault();
    return false;
}

// ========== Generation of html tables ==========

function createByteDescription(countOfBytes) {
    const container = document.getElementById("bytesDescription");
    if (!container) return;

    const bytesPerLine = 30;
    const colsFirstLine = Math.min(countOfBytes, bytesPerLine);
    const lines = Math.ceil(countOfBytes / bytesPerLine);

    let html = "<table class=\"bordered\">";
    html += "<tr><th colspan=\"" + colsFirstLine + "\">Байты / Bytes</th></tr>";

    for (let line = 0; line < lines; line++) {
        const start = line * bytesPerLine;
        const end = Math.min(start + bytesPerLine, countOfBytes);

        html += "<tr>";
        for (let i = start; i < end; i++) {
            html += "<td width=\"20\" class=\"bytes\" nowrap>" + calculateByteIdFromNumber(i) + "</td>";
        }
        html += "</tr><tr>";
        for (let j = start; j < end; j++) {
            const byteName = calculateByteIdFromNumber(j);
            html += "<td class=\"fillBytes\">";
            html += "<input type=\"text\" name=\"byte" + byteName + "\" id=\"byte" + byteName + "\" value=\"\" size=\"1\"";
            html += " class=\"byteNotSelected\" data-index=\"" + j + "\">";
            html += "</td>";
        }
        html += "</tr>";
    }

    html += "</table>";
    container.innerHTML = html;
}

function createBitDescription() {
    const container = document.getElementById("bitDescription");
    if (!container) return;

    let html = "<table class=\"bordered\" style=\"table-layout: fixed;\">";
    html += "<tr colspan=2>";
    html += "<th colspan=2>";
    html += "Bits <div id=\"Byte\" name=\"Byte\" style=\"display: inline;\"></div>";
    html += "</th>";
    html += "</tr>";
    html += "<tr colspan=2>";
    html += "<td colspan=2>";
    html += "<table class=\"bordered\">";
    html += "<tr>";

    for (let i = 7; i >= 0; i--) {
        html += "<td class=\"bytes\" nowrap>" + i + "</td>";
    }

    html += "</tr><tr>";

    for (let j = 7; j >= 0; j--) {
        html += "<td class=\"fillBytes\"><input type=\"text\" name=\"bit" + j + "\" id=\"bit" + j + "\" value=\"\" size=\"1\"";
        html += " class=\"inputBytes\"></td>";
    }

    html += "</tr></table></td></tr>";
    html += "<tr colspan=2><td>";

    for (let k = 0; k < 8; k++) {
        html += "<input type=\"checkbox\" value=\"\" name=\"setModifiedBits" + k + "\" id=\"setModifiedBits" + k + "\">";
        html += "<label for=\"setModifiedBits" + k + "\" id=\"setModifiedBitsLabel" + k + "\"> Bit " + k + "</label><br>";
    }

    html += "</td><td><div id=\"bitVariants\"></div></td>";
    html += "</tr>";
    html += "</table>";

    container.innerHTML = html;
}

// ========== Events handling ==========

function wireBitEvents() {
    for (let i = 0; i < 8; i++) {
        const bit = document.getElementById("bit" + i);
        if (!bit) continue;

        bit.onkeydown = e => isBinary(e);
        bit.onclick = () => selectAll(bit);
        bit.onblur = () => setBits();
    }

    for (let j = 0; j < 8; j++) {
        const cb = document.getElementById("setModifiedBits" + j);
        if (!cb) continue;
        cb.onclick = () => chgBit(j);
    }
}

function wireByteEvents() {
    const container = document.getElementById("bytesDescription");
    if (!container) return;

    container.addEventListener("click", e => {
        const target = e.target;
        if (!target || target.tagName !== "INPUT") return;
        if (!target.id || !target.id.startsWith("byte")) return;

        const index = parseInt(target.getAttribute("data-index"), 10);
        if (Number.isNaN(index)) return;

        selByte(index);
        selectAll(target);
    });

    container.addEventListener("change", e => {
        const target = e.target;
        if (!target || target.tagName !== "INPUT") return;
        if (!target.id || !target.id.startsWith("byte")) return;

        const index = parseInt(target.getAttribute("data-index"), 10);
        if (Number.isNaN(index)) return;

        setByte(target, index);
    });
}

function setByte(ctrl, byteIndex) {
    const regexp = /^[0-9a-fA-F]*$/;
    if (!regexp.test(ctrl.value)) {
        alert(ctrl.value + " - неверный формат введенного значения! Incorrect value!");
        ctrl.value = "00";
    } else {
        ctrl.value = ctrl.value.toUpperCase();
    }
    resetCalcCode();
    selByte(byteIndex);
}