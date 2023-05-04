var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Assignment Code
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "~", "`", ",", ".", "/", ";", "{", "[", "}", "]", "<",">", "_"];
  var selectedCharacters = [];
  // Make promts for password criteria

  var characterNumber = prompt("Please enter the desired amount of characters (8-128).");

  if (characterNumber < 8 || characterNumber > 128) {
    alert("Please choose a number between 8-128.");
    return generatePassword();
  } 

  var lowercasePrompt = confirm("Do you want lowercase characters?");
    if (lowercasePrompt) {
      var confirmedLowercase = alert ("Password will contain lowercase characters.");
    } else {
      alert("Password will NOT contain lowercase characters.");
  }

  var uppercasePrompt = confirm("Do you want uppercase characters?");
    if (uppercasePrompt) {
      var confirmedUppercase = alert ("Password will contain uppercase characters.");
    } else {
      alert("Password will NOT contain uppercase characters.");
  }

  var numbersPrompt = confirm("Do you want numbers included?");
    if (numbersPrompt) {
      var confirmedNumbers = alert ("Password will contain numbers.");
    } else {
      alert("Password will NOT contain numbers.");
  }

  var specialPrompt = confirm("Do you want special characters included?");
    if (specialPrompt) {
      var confirmedSpecial = alert ("Password will contain special characters.");
    } else {
      alert("Password will NOT contain special characters.");
  }

  if (lowercasePrompt) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }

  if (uppercasePrompt) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }

  if (numbersPrompt) {
    selectedCharacters = selectedCharacters.concat(numeric);
  }

  if (specialPrompt) {
    selectedCharacters = selectedCharacters.concat(special);
  }

  var finalPassword = ""
  for (let i = 0; i <characterNumber; i++) {
    let rng =[Math.floor(Math.random() * selectedCharacters.length)];
    finalPassword = finalPassword + selectedCharacters[rng];
  }
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
