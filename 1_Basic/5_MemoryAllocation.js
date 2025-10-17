// Stack (Primitive)   , Heap(Non-Primitive)

let myName = "Sudip" // Primitive : Stack
let surName = myName
surName="Patra"
console.log(myName);
console.log(surName);



let user1 = {             // Non-Primitive : Heap
name : "Zara",
email : "zara@email.com"
}
let user2= user1
console.log(user1);
user2.email = "newzara@gmail.com"
console.log(user1);
console.log(user2);

// Notes : 
// https://excalidraw.com/#json=go5caW_sdONgnTaL-FmhO,FANcD02n7rJk-sztN-DR5g