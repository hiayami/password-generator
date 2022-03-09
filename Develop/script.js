// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

var isLowerCase = "abcdefghijklmnopqrstuvwxyz"
var isUpperCase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ"
var isNumeric = "0123456789"
var isSpecialChar = "!@#$%^&*=+"

// Write password to the #password input
function criteriaPassword(){
  let person = prompt("choose character length of password, enter a number 8-128");
  let isLowerCase = confirm("Include lowercase characters?");
  let isUpperCase = confirm("Include uppercase characters?");
  let isNumeric = confirm("Include numbers?");
  let isSpecialChar = confirm("Include special characters?")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
