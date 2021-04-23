// // 프로토타입을 이용한 상속
// function create_object(o){
//   function F(){}
//   F.prototype = o;
//   return new F();
// }
// // create_object 는 새로운 함수 객체 F를 반환하는 함수이며
// // 매개변수로 넘겨 받은 객체 o를 F의 부모 객체로 만든다.(F의 프로토타입 프로퍼티가 o를 가리키므로)
// // create_object()함수는 Object.create()함수로 제공된다.





// create_object()함수를 이용하여 상속을 구현한 예제
var person = {
  name: "zzoon",
  getName: function(){
    return this.name;
  },
  setName: function(arg){
    this.name = arg;
  }
};

function create_object(o){
  function F(){};
  F.prototype = o;
  return new F();
}

var student = create_object(person);

student.setName("me");
console.log(student.getName());
