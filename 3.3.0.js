var objA = {
    val: 40
};

// objB 변수를 objA 변수가 가리키는 객체를 가리키도록 한다.
var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;
//objB를 통해 objA가 가리키는 객체의 프로퍼티에 접근할 수 있다.
console.log(objA.val);
console.log(objB.val);