// // 1. 전역 객체와 전역 변수와의 관계
// var foo = "I'm foo";
// console.log(foo);
// console.log(global.foo);
// //foo라는 변수는 전역객체 window의 프로퍼티이다.




// // 2. 함수를 호출할 때 this 바인딩
// var abc = "This is the test";
// console.log(window.abc);
// const sayFoo = function(){
//   console.log(this.abc);//이는 console.log(window.test); 와 같다. 
//   //왜냐하면 함수를 호출할 때 this는 전역객체 window에 바인딩되기 때문
// }
// sayFoo();




// // 3. 내부 함수의 this 바인딩 동작
// const value = 100;
// const myObject = {
//   value: 1,
//   func1: function(){
//     this.value += 1;
//     console.log('func() called. this.value : ' + this.value);
//     func2 = function(){
//       this.value += 1;
//       console.log('func2() called. this.value : ' + this.value);
//       func3 = function(){
//         this.value += 1;
//         console.log('func3() called. this.value : ' + this.value);
//       }
//       func3();
//     }
//     func2();
//   }
// };
// myObject.func1();
// //내부함수인 func2와 func3의 this는 window를 가리킨다.




// 4. 내부 함수의 this가 객체의 변수를 가리도록 하는 방법(that)
const value = 100;
const myObject = {
  value: 1,
  func1: function(){
    const that = this;
    this.value += 1; //mtObject.value가 1증가
    console.log('func1() called. this. value : '+ this.value);
    func2 = function(){
      that.value += 1; //mtObject.value가 1증가
      console.log('func2() called. this.value : '+ that.value);
      func3 = function(){
        that.value += 1; //mtObject.value가 1증가
        console.log(`func3() called. this.value : ${that.value}`);
      }
      func3();
    }
    func2();
  }
};
myObject.func1();
``