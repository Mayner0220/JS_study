// 1. 비구조화 할당(객체, 배열) 기본
const obj = {
    name: 'seo',
    age: 29,
    major: 'computer science',
};
  
const arr = ['seo', 29, 'computer sceince'];
  
const {name: nickname, age, major} = obj;
const [one, two, three] = arr;
  
console.log(nickname);
console.log(age);
console.log(major);
  
console.log(one);
console.log(two);
console.log(three);




// // 2. 함수의 파라미터에서의 비구조화 할당
// const func = function( {a, b} ){
//     console.log(a);
//     console.log(b);
// };

// const obj = {a:1, b:2}

// func(obj);
    