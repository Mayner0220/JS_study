const foo= {
  name: 'foo',
  age: 27,
  major: 'computer science'
};

let prop;
for(prop in foo){
  console.log(prop, foo[prop]);
}