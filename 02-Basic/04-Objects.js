const tinderUser = new Object() // this is a singleton object
const tinderUser1 = {} // this is a normal object

tinderUser.id = "1234abc"
tinderUser.name = "Akshat"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
  email: "Akash@gmail",
  fullname: {
    userFullName: {
      firstName: "Akash",
      lastName: "Yadav"
    }
  }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
const course = {
  courseName: "js ij Hindi",
  coursePrice: 999,
  courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)
// console.log(course.courseName)
// console.log(course.coursePrice)

// can be replaced with

const {courseInstructor: instructor} = course
console.log(instructor); // this is destructuring of objects
