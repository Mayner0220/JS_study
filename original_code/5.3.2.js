// var var1 = 1;
// var var2 = 2;
// function func(){
//   var var1 = 10;
//   var var2 = 20;
//   console.log(var1);
//   console.log(var2);
// }
// func();
// console.log(var1);
// console.log(var2);
// // 함수 객체가 생성될 때, 그 함수 객체의 [[scope]]는 현재 실행되는 컨텍스트의 변수 객체에 있는 [[scope]]를 그대로 가진다.
// // 함수 객체가 실행되면서 생성된 실행 컨텍스트는 자신이 사용할 스코프 체인에 현재 실행되는 함수 객체의 [[scope]]프로퍼티를 복사하고,
// // 새롭게 생성된 변수 객체를 해당 체인의 제일 앞에 복사한다.



// var value = "value1";

// function printFunc(){
//   var value = "value2";

//   function printValue(){
//     return value;
//   }
//   console.log(printValue());
// }

// printFunc();
// // 전역 실행 컨텍스트의 [[scope]]는 전역 객체를 가리킨다.
// // printFunc의 [[scope]]는 전역 실행 컨텍스트의 [[scope]]를 복사한 후 맨 앞에 printFunc 변수 객체를 추가한다.
// // printValue의 [[scope]]는 printFunc의 [[scope]]를 복사한 후 맨 앞에 printValue 변수 객체를 추가한다.



var value = "value1";
function printValue(){
  return value;
}
function printFunc(func){
  var value = "value2";
  console.log(func());
}
printFunc(printValue);