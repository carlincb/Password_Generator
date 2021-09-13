// The "generateBtn" variable is used to select the "Generate Password" button for the js file.
var generateBtn = document.querySelector("#generate");

// Declared global variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var minLength = 8;
var maxLength = 128;

function generatePassword() {
  
  // Created two variables.
  var newPassword = [];// Created "newPassword" to store all characters for the new password created by the function.
  var potentialCharacters = [];// Created "potentialCharacters" to store all potential characters the user could choose.
  
  // Variable "passwordLength" included to control the character length of the password and coupled with the prompt command so user can input desired length.  
  var passwordLength = prompt("Please input a number from " + minLength + " to " + maxLength + " to choose the number of characters in your password.");
  
  // Created "if" statement to exclude passwords that are too long, short, not numbers, or nothing is entered. 
  if(passwordLength < 8 || passwordLength > 128 || passwordLength==="" || passwordLength===NaN){
    alert("Please select a number from 8 to 128 to continue.");
    return;
  };
  
  // Created variables to house booleans for confirm statements to reference.
  var useNumbers=confirm("Would you like to use numbers in your password? If so, click 'OK.'");
  var useSpecialCharacters=confirm("Would you like to use special characters in your password? If so, click 'OK.'");
  var useLowerCase=confirm("Would you like to use lowercase letters in your password? If so, click 'OK.'");
  var useUpperCase=confirm("Would you like to use uppercase letters in your password? If so, click 'OK.'");
  
  // Created "if" statement to ensure one option is selected for potential password.
  if(!useNumbers && !useSpecialCharacters && !useUpperCase && !useLowerCase) {
    alert("Please select at least one option."); //If user clicks "Cancel" on all options this alert is triggered.
    return;
  };
  // Created "if" statements to input data for potential password when user clicks "OK."
  if(useNumbers===true){
    newPassword.push(getRandomCharacter(numbers)); //Used to get a random character from "numbers" and adding it to the "newPassword" array.
    potentialCharacters=potentialCharacters.concat(numbers); //Used to add all the elements from the "numbers" array to the "potentialCharacters" array, so that the "potentialCharacters" array can later fill out the rest of the password.
  };
  if(useSpecialCharacters===true){
    newPassword.push(getRandomCharacter(specialCharacters)); //Used to get a random character from "specialCharacters" and adding it to the "newPassword" array.
    potentialCharacters=potentialCharacters.concat(specialCharacters); //Used to add all the elements from the "specialCharacters" array to the "potentialCharacters" array, so that the "potentialCharacters" array can later fill out the rest of the password.
  };
  if(useLowerCase===true){
    newPassword.push(getRandomCharacter(lowerCase)); //Used to get a random character from "lowerCase" and adding it to the "newPassword" array.
    potentialCharacters=potentialCharacters.concat(lowerCase); //Used to add all the elements from the "lowerCase" array to the "potentialCharacters" array, so that the "potentialCharacters" array can later fill out the rest of the password.
  };
  if(useUpperCase===true){
    newPassword.push(getRandomCharacter(upperCase)); //Used to get a random character from "upperCase" and adding it to the "newPassword" array.
    potentialCharacters=potentialCharacters.concat(upperCase); //Used to add all the elements from the "upperCase" array to the "potentialCharacters" array, so that the "potentialCharacters" array can later fill out the rest of the password.
  };
  //A variable is created to help make up the remaining length of the password along with a "for" loop.
  var remainingLength = passwordLength-newPassword.length; //The "remainingLength" variable is set to the length the user requested minus the length of "newPassword" array.

  for (let i = 0; i < remainingLength; i++) {
    newPassword.push(getRandomCharacter(potentialCharacters))
  }; //The "for" loop is set so that it goes through and adds a random character from the "newPassword" array as many times as the "remainingLength" variable tells it until the requested password length is reached.
  return newPassword.join(''); //Used join keyword to convert "newPassword" from an array to a string.
};

// Created function to get random characters.
function getRandomCharacter(array) {
  var randomCharacter=array[Math.floor(Math.random()*array.length)];
  return randomCharacter;
};

// Password written to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener added to generate button.
generateBtn.addEventListener("click", writePassword);
