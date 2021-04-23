const a = 100;
const objA = {value : 100};

function changeArg(num, obj){
  num = 200;
  obj.value = 200;

  console.log(num);
  console.log(obj.value);
}

changeArg(a, objA);

console.log(a);
console.log(objA.value);

//기본타입의 경우 CBV, 객체타입의 경우 CBR이다.