// call backs are need because of reusability and asynchronous prograaming:

// Reusability:
const myArr =[2,4,6,8];

function myCustomMapOperationCallback(itemFromArray) {
    return itemFromArray*2;
}

const newArray = console.log(myArr.map(myCustomMapOperationCallback));

// second example of reusability:
const strArr =['Hello','My','Name','Is','Rani'];

console.log(strArr.map(x =>x[0]));


// JavaScript Regular Expressions:"RegExp " is a object used for matching text with pattern.

// how to valid certain text email validator?
const emailValidatorRegex = new RegExp('^.+@.+\..+$'); 
/* ('^.+@.+\..+$')
'^' means start at the begining and 
'.' means all characters 
'+' means i want match one or more caharcters
 '@'means look for the @ symbol
 '\.' means escape and look for '.' (.com)
 \= escape and .= look for '.' 
 '\..' means escape and look for dot and second '.' represents all characters
 '$' means end of the line.
 */
const userInput = 'invalidemail@g'; // here is a invalid email id which should be rejected.

const isValid = emailValidatorRegex.test(userInput); //read MDN docs for methods for RegExp

console.log(isValid); // answer will be false.
// we have identifiers(characters,special charaters, phrases) and quantifiers
// example:
const regex = new RegExp('g');

const string1 = ' my favorite is chicken'
const string2 = ' my Favorite thing to do  is code'

console.log(regex.test(string1)); //answer is false.
console.log(regex.test(string2));  //answer is true.

// example to check  an entire word..
const regex2 = new RegExp('favorite');

console.log(regex2.test(string1));  //answer is true
console.log(regex2.test(string2));  // answer is false.
// instead of writing the const regex2 = new RegExp('favorite'); we can simply write like the below.

console.log(/is/.test(string1));  //answer is true .(here we are checking for the word "is" in string1 & 2);
console.log(/is/.test(string2));  //answer is true
console.log(/[a-z]/.test(string2));  
//answer is true(here we are checking for lowercase letters. similarly we can check for uppercase , numbers and spaces)
console.log(/[a-zA-z0-9 ]/.test(string2)); 
 //answer is true(here we are checking for lowercase letters,uppercase, numbers and spaces(there is a space after 9)).

 console.log(/(code|steak)/.test(string2)); 
 console.log(/[a-z]/.exec(string2)); // ans is 'm'
// exec will check if the condition satisfies or not and returns the first character here in this case.
//if we want to get more than one we have to use "QUANTIFIERS"(LIKE *,+,{})
console.log(/[a-z]{2,8}/.exec(string2));

// FLAG EXAMPLE:
const str = 'hello world, 2021   @  more of a a  string';
const fl = (/^[a-z]+,[0-9]+@[a-z  ]+$/);
console.log(fl.exec(str)) ;


/// STRINGS 
// replaceAll ,toUpperCase,Substring, trim AND match methods:
const myString = 'My Dog Jumped on the bed.my dog is a bad Dog.';

// const newString =myString.replaceAll("Dog","Cat");
// replaceAll is a case sensitive method.
// console.log(newString);// o/p is same.
const correctStr =myString.replaceAll(/[Dd]{1}og/g,'cat');
console.log(correctStr); // o/p: My cat jumped on the bed.my cat is a bad cat.
console.log(correctStr.toUpperCase());
console.log(correctStr.substring(3,7)); //o/p : cat
//lets concatenate:
console.log(correctStr[0].toUpperCase() + correctStr.substring(1,correctStr.length) );
//trim
const extData = [ 
    {
        title: "how to Code?     ",
        author:'   Rani'
    },
    {
        title: "    How to be creative?",
        author:'Rani      '
    },
    {
        title: "    how to CodeinJavaScript?     ",
        author:'   Rani    '
    },
];
 
for(let i =0;i< extData.length;i++) {
    const currentTitle = extData[i].title;
    const  currentAuthor = extData[i].author;
  extData[i].title = currentTitle.trim();
  extData[i].author = currentAuthor.trim();

}
console.log(extData);// this removes all theextra spaces in the begining and at the end of the string.

//match method:

const regex3 = /[a-z]+/;
const regex4 = /[a-z]+/g; // g is globalflag;

const str22 = 'alshyufwuyfudghcsce95678oiuhbnqdsuij';

console.log(regex3.exec(str22));// removes all numbers
console.log(str22.match(regex3)); // gives the same o/p as above.

console.log(regex4.exec(str22));

console.log("the o/p is:",str22.match(regex4)); //o/p is not the same as regex4.exec(str22).

//***************************************************************************************** */
//ARRAY METHODS:  
//
//PUSH() ,POP() , SHIFT(), UNSHIFT(), SLICE(), SPLICE(), FINDINDEX(),  INDEXOF() ,MAP(), FOREACH(),
//INCLUDES() , FILTER() ,REDUCE()

//***************************************************************************************** */
//PUSH(),POP(),SHIFT() AND UNSHIFT():
const arr = [1,2,3,5,6];
console.log(arr.pop()); // 6 is removed.
console.log(arr.pop()); // 5 is removed.
console.log(arr.push(4,5,6));
console.log(arr); // o/p: [1,2,3,4,5,6];
console.log(arr.shift()); // 1 is removed. pop() removes tha lastone and shift removes the firstone
console.log(arr);
console.log(arr.unshift(0,1));  // push()and Unshift methods are same. PUSH() adds at the end and unshift adds at the begining,
console.log(arr);

