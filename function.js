// function hello(){
//   console.log("Hello World!");
// }
// let tea=["green","black","oolong"];
// let availableTea=[];

// teaCollection.forEach(function(tea){
//     if(tea==="chai"){
//         return;
//     }
//     availableTea.push(tea);
// });
// console.log(availableTea);


// let worldcities=["New York","Los Angeles","Chicago","Houston","Phoenix","Mumbai"];
// let travelCities=[];

// worldcities.forEach(city => {
//     if(city==='Chicago'){
//         return;
//     }
//     travelCities.push(city);
    
// });
// console.log(travelCities);

// let arr=[2,5,7,9];
// let newArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===7){
//         continue;
//     }
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);

// let myTeas = ["green", "black", "oolong", "chai"];
// let shortTeas = [];
// for(const tea of myTeas){
//     if(tea.length>5){
//         break;
//     }
//     shortTeas.push(tea);
// }
// console.log(shortTeas);

// function makeTea(typeOfTea){
//     return `Making a cup of ${typeOfTea} tea.`;
// }
// let teaOrder=makeTea("green");
// console.log(teaOrder);
 


// function within function example


// function orderTea(typeOfTea){
//     function confirmOrder(){
//         return `Order Confirmed for chai`;
// }
//     return confirmOrder();
// }
// let orderConfirmation=orderTea("chai");
// console.log(orderConfirmation);

// Arrow function example

// 

//Return a function example
// function makeTea(typeOftea){
//     return `Making a cup of ${typeOftea} tea.`;
// }

// function processTeaOrder(teaFunction){
//     return teaFunction('earl grey');
// }

// let Order = processTeaOrder(makeTea);
// console.log(Order);


// higher order function example
 function CreateTeaMaker(){
        return function(typeOfTea){
            return `Making a cup of ${typeOfTea} tea.`;
        }
 }
 let teaMaker =  CreateTeaMaker();
 let result = teaMaker("green");
 console.log(result);