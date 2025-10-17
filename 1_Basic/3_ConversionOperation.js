let num = "22bc"
// console.log(typeof num);
let newNum = Number(num)
// console.log(typeof newNum);
console.log(newNum);
/* 
"22" => 22
"22bc" => NaN
true => 1
null => 0
undefined => NaN
*/


// *********************** Operations ******************************


let value =3 
let negValue = -value
// console.log(negValue);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
// Jeta age thakbe seta te convert hoye jabe



// *********** Comparison and Equality Check ***************

// console.log("2" > 2);
// console.log("2" == 2); // Only check the value and convert, should be avoid
// console.log("2a" == 2); // Only check the value, cann't convert "2a" to number
// console.log("2a" == "2a"); // ture


// console.log(null>0);
// console.log(null==0); // ** conversion for null in equality check is NaN, should be avoid
// console.log(null<=0); // automatically converted to number (null=>0) when comparison is done


// console.log(undefined>0);
// console.log(undefined<0); 
// console.log(undefined==0); // ** conversion for undefined is NaN in equality check or comparison, should be avoid


// Strict Check ===

console.log("2" === 2); // Not only check value also check the datatype and do not convert 

