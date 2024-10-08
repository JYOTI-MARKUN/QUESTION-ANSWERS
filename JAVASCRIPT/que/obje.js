const obj1 = new Object()
obj1.name = "jyoti";
console.log(obj1)
console.log(obj1.name)


const personPrototype = {
    greet(){
        console.log(`Hii, My name is ${this.name}`);
    }
};

const childObj = Object.create(personPrototype)
childObj.name = "jyoti"
console.log(childObj)
childObj.greet();

const childObj2 = Object.create(personPrototype,{
name:{value:"jyoti",writable:true},
age:{value:25,writable:true}
})
console.log(childObj2)
childObj2.name="Markun"
console.log(childObj2)

const obj = {}
obj.name = "jyoti"
obj["last-name"] = "markun"

const obj3 = {
    name:"jyoti",
    age:26,
    lastName: "Markun",
   "profession@":"developer"
}

console.log(obj3);
console.log("lastName" in obj3);

delete obj3.lastName;
console.log(obj3);
console.log("lastName" in obj3);

delete obj3["profession@"]
console.log(obj3);
console.log("lastName" in obj3);



let count = 0;
(function immediate(){
    if(count===0){
     count+=1;
     immediate()
    }
    console.log(count);
})();

