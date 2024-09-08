class User{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`username: ${this.username}`)
  }

  static createId(){
    return `213`
  }
}

const hitesh = new User("Ajit")
console.log(hitesh.createId()) // wont give access

class Teacher extends User{
  constructor(username, email){
    this.email =email
    super(username)
  }
}

