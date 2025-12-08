let curSelectedByte = -1;
let defaultByteSize = 30;
let labelsFromFile;

function init() {
   //Read variables and put them to fields
   const urlParams = new URLSearchParams(window.location.search);

   //Load bytes and bits
   createByteDescription(defaultByteSize);
   createBitDescription();

   //Read parameters
   const codeParam = urlParams.get('code');
   const labelParam = urlParams.get('label');
   if (labelParam != null) {
      document.getElementById("langBits").value = labelParam;
   }
   if (codeParam != null) {
      document.getElementById("origCode").value = codeParam;
      checkOrig();
   }
}

function activateFields() {
   document.getElementById("loading").style.display = "none";
   document.getElementById("bitDescription").style.display = "block";
}

function checkOrig() {
    let filter = /^[A-F0-9]+$/
    let orig = document.getElementById("origCode").value;
    orig = orig.toUpperCase();
    orig = cleanHexValue(orig);
    document.getElementById("origCode").value = orig;

    //Hide bits after load new set of bytes
    document.getElementById("bitDescription").style.display = "none";

    if (orig.length % 2 === 0) {
        if (orig.match(filter)) {
            //Show loader
            document.getElementById("loading").style.display = "inline-block";
            //Add bytes to a table
            fillBytes();
            //Load from a label file
            if (document.getElementById("langBits").value !== "none"){
               fetch('../../labels/' + document.getElementById("langBits").value + '_labels.txt')
                 .then(response => response.text())
                 .then(text => labelsFromFile = text.split("\n"))
                 .then(() => selByte(0));
            } else {
                selByte(curSelectedByte);
            }
            return true;
        } else {
            alert("Кодировка содержит неверные символы. Поддерживаются только только латинские буквы A-F и цифры 0-9. Coding has wrong symbols. Latin characters A-F and digits 0-9 are allowed. ");
            clearFields();
        }
    } else {
        alert("Неверное значение. Кодировка должна содержать четное количество символов. Incorrect value. Coding should have odd number of symbols.");
        clearFields();
    }
    return false;
}

function trim(str) {
    return str.replace(/^\s*|\s*$/g, "");
}

function initArray() {
    this.length = initArray.arguments.length;
    for (let i = 0; i < this.length; i++) {
        this[i] = initArray.arguments[i];
    }
}

function hexToBin(value){
    let bitValueBin;
    let dezVal = parseInt(value, 16);
    bitValueBin = from10toradix(dezVal, 2);

    return addLeadingZeros(bitValueBin);
}

function from10toradix(value, radix) {
    let retval = '';
    let ConvArray = new initArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F');
    let intnum;
    let tmpnum;
    let i = 0;

    intnum = parseInt(value, 10);
    if (isNaN(intnum)) {
        retval = 'NaN';
    } else {
        while (intnum > 0.9) {
            i++;
            tmpnum = intnum;

            // concat ret string with a new digit
            retval = ConvArray[tmpnum % radix] + retval;
            intnum = Math.floor(tmpnum / radix);
            if (i > 100) {
                // break infinite loops
                retval = 'NaN';
                break;
            }
        }
    }
    return retval;
}

function calculateByteIdFromNumber(num) {
    let byteId = num;
    if (num < 10) {
        byteId = "0" + num;
    }
    return byteId;
}

function fillBytes() {
    let orig = document.getElementById("origCode").value;
    let newNum = orig.toString().match(/.{1,2}/g)

    //Set new length
    if (newNum.length > defaultByteSize) {
        defaultByteSize = newNum.length;
        //Recreate byte table with a new size
        createByteDescription(defaultByteSize);
    }

    //Fill bytes to table
    for (let i = 0; i < newNum.length; i++) {
        document.getElementById("byte" + calculateByteIdFromNumber(i)).value = newNum[i];
    }

    //Fill a calculated field
    document.getElementById("calcCode").value = orig;

    //Select byte 0 by default
    curSelectedByte = 0;
}

function addLeadingZeros(binVal) {
    let anz;
    let retString = binVal;

    anz = 8 - binVal.length;
    for (let i = 0; i < anz; i++) {
        retString = "0" + retString;
    }
    return retString;
}

function fillDezAndBits(bin) {
    for (let i = 0; i < 8; i++) {
        document.getElementById("bit" + i).value = bin.substr(7 - i, 1);
    }
}

