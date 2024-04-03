// Q1.filter_list :write a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.
function filter_list(numArr){
    return numArr.filter(callbackFunc)
}

function callbackFunc(arrItem) {
    // 1. it is a number
    // 2. it is  positive number
    if(arrItem >= 0 && typeof arrItem === 'number') {
        return true;
    } else {
        return false;
    }
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','15',115]));

// we can also write the same without any call back function

function filter_list(numArr){
    return numArr.filter(arrItem => {
        return arrItem >= 0 && typeof arrItem === 'number';
    })
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','15',115]));


// Q2. implement a difference function, which substracts one list from another and returns the results.

function arrayDiff(a,b){
if (a.length === 0){
    return b;
}
if (b.length === 0){
    return a;
}
let newA = a;
let newB = b;

a.forEach((arrItem,arrIndex)=> {
    const aCopy =newA.slice();
    const bCopy = newB.slice();
    // we have found  this element in both arrays
    if(b.includes(arrItem)){
        newA = aCopy.filter(item => item !== arrItem)
        newB = bCopy.filter(item => item !== arrItem)
    }
});
console.log(newA);
return newA;
}

console.log(arrayDiff([],[4,5]));
console.log(arrayDiff([3,4],[4,5],[4],[5]));
console.log(arrayDiff([1,3,4],[2,6,5],[4],[9]));
console.log(arrayDiff([3,4],[4,5,3],[4,3,4],[1,6,5]));
console.log(arrayDiff([3,4],[4,5,3],[],[1,6,5]));

// *************************************************************************************************/
// format a string of names like "BART,LISA & MAGGIE"
//  A string formatted as a list of names separated by commas except for the last two names
// whcih should be separated by an ampersand?
// ************************************************************************************************/

function list(names) {
    
    let finalString = '';
    if(names.length === 1) {
        return names[0].name;
    }
    names.forEach((arrItem, arrIndex) =>{
     const name = arrItem.name;
     if(arrIndex === names.length -1) {
        finalString = finalString + ' & ' + name;
     } else if(arrIndex === names.length - 2){
       finalString = finalString + name;
     } else{
        finalString =finalString + name + ', ';
     }
        
   });
    return finalString;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},,{name: 'Maggie'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))
console.log(list([{name: 'Bart'}]))
console.log(list([]))

//****************************** **/
// another way to solve
// *********************************/
function list(names) {
    return names.reduce(function(prev,current,index,array){
        if(index === 0){
            return current.name
        }
        else if(index === array.length - 1) {
            return prev + ' & ' + current.name;
        }
        else {
            return prev + ' , ' + current.name;
        }
    }, '');
}

/*You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
 The city provides its citizens with a Walk Generating App on their phones -
 everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's, w,
'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
 so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
 of course, return you to your starting point. Return false otherwise.
"Note: you will always receive a valid array containing a random assortment of direction letters (n, 's; 'e, or 'w'only). 
It will never give you an empty array (that's not a walk, that's */

// *********************************************************************************************************************************************/

function isValidWalk(walk) {
if(walk.length !== 10){
    return false;
}

let nOffset = 0;
let sOffset = 0;
let eOffset = 0;
let wOffset = 0;

walk.forEach(direction => {
    switch(direction) {
        case 'n':
            nOffset += 1;
            break;
   
        case 'w':
            wOffset += 1;
            break;
        case 'e':
            eOffset += 1;
            break;
        case 's':
            sOffset += 1;
            break;

    }
});

return nOffset - sOffset === 0 && wOffset - eOffset === 0;
}


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))


// ****************************************************************************************************************/
// write a function persistence, that takes in a positive parameter num and return its multiplicative persistence.
// which is the number of times you must multiply the digits in num until you reach a single digit.
// example: 39 => 3*9 = 27 =>2 *7 =14 => 1*4=4
// ******************************************************************************************************************/

// function persistence(num) {
//     if(num < 10){
//         return 0;
//     }
//     // *******NOTE *******
// // +num.toString()[0] //here to get the first digit we are converting a num to string and taking the first digit and converting back to  number
//                    //you can wrap it in a Number like "Number(num.toString()[0])" or use "+" sign.
// // const multiplicationValue = num.toString().split("").reduce((acc,num) => acc *=num);-->this step is divided into 3 steps as below.

// const convertToStr = num.toString();
// const convertToArr = convertToStr.split("");
// const multiplicationValue =convertToArr.reduce((acc, num) => acc *=num);

// if(multiplicationValue >= 10) {
//     return 1 + persistence(multiplicationValue);
// } else {
//     return 1;
// }
// }
// solved this in another method below


function persistence(num){
    var times = 0;
    num =num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((acc,num) => acc *=num).toString();
    }
    return times;
}
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
console.log(persistence(788));


// *******************************************
// testting
// *******************************************
let words ='i like html';
let ex = 4566;
console.log(words.split(""));
console.log(ex.toString().split('').reduce((acc,num) => acc *=num));
console.log(typeof(ex))


// ********************************************************************************************************
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or
// exactly 6 digits. if the function is passed a valid PIN string return TRUE else FALSE.
// **********************************************************************************************************
// function validatePIN(pin) {
//     const fourDigitRegex = /(^[0-9]{4}$)/ ;
//     const sixDigitRegex = /(^[0-9]{6}$)/ ;
 
//     const result1 = pin.match(fourDigitRegex);
//     const result2 = pin.match(sixDigitRegex);

//  return !(!result1 && !result2);
// }
// ***************************************
// another way
// ****************************************
function validatePIN(pin){
    return/^(\d{4}|\d{6})$/.test(pin)
}
console.log(validatePIN('1'));
console.log(validatePIN('12'));
console.log(validatePIN('123'));
console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('123456'));
console.log(validatePIN('1234567'));


// ***************************************************************************************************
// count the total number of lower case letters in a string...
// ****************************************************************************************************
function lowercaseCount(str) {
const results = str.match(/[a-z]/g);

return results ? results.length: 0;

}

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC!@#%$#@$$%^%%%%$$%%#$$%^&**(((&%%%"));
console.log(lowercaseCount(""));
console.log(lowercaseCount("ABC123!@#$%^&*^%#@@$%^%#$%^&&&dffnkjnb"));
console.log(lowercaseCount("abcdefghijkl456677mnopRstU8VWXYZ"));

// *********************************************************************************************************
// write a simple function that takes  as a parameter a date object and returns a boolean value representing 
// whether the date is today or not. make sure that your function does not return a false positive by just 
// checking just the day.
// **********************************************************************************************************

// function isToday(date){
//   const  checkDay = date.getDate();  //day of the month;
//   const checkMonth = date.getMonth(); //month of the year(0 indexed);
//   const checkYear = date.getFullYear();

// }

function isToday(date){
    return new Date().toDateString() === date.toDateString();
}

console.log(isToday('03202024'));

// **************************************************************************************************************
// 
// 
// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************
// **************************************************************************************************************
