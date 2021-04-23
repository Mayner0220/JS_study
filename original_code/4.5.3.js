function Person(name, age, hobby){
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

const foo = new Person('foo', 30, 'tennis');
const baz = new Person('baz',15, 'basketball');
const bar = new Person('bar', 20, 'baseball')

Person.prototype.about = function() {
  console.log(this.name);
  console.log(this.age);
  console.log(this.hobby);
}

foo.about();
baz.about();
bar.about();