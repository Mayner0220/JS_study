// function Person(arg){
//   this.name = arg;

//   this.getName = function(){
//     return this.name;
//   }
//   this.setName = function(value){
//     this.name = value;
//   }
// }
// var me = new Person("zzoon");
// console.log(me.getName());

// me.setName("iamhjoo");
// console.log(me.getName());
// // 함수 Person이 클래스이자 생성자의 역할을 한다.
// // 클래스 및 생성자의 역할을 하는 함수가 있고, 사용자는 new 키워드로 인스턴스를 생성하여 사용할 수 있다.
// // 예제에서 생성된 me는 Person의 인스턴스로서 name변수가 있고, getName()과 setName() 메서드가 있다.
// // 위 예제에서의 한가지 단점은 여러 객체를 만들었을 경우 getName()과 setName()이 중복된 메서드로 갖는다는 것이다.





// // 위의 예제를 개선한 경우
// function Person(arg){
//   this.name = arg;
// }

// Person.prototype.getName = function(){
//   return this.name;
// }

// Person.prototype.setName = function(value){
//   this.name = value;
// }

// var me = new Person("me");
// var you = new Person("you");
 




// 더글라스 크락포드가 제시한 함수(메서드를 정의하는 방법)
Function.prototype.method = function(name, func){
  this.prototype[name] = func;
}

function Person(arg){
  this.name = arg;
}

Person.method("setName", function(value){
  this.name = value;
});

Person.method("getName", function(){
  return this.name;
});

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());