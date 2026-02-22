let car={
    make:"Tesla",
    model:"Model S",
    year:2020,
    start:function(){
        return `Starting the ${this.make} ${this.year}.`;
    },
};
// console.log(car.start());

function Person(name,age){
    this.name=name;
    this.age=age;
}
let ram=new Person("Ram",30);
//  console.log(ram.name);
//   console.log(ram.age);

function Animal(type){
    this.type=type;
}
Animal.prototype.sound=function(){
    return `The ${this.type} makes a sound.`;
}
Array.prototype.shri=function(){
    return `This is a custom method added to all arrays:${this}`;
}
    let myArray=[1,2,3];
    // console.log(myArray.shri());

    class Vehicle{
        constructor(make,model){
            this.make=make;
            this.model=model;
        }
        start(){
            return `Starting the ${this.make} ${this.model}.`;
        }
    }
    class Car extends Vehicle{
        drive(){
            return `Driving the ${this.make} ${this.model}.`;   

        }
    }let myCar=new Car("Tesla","Model S");
    // console.log(myCar.start());
    // console.log(myCar.drive());

    
