for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

for (let i = 0; i < array.length; i++) {
  console.log(`Outer loop value ${i}`)
    for (let j = 0; j < array.length; j++) {
    console.log(`Inner loop value ${ j} an douter loop va;ue ${i}`)  
    }  
}


/////////////////////////////
let myArr = ["flash", "Batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element) 
}

///////////////////////////////
// break and continue

for (let index = 1; index <=20 ; index++) {
  if (index == 5){
    console.log(`5 detected`);
    break
  }
  console.log(`value of the i is ${ index}`)  
}
for (let index = 1; index <=20 ; index++) {
  if (index == 5){
    console.log(`5 detected`);
    continue // this will skip this execution just this one time and let you continue
  }
  console.log(`value of the i is ${ index}`)  
}

