// 동등 연산자(==)와 일치 연산자(===)
const a = 1;
const b = '1';

const objA = {value : 100};
const objB = {value : 100};
const objC = objB;

console.log(a==b);
console.log(a===b);
console.log(objA==objB);
console.log(objB==objC);
console.log(objB===objC);
