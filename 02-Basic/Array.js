// array

const myArr = [0,1,2,3,4,5]
const myHeros =["Shaktiman", "nagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(6)
// myArr.pop()


// myArr.unshift(9) // add the value at the start
// myArr.shift()  //remove the first value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() // converts the array into string and stores it into the variable

// console.log(myArr);

console.log("a", myArr);

const myn1 = myArr.slice(1,3) // start from 1 and do not include the 3rd index

console.log(myn1);
console.log("b", myArr); // myArr remains the same

const myn2 = myArr.splice(1,3) // start from 1 and include the 3rd index
console.log("c", myArr);// myArr is shorter now splice removed the 1,2and3rd index and created a seperate array and myArr is cut and created a new array

