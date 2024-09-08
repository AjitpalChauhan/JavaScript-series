console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

function sayMyName() {
  console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
// sayMyName()

function addTwoNumbers( num1, num2) {
  console.log(num1+num2);
}

addTwoNumbers(3,4)

function calculateCartPrice(...num1){ // here ... is rest operator
 return num1
}

console.log(calculateCartPrice(200,300,400)) // will return an Array 

// const user ={
//   username: "Ajit",
//   price: 199
// }

function handleObj (anyObj){
  console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObj(user)
handleObj({
  username: "Ajit",
  price: 199
})

const myArr = [200,300,400,500]

function returnSecondValue(getArr){
  return getArr[1]
}

console.log(returnSecondValue(myArr));