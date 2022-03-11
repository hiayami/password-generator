// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var copyBtn = document.querySelector("#copy");

//variable "banks" of characters that will/will not be used in the password generator (depending on prompt answers)
var smallAlpha = "abcdefghijklmnopqrstuvwxyz"
var isUpperCase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ"
var isNumeric = "0123456789"
var isSpecialChar = "!@#$%^&*=+"

// Write password to the #password input

function criteriaPassword(){
  let passwordLength = prompt("choose character length of password, enter a number 8-128"); 
  //user enters number for amount of characters they'd like the password to be. It can be at least 8 and no more than 128, returns true when both the conditions between are true (logical and operator)
    if (passwordLength >= 8 && passwordLength <= 128) { 
      //window alert informs user of character length amount
      alert("Your password will have " + passwordLength + " characters");
      console.log(passwordLength);
    }
    let usableChars = ''
  if (confirm("Include lowercase characters?")) {
      usableChars += smallAlpha //append content on right side of the += to the left. Inserts content to the end of already existing elements.
  }
  if (confirm("Include uppercase characters?")) {
      usableChars += isUpperCase
  }
  if (confirm("Include numbers?")) {
      usableChars += isNumeric
  }
  if (confirm("Include special characters?")) {
      usableChars += isSpecialChar
  }
  let password = ""
  for (let i = 0; i < passwordLength; i ++ ) {
    password += usableChars.charAt(Math.floor(Math.random() * usableChars.length)); //randomizes all the chosen criteria/content and generates a password
  }
    console.log(password);

    document.querySelector('#password').value = password
}

//user can copy their generated password to their clipboard
function copyToClipboard() {
  navigator.clipboard.writeText(document.querySelector('#password').value) //reference from https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
}


// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
