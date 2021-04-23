// 프로토타입 메서드와 this바인딩
// This는 기본적으로 자신을 호출한 객체를 가리킨다.
function Person(name){
  this.name = name;
}

Person.prototype.getName = function(){
  return this.name;
}

var foo = new Person('foo');

console.log(foo.getName());

Person.prototype.name = 'person';

console.log(Person.prototype.getName());