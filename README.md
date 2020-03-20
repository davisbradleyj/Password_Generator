# Password_Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - present to add styling elements
- JavaScript - used to create the logic controlling the application
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary

In creating this password generator, my first objective was to establish the commands that would become the user prompts on an html page within a script tag: a prompt to establish the length of the password, and confirms to establish whether the user wished to include lowercase, uppercase, numbers, and/or special characters.  These characters would be added to an array, and that array length would be referenced in a loop, with the character numbers for the password being the number of times the loop would run.  Once the loop completed, the password was alerted on screen.  In HTML, this was accomplished.

My next challenge was moving the logic into js and creating functions as part of the instructions.  This proved to be a more significant challenge, as some of the variables created were not being read in all portions of the code.  I found that I was able to get all the html/script user prompts to appear, and confirmed that the values were appearing through console.log, however, my most significant wall is that despite all steps appearing to function correctly, and the loop which would generate the password running through the appropriate amount of times, the password was not being written, appearing as "NaN" in console.log, and "Undefined" on the page.

After discussion with Corbin Brockbank, we were able to pinpoint the NaN reference could have been related to a typographical error for how the variable "passRandom" was adding to itself, and confirmed by Kerwin Hy.  Further discussion with Mr. Hy led to a review of each of the variables to ensure proper assignments.  When adding "return" back into the function, the password successfully is added to the page.


## Code Snippet

```js
```

## Acknowledgements

Jerome Chenette, Kerwin Hy, Mahisha Manikandan, Corbin Brockbank, Nadine Bundschuh, Kasey Chang, Sam Poppe, Juliet George

## Author Links

Brad Davis
[Email](davis.bradleyj@gmail.com)
[LinkedIn](https://www.linkedin.com/in/brad-davis-7885884/)
[GitHub](https://github.com/davisbradleyj)
