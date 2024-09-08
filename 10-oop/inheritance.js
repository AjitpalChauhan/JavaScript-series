class User {
  constructor(username){
    this.username = this.username
  }

  logMe(){
    console.log(`username is ${this.username}`)
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
  }
  addCourse(){
    console.log(`A new course was added by ${this.username}`)
  }
}

const chai= new Teacher("chai", "chai@sasta0", "3456789")

chai.addCourse()

const masalaChai = new User("Ajit")
masalaChai.addCourse() // does not have access to the function

console.log(chai instanceof Teacher) // true
