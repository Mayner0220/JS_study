// // 예제1
// var buffAr = [
//   'I am ',
//   '',
//   '. I live in ',
//   '',
//   '. I\'am ',
//   '',
//   ' years old.',
// ];

// function getCompletedStr(name, city, age){
//   buffAr[1] = name;
//   buffAr[3] = city;
//   buffAr[5] = age;

//   return buffAr.join('');
// }

// var str = getCompletedStr('zzoon', 'seoul', 16);
// console.log(str);
// // buffAr이라는 배열은 전역변수로서, 외부에 노출되어 있다
// // 이는 다른 함수에서 이 배열에 쉽게 접근하여 값을 바꿀 수도 있고,
// // 실수로 같은 이름의 변수를 만들어 버그가 생길 수 있다.



// 예제2
var getCompletedStr = (function(){
  var buffAr = [
    'I am',
    '',
    '. I live in ',
    '',
    '. I\am ',
    '',
    ' years old. ',
  ];

  return (function(name, city, age){
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join('');
  })
})();

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);
// 반환되는 함수가 클로저가 되고, 이 클로저는 자유변수 buffAr을 스코프체인에서 참조할 수 있다.