//***************************************************************************************** */
// SLICE():

const arr1 = [ 0,1,2,3,4,5,6];

const copyArr =arr1.slice();
console.log(copyArr);
if(copyArr === arr1){
    console.log("true");
} else{
    console.log("false");
}

console.log( arr1.slice(3)); //o/p: [3,4,5,6]

//***************************************************************************************** */
// SPLICE():
//it helps in removing and adding  of items.

const arr2 = [0,1,2,3,'ohh',5,6];
//we want to remove 'ohh' which is at index 4.and we want remove 1 item('ohh') now we want to replace it with number 4.
console.log(arr2.splice(4,1,4)); // o/p: 'ohh'
console.log(arr2); //o/p: [0,1,2,3,4,5,6]

//***************************************************************************************** */
//  FINDINDEX(),  INDEXOF()
const arr3 = [1,2,3,3.5,4,4.5,5,6]
console.log(arr3.indexOf(3)); // o/p: 2 [because the index of 3 is 2]
console.log(arr3[arr3.indexOf(3)]) //o/p: 3

const complexArr = [
 {
    firstName: 'Bob',
    lastName: 'Smith'
 },
 {
    firstName: 'Alice',
    lastName: 'Smith'
 },
 {
    firstName: 'Jon',
    lastName: 'Smith'
 },
 {
    firstName: 'Bob',
    lastName: 'Doe'
 }
];

console.log(complexArr.findIndex((arrItem)=> {
    return arrItem.lastName !== 'Smith'
}))
// the above give 3 as o/p because  // bob doesn't have smith as last name and it's index is 3.
// to get o/p as Bob try this
console.log(complexArr[complexArr.findIndex((arrItem)=> {
    return arrItem.lastName !== 'Smith'
})])

//***************************************************************************************** */
//MAP:
const blogPost = [
    {
        title: 'How to use the map() function',
        category:'uncategorized'
    },
    {
        title: 'What is JavaScript?',
        category:'uncategorized'
    },
    {
        title: 'why you should learn coding?',
        category:'uncategorized'
    }
];
console.log(blogPost.map(x =>{
return (x.category ='Web development');
}))
console.log(blogPost);

//******************************************************************************************/
//  FOREACH(),
//*****************************************************************************************5*/
const arr4 =[1,2,3,4]
// below is the normal method we use
// for(let i =0;i<arr4.length;i++){
//     console.log(arr4[i]);
// }
// the above code can also be wriiten using foreach() method as
arr4.forEach(item =>{
    console.log(item)
})
// we can also add index to it
arr4.forEach((item,index) =>{
    console.log(`the position of ${item} is ${index}`)
})

//******************************************************************************************/
// INCLUDE() METHOD - HELP YOU FIND THE SINGLE ELEMENT EXSISTS IN THE ARRAY
//******************************************************************************************/
// find if 'red'is available or not
const myColors =['blue','red','green','yellow','red','orange']

//method1
let redExists =false;
for(let i = 0; i< myColors.length; i++){
    if(myColors[i] === 'red'){
        redExists = true;
        console.log(redExists);
    }
}

// // method2
// myColors.forEach((item) => {
//     if(item === 'red'){
//         console.log('red exists is true');
//     }
// })

// method3 
console.log(myColors.includes('red'));

// method4
console.log(myColors.indexOf('red'));

// or we can alsoe write as follows
console.log(`${myColors.indexOf('red') !== -1}`);
// console.log(`The position of 'red' is ${myColors.indexOf('red') !== -1}`);

//******************************************************************************************/
//filter() method:
//******************************************************************************************/ 

const allOrders = [
    {
        productName: 'Tea Pot',
        isDigital: false,
        isCancelled: false,
        isOpen: false
    },
    {
        productName: 'Blue Gildan Mens Hoodie',
        isDigital: false,
        isCancelled: true,
        isOpen: false
    },
    {
        productName: 'code complete kindle book',
        isDigital: true,
        isCancelled: true,
        isOpen: false
    },
    {
        productName: 'Atomic habits kindle book',
        isDigital: true,
        isCancelled: false,
        isOpen: false
    },
];

const digitalOrders = allOrders.filter(arrItem =>{
   console.log(`the order items are ${arrItem.isDigital}`);
})

const digitalCancelledOrders = allOrders.filter(arrItem =>{
    return arrItem.isDigital&& arrItem.isCancelled;
 })
 console.log(digitalCancelledOrders);

//******************************************************************************************/
// REDUCE()
//******************************************************************************************/

const arr5  =[10,20,33,90,66];
let sum  = 0;
// for(let i=0;i<arr5.length;i++){
//     sum +=arr5[i]
// }
// console.log(sum);
//rewriting  the  above method  using reducce callback methodd
function reducerCallback(sum,arrItem){

    return sum +=arrItem;
}

const result = arr5.reduce(reducerCallback, 0);

console.log(result);
arr5.reduce((sum,arrItem) => sum+=arrItem, 0)/arr5.length

//******************************************************************************************/
//NOOTE::: CHECK LODASH  SITE FOR MODERN  JAVASCRIPPT
//******************************************************************************************/
//******************************************************************************************/