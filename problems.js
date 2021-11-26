 ////////////////////////////////////////////////////////////////////////////////
 muestraFuncion('Persistent bugger:', persistence(39));
 muestraFuncion('Validate Pin:', validatePIN(12345));
 muestraFuncion('Find missing letter:', findMissingLetter(['a','b','c','d','f']));
 muestraFuncion('Array difference:', arrayDiff([1,2],[1]));

 function muestraFuncion(string, funcion){
    try{
        console.log(string, funcion);
    }catch(e){
       console.log(`Error: ${e.message}`);
    }
 }
/////////////////////////////////////////////////////////////////////////////////

/*
Validate PIN
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
    var pinStr = pin.toString();
    var rgx  = /^[0-9]{4,6}/;

    if (pinStr.match(rgx) && pinStr.length != 5){
        return true;
    } else {
        return false;
    } 
}

/*
Persistent Bugger
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
    if(typeof num === 'number' || num >= 0){
        var counter = 0;
        var digits = num.toString().split('');

        while(digits.length > 1){
            var results = 1;

            for(var i = 0; i < digits.length; i++){
                results = results * digits[i];
            }
            digits = results.toString().split('');
            counter = counter + 1;
        }
        return counter;
    }
}

/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case. (Use the English alphabet with 26 letters!)
*/

function findMissingLetter(array)
{    
   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var firstLetter = array[0];

   if(firstLetter === firstLetter.toUpperCase()){
        alphabet = alphabet.join('').toUpperCase().split('');
   }
   var alph_Letter = alphabet.indexOf(firstLetter);

   alphabet = alphabet.splice(alph_Letter, array.length + 1);

   for(var i = 0; i < alphabet.length; i++){
       if(array.indexOf(alphabet[i]) == -1){
            return alphabet[i];
       }
   }
}

/*
Array.diff
Implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
*/

function arrayDiff(a, b) {
    var diff = a.filter(x => !b.includes(x));
    return diff;
}