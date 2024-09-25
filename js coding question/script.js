// Reverse a String: Write a function to reverse a string

const str = "hellow world"

// method one
function revstr(str){
    const reverseString = str.split("").reverse().join("") 
    console.log(reverseString)
}

revstr(str)

// method two

function reverseString (str){
    let strRev = ""
    for (i=str.length-1;i>=0;i--){
        strRev += str[i]
    }
    console.log(strRev)
}

reverseString(str)

// method three
function revserTheString(str){
    let reverseStr = [...str].reverse().join("")
    console.log(reverseStr)
}

revserTheString(str)

// Factorial: Write a function to compute the factorial of a number.

//method 1
let num = 10;

function factorial(n){
    if(n<=1){
        return 1
    }else{

        return n*factorial(n-1)
    }
}

console.log(factorial(num))

// method 2

function factFunction (n){
let facNum = 1
for (i=2;i<=n;i++){
    facNum*=i
}
return facNum
}

console.log(factFunction(num))

// Check Palindrome: Write a function to check if a string is a palindrome.
function palindrome(str){
   let reverse = ""
   for (let i=str.length-1;i>=0;i--){
    reverse+=str[i]
   }
   if(reverse == str) {return true}
   else {return false}
 
}

console.log(palindrome("coc"))


// Fibonacci Sequence: Generate the first n numbers of the Fibonacci sequence.

let num2 = 10
 function febonacci(num2){
let n1 =0 ,n2=1,nextNum;
for(i=1;i<=num;i++){
    console.log(n1)
    nextNum = n1+n2
    n1=n2
    n2=nextNum
}
 }
febonacci(num2)

//Sum of Array: Write a function to find the sum of all elements in an array.
const array = [1,5,6,8,12,2,45,15,3]

function sumOfarray (array){
    let sum = 0;
    array.forEach((ele)=> sum+=ele)
    console.log(sum)
}

sumOfarray(array);

//Find Largest Number: Write a function to find the largest number in an array.

function largestNumberOfArray(array){
    let largestNum = array[0]
for(let i=0;i<array.length;i++){
    if(largestNum<array[i]){
      largestNum = array[i]
    }
   
}
return largestNum

}

console.log(largestNumberOfArray(array))

//Count Vowels: Write a function to count the number of vowels in a string.

function countVowels(str){
    let count =0;
    let vowels = "aeiou"
    const lowerStr = str.toLowerCase()
    for(let char of lowerStr){
        if(vowels.includes(char)){
            count++
        }
    }
     return count
}

console.log(countVowels("i love my india"))


// Check Prime Number: Write a function to check if a number is prime.

function isPrime(num){
if(num>1&&num%2===1){
    console.log(`The Num ${num} is a prime number`)
} else{
    console.log(`The Num ${num} is  not a prime number`) 
}
}

isPrime(1)

//Merge Arrays: Write a function to merge two arrays.
const array1 = [2,4,1,5,6,12]
const array2 = [5,8,9,15,14,2,6]

function mergeArray(arr1,arr2){
return [...arr1,...arr2]
}

console.log(mergeArray(array1,array2))

// Remove Duplicates: Write a function to remove duplicate values from an array.

const array0 = ["apple",2,5,10,"mango",15,5,"apple",10,2,18,13,"pineppale"]

function removeDuplicate(array){
   // use filter nad we know indexOf return the first occurance index of a value 
    return array.filter((value,index)=>array.indexOf(value)===index)
  
}

console.log(removeDuplicate(array0))

// Find Minimum Number: Write a function to find the minimum number in an array.
function minNum(array){
let minNum = array[0]
for(i=0;i<array.length-1;i++){
    if(array[i]<minNum) {
        minNum = array[i]
    }
}
console.log(minNum)
}

minNum(array2)

//Sum of Digits: Write a function to calculate the sum of digits of a number.
function sumOfDigits(num){
    let array = num.toString().split("")
    
}

sumOfDigits(123456)