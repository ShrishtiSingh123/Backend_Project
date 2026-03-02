function* numbergenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen=numbergenerator();
// console.log(gen);
// console.log(numbergenerator());
console.log(gen.next().value);