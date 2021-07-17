







function sum(num1, num2){
    return num1+num2;
}


function sayHello(name, lastName){
    console.log(`Hi there, ${name} ${lastName}!`);
}




function runTest1() {
    console.log("Starting test 1 - functions");

    sayHello("Nathan","Vik");

    let a = 21;
    let b=42;
    let result = sum(a,b);
    console.log(result);
}

function Dog(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
}

function runTest2(){
    console.log("running test 2");

    // object literal
    // used for configuration, or a 1 time structure
    let dog={
        name:"Fido",
        age:2,
        color:"red"
    };
console.log(dog);
console.log(dog.name);


    //object constructor
    //used for multiple objects of same structure
    let pepper = new Dog("Pepper",6,"Black");
    console.log(pepper);
    let sam=new Dog("Sam",8,"Yellow");
    console.log(sam);
    
}