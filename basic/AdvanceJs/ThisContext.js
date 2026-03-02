const Person={
    name:"Shrishti",
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    },
};
Person.greet();

const greetFunction=Person.greet;
greetFunction();

const boundGreet=Person.greet.bind({name:"Ram"});
boundGreet();