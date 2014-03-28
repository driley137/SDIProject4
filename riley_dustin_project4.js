//alert("JavaScript works!");

/*
 * Dustin S. Riley
 * SDI 1403
 * Project 4
*/

// Global Variables; Assign variables for the function calls. --------------------------------------------------
var numToBeFormatted = "3.12890", decimalPlaces = "2"   // Decimal Format variables
var number1 = 5, number2 = 10, fuzzyPercent = "50"      // Fuzzy Match variables
var arrNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20], stoppingNumber = 13 // Next Smallest Array variables
var url = "https://www.google.com";                                     // URL Test
var strForFormat = "a,b,c,d,e,f,g", symbol = ",", replacement = "!"    // String Format/Replacing
var strNumber = "137";                                               // String to Number


// Functions ----------------------------------------------------------------------------------------------------

// Function to parse a number from a string
var strToNum = function(strNum) {
    // Parse a number from a string to a numerical value.
    // new variable to help tell the differnce of string and numerical
    var num = 0;
    if (strNum.indexOf('.') === -1) {
        //no period found so will do Int
        num = parseInt(strNum);
        return num;
    } // else it's going to return the float number.
    num = parseFloat(strNum);
    return num;
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
    
}; // END    f u z z y M a t c h ()

// Function to return the next numerical to the comparable input number, from an array.
var arrNextSmallest = function(arr, number) {
    var winningNumber = 0;
    number = parseInt(number);  // QA
    
    for(var i = 0; arr[i] != arr.length; i++){
        // This will loop through the entire array. I'm sure I could use another loop in order to exit once found.
        // But I think this way, even if the numbers aren't in nummerical order it'll work without me rearranging the array.
        var testNumber = arr[i]; // Local variable assigning via the value of the index

        if (testNumber > number && (testNumber - winningNumber) > (testNumber - number)) {
            // I believe this will pull the closest numberical value
            winningNumber = testNumber;
            
        } // end IF statement. Else condition is below
        // Not doing anything in the "else" area of the IF statement. I only want something to happen IF it's true.
    } // end for loop to assign next highest to return variable

    return winningNumber;
    
}; // END   a r r N e x t S m a l l e s t ()


// Function to determine if an input string is a URL
var isURL = function(urlToTest){
    // Will return a boolean value if it in fact a URL
    var http = urlToTest.slice(0,7);
    var https = urlToTest.slice(0,8);
    
    if (http === "http://" ) {
        // http IS http://
        return true;
    } else if (https === "https://") {
        // https IS https://
        return true;
    }
    // neither http or https variables are correct.
    return false;
    
}; // END   i s U R L ()


// Function to modify a string's seperator to another specified seperator
var strFormat = function(str, sym1, sym2){
    // use replace() to change sym1 with sym2 
    for(var i = 0; i < str.length; i++){
        str = str.replace(sym1, sym2);
    }// end for loop
    
    return str;
    
}; // END   s t r F o r m a t ()




// Main code; Where the functions will be called from. ----------------------------------------------------------

// Remove the block comments if you want to specify your own decimal number and decimal places.
/*  REMOVE ME TO INTERACT WITH DECIMAL FORMATTING FUNCTION  !!!! START

numToBeFormatted = prompt("What number would you like formatted?");
decimalPlaces = prompt("How many decimal places do you want it formatted to?");

*/  // REMOVE ME TO INTERACT WITH DECIMAL FORMATTING FUNCTION !!!! END
console.log("Your number formatted into the decimals you requested is " + decimalPlaceFormat(numToBeFormatted, decimalPlaces));  // Decimal Format


/*  REMOVE ME TO INTERACT WITH FUZZY MATCH FUNCTION  !!!! START

number1 = prompt("What is your first number?");
number2 = prompt("What is your second number?");
fuzzyPercent = prompt("What percentage are you looking for? Please no symbols.");

*/  // REMOVE ME TO INTERACT WITH FUZZY MATCH FUNCTION !!!! END
console.log(fuzzyMatch(number1, number2, fuzzyPercent));                                                        // Fuzzy Match


/*  REMOVE ME TO INTERACT WITH NEXT SMALLEST ARRAY FUNCTION  !!!! START

arrNumbers = Array(Number(prompt("How many entries in your custom array, do you want?")));
for (var i = 0; i < arrNumbers.length; i++){
  arrNumbers[i] = prompt("Enter your number for position " + (i+1) + ".");  
} // end for loop
stoppingNumber = prompt("What number do you want to evaluate with?");

*/  // REMOVE ME TO INTERACT WITH NEXT SMALLEST ARRAY FUNCTION !!!! END
console.log("The next smallest number within the array is " + arrNextSmallest(arrNumbers, stoppingNumber) + "!");      // Next Smallest Array


/*  REMOVE ME TO INTERACT WITH IS URL FUNCTION  !!!! START

url = prompt("Please input your proper URL.");

*/  // REMOVE ME TO INTERACT WITH IS URL FUNCTION !!!! END
console.log(isURL(url));

/*  REMOVE ME TO INTERACT WITH STRING REPLACEMENT FUNCTION  !!!! START

strForFormat = prompt("Please input your string containing your seperator.");
symbol = prompt("Please input your character you want to replace.");
replacement = prompt("Please input your replacement character.");

*/  // REMOVE ME TO INTERACT WITH STRING REPLACEMENT FUNCTION !!!! END
console.log("Original string is: " + strForFormat + ". Reformatted version is " + strFormat(strForFormat, symbol, replacement));


/*  REMOVE ME TO INTERACT WITH STRING TO NUMBER FUNCTION  !!!! START

strNumber = prompt("Please input your number, you can even use decimals!");

*/  // REMOVE ME TO INTERACT WITH STRING TO NUMBER FUNCTION !!!! END
console.log("Your original number as a string is " + strNumber + ". Your value is now " + strToNum(strNumber) + " as numerical data.");