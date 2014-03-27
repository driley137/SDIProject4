//alert("JavaScript works!");

/*
 * Dustin S. Riley
 * SDI 1403
 * Project 4
*/

// Global Variables; Assign variables for the function calls. --------------------------------------------------
var numToBeFormatted = "3.12890", decimalPlaces = "2"   // Decimal Format variables


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




// Main code; Where the functions will be called from. ----------------------------------------------------------
console.log("Your number formatted into the decimals you requested is " + decimalPlaceFormat(numToBeFormatted, decimalPlaces));  // Decimal Format