// Global variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



// Object for the generator functions below (line 103 - 144)

var passwordCriteria = {

  lowercase : lowerCaseRandom,
  uppercase : upperCaseRandom,
  numbs : numberRandom,
  charspecial : specialCharRandom
  
  };


// Add event listener to generate button to start with prompts 

generateBtn.addEventListener("click", (event) => {
   event.preventDefault();
  criteriaCheck();
});

// Collect user password criteria

function criteriaCheck() {
var passLength = prompt("Please select a length of your password!");

passLength = +passLength;

console.log(passLength);
console.log(typeof passLength);

if (passLength >= 8 && passLength <= 128) {

var passLc = confirm("Would you like to add lowercase alphabets to your password?");

if (passLc) {

passLc = passLc;
console.log(passLc);
} else {

passLc === false;
console.log(passLc);
}

var passUc = confirm("Would you like to add uppercase alphabets to your password?");

if (passUc) {

  passUc = passUc;
  console.log(passUc);
  } else {
  
    passUc === false;
  console.log(passUc);
  }

var passNums = confirm("Would you like to add numbers to your password?");

if (passNums) {

  passNums = passNums;
  console.log(passNums);
  } else {
  
    passNums === false;
  console.log(passNums);
  }

var passSpecialChar = confirm("Would you like to add special characters to your password?");

if (passSpecialChar) {

  passSpecialChar = passSpecialChar;
  console.log(passSpecialChar);
  } else {
  
    passSpecialChar === false;
  console.log(passSpecialChar);
  }

if (!passLc && !passUc && !passNums && !passSpecialChar) {

  alert("Please choose atleast one password criteria in order to generate your new password!!");
}

} else {

  alert("Please select password length of at least 8 characters and no more than 128 characters");

}

generatePassword(passLength, passLc, passUc, passNums, passSpecialChar);

}

//Generate Password function

function generatePassword (passLength, passLc, passUc, passNums, passSpecialChar) {
var passwordGenerated = ''; 
var typesCount = passLc + passUc + passNums + passSpecialChar;

console.log('typesCount: ', typesCount);

var typesArray = [{ lowercase: passLc }, { uppercase: passUc }, { numbs: passNums }, { charspecial: passSpecialChar }].filter(item => Object.values(item)[0]);

console.log('typesArrays ', typesArray);

for (i = 0; i < passLength; i += typesCount) {
typesArray.forEach(type => {
var funcName = Object.keys(type)[0];

console.log('functionName ', funcName);

passwordGenerated += passwordCriteria[funcName]();

});
}
console.log(passwordGenerated);
}


// Generator functions 

function lowerCaseRandom () {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
console.log(lowerCaseRandom());

function upperCaseRandom () {

  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

console.log(upperCaseRandom());


function numberRandom () {

  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

console.log(numberRandom());

function specialCharRandom () {
  var specialCHar = "_-)(*&^%$#@!~`}{][|:;'><,./?'";
  return specialCHar[Math.floor(Math.random() * specialCHar.length)];

}

console.log(specialCharRandom());


// Write password to the #password input
function writePassword() {
  var password = generatedPassword();

  passwordText.value = password;

}
