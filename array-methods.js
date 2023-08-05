let fruits = ['Apple','Orange','Banana']

fruits.pop();
console.log(fruits);

fruits.push('Cherry')
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('Lemon')
console.log(fruits)

// fruits.splice(1,2)
// console.log(fruits)

fruits.splice(2,0,'Banana','Grape')
console.log(fruits)

let new_fruits = fruits.slice(1,3)
console.log(new_fruits)

let even = [0,2,4,6]
let odd = [1,3,5,7]
let prime = [2,3,5,7]
let numbers = even.concat(odd,prime)
console.log('Numbers : ', numbers)