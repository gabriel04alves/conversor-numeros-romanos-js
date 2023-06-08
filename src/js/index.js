function decimalToRoman(decimal) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];
      let roman = '';
      for (let i = 0; i < romanNumerals.length; i++) {
        while (decimal >= romanNumerals[i].value) {
          roman += romanNumerals[i].symbol;
          decimal -= romanNumerals[i].value;
        }
      }
    return roman;
  }
  
  function romanToDecimal(roman) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];
      let decimal = 0;    
      for (let i = 0; i < romanNumerals.length; i++) {
        while (roman.startsWith(romanNumerals[i].symbol)) {
          decimal += romanNumerals[i].value;
          roman = roman.slice(romanNumerals[i].symbol.length);
        }
      }
    
    return decimal;
  }
  
  function convertDecimal() {
    const decimalInput = document.getElementById('decimal');
    const romanInput = document.getElementById('roman');
  
    const decimalValue = parseInt(decimalInput.value);
    const romanValue = decimalToRoman(decimalValue);
  
    romanInput.value = romanValue;
  }
  
  function convertRoman() {
    const decimalInput = document.getElementById('decimal');
    const romanInput = document.getElementById('roman');
  
    const romanValue = romanInput.value.toUpperCase();
    const decimalValue = romanToDecimal(romanValue);
  
    decimalInput.value = decimalValue;
  }
  
const decButton = document.querySelector('#decimal + .btn-dec');
decButton.addEventListener('click', convertDecimal);

const romButton = document.querySelector('#roman + .btn-dec');
romButton.addEventListener('click', convertRoman);