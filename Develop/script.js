// Assignment Code
// These are used as our global variables
var generateBtn = document.querySelector("#generate");
var length = 8;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "(", "_", "-", "+", "=", "{", "}", "[", "]", "|", ";", ":", "<", ",", ">", ".", "?", "/",];
var finalPassword = "";
var totalChars = []
var inputLowerCase
var inputuppercase
var inputnumeric
var inputspecialchar

// use global variables to list out all possible:
// special characters
// lower case letters 
// upper case letters 
// numbers 

function askQuestions() {
  totalChars = [];
  numOfChar = parseInt(prompt("Please enter a number between 8 and 128."));
  // this if statement is to insure the password is between 8 and 128 chars long
  if (numOfChar < 8 || numOfChar > 128) {

    askQuestions();
    return;
  }

  //This will be used to determine if the user wishes to use Lower case/uppercase/numbers/special characters in there password
  inputLowerCase = confirm("Include LowerCase characters?");
  if (inputLowerCase) {
    totalChars = totalChars.concat(lowercase);
  }
  inputuppercase = confirm("Include uppercase characters?");
  if (inputuppercase) {
    totalChars = totalChars.concat(uppercase);
  }
  inputnumeric = confirm("Include numeric characters?");
  if (inputnumeric) {
    totalChars = totalChars.concat(numeric);
  }
  inputspecialchar = confirm("Include special characters?");
  if (inputspecialchar) {
    totalChars = totalChars.concat(special);
  }
  //This if statment is used confirm one of the options have been selected for the password
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected. Please try again.");
    return;
  }
}



// Your work starts here
function generatePassword() {
  askQuestions();
  var finalPassword = "";
  for (i = 0; i < numOfChar; i++) {
    finalPassword += totalChars[Math.floor(Math.random() * totalChars.length)];
  }
  return finalPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);