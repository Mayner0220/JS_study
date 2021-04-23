// //함수 선언문
// function add(x,y){
//   return x+y;
// }
// console.log(add(3,4));



// // 함수 표현식
// const add = function(x,y){
//   return x+y;
// };

// const plus = add;

// console.log(add(3,4));
// console.log(plus(5,6))





// 함수 표현식으로 함수를 생성한 경우 함수명으로 호출이 불가능하다.
const add = function sum(x,y){
  return x+y;
};

console.log(add(3,4));
console.log(sum(1,2));

const factorialVar = function factorial(n){
  if(n<=1) return 1;
  else return n*factorial(n-1);
};

console.log(factorialVar(3));
console.log(factorial(3));