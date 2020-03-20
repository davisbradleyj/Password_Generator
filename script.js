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

// create each of these as a function
// consider while loop for the char count

        // Set global variable for an array from which password characters will be chosen
        var passRandom = []
        var charAvail = []
        var charCount = []

function generatePassword() {
        // Set basic user questions to determine password length
        var charCount = prompt("Please select a character length between 8 and 128?");
        if ((parseInt(charCount) >= 8) && (parseInt(charCount) <= 128)) {
            
            return setPassword(setCharAvail(), charCount);

        } else { 
            alert("Character count must be between 8 and 128.");
            generatePassword();
        };
}

function setCharAvail(){
        var confNumbers = confirm("Would you like numbers in your password?");
        if (confNumbers === true) {
            var charAvail = "0123456789";
        };

        var confUpperLetter = confirm("Would you like upper case letters in your password?");
        if (confUpperLetter === true) {
            charAvail = charAvail + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        };

        var confLowerLetter = confirm("Would you like lower case letters in your password?");
        if (confLowerLetter === true) {
            charAvail = charAvail + "abcdefghijklmnopqrstuvwxyz";
        };

        var confSpecial = confirm("Would you like special characters in your password?");
        if (confSpecial === true) {
            charAvail = charAvail + "~!@#$%^&*()";
        };

        return fullAray;
};

function setPassword(){
            // Create loop to generate password, log password to track any issues
            for (var i=0; i < charCount; i++) {
                var randomNumber = Math.floor(Math.random()*charAvail.length);
                var passChar = charAvail[randomNumber];
                var passRandom = passRandom + passChar; 
                console.log(passRandom);
        };
};