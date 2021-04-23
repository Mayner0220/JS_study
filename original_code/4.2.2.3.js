const foo = function(){
  return function(){
    console.log('this function is the return value')
  };
};
//foo는 내부함수의 function을 참조하고 있다.
const bar = foo();
bar();