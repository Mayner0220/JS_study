const Person = function(name, age){
    this.name = name;
    this.age = age;
}

const foo = new Person('foo',16);
const baz = new Person('baz',16);

Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

Person.prototype.setName = function(newName) {
    this.name = newName;
}

console.log(foo.getName(), foo.getAge());
console.log(baz.getName(), baz.getAge());

foo.setName('foo2');    
console.log(foo.name);

