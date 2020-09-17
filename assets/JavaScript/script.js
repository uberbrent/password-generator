// Assignment code here
//Ask questions to confirm elements in password
//use an 
//generatePassword run 'while' loop until password is constructed



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//var specialChar = [];

// Write password to the #password input
function writePassword() {

  var passwordLength = window.prompt("Please choose a password length between 8 and 128 characters.")

  var specChar = window.confirm("Would you like to add special characters?")
    if (specChar === true) { 
      let newLength = charArray.push('!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '|', '}', '~');
    }

  var intChar = window.confirm("Would you like to add numbers?")
    if (intChar === tue) {
      let newLenth = charArray.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    }

  var upperChar = window.confirm("Would you like to add capital letters?")


  for (var i = 0; i < passwordLength; i++) {
    var password = charArray[Math.floor(Math.random() * charArray.length) +1]
    console.log(password)
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
     

debugger;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
