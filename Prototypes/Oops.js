let computer={cpu:12};
let lenovo={screen:"HD"};
let mac={};
// console.log(`computer`, computer.__proto__);

let car={tyre:4};
let tesla={
    driver:"AI"
}
Object.setPrototypeOf(tesla,car);
console.log(`tesla`, Object.getPrototypeOf(tesla));
