// // 클래스 기반의 상속
// function Person(arg){
//   this.name = arg;
// }

// Person.prototype.setName = function(value){
//   this.name = value;
// };

// Person.prototype.getName = function(){
//   return this.name;
// }

// function Student(arg){
//   // Person.apply(this, arguments);
// }

// var you = new Person("iamhjoo");
// Student.prototype = you;

// var me = new Student("zzoon");
// me.setName("zzoon");
// console.log(me.getName());
// // Student함수 객체의 프로토 타입으로 하여금 Person 함수 객체의 인스턴스인 you를 참조하게 만들었다.
// // 이렇게 하면 Student 함수 객체로 생성된 객체 me의 [[Prototype]]링크가 생성자의 프로토타입 프로퍼티 Student.prototype인 you를 가리키고,
// // new Person()으로 만들어진 객체의 [[Prototype]]링크는 Person.prototype을 가리키는 프로토타입 체인이 형성된다.
// // 따라서 객체 me는 Person.prototype 프로퍼티에 접근할 수 있고 setName()과 getName()을 호출할 수 있다.
// // 하지만 이 예제도 문제점이 있다.
// // me 인스턴스를 생성할 때 부모 클래스인 Person 생성자를 호출하지 않는다.
// // 이를 수정하기 위해서는 다음 코드를 Sudent 생성자 함수에 추가해야한다.
// // function Student(arg){
// //   Person.apply(this, arguments);
// // }





// 부모 클래스의 인스턴스와 자식 클래스의 인스턴스가 서로 독립적이도록 발전시킨 코드
function Person(arg){
  this.name = arg;
}

Function.prototype.method = function(name, func){
  this.prototype[name] = func;
}

Person.method("setName", function(value){
  this.name = value;
});

Person.method("getName", function(){
  return this.name;
});

function Student(arg){

}

function F(){};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

var me = new Student();
me.setName("zzoon");
console.log(me.getName());





// // F()를 한번만 생성하도록 하는 방법
// var inherit = function(Parent, Child){
//   var F = function(){};
//   return function(Parent, Child){
//     F.prototype = Parent.prototype;
//     Child.prototype = new F();
//     Child.prototype.constructor = Child;
//     Child.super = Parent.prototype;
//   };
// }();