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


        // Set global variable for an array from which password characters will be chosen
        var charAvail = []
        var password = []

        // Set basic user questions to determine password length
        var charCount = prompt("Please select a character length between 8 and 128?");
        if ((charCount < 8) || (charCount > 128)) {
            alert("Character count must be between 8 and 128, please refresh and try again. Thank you.");
        };
        
        // Prompt to user to determine if numbers are in the password array
        var confNumbers = confirm("Would you like numbers in your password?");
        if (confNumbers === true) {
            charAvail = charAvail + "0123456789";
            console.log(charAvail);
        } else {
            alert("Ok, no numbers.")
        };

        // Prompt to user to determine if uppercase letters are in the password array
        var confUpperLetter = confirm("Would you like upper case letters in your password?");
        if (confUpperLetter === true) {
            charAvail = charAvail + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            console.log(charAvail);
        } else {
            alert("Ok, no upper case letters.")
        };

        // Prompt to user to determine if lower case letters are in the password array
        var confLowerLetter = confirm("Would you like lower case letters in your password?");
        if (confLowerLetter === true) {
            charAvail = charAvail + "abcdefghijklmnopqrstuvwxyz";
            console.log(charAvail);
        } else {
            alert("Ok, no lower case letters.")
        };

        // Prompt to user to determine if special char are in the password array
        var confSpecial = confirm("Would you like special characters in your password?");
        if (confSpecial === true) {
            charAvail = charAvail + "~!@#$%^&*()";
            console.log(charAvail);
        } else {
            alert("Ok, no special characters.")
        };

        // Create loop to generate password, log password to track any issues
        for (var i=0; i < charCount; i++) {
            var randomNumber = Math.floor(Math.random() * charAvail.length);
            var passChar = charAvail[randomNumber];
            password = password + passChar;
            console.log(password);
        }
         
        alert(password)
