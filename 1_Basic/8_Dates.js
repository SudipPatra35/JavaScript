let myDate=new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)  // Date is an object

let myCratedDate=new Date(2025,0,16)  // year, month(0-11), date
console.log(myCratedDate.toLocaleString())

let myTimeStamp= Date.now()
// console.log(myTimeStamp)  // milliseconds since 1 Jan 1970
// console.log(myCratedDate.getTime())  // milliseconds since 1 Jan 1970
console.log(Math.floor(Date.now()/1000))  // seconds since 1 Jan 1970
