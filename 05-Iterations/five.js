const coding = ["js", "C++", "Ruby", "python"]

//1
coding.forEach( function(item){
  console.log(item)
})

//2
coding.forEach( (item) => {
  console.log(item)
} )

//3
function printme(item){
  console.log(item)
}
coding.forEach(printme)

coding.forEach( (items, index, arr) => { // this function can receive not only the values in the array but also the index number and the array itself
  console.log(items, index, arr)
})

///////////////////////////////////////////////////////////////

const myCoding = [
  {
    languageName: "JavaScript",
    shortform: "js"
  },
  {
    languageName: "Java",
    shortform: "Java"
  },
  {
    languageName: "Python",
    shortform: "Py"
  }
]

myCoding.forEach( (item) => {
  console.log(item.languageName)
} )
