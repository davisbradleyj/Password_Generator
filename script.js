// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create each of these as a function
// consider while loop for the char count

// Set global variable for an array from which password characters will be chosen
var passRandom = "";
var randomChar = "";
var charAvail = [];
var charCount = [];
var charInt = {};


function generatePassword() {
    // Set basic user questions to determine password length
    while ((charCount) < 8 || (charCount) > 128) {
        charCount = prompt("Please select a character length between 8 and 128");
        charInt = charCount
        console.log("charInt: " + charInt);
    }
    return setPassword();
};

function setPassword() {

    var confNumbers = confirm("Would you like numbers in your password?");
    if (confNumbers === true) {
        charAvail = "0123456789";
    }

    var confUpperLetter = confirm("Would you like upper case letters in your password?");
    if (confUpperLetter === true) {
        charAvail = charAvail + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    var confLowerLetter = confirm("Would you like lower case letters in your password?");
    if (confLowerLetter === true) {
        charAvail = charAvail + "abcdefghijklmnopqrstuvwxyz";
    }

    var confSpecial = confirm("Would you like special characters in your password?");
    if (confSpecial === true) {
        charAvail = charAvail + "~!@#$%^&*?\|,_-";
    }

    console.log(charAvail);

    // Create loop to generate password, log password to track any issues
    console.log(charInt);
    console.log(charCount);
    for (var i = 0; i < charCount; i++) {
        var randomChar = Math.floor(Math.random()*charAvail.length);
        var passChar = charAvail[randomChar];
        passRandom += passChar;
        console.log(passRandom);
    }

    return passRandom;
};
