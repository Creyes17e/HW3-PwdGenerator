// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Multiple Arrays
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Variable Declaration
var confirmLength = "";
var confirmSpecialChar;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericChar;

// Prompt to determine how many characters the password will contain

function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );

  // Loop only if answer is outside the restrictions
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters try again");
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }
  // Confirm the amount of characters the password will contain
  alert(`Your password will contain ${confirmLength} characters`);

  if (confirmLength >= 8 || confirmLength <= 128) {
    // Confirm password restrictions
    var confirmSpecialChar = confirm(
      "Click OK to confirm if you would like your password to contain special characters"
    );
    var confirmLowerCase = confirm(
      "Click OK to confirm if you would like your password to contain lower case characters"
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm if you would like your password to contain upper case characters"
    );

    var confirmNumericChar = confirm(
      "Click OK to confirm if you would like your password to contain numeric characters"
    );
  }
  // Loop only if answer is outside restrictions

  while (
    (confirmSpecialChar === false) &
    (confirmLowerCase === false) &
    (confirmUpperCase === false) &
    (confirmNumericChar === false)
  ) {
    alert("You must choose at least one character type");

    var confirmSpecialChar = confirm(
      "Click OK to confirm if you would like your password to contain special characters"
    );
    var confirmLowerCase = confirm(
      "Click OK to confirm if you would like your password to contain lower case characters"
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm if you would like your password to contain upper case characters"
    );

    var confirmNumericChar = confirm(
      "Click OK to confirm if you would like your password to contain numeric characters"
    );
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
