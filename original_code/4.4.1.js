// // 1. 함수 호출시 매개변수의 개수 
// function func(arg1, arg2){
//   console.log(arg1, arg2);
// }
// func(); //넘기는 인자가 없을경우 undefined
// func(1); // arg2는 undefined
// func(1,2);
// func(1,2,3); //초과된 인자는 무시한다.



// // 2. arguments 객체
// //argument객체는 함수가 호출될때 인자들과 함께 암묵적으로 전달된다.
// //html 문서를 통해 확인해 봅시다.
// function add(a,b){
//   console.dir(arguments);
//   return a+b;
// }
// console.log(add(1));
// console.log(add(1,2));
// console.log(add(1,2,3));



// 3. 인자를 arguments 객체로 넘김으로써 유용한 예제
//매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나 
//전달된 인자의 개수에 따라 다른 처리를 해야하는 함수를 정의할때 유용
function fc(){
  let result = 0;
  if(arguments.length<6) {
    for(let i=0;i<arguments.length; i++) result += arguments[i];
  } else {
    for(let i=0;i<arguments.length; i++) result *= arguments[i];
  }

  return result;
}
console.log(fc(1,2,3));
console.log(fc(1,2,3,4,5,6,7,8,9,10));