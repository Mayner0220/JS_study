//1,2,3을 1초 간격으로 출력하기
function countSeconds(howMany){
  for(var i =1; i<=howMany; i++){
    setTimeout(function(){
      console.log(i);
    },i*1000);
  }
};
countSeconds(3);


// //원하는 결과를 얻기 위해 수정한 코드
// function countSeconds(howMany){
//   for(var i = 1; i<=howMany; i++){
//     (function (currentI){
//       setTimeout(function(){
//         console.log(currentI);
//       }, currentI*1000);
//     }(i));
//   }
// };
// countSeconds(3);