/*
- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16
*/

function validateCreditCard(creditCardNum) {
  if (
    has16Digits(creditCardNum) &&
    hasDifferentDigits(creditCardNum) &&
    hasEvenLastDigit(creditCardNum) &&
    hasSumGreaterThan16(creditCardNum)
  ) {
    return true;
  } else {
    return false;
  }
}

//- Number must be 16 digits, all of them must be numbers

function has16Digits(creditCardNumber) {
  // //const trimmedNumber = creditCardNum.split("-").join("");
  const trimmedNumber = creditCardNumber.replaceAll("-", "");

  const isTrimmedANumber = isNaN(trimmedNumber);

  return trimmedNumber.length === 16 && isTrimmedANumber === false
    ? true
    : false;
}

// //- You must have at least two different digits represented (all of the digits cannot be the same)
function hasDifferentDigits(creditCardNumber) {
  let num = 0;

  const trimmedNumber = creditCardNumber.split("-").join("");

  for (let i = 0; i < trimmedNumber.length; i++) {
    if (trimmedNumber[0] != trimmedNumber[i]) {
      console.log(creditCardNumber[i]);
      num++;
      break;
    }
  }

  console.log(num);

  return num > 0 ? true : false;
}
// //- The final digit must be even
function hasEvenLastDigit(creditCardNumber) {
  console.log("son:", creditCardNumber.substring(creditCardNumber.length - 1));

  return parseInt(creditCardNumber.substring(creditCardNumber.length - 1)) %
    2 ===
    0
    ? true
    : false;
}
// //- The sum of all the digits must be greater than 16
function hasSumGreaterThan16(creditCardNumber) {
  const trimmedNumber = creditCardNumber.split("-").join("");

  console.log(trimmedNumber);

  let total = 0;

  for (let i = 0; i < trimmedNumber.length; i++) {
    total += parseInt(trimmedNumber[i]);
  }

  return total > 16 ? true : false;
}

console.log("Genel Kontrol");

console.log(validateCreditCard("0000-0000-0000-0893"));

// /**** tests *****/
// console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
// console.log(validateCreditCard('66666666666666665')); //{ valid: true, number: '6666-6666-6666-1666' }
// console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
// console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
// console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
