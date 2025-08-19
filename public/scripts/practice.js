"use strict";
/*let perros:string[]=[
    "perro",
    "perraso",
    "perroro",
    "perroperro",
    "perrooooo",
]
console.log(perros);*/
function suma(a, b) {
    return a + b;
}
let result = suma(5, 3); //using a variable
console.log(result);
console.log(`Tu resultado es: ${suma(5, 3)}`); // this another option 
// Class: defines structure and logic
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Woof!");
    }
    makedoblesound() {
        console.log("Woof!");
        console.log("Woof!");
    }
}
const myDog = new Dog("Buddy");
myDog.makeSound(); // Output:
myDog.makedoblesound(); // Output:
