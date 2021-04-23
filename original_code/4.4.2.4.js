// //1. apply()메서드를 이용한 명시적인 this 바인딩
// //형식: function.apply(thisArg, argArray)
// function Person(name, age, gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// const foo = {}

// Person.apply(foo,['foo', 30, 'man']);
// // Person.call(foo, 'foo', 30, 'men');
// console.log(foo);




//2. apply()메서드를 활용한 arguments 객체의 배열 표준 메서드 slice()활용 코드
function myFunction(){
  console.dir(arguments);

  // arguments.shift(); 에러 발생

  const args = Array.prototype.slice.apply(arguments);
  //배열의 메서드인 slice를 arguments에 적용시킨 것이다.(apply를 사용하여 this를 arguments에 바인딩시킴)
  console.dir(args);
}
myFunction(1,2,3);




// //3. slice()메서드 사용 예제
// const arrA = [1,2,3];
// const arrB = arrA.slice(0);
// const arrC = arrA.slice();
// const arrD = arrA.slice(1);
// const arrE = arrA.slice(1,2);

// console.log(arrA);
// console.log(arrB);
// console.log(arrC);
// console.log(arrD);
// console.log(arrE);