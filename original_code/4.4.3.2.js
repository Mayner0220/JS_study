// //생성자 함수에서 라턴값을 지정하지 않을 경우
// function Person(name, age, gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// var foo = new Person('foo', 30, 'man');
// console.dir(foo);



// //생성자 함수에서 명시적으로 객체를 리턴할 경우
// function Person(name, age, gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;

//   return {name:'bar', age:20, gender:'woman'};
// }
// var foo = new Person('foo', 30, 'man');
// console.dir(foo);



// //생성자 함수에서 명시적으로 기본 타입값을 리턴할 경우
// function Person(name, age, gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;

//   return 100;
// }
// var foo = new Person('foo', 20, 'man');
// console.dir(foo);