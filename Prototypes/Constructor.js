function Person(name, age) {
this.name = name;
this.age = age;
}

function car(make,model){
    this.make=make;
    this.model=model;
}

let myCar=new car("Tesla","Model S");
// console.log(`myCar`, myCar);

let mynewCar=new car("BMW","X5");
// console.log(`mynewCar`, mynewCar);

function Tea(type){
    this.type=type;
    this.describe=function(){
        return `This is a cup of ${this.type} tea.`;
    }
}
let lemonTea=new Tea("lemon");
// console.log(lemonTea.describe());

function Animal(species){
    this.species=species;
}
Animal.prototype.sound=function(){
    return `The ${this.species} makes a sound.`;
}
let dog=new Animal("dog");
console.log(dog.sound());