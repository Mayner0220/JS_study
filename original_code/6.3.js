// // JS에서 정보은닉을 하는 방법(캡슐화)
// var Person = function(arg){
//   var name = arg ? arg : "zzoon";
//   this.getName = function(){
//     return name;
//   }
//   this.setName = function(arg){
//     name = arg;
//   }
// };

// var me = new Person();
// console.log(me.getName());
// me.setName("iamhjoo");
// console.log(me.getName());
// console.log(me.name);





// //위 코드를 깔끔하게 다듬은 코드
// var Person = function(arg){
//   var name = arg ? arg : "zzoon";

//   return {
//     getName: function(){
//       return name;
//     },
//     setName: function(){
//       name = arg;
//     }
//   };
// }

// var me = Person();
// console.log(me.getName());





// // 주의사항!
// //접근하는 private 멤버가 객체나 배열이면 얕은 복사로 참조만을 반환하므로 사용자가 이후 이를 쉽게 변경할 수 있다
// var ArrCreate = function(arg){
//   var arr = [1,2,3];

//   return {
//     getArr : function(){
//       return arr;
//     }
//   };
// }
// var obj = ArrCreate();
// var arr= obj.getArr();
// arr.push(5);
// console.log(obj.getArr());//obj에는 5가 있으면 안되는건가??





// 맨 위의 코드에서는 사용자가 반환받은 객체는 Person함수 객체의 프로토타입에는 접근할 수 없다.
// 이를 보완해보자.
var Person = function(arg){
  var name = arg ? arg : "zzoon";

  var Func =  function(){}
  Func.prototype = {
    getName : function(){
      return name;
    },
    setName : function(arg){
      name = arg; 
    }
  };
  return Func;
}();

var me = new Person();
console.log(me.getName);