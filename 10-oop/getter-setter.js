class User{
  constructor(email, password){
    this.email = email
    this.password = password
  }

  get password(){
    return this._password 
  }

  set password(value){
    this._password = value
  }
}

const hitesh = new User("hitesh@email", "1234")
console.log(hitesh.password)
