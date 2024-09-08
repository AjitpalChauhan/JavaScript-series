const myObj = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby"
}

for (const key in object) {
  console.log(`${key} shortcut for ${myObj[key]}`) //"key" is for the the key and "myObj[key]" this is for values 
}

const programming = ["js", "C++", "Ruby"]

for (const key in object) {
  console.log(programming[key])
}

