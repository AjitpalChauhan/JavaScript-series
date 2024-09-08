function user(username, loginCount, isLoggedIn){
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;

  return this
}

const userOne = new User("Ajit", 12, true)
const userTwo = new User("Akash", 11, false)
console.log(userOne); // this "new" keyword is the constructor function thatr create a new copy of the object and does not let the other varaible create overwrite it

//new Keyword//
// 1. Create an empty Object: the new keyword initiates the craete of a new JavaScript Object
// 2. A prototype is linked: the newly created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constuctor's prototype.
// 2. calls a constructor function because of the keyword "new": the constructor function is called with the specified agruments and this si bound to newly created object. If no explicit return value is specified from the construtor, javascript assumes this, the newly created object, to be the intended return value.
// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly craeted object is returned.
// 3. "this" keyword injects the properties in the object
// 4. gives the output


