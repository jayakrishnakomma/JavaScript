let numbers = [1,2,3,4,5]

console.log(numbers)

let fruits = ['A','B','C']

console.log(fruits)

let ar = new Array('1','2','3')
console.log(ar)

fruits.push('XYZ')
console.log(fruits)
ar[0] = 'Cars'
console.log(ar[0])

console.log(ar)

for (i in fruits)
    console.log(fruits[i])

for (i of fruits)
    console.log(i)

for (i of ar)
    console.log(i)