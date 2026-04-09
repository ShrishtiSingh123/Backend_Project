// let sum=0
// let i=1
// while(i<=100){
//     sum+=i
//     i++
// }
// console.log(sum);

// let countdown=[]
// let i=5;
// while(i>=1){
//     countdown.push(i)
//     i--
// }
// console.log(countdown);

// 

// 
// let multipliedNumbers=[]
// let numbers=[2,4,6];
// for(let i=0;i<numbers.length;i++){
//     multipliedNumbers.push(numbers[i]*3)
// }
// console.log(multipliedNumbers);

// let cities=["New York","Los Angeles","Chicago","Houston","Phoenix"];
// let citylist=[];
// for(let i=0;i<cities.length;i++){
//     citylist.push(cities[i].toUpperCase());
// }
// console.log(citylist);

let worldcities = {
    "usa": 90000000,
    "india": 1300000000,
    "china": 1400000000,
    "brazil": 210000000
};

let largecities = {};

for (const city in worldcities) {
    if (worldcities[city] < 500000000) {
        continue;
    }
    largecities[city] = worldcities[city];
}

console.log(largecities);

