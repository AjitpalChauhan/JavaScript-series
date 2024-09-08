// singleton
//object literals

const mySym = Symbol("key1")

const jsUser ={
  name: "Ajitpal",
  [mySym]: "mykey1",
  age: 23,
  location: "Delhi",
  email: "ajitpal@google.com",
  isLoggedIn: false,
  latLoginDays: ["monday", "Saturday"]
}

console.log(jsUser.name)
console.log(jsUser["name"]);
console.log(jsUser[mySym]);

jsUser.email = "Ajitpal@microsoft.com"
// Object.freeze(jsUser) // stops the object from accepting any changes
jsUser.email = "Ajitpal@chatgpt.com"

jsUser.greeting = function(){
  console.log("hello js users")
}

jsUser.greetingTwo = function(){
  console.log(`hello js users ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo());