// Global variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



// Object for the generator functions below 

var passwordCriteria = {

  lowercase : lowerCaseRandom,
  uppercase : upperCaseRandom,
  numbs : numberRandom,
  charspecial : specialCharRandom
  
  };


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



// Generate password

function generatePassword() {
var password = "";
var passlength = prompt("Please select length of your password!");

passlength = +passlength;

if (passlength >= 8 && passlength <= 128) {

var passLc = confirm("Would you like to add lowercase alphabets to your password?");

if (passLc) {

password += passwordCriteria.lowercase();
console.log(password);
}

var passUc = confirm("Would you like to add uppercase alphabets to your password?");

if (passUc) {

password += passwordCriteria.uppercase();
console.log(password);
}

var passNums = confirm("Would you like to add numbers to your password?");

if (passNums) {

password += passwordCriteria.numbs();
console.log(password);

}

var passSpecialChar = confirm("Would you like to add special characters to your password?");

if (passSpecialChar) {

password += passwordCriteria.charspecial();
console.log(password);

}

if (!passLc && !passUc && !passNums && !passSpecialChar) {

  alert("Please choose atleast one password criteria in order to generate your new password!!");
}

} else {

  alert("Please select password length of at least 8 characters and no more than 128 characters");

}
}

//Displaying the password on passwordText



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


/*

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

  console.log(passwordText);

}
*/