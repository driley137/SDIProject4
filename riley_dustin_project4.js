//alert("JavaScript works!");

/*
 * Dustin S. Riley
 * SDI 1403
 * Project 4
*/

// Global Variables; Assign variables for the function calls. --------------------------------------------------
var numToBeFormatted = "3.12890", decimalPlaces = "2"   // Decimal Format variables
var number1 = 5, number2 = 10, fuzzyPercent = "50"      // Fuzzy Match variables

// Functions ----------------------------------------------------------------------------------------------------

// Function to evaluate a string to find out if it follows a phone number format. Boolean return.
var strPhoneNumberCheck = function(phNumber) {
    
    
}; // END   s t r P h o n e N u m b e r C h e c k ()


// Function to format a number to requested decimal places.
var decimalPlaceFormat = function (number, decimalPlaces){
    // Parse the string number to a float, Parse Int the decimal to ensure no errors. Then use the toFixed() for the decimal.
    // Reason variable is string is we can handle formatting all at once in this function.
    number = parseFloat(number);
    decimalPlaces = parseInt(decimalPlaces);
    number = number.toFixed(decimalPlaces);
    return number;   
}; // END   d e c i m a l P l a c e F o r m a t ()


// Function to evaluate if one number is greater than the other, and then evaluate if it is within a percentile.
var fuzzyMatch = function(num1, num2, percent) {
    // Nested If Thens. If num1 > num2 THEN if num1 IS percentile PRINT ALL ABOVE, Same as other outcomes. Should be 4 outcomes.
    var returnString = "";
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    percent = parseInt(percent);
    
    if (num1 < num2) {
        // It is < therefor we will do another IF for the percentile.
        if (num2 / num1 <= percent) {
            // IS greater, IS percent
            returnString = num1 + " is not greater than " + num2 + " and it is within " + percent + "%!";
            return returnString;
        
        } else {
            returnString = num1 + " is not greater than " + num2 + " but it is not within " + percent + "%!";
            return returnString;
        
        } // end imbedded if for greater than side
    } else {
        // It is greater.
        
        returnString = num1 + " is greater than " + num2 + "!";
        return returnString;
        
    } // end if/else statement
    
} // END    f u z z y M a t c h ()


// Main code; Where the functions will be called from. ----------------------------------------------------------

// Remove the block comments if you want to specify your own decimal number and decimal places.
/*  REMOVE ME TO INTERACT WITH DECIMAL FORMATTING FUNCTION  !!!! START

numToBeFormatted = prompt("What number would you like formatted?");
decimalPlaces = prompt("How many decimal places do you want it formatted to?");

*/  // REMOVE ME TO INTERACT WITH DECIMAL FORMATTING FUNCTION !!!! END
console.log("Your number formatted into the decimals you requested is " + decimalPlaceFormat(numToBeFormatted, decimalPlaces));  // Decimal Format


/*  REMOVE ME TO INTERACT WITH DECIMAL FORMATTING FUNCTION  !!!! START

number1 = prompt("What is your first number?");
number2 = prompt("What is your second number?");
fuzzyPercent = prompt("What percentage are you looking for? Please no symbols.");

*/  // REMOVE ME TO INTERACT WITH DECIMAL FORMATTING FUNCTION !!!! END
console.log(fuzzyMatch(number1, number2, fuzzyPercent));

