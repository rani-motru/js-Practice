const arr= [2,4,6,8,1]
let g = Math.min(...arr);
//NOTE:here in the above code if we give Math.min(arr), the o/p will be NaN.
//so to avoid that we have to use a  spread operator ('...') .this will spread the arr items
console.log(g)


//************************************************************************************************************ */
//ERROR HANDLING IN JAVA SCRIPT
//
//************************************************************************************************************ */
//REFERENCE ERROR : when a non-existent variable is referenced.
//************************************************************************************************************ */
// const title = "Rani";
// console.log(titleNAme);// this will cause a reference error... because titleNAme is not in the code.

//************************************************************************************************************ */
//SYNTAX ERROR :WE KKNOW
//TYPE ERROR
//************************************************************************************************************ */
// below is the example of Type error
// const myNum = 60;
// console.log(myNum.toUpperCase())

// const obj1 ={ prop1: 30};
// const obj2 ={ prop1: 34};

// console.log(obj1+obj2)


//************************************************************************************************** */
// ERROR HANDLING
// ***************************************************************************************************/
// WE USE TRY CATCH METHOD
try{
var num =20;
num.toUpperCase();
} catch (error){
console.log(error instanceof TypeError);
console.log(error.messsage);
// ***********
// Note: here "instanceof" is a operator it checks if the variable on the left (here it is error) is same as the right  
}

// *************************************************************************************************/
// NaN{not a number}, null,undefined
// *************************************************************************************************/
const myString = 'some string';
let myvar;
console.log(Number('30'));
console.log(Number(myString)); //we cannot convert a string to number.so we get NAN as o/p.
console.lofg(myVar);