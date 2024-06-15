const fruits=['mango','orange','apple','pineaple','banana']
//length of an array
const arrayLength=fruits.length;
console.log(arrayLength)

//looping through arrays

fruits.forEach((element,index)=>{
    console.log(index,element)
})

//getting a member of an array based on index

console.log(fruits[0])

//slicing an array (getting a portion of an array)
console.log(fruits.slice(1,4))

//adding a member to an existing array
fruits.push('tomato')
console.log(fruits)

//adding a member of an array at a definite position

fruits.splice(1,0, "Coconut");
console.log(fruits)