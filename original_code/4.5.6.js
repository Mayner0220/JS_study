//기본 데이터 타입의 확장
String.prototype.testMethod = function(){
  console.log('This is the String.prototype.testMethod()');
};

const str = 'this is test';

str.testMethod();

console.dir(String.prototype);

//자바스크립트는 Object.prototype, String.prototype 등과 같은 표준 빌트인 프로토타입 객체에도
//사용자가 직접 정의한 메서드들을 추가하는 것을 허용한다.