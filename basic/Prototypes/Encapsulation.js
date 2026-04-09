// class BankAccount {
//     #balance = 0;

//     deposit(amount){
//         this.#balance += amount;
//         return this.#balance;
//     }

//     getBalance(){
//         return this.#balance;
//     }
// }

// let account = new BankAccount();

// console.log(account.getBalance());


// *** ABSTRACTION ***
// class coffeeMachine {
//     start(){
//         return "Starting the coffee machine.";
//     }
//     brew(){
//         return "Brewing the coffee.";
//     }
//     pressButton(){
//      let msg1=   this.start();
//       let msg2=  this.brew();
//         return `${msg1}+ ${msg2}`;
// }
// }
// let myCoffeeMachine = new coffeeMachine();
// // console.log(myCoffeeMachine.start());
// // console.log(myCoffeeMachine.brew());
// console.log(myCoffeeMachine.pressButton()); 

// **POLYMORPHISM***

// class Bird{
//     fly(){
//         return "The bird is flying.";
//     }
// }
// class Sparrow extends Bird{
//     fly(){
//         return "The sparrow is flying.";
//     }
// }
// class Penuin extends Bird{
//     fly(){
//         return "The penguin cannot fly.";
//     }
// }
// let bird=new Bird();
// let sparrow=new Sparrow();
// let penguin=new Penuin();
// console.log(bird.fly());
// console.log(sparrow.fly());
// console.log(penguin.fly());


// ***Static Methods***

// class Calculator{
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(Calculator.add(5,3));

// **Getters and Setters***

class Employee{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get age(){
        return this._age;
    }

    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        } else {
            console.log("Age must be positive.");
        }
    }
}
let emp = new Employee("Alice", 30);

console.log(emp.name);
console.log(emp.age);