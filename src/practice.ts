/*let perros:string[]=[
    "perro",
    "perraso",
    "perroro",
    "perroperro",
    "perrooooo",
]
console.log(perros);*/
function suma(a: number, b: number): number {
  return a + b;
}
let result : number = suma(5,3);//using a variable
console.log(result);
console.log(`Tu resultado es: ${suma(5,3)}`); // this another option 
// Interface: only defines structure
interface Animal {
  name: string;
  makeSound(): void;
}

// Class: defines structure and logic
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Woof!");
  }
  makedoblesound(): void{
    console.log("Woof!");console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output:
myDog.makedoblesound(); // Output: