// Assignment Code

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
    } else {
      alert("Your password needs to be more than 8 and less than 128 character, try again")
      return null //terminate application
    }

  let password = "" 
  let usableChars = ""
  if (confirm("Include lowercase characters?")) {
      usableChars += smallAlpha //append content on right side of the += to the left. Inserts content to the end of already existing elements.
      password += smallAlpha.charAt(Math.floor(Math.random() * smallAlpha.length)); //get a random character from the confirmed character set. Will include this in the password.
  }
  if (confirm("Include uppercase characters?")) {
      usableChars += isUpperCase
      password += isUpperCase.charAt(Math.floor(Math.random() * isUpperCase.length));
  }
  if (confirm("Include numbers?")) {
      usableChars += isNumeric
      password += isNumeric.charAt(Math.floor(Math.random() * isNumeric.length));
  }
  if (confirm("Include special characters?")) {
      usableChars += isSpecialChar
      password += isSpecialChar.charAt(Math.floor(Math.random() * isSpecialChar.length));
  }

  //for-loop to generate 
  for (let i = password.length; i < passwordLength; i ++ ) {
    password += usableChars.charAt(Math.floor(Math.random() * usableChars.length)); //randomizes all the chosen criteria/content and generates a password
  }
    console.log(password);

    document.querySelector('#password').value = password
}

//user can copy their generated password to their clipboard
function copyToClipboard() {
  navigator.clipboard.writeText(document.querySelector('#password').value) //reference from https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
}