function comparingOfBits(bin1, bin2) {
   //return if values are equal
   if (bin1 === bin2) {
      return true;
   }

   //Convert values to arrays and check by digits
   let bin1a = bin1.split('').map(Number);
   let bin2a = bin2.split('').map(Number);

   let equal = false;
   for (let i = 0; i < bin2a.length; i++) {
      if (bin2a[i] === 1){
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
   //return if values are equal
   if (binNew === binOld) {
      return binNew;
   }

   let binNewAr = binNew.split('').map(Number);
   let binOldAr = binOld.split('').map(Number);

   for (let i = 0; i < binNewAr.length; i++) {
      if (binNewAr[i] !== binOldAr[i]) {
        if (binNewAr[i] === 0)
            document.getElementById("setModifiedBits" + (7 - i)).checked = false;
        else
            document.getElementById("setModifiedBits" + (7 - i)).checked = true;
        chgBit(7 - i);
      }
   }
}

function fillBitCheckBoxes(bin, reduced) {
    for (let i = 0; i < 8; i++) {
        if (bin.substr(i, 1) === 0)
            document.getElementById("setModifiedBits" + (7 - i)).checked = false;
        else
            document.getElementById("setModifiedBits" + (7 - i)).checked = true;
    }

    //fill values
    if (reduced != null) {
       reduced.forEach(function(label) {
         if (!isNaN(label.bit)) {
            document.getElementById("setModifiedBitsLabel" + label.bit).innerHTML = " " + label.description;
         } else {
            //Create a select box
            let selectElement = document.createElement("select");
            selectElement.id = "select" + label.bit;
            let variants = label.variants.split(';');
            for (let i = 0; i < variants.length; i++)
            {
               let variant = variants[i].split('-');
               let currentOption = comparingOfBits(bin, hexToBin(trim(variant[0])));
               selectElement.options[selectElement.options.length] =
                   new Option (trim(variants[i]), trim(variant[0]), currentOption, currentOption);
            }
            document.getElementById("bitVariants").innerHTML = document.getElementById("bitVariants").innerHTML + label.description + " (bits " + label.bit + "): ";
            document.getElementById("bitVariants").appendChild (selectElement);
            document.getElementById("bitVariants").innerHTML = document.getElementById("bitVariants").innerHTML + "<br><br>";

            let previous;
            document.addEventListener('click', (event) => {
               if (event.target && event.target.id === "select" + label.bit) {
                  previous = event.target.value;
               }
            });
            document.addEventListener('change', (event) => {
               if (event.target && event.target.id === "select" + label.bit && previous !== event.target.value) {
                   calculateBitValue(hexToBin(previous), hexToBin(event.target.value));
               }
            });
         }
       });
    }
    activateFields();
}

function setByte(ctrl, byteName) {
    //Check value
    let regexp = /^[0-9a-fA-F]+$/;
    if(regexp.test(ctrl.value)) {
    } else {
      alert(ctrl.value + ' - неверный формат введенного значения! Incorrect value!');
      ctrl.value = '00';
    }
    resetCalcCode();
    selByte(byteName);
}

function selByte(noByte) {

    document.getElementById("Byte").innerHTML = "(Byte " + noByte + ")";

    let bitValueHex;
    let fullBitString = "";
    let startPos = noByte * 2;

    curSelectedByte = noByte;

    bitValueHex = document.getElementById("calcCode").value.substr(startPos, 2);

    if (bitValueHex === "") {
        //Clean bits and buttons
        clearBits();
        for (let i = 0; i < 8; i++) {
            document.getElementById("bit" + i).value = "0";
        }
        return false;
    }

    // hex2bin conversion
    fullBitString = hexToBin(bitValueHex);

    //Find labels
    let reduced
    if (labelsFromFile != null) {
        reduced = labelsFromFile.reduce(function(filtered, option) {
          let opt = option.split(',');
          if (opt[0] === noByte) {
             let labelValue = { byte: opt[0], bit: opt[1], description: opt[2], variants: opt[3] }
             filtered.push(labelValue);
          }
          return filtered;
       }, []);
    }

    //Reset all labels in checkboxes
    document.getElementById("bitVariants").innerHTML = "";
    for (let i = 0; i < 8; i++) {
        document.getElementById("setModifiedBitsLabel" + i).innerHTML = " Bit " + i;
    }

    //Set new values
    fillDezAndBits(fullBitString);
    fillBitCheckBoxes(fullBitString, reduced);

    toggleSelectedByteColor(noByte);
}

function chgBit(no) {
    if (document.getElementById("setModifiedBits" + no).checked){
        document.getElementById("bit" + no).value = "1";
    } else {
        document.getElementById("bit" + no).value = "0";
    }

    setBits();
}

function resetCalcCode() {
    let tmpVal = "";
    for (let i = 0; i < defaultByteSize; i++) {
        tmpVal += document.getElementById("byte" + calculateByteIdFromNumber(i)).value;
    }
    document.getElementById("calcCode").value = trim(tmpVal);
}

function resetByteHex(hexVal) {
    document.getElementById("byte" + calculateByteIdFromNumber(curSelectedByte)).value = hexVal;
    resetCalcCode();
}


function setBits() {
    let tmpBitStr = "";
    for (let i = 7; i >= 0; i--) {
        tmpBitStr += document.getElementById("bit" + i).value;
    }

    let tmpVal;
    let hexValue;

    if (tmpBitStr === "") {
        return false;
    } else {
        tmpVal = parseInt(tmpBitStr, 2);
        hexValue = from10toradix(tmpVal, 16)

        if (hexValue.length === 1) {
            hexValue = "0" + hexValue;
        } else if (hexValue.length < 1) {
            hexValue = "00";
        }

        resetByteHex(hexValue);
        selByte(curSelectedByte);
        return true;
    }
}

function clearBits() {
    //Clear bits fields
    for (let i = 0; i < 8; i++) {
        document.getElementById("bit" + i).value = "";
    }

    //Clear checkboxes
    for (let i = 0; i < 8; i++) {
        document.getElementById("setModifiedBits" + i).checked = false;
    }

    //Reset all labels in checkboxes
    for (let i = 0; i < 8; i++) {
        document.getElementById("setModifiedBitsLabel" + i).innerHTML = " Bit " + i;
    }
    document.getElementById("bitVariants").innerHTML = "";
}

function clearFields() {

    curSelectedByte = -1;
    document.getElementById("Byte").innerHTML = "";

    //Clear bytes fields
    for (let i = 0; i < defaultByteSize; i++) {
        document.getElementById("byte" + calculateByteIdFromNumber(i)).value = "";
    }

    clearBits();
    document.getElementById("calcCode").value = "";
    defaultByteSize = 30;
}

function clearAll() {
    labelsFromFile = null;
    clearFields();
    document.getElementById("origCode").value = "";
    document.getElementById("bitDescription").style.display = "none";
    document.getElementById("langBits").value = "none";
}

function clearLabels() {
    labelsFromFile = null;
}

function toggleSelectedByteColor(noByte) {
    for (let i = 0; i < defaultByteSize; i++) {
        if (i !== noByte) {
            document.getElementById('byte' + calculateByteIdFromNumber(i)).className = 'byteNotSelected';
        } else {
            document.getElementById('byte' + calculateByteIdFromNumber(i)).className = 'byteSelected';
        }
    }
}

function selectAll(ctrl) {
    ctrl.focus();
    ctrl.select();
}

function isBinary(event) {
    let charCode = (event.which) ? event.which : event.keyCode
    //0 = 48, 1 = 49
    if (charCode === 48 || charCode === 49 || charCode === 13) {
        if (charCode === 13)
            setBits();
        return true;
    } else
        return false;
}

function createByteDescription(countOfBytes) {
    let bytesPerLine = 30;
    let html = "<table class=\"bordered\">";
    html += "<tr>";
    html += "<th colspan=\"" + countOfBytes + "\">Байты / Bytes</th>"
    html += "</tr>";

    //Lines can be several
    for (let line = 0; line < Math.ceil(countOfBytes/bytesPerLine); line++){
        html += "<tr>";
        for (let i = 0; i < bytesPerLine; i++) {
            let current = bytesPerLine * line + i;
            html += "<td width=\"20\" class=\"bytes\" nowrap>" + calculateByteIdFromNumber(current) + "</td>";
        }
        html += "</tr><tr>";
        for (let i = 0; i < bytesPerLine; i++) {
            let current = bytesPerLine * line + i;
            let byteName = calculateByteIdFromNumber(current);
            html += "<td class=\"fillBytes\">";
            html += "<input type=\"text\" name=\"byte" + byteName + "\" id=\"byte" + byteName + "\" value=\"\" size=\"1\"";
            html += " onClick=\"selByte(" + byteName + ")\" onChange=\"setByte(this, " + byteName + ")\"";
            html += " class=\"byteNotSelected\"></td>";
        }
        html += "<tr>";
    }

    html += "</table>";
    document.getElementById("bytesDescription").innerHTML = html;
}

function createBitDescription() {
    let html = "<table class=\"bordered\" style=\"table-layout: fixed;\">";
    html += "<tr colspan=2>";
    html += "   <th colspan=2>";
    html += "      Bits <div id=\"Byte\" name=\"Byte\" style=\"display: inline;\"></div>";
    html += "   </th>";
    html += "</tr>";
    html += "<tr colspan=2>";
    html += "   <td colspan=2>";
    html += "      <table class=\"bordered\">";
    html += "      <tr>";

    for (let i = 7; i >= 0; i--) {
        html += "<td class=\"bytes\" nowrap>" + i + "</td>";
    }

    html += "      </tr>";
    html += "      <tr>";

    for (let i = 7; i >= 0; i--) {
        html += "<td class=\"fillBytes\"><input type=\"text\" name=\"bit" + i + "\" id=\"bit" + i + "\" value=\"\" size=\"1\"";
        html += " class=\"inputBytes\"";
        html += " onKeyDown=\"return isBinary(event)\" onClick=\"selectAll(this)\"";
        html += " onBlur=\"setBits()\"></td>";
    }

    html += "</tr></table></td></tr>";
    html += "<tr colspan=2><td>";

    for (let i = 0; i < 8; i++) {
        html += "<input type=\"checkbox\" value=\"\" name=\"setModifiedBits" + i + "\" id=\"setModifiedBits" + i + "\" onClick=\"chgBit(" + i + ");\">";
        html += "<label for=\"setModifiedBits" + i + "\" id=\"setModifiedBitsLabel" + i + "\"> Bit " + i + "</label><br>";
    }

    html += "</td><td><div id=\"bitVariants\"></div></td>";
    html += "</tr>";
    html += "</table>";

    document.getElementById("bitDescription").innerHTML = html;
}