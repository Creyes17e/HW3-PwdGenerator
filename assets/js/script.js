// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Multiple Variable Arrays
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
var lowerCase = [
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
var upperCase = [
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
    "How many characters would you like your password to contain? 8-128 characters"
  );

  // Only if length answer is outside the restrictions
  if (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters try again");
    return;
  }

  // Confirm password restrictions
  else {
    confirmLength >= 8 || confirmLength <= 128;
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
  // Only if password character answers are outside restrictions

  if (
    (confirmSpecialChar,
    confirmLowerCase,
    confirmUpperCase,
    confirmNumericChar === false)
  ) {
    alert("You must choose at least one character type, please try again");
  } else {
    //Actions for password restrictions
    var passwordChar = [];

    if (confirmSpecialChar) passwordChar = passwordChar.concat(specialChar);

    if (confirmLowerCase) passwordChar = passwordChar.concat(lowerCase);

    if (confirmUpperCase) passwordChar = passwordChar.concat(upperCase);

    if (confirmNumericChar) passwordChar = passwordChar.concat(number);

    // Generate password inside card
    var password = "";
    for (var i = 1; i <= confirmLength; i++) {
      var randomChar =
        passwordChar[Math.floor(Math.random() * passwordChar.length)];
      password = password + randomChar;
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
