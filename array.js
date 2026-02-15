// let tea=["green","black","oolong"];
// let cities=["New York","London","Tokyo"];

// cities[2]="Sydney"; //修改数组元素
// console.log(cities); //["New York", "London", "Sydney"]

// let teaOrder=["green","black","oolong"];
// teaOrder.pop();
// console.log(teaOrder); //["green", "black"]

// teaOrder.push("chamomile");
// console.log(teaOrder); //["green", "black", "chamomile"]

let topcities=["New York","London","Tokyo","Sydney"];
let hardtopcities=[...topcities];
topcities.pop
();
console.log(topcities); //["New York", "London", "Tokyo"]
console.log(hardtopcities); //["New York", "London", "Tokyo", "Sydney"]