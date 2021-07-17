//global variable - var and let are same
//try to keep the global variables are a minimum; most of the time you can set it as a parameter
//variables are tied to RAM - you can put millions of variables in 1GB
//but for the human, the developer, it's a nightmare







function sum(num1, num2) {
    return num1 + num2;
}




function sayHello(name, lastName) {
    console.log("Hi there!" + name + lastName)
}



function runTest1() {
    console.log("Starting test 1");
}

sayHello(" Chris"," Daming");
sayHello("person");

let result = sum(21,52);
console.log(result);

    let a = 21;
    let b = 42;
    let result1 = sum(a,b);
    console.log(result1);



//people like to type object constructors with capital letter at beginning
//left part of the equal is the property inside the variable;  the right side only matters for the object itself







function runTest2() {
    console.log("Test for Objects");

    //2 ways to create objects
    //object literal
    //used: for configuration, 1 time structure - object is a structure of variables
   //if you need multiple objects with same structure, you have to do everything all over again

    let dog = {
        name:"Templeton",
        age: 2,
        color: "White and Black"
    };
    console.log(dog);

    function Dog(name,age,color) {
        this.name = name;
        this.age = age;
        this.color = color;
    
    
    }


    // sendToServer(dog);

    //object constructor
    //used: multiple objects but same structure

    
let solo = new Dog("Solo",2,"Blue");
console.log(solo);

let another = new Dog("Loco",5,"Red");
console.log(another)
}



