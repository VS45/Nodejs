const myName='Tsenongo Jacob'
const myAddress='Behing St. Thomas Parish'

//length of String
console.log(myName.length)
//convert to UPPerCase
console.log(myName.toLocaleUpperCase())
console.log(myName.toLocaleLowerCase())
// removing empty spaces at the end of the value
console.log(myName.trim().length)
//getting the  character at a given position of a string
console.log(myName.charAt(4))
// getting the code Value of Char
console.log(myName.charCodeAt(0))
//moderm way of getting characters at given value
console.log(myName[4])

// concatination
const nameAndAddress=myName+", "+myAddress
console.log(nameAndAddress)
console.log(myName.concat(', '+myAddress))
