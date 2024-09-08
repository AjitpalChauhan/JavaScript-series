const marvel =  ["Thor", "IronMan", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

marvel.push(dc) // this will create an array inside an array


const allHeros =  marvel.concat(dc) // create a new Array
console.log(allHeros);

const all_new_heros = [...marvel, ...dc] // spread all the properties in the array
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_Array = another_array.flat(Infinity) // this will bring out all the arrays inside the array no matter the depth(which can be specified) just flaten it
console.log(real_Array)

console.log(Array.isArray("Ajitpal")) // check if this is an array or not
console.log(Array.from("Ajitpal")) // convert this into an array with each letter into a value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

