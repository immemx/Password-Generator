// Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Special Characters
var specialChara = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var upper case
var lettersUpperCase = letters.map(name => name.toUpperCase());


var generatePassword = function() {

  var length = criteriaLength();
  var criteria = criteria();
  var passwordCharacter = [];


  for (var i = 0; i < length; i++) {
    var characters = criteria[Math.floor(Math.random() * criteria.length)];
    passwordCharacter.push(characters)
  }

  var ps = passwordCharacter.join("");
  return ps;
}

var criteriaLength = function() {
  // Find Length of password
  var promptLength = parseInt(window.prompt('Choose a length between 8 - 128'));

  //verify length is withing our range
  if (promptLength >= 8 && promptLength <= 128) {
    window.alert("Your password will be " + promptLength + " characters long.")
  } else {
    window.alert("Your password is invalid")
    writePassword();
  };
  
  return;
};

var criteria = function() {
  //empty arr to fill with true conditions
  var conditions = [];

  // Prompt LowerCase
  var promptLowerCase = window.confirm('Do you want your password to contain lowercase characters?')

  if (promptLowerCase) {
    window.alert('Your password will contain lowercase characters')
    conditions = conditions.concat(letters)
  } else {
    window.alert('Your password will NOT contain lowercase characters')
  };

  // Prompt uppercase
  var promptUpperCase = window.confirm('Do you want your password to contain uppercase characters?')

  if (promptUpperCase) {
    window.alert('Your password will contain uppercase characters')
    conditions = conditions.concat(lettersUpperCase)
  } else {
    window.alert('Your password will NOT contain uppercase characters')
  };

  // Prompt numbers
  var promptnumbers = window.confirm('Do you want your password to contain numbers?')

  if (promptnumbers) {
    window.alert('Your password will contain numbers')
    conditions = conditions.concat(numbers)
  } else {
    window.alert('Your password will NOT contain numbers')
  };

  // Prompt special Characters
  var promptSpecialChara = window.confirm('Do you want your password to special characters?')

  if (promptSpecialChara) {
    window.alert('Your password will contain special characters')
    conditions = conditions.concat(specialChara)
  } else {
    window.alert('Your password will NOT contain special characters')
  };

  return conditions;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
