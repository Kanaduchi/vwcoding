const TRAILER_HEX = "0000000000000000003B0FC769BFFF15ECD445B8196D2203D6D56BD8F22748B37D68F863DAC57E23C90A5FEEF0C06394C8D48A2EAA4F0FB658557400E66441DDC7D5AC3610AA4D45056C0C6E17C7E4B60C40E52FFA891938AF186ED20AE83A99EB10F3088479E6CBD2770C1563B5AE235B440BEF16EBE696576E108F2F9F897D963DEFBAD3ABDF2FFE";

let codes = [];
let selectedCount = 0;

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}

function validateLength(actual, expected, alertId, label) {
  const el = document.getElementById(alertId);
  if (!el) return;

  el.classList.remove('alert-success', 'alert-danger');

  if (actual === 0) {
    el.classList.add('alert-danger');
    el.innerHTML = `${label} input cannot be empty!`;
    el.style.display = '';
  } else if (actual !== expected) {
    el.classList.add('alert-danger');
    el.innerHTML = `${label} should be ${expected} characters long! <b>${actual}/${expected}</b>`;
    el.style.display = '';
  } else {
    el.classList.add('alert-success');
    el.innerHTML = `${label} status: <b>OK</b>`;
    el.style.display = '';
  }
}

function stringToHex(str) {
  return Array.from(str)
    .map(ch => ch.charCodeAt(0).toString(16))
    .join("");
}

function hasCode(list, code) {
  return list.some(item => item.code === code);
}

function renderCodes() {
  const codesContainer = document.getElementById("codes");
  const vinInput = document.getElementById("vin");
  const vcrnInput = document.getElementById("vcrn");
  const jumbotron = document.querySelector(".jumbotron");

  if (!codesContainer || !vinInput || !vcrnInput) return;

  codesContainer.innerHTML = "";

  const vin = vinInput.value;
  const vcrn = vcrnInput.value;

  const timestampHex = Math.floor(Date.now() / 1000)
    .toString(16)
    .toUpperCase();

  codes.forEach(item => {
    if (!item.visible) return;

    const hexVin = stringToHex(vin).toUpperCase();
    const finalCode = `1102${item.code}03${vcrn.toUpperCase()}${hexVin}00${timestampHex}${TRAILER_HEX}`;

    const wrapper = document.createElement("div");
    wrapper.className = "form-group";

    const label = document.createElement("label");
    label.className = "font-weight-bold";
    label.textContent = item.name;

    const textarea = document.createElement("textarea");
    textarea.className = "form-control h-100";
    textarea.readOnly = true;
    textarea.value = finalCode;

    // Выделять текст при клике/фокусе
    textarea.addEventListener("click", function () {
      this.select();
    });
    textarea.addEventListener("focus", function () {
      this.select();
    });

    wrapper.appendChild(label);
    wrapper.appendChild(textarea);
    codesContainer.appendChild(wrapper);
  });

  if (jumbotron) {
    jumbotron.style.display = selectedCount > 0 ? "none" : "";
  }
}

const vinEl = document.getElementById("vin");
if (vinEl) {
  vinEl.addEventListener("keyup", function () {
    const value = this.value;
    codes.forEach(item => (item.vin = value));

    validateLength(value.length, 17, "avin", "VIN");
    renderCodes();
  });
}

const vcrnEl = document.getElementById("vcrn");
if (vcrnEl) {
  vcrnEl.addEventListener("keyup", function () {
    const value = this.value;
    codes.forEach(item => (item.vcrn = value));

    validateLength(value.length, 10, "avcrn", "VCRN");
    renderCodes();
  });
}

$all(".checkbox input").forEach(input => {
  input.addEventListener("change", function () {
    const codeValue = this.value;
    const name = this.name;

    if (this.checked) {
      if (hasCode(codes, codeValue)) {
        codes.forEach(item => {
          if (item.code === codeValue) item.visible = true;
        });
      } else {
        const vinVal = vinEl ? vinEl.value : "";
        const vcrnVal = vcrnEl ? vcrnEl.value : "";

        codes.push({
          code: codeValue,
          vcrn: vcrnVal,
          vin: vinVal,
          visible: true,
          name: name
        });
      }
      selectedCount++;
    } else {
      codes.forEach(item => {
        if (item.code === codeValue) item.visible = false;
      });
      selectedCount--;
    }

    renderCodes();
  });
});
