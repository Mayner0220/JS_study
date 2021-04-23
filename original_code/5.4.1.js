// // 1. 클로저의 개념
// function outerFunc(){
//   var x = 10;
//   var innerFunc = function(){ console.log(x); }
//   return innerFunc;
// }
// var inner = outerFunc();
// inner();
// // innerFunc을 클로저라 부르며 이는 outerFunc의 지역변수 x에 엮여 있다.
// // 클로저(innerFunc)에 의해 참조되는 외부 변수 x를 자유 변수라 한다.



// // 2. 자바스크립트로 클로저를 구현하는 전형적인 패턴
// fuction outerFunc(){
//   var  x = 1;
//   return function(){
//     /* x와 arguments를 활용한 로직 */
//   }
// }
// var new_func = outerFunc();
// new_func();



// // 3. 다음 예제의 결과값을 예측해보자.
// function outerFunc(arg1, arg2){
//   var local = 8;
//   function innerFunc(innerArg){
//     console.log((arg1 + arg2) + (innerArg + local));
//   }
//   return innerFunc();
// }
// var exam1 = outerFunc(2, 4);
// exam1(2);
// // 내부함수인 innerFunc()이 exam1으로 참조된다.
// // outerFunc()가 실행되면서 생성되는 변수 객체가 스코프 체인에 들어가게 되고,
// // 이 스코프 체인은 innerFunc()의 스코프 체인으로 참조된다.
// // 즉 outerFunc()이 실행되고 종료되어도 여전히 innerFunc()에 의해 참조될 수 있다.


// 4. 클로저의 활용(정보은닉)
function Counter() {
  let count = 0;
  this.increase = ()=> ++count;
  this.decrease = ()=> --count;
}

const count = new Counter();
console.log(count.increase());
console.log(count.decrease());