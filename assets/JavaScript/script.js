// Assignment code here
//Ask questions to confirm elements in password
//use an 
//generatePassword run 'while' loop until password is constructed



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLength = window.prompt("Please choose a password length between 8 and 128 characters.")

  var specChar = window.confirm("Would you like to add special characters?")
    if (specChar === true) { 
      let newLength = charArray.push('!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '|', '}', '~');
    }

  var intChar = window.confirm("Would you like to add numbers?")
    if (intChar === true) {
      let newLength = charArray.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    }

  var upperChar = window.confirm("Would you like to add capital letters?")
    if (upperChar === true) {
      let newLength = charArray.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    }

    var password = '';

  while (password.length < passwordLength) {
    
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      password = password + charArray[Math.floor(Math.random() * charArray.length)];
      console.log(password)
    }
    return password
  }
 
}

debugger;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//for (var i = 0; i < passwordLength; i++) {

  //console.log(password)
  //return password
