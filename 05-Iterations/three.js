//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
  console.log(num);
} // loop throught every number or letter

const greeting = "Hello world!"
for (const greet of greeting) {
  console.log(`each char is ${greet}`)
}// lop throught every letter and spaces in the string

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America") 
map.set('FR', "France")
map.set('IN', "India") // map does not repeat its values and gives an output as an object in Key value pairs


for (const [key, value] of map) {
  console.log(key, ':-', value)
}
// Objects are not iterable



