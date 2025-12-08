   let decodeString = "c9d2";
   let codeLength = 4;

   function init() {

      //Read variables
      const urlParams = new URLSearchParams(window.location.search);

      //Read parameter
      const codeParam = urlParams.get('code');

      if (codeParam != null) {
         document.getElementById("origCode").value = codeParam;
         calculateXor();
      }
   }

   function calculateXor() {
      let input = document.getElementById("origCode").value;
      let result = ''
      if (input.length % 2 !== 0) {
         alert("Вводимое значение должно содержать четное количество символов.\nInput HEX value should have odd count of symbols");
         return
      }
      if (input.length !== codeLength) {
        alert("Длина вводимого значения должна быть " + codeLength + " символа.\nInput HEX value should be no longer than " + codeLength + " characters.");
        return
      }
      for (let index = 0; index < 4; index++) {
       const temp = (parseInt(input.charAt(index), 16) ^ parseInt(decodeString.charAt(index), 16)).toString(16).toUpperCase()
       result += temp
      }
      document.getElementById("calcCode").value = result;
   }

   function clearAll() {
      document.getElementById("origCode").value = "";
      document.getElementById("calcCode").value = "";
   }