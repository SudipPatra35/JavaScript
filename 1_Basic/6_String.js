const name = "Sudip"
const age = 23
// console.log(name +" age is "+ age); 

// console.log(`Hello my name is ${name} and my age is ${age}`); // Best Way


const myName = new String('Sudip Patra')
// console.log(myName.toString());
// console.log(myName[0]);
// console.log(myName.toUpperCase());
// console.log(myName.charAt(1));
// console.log(myName.length);
// console.log(myName.indexOf('P'));
// console.log(myName.substring(0,4));
// console.log(myName.slice(-1,4)); 
// slice(-1, 5) becomes:slice(11, 5)  [(since -1 = 12 - 1 = 11)], So start<=end, otherwise it will give a empty string
// console.log(myName.slice(-11,4)); // Write one 
console.log(myName.split(" ")[1]);


const newName = "       SpaceWalaName      "
// console.log(newName);
// console.log(newName.trim());
// console.log(newName.trimStart());
// console.log(newName.trimEnd());

                
const url= "https://sudip.com/sudip%20patra"
// console.log(url.replace('%20','-'));
// console.log(url.includes('sudip'));

