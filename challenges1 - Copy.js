// how to reverse a string?
function revrse(a) {
 let arr = a.split("");   //this split helps us to split the world.
return  newArr=arr.reverse().join(""); //by doing .reverse we can reverse the letters seperated by comma, and .join  is used to remove the commas.
}

let str = revrse("hello");
console.log(str);

// how to count the vowels(a,e,i,o,u) in a string?
function count(a) {
let vowelCount = 0;
let arr =a.split("");
for(let i=0;i<arr.length; i++){
    if(arr[i] ==="a"|| arr[i] ==="e"|| arr[i] ==="i"|| arr[i] ==="o"|| arr[i] ==="u"){
        vowelCount++;
    }
}
return vowelCount;
}

let para =count("hello good morning");
console.log(para); 

// how to greet a specific person differently and the rest of people as hello+name!
function greet(name) {
    if (name === "ravi"||name ==="Ravi"||name ==="RAVI"){
        return "Hello,My Love!"
    } 
        return "Hello," +name +"!";
    
}

console.log(greet('RANI'));

// write a function to check if a (n)number is divisble by two numbers(x,y)! pass 3 ARUGUMENTS  
function isDivisible(n,x,y) {
if(n%x ===0 && n%y=== 0){
    return true;
}
return false;
}

console.log(isDivisible(100,5,10));
console.log(isDivisible(20.5,3,5));

// for a given number make it a negative number, if the number is already negative then it should just display the number>

function makeNegative(num) {
if(num < 0){
    return num;
}
// return num * -1;
return -Math.abs(num); // there is built in method called  (-Math.abs)which converts any positive number to negative.
}

console.log(makeNegative(29));
console.log(makeNegative(0.04));
console.log(makeNegative(-49));

// given an array of integers your solution find the smallest integer?
class SmallestIntegerFinder {
    findSmallestInt(num) {
     num.sort((a,b)=> a - b);
     return num[0];
    }
}
const smallestIntegerFinder = new SmallestIntegerFinder();
console.log("The smallest intger",smallestIntegerFinder.findSmallestInt([34,-345,-1,100]))
console.log("The smallest intger",smallestIntegerFinder.findSmallestInt([150,45,0.1,-0.5]));

// write a program that finds the summation a given number.and number should be positive?

function summation(num) {
    let y=0;
for(let i=1; i<=num;i++)
{
    y=y+i;

}
return y;
}

console.log(summation(8));
console.log(summation(20));

// given a students marks list and calculate the average and round off to the nearest zero.

function getAverage(marks) {
    let total =0;
    for(let i=0;i<marks.length; i++){
        total += marks[i];
    }
    return Math.floor(total/marks.length);
    //  return Math.floor(marks.reduce((sum,x) =>sum+x)/marks.length); // this is the another way of doing it.
    
}

console.log("The Average score is ",getAverage([10,20,30,40,50]));
console.log("The Average score is ",getAverage([0,50,10,.10,22,33,44]));


// ROCK PAPER SCISSOR

const rockPaperScissor =(player1, player2) => {
  if(player1 === player2) return "Draw!";
  let rules = {rock:"scissors", paper:"rock", scissors:"paper"};
  if(player2 === rules[player1]) {
    // console.log(rules[player1])
    return "player1 won!";
  }  else{
    return "player2 won!"
  }
}
console.log(rockPaperScissor('rock','scissors'));
console.log(rockPaperScissor('paper','scissors'));
console.log(rockPaperScissor('scissors','scissors'));
console.log(rockPaperScissor('rock','paper'));

// create a function that removes the first and last characters of a string?
// this can be done in different methods 1.substr method 2. slice method 3. substring method
function removeChar(str) {
    // return str.substr(1, str.length-2) ///this is one way 
    // return str.slice(1, -1); //slice method is the best method to use
    return str.substring(1,str.length-1); // substring is also one of the best methods to use.
}

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('palace'));

// you get an array of numbers(which has both positive and negative numbers) add all the positive numbers?

function sumOfPostive(all) {
    let sum=0;
for(let i=0; i<=all.length; i++){
    if (all[i] > 0) {
      sum +=all[i]
    }
}
return sum;
}

console.log(sumOfPostive([1,-5,40,3,-19,4,-1.5,22.7]))

