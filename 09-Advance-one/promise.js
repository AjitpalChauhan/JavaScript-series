const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function (){
    console.log("Async task is copleted")
    resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log('promise is consumed');
})


new Promise(function(resolve , reject){
setTimeout(function(){
  console.log('Async task 2')
  resolve()
},1000)
}).then(function(){
  console.log('resolved')
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Ajit", email: "example@example.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error =true
    if(!error){
      resolve({username: "Ajit", email: "example@example.com"})
    }else {
      reject("ERROR: something went wrong")
    }
  }, 1000)
})

promiseFour
.then((user) => {
  console.log(user)
  return user.username})
.then((username) => console.log(username))
.catch((error) => console.log(error))
.finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: "Ajit", email:'ertyuiop@dfghjk.com'})
    }else{
      reject("ERROR: js went wrong")
    }
  }, 1000)
})

async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive()


/////////////////////////////////////////////////

async function getAllUSers(){
  try {
    const response = await fetch('url')
  const data = await response.json()
  console.log(data);
  } catch (error) {
    console.log(error)
  }
}

getAllUSers();

fetch('url').then((response) => {
  return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
