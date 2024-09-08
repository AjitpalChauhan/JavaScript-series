// //if else
// //nested if else

// //switch case
// // switch (key){
// //   case value:
// //     break;
// //     default:
// //       break;
// // }

// const month = 3

// switch (month) {
//   case 1:
//     console.log("January")
//     break;
//   case 2:
//     console.log("Feb")
//     break;
//   case 3:
//     console.log("March")
//     break;
//   case 4:
//     console.log("April")
//     break;
//   case 5:
//     console.log("May")
//     break;
//   case 6:
//     console.log("June")
//     break;
//   case 7:
//     console.log("July")
//     break;

//   default:
//     console.log("next time may be")
//     break;
// }

// falsy value = false, 0, undefined, null, -0, BigInt 0n, "", NaN

// truthy values = "0", "false", " ", [],{}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 20 //10 


//Terniary Operator
// condition ? true : false

const ice = 10
ice <=20 ? console.log("less than 20") : console.log("Greater than 20")