// To create a function that does all basic operations?
// the function should take 3 arguments 1.operations[string/ char] 2.value1[number],3.value2[number]

function basicOp(operation,value1,value2) {
    let operationString = value1+operation +value2;
    let math = eval(operationString);
    return math;
}

console.log(basicOp('+',15,26));
console.log(basicOp('-',15,18));
console.log(basicOp('*',5,5));
console.log(basicOp('/',49,7));

// write a function called repeat_str which repeats the given string src exactly count times.?
function repeatStr(n,str) {
//     let repeat ='';
//     for(let i =0; i< n; i++){
//         repeat +=str;
//     }
//     return repeat;
return str.repeat(n); //this is the string method  instead of above code.
 }

console.log(repeatStr(5,'hello'));
console.log(repeatStr(3,'#'));

// write a function to split a string and convert it into an array of words.
function stringToArray(string){
    return string.split(" ");
}

console.log(stringToArray("Rani Singh"));
console.log(stringToArray("I love Arrays , they are my favorite"));

// write a function to remove the spaces in a string?
function noSpace(word) {
const word1 = word.split(" ");
let newArray = [];
for (let j= 0; j < word1.length; j++){
    const trimString =word1[j].trim();
    newArray.push(trimString);
}
const finalString = newArray.join("");
return finalString;
}

console.log(noSpace('I Love JavaScript'));
console.log(noSpace('Hello ! How are You? '));
console.log(noSpace('8i bbbas 78383c dddwe93 3kfjcb3 4jk4b4 5wbc'));


// Given an array of integers, return a new array with each value doubled
// use map method
function maps(arr){
 const result = arr.map((arrItem) => {
    return arrItem*2
 })
return result;
}

console.log(maps([1,2,3]));
console.log(maps([4,1,1,1,4]));

// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons!
//  each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, 
// will he survive?

function hero(bullets,dragons) {
 return bullets/ dragons >=2;
}

console.log(hero(10,5));
console.log(hero(7,4));
console.log(hero(4,5));
console.log(hero(10,24));

// I'm new to coding and Now, I want to the get the sum of two arrays..actually the sum of all their elements.
// I'll appreciate for your help.

function sumOfArrays(arr1,arr2){
    let totalValue =0;
for(let i = 0; i < arr1.length; i++) {
    let arr1Val = arr1[i];
    let arr2Val = arr2[i];

    const addedVal = arr1Val + arr2Val;

    totalValue += addedVal;
}

return totalValue;
}

console.log(sumOfArrays([1,2,3],[4,5,6]))
console.log(sumOfArrays([-1,-2,-3],[-4,-5,-6]))

// how to find the century of the year?
function century(year) {
    // if(year < 100) {
    //     return 1;
    // }
    // const firstTwoDigits =year.subStr(0,2);

    // if (year % 100 === 0){
    //     return Number(firstTwoDigits);
    // } else {
    //     return Number(firstTwoDigits) + 1;
    // }
    return Math.ceil(year/100);

}

console.log(`the century of the year `, century(1705));
console.log(`the century of the year `,century(1900));
console.log(`the century of the year `,century(1601));
console.log(`the century of the year `,century(2000));
console.log(`the century of the year `,century(2205));
console.log(`the century of the year `,century(89));

// CAT YEARS ANDDOG YEARS
/*i have a cat and a dog.
i got them at the same time as kitten/puppy. that was human years ago. retrun respective ages no as[humanyears,catyears,dogyears].
NOTE: human Years >=1;  human years should be a whole numbers only.
CAT YEARS:
1. 15 cat years for the first year.
2. +9 cat years for th e second year.
3. +4 cat years for each year after that.

DOG YEARS:
1. 15 dog years for the first year.
2. +9 dog year for second year.
3. +5 dog years for each year after that.*/

var humanYearsCatYearsDogYears = function(humanYears) {
    
    if(humanYears ===1){
        return[humanYears,15,15];
    }
    if(humanYears === 2){
        return[humanYears,24,24];
    }
    
    const excessYears = humanYears - 2;
    const extraDogYears = 24 + (excessYears * 4);
    const extraCatYears = 24 + (excessYears * 5);
    return[humanYears,extraCatYears,extraDogYears];
}
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(10));
