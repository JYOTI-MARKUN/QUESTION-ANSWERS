str = "Hello World the Welcome in the journey to learn the Javascript"
// length
console.log(str.length)

// str.toLowerCase
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.includes("Hello"))
console.log(str.charAt(2))
console.log(str.charCodeAt(2))
console.log(str.replace("the","is"))
console.log(str.replaceAll("the","is"))
console.log(str.trim())
console.log(str.indexOf("l"))
console.log(str.split(","))
console.log(str.repeat(2))
console.log(("love").padEnd(5,"l"))
console.log(("love").padStart(5,"l"))

//HOI example
const radius = [2,5,6,1,3]
function area(radius){
    return Math.PI * radius * radius
}

function perimeter (radius){
    return 2 * Math.PI * radius
}

function calculate(radius,logic){
    const output = []
    for (let i =0 ;i<radius.length-1;i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius,perimeter))

// hoi examples
// Write a function called multiplyBy that takes a number as an argument and returns a function that multiplies its input by that number.
function multiplyBy(num){
   return function multiply(num2){
    return num * num2
   }

}

const multipleByANumber = multiplyBy(3)

console.log(multipleByANumber(5))


// Create a higher-order function add that takes two numbers and returns a function that adds them together.

function addTwoNumber(num1, num2){
    return function addResult(){
      return  num1+num2
    }
}

const result = addTwoNumber(2,30)

console.log(result())


// Write a function makeCounter that returns a function that increments a counter each time it is called.

function makeCounter(){
  let counter = 0;
    return function increaseCounter(){
       return counter++
    }
}

const currentCounterValue = makeCounter()

console.log(currentCounterValue())
console.log(currentCounterValue())
console.log(currentCounterValue())
console.log(currentCounterValue())
console.log(currentCounterValue())

//Use the map method to create a new array that contains the squares of an array of numbers.
let array = [5,10,2,3,15,12,8]

const newArray = array.map((num)=>num*num)

console.log(newArray)

//Use the filter method to return an array containing only the even numbers from an array
const filteredArray = array.filter((num)=>num%2===0)

console.log(filteredArray)

