// Primitive :  Call by Value

/* 
     7 Types : String , Number , Boolean , Null , Undefined , Symbol, BigInt 
*/ 

//Symbol : Returns a new unique Symbol value.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

const bigNum = 12146466216464664641144n  //BigInt


// Non Primitive : Call by Reference 
 /* Array , Objects, Functions
 */

arr = ['Sudip', 124, 'Ram']

let myObj = {
     name :  "Sudip",
     age : 23
}

const myFunc= function(){
     console.log("Hello World");
     
}

