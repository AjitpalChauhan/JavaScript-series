// immediately Invoked Function Expressions (IIFE)

(function chai(){ // NAMED IIFE
  console.log(`DB CONNECTED`)
})(); // ()()

( () => {
  console.log(`DB CONNECTED AGAIN`)
} )()


