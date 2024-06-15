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
let index = 2;
let newElements = ['Cashew', 'plantain'];

fruits.splice(index, 0, ...newElements);
console.log(fruits)

// array of Objects

const persons=[{name:'Steve',age:14},{name:'John', age:20},{name:'Naomi',age:22},{name:'Franca',age:12}]
console.log(persons.length)

const newPersons=persons.map((person,index)=>{
    let newPerson;
    if(person.age<=14){
        newPerson={...person,status:'not qualified'}
    }else{
        newPerson={...person,status:'qualified'}
    }
  
    return newPerson;
})
console.log(newPersons)

