// 1. 객체의 메서드를 호출할때 this
const myObject = {
  name: 'foo',
  sayName: function(){
    console.log(this.name);
  }
};

const otherObject = {
  name: 'bar',
};

otherObject.sayName = myObject.sayName;//otherobject에 myObject의 sayName메서드를 동적할당
``
myObject.sayName();//this가 myObject를 가리킨다.
otherObject.sayName();//this가 otherObject를 가리킨다.