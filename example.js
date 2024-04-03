//how to make a RANDOM COLOR on the screen WHEN CLICKED
// this is how we make colors appear
// work this on  google console 

// const htmlBody = document.querySelector('body');
// const randomClickFunction = function(){
//     const colors =["red","yellow", "orange","green","blue","indigo","purple","pink"];
    
//     const randomIndex = Math.floor(Math.random()*colors.length);

//     const randomColor = colors[randomIndex];
//     htmlBody.style.backgroundColor = randomColor;
//     console.log('The User clicked and set the color to  ',randomColor)
// }

// htmlBody.onClick = randomClickFunction();

// to  know the type of variable
// const variable ="good";

// const variable1 =  50;

// const variable2 = true

// console.log(typeof(variable),typeof(variable1),typeof(variable2));

// // to convert a string  into  number

// const  number = "10";
// const  number1 =  30;

// console.log(number+number1);
// console.log(Number(number) +number1);

// // test  
// const objectVariable ={
//     property1:'i  am  property1',
//     property2:'i am property2',
//     property3:[20,30,40]
// };
// console.log(objectVariable.property3[2]);

// challenge1
// const numberVariable = 0 ---this won't woork 
let numberVariable = 0;
numberVariable++; 
numberVariable++;
 numberVariable++;
console. log (numberVariable);


const expression1 = 100 % 50; //zero
const expression2 = 100 / 50; ///2
const expression3 = expression1 < expression2;  //true
const expression4 = expression3 &&  300+5 ===305;  //  true
const expression5= !expression4; //false
console.log (expression5);

// ARROW FUNCTIONS:
const myNumber=50;
let myfunction = () => {
    if(myNumber < 15){
        return "retrun early";
    } 
    let a = 20;
    return a;
    // console.log('something');
}

const result = myfunction();
console.log(result);
// console.log(a);

// OBJECTS
// how to call a function in object
const myObj ={
    prop1: 50,
    prop2: myfunction()
};
console.log(myObj.prop2);

// BUILT-IN METHODS:
const myName = 'rani';

console.log(myName.replace('n','v'));//replace method can be used to replace the specific letter here.
console.log(myName.toUpperCase());//toUpperCase method can be used to change lowercase to uppercase.
console.log(myName.indexOf("n"));// displays the index of letter "n", which is 2.
