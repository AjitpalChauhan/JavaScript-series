
function setUsername(username){
  this.username = username
}

function createUser(username, email, password){
  setUsername.call(this, username) // call give it the reference that this has to be called here otherwise the function will be executed but wont be called and removed from the global execution context
  this.email = email
  this.password = password
}

const chai = new createUser("Ajit", "ajit@google", "123456")
console.log(chai);