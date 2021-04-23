// // 1. forEach() 주어진 함수를 배열 요소 각각에 대해 실행합니다.
// const arr = [1,2,3,4,5,];
// let result = 0;
// const fc = (element) => {
//   console.log(element);
// }
// arr.forEach(fc);
// arr.forEach(e=>{
//   console.log(e);
// });
// console.log(`sum: ${result}`);



// // 2. indexOf() 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
// const arr = ['apple', 'pear', 'orange', 'straqberry'];
// console.log(arr.indexOf('apple'));
// console.log(arr.indexOf('orange'));
// console.log(arr.indexOf('banana'));


 
// // 3. map() 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
// const arr = [1,2,3,4,5,6,7];
// const arr2 = arr.map(e => e*e);
// console.log(arr2);



// // 4. concat() 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const result = arr1.concat(arr2);
// console.log(result);



// // 5. filter() 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// const obj = [
//   {
//     id:1,
//     done: true,
//   },
//   {
//     id:2,
//     done: false,
//   },
//   {
//     id:3,
//     done: false,
//   }
// ];
// const who = obj.filter(e => e.done === false);
// console.log(who);



// 6. reduce()
const arr = [1,2,3,4,5];
const result = arr.reduce((acc, cur) =>{ acc += cur});
console.log(result);