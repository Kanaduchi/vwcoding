let decodeString = "c9d2";
let codeLength = 4;

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get('code');

  if (codeParam) {
    document.getElementById("origCode").value = codeParam;
    calculateXor();
  }
}

function calculateXor() {
  let input = document.getElementById("origCode").value.trim();
  let result = '';

  if (input.length !== codeLength) {
    alert(
      "Длина вводимого значения должна быть " + codeLength + " символа.\n" +
      "Input HEX value must be exactly " + codeLength + " characters long."
    );
    return;
  }

  if (!/^[0-9a-fA-F]+$/.test(input)) {
    alert("Допустимы только HEX символы (0-9, A-F).\nOnly HEX characters (0-9, A-F) are allowed.");
    return;
  }

  for (let index = 0; index < codeLength; index++) {
    const a = parseInt(input.charAt(index), 16);
    const b = parseInt(decodeString.charAt(index), 16);
    const temp = (a ^ b).toString(16).toUpperCase();
    result += temp;
  }

  document.getElementById("calcCode").value = result;
}

function clearAll() {
  document.getElementById("origCode").value = "";
  document.getElementById("calcCode").value = "";
}
