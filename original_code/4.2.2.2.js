//함수를 다른 함수의 인자로 넘길 수 있다.
const foo = function(func){
  func();
}

foo(function(){
  console.log('Function can be used as the argument');
});