// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared global variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var minLength = 8;
var maxLength = 128;

// passwordInput = numbers.concat(specialCharacters, upperCase, lowerCase);

// Write password to the #password input
function generatePassword() {
  var newPassword = [];
  var potentialCharacters = [];

  var passwordLength = prompt("Please input a number from " + minLength + " to " + maxLength + " to choose the number of characters in your password.");

  if(passwordLength < 8 || passwordLength > 128 || passwordLength==="" || passwordLength===NaN){
    alert("Please select a number from 8 to 128 to continue.");
    return;
  };

  var useNumbers=confirm("Would you like to use numbers in your password? If so, click 'OK.'");
  var useSpecialCharacters=confirm("Would you like to use special characters in your password? If so, click 'OK.'");
  var useLowerCase=confirm("Would you like to use lowercase letters in your password? If so, click 'OK.'");
  var useUpperCase=confirm("Would you like to use uppercase letters in your password? If so, click 'OK.'");

  if(!useNumbers && !useSpecialCharacters && !useUpperCase && !useLowerCase) {
    alert("Please select at least one option.");
    return;
  };
  if(useNumbers===true){
    newPassword.push(getRandomCharacter(numbers));
    potentialCharacters=potentialCharacters.concat(numbers);
  };
  if(useSpecialCharacters===true){
    newPassword.push(getRandomCharacter(specialCharacters));
    potentialCharacters=potentialCharacters.concat(specialCharacters);
  };
  if(useLowerCase===true){
    newPassword.push(getRandomCharacter(lowerCase));
    potentialCharacters=potentialCharacters.concat(lowerCase);
  };
  if(useUpperCase===true){
    newPassword.push(getRandomCharacter(upperCase));
    potentialCharacters=potentialCharacters.concat(upperCase);
  };

  var remainingLength = passwordLength-newPassword.length;

  for (let i = 0; i < remainingLength; i++) {
    newPassword.push(getRandomCharacter(potentialCharacters))
  };
  return newPassword.join('');
};

function getRandomCharacter(array) {
  var randomCharacter=array[Math.floor(Math.random()*array.length)];
  return randomCharacter;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
