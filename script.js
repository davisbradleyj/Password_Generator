// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Set global variables
        var array = []
        var numbers = [01234456789];
        var upperLetter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
        var lowerLetter = ["abcdefghijklmnopqrstuvwxyz"];
        var special = ["~!@#$%^&*?_<>+{}"];

// Set basic user questions to determine password length
        var charCount = prompt("Please select a character length between 8 and 128?");
        if ((charCount < 8) || (charCount > 128)) {
            alert("Character count must be between 8 and 128, please refresh and try again. Thank you.");
            break;
        };
        
        var confNumbers = confirm("Would you like numbers?");
        if (confNumbers = true) {
            console.log(array);
        } else {
            alert("Ok, no numbers.")
        };

        var confUpperLetter = confirm("Would you like upper case letters?");
        if (confUpperLetter = true) {
            console.log(array);
        } else {
            alert("Ok, no upper case letters.")
        };

        var confLowerLetter = confirm("Would you like lower case letters?");
        if (confLowerLetter = true) {
            console.log(array);
        } else {
            alert("Ok, no lower case letters.")
        };

        var confSpecial = confirm("Would you like special characters?");
        if (confSpecial = true) {
            console.log(array);
        } else {
            alert("Ok, no special characters.")
        };

        for (var i=0; i < charCount+1; i++) {
            var randomNumber = Math.floor(Math.random() * array.lenth);


[A2Z]

)
  prompt("")
alert(password)
