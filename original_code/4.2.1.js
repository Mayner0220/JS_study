function add(x,y){
  return x+y;
};

//함수도 객체이므로 프로퍼티 추가 가능하다.
add.result = add(3,2)
add.status = 'OK';

console.log(add.result);
console.log(add.status);
console.dir(add);