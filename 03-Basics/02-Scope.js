// let a= 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);
if (true){
  let a= 10
  const b = 20
  var c = 30
}


console.log(a);
console.log(b);
console.log(c);

function one(){
  const username = "Ajit"

  function two(){
    const website = "youtube"
    console.log(username)
  }
  console.log(website)
  two()
}
one()

if(true){
  const username = "Ajit"
  if(true){
    const website = "youtube"
    console.log(username + website)
  }
  console.log(website) //out of scope
}
console.log(username) //out of scope

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addOne(5) // this is okay
function addOne(num){
  return num + 1
}

addTwo(5) // this will show an error
const addTwo = function (num){
  return num + 2
}

