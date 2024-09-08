const user = {
  username : "Ajit",
  price: 999,
  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`)
  }
}

user.welcomeMessage()
user.username ="Akash"
user.welcomeMessage()

console.log(this) // returns an empty object

function chai(){
  let username = "Ajit"
  console.log(this.username) // returns and undefined "this" accepts values only in object not in function
}

chai()

const addTwo = (num1, num2) => {
  return num1 +num2
}
addTwo(3,4)

// const addtwo2 = (num1, num2) => num1 +num2
// const addtwo2 = (num1, num2) => (num1 +num2)
const addtwo2 = (num1, num2) => ({username: "Ajit"}) // to return an object in arrow function you nead to add paranthesis

addtwo2(3,4)
