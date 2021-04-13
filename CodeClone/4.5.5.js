function getName(iam) {
    console.log(iam.name);
}

function getAge(iam) {
    console.log(iam.age);
}

function setName(_name) {
    this.name = _name;
}

function me() {
    this.age = 19;
}

const iam = new me();
me.prototype = new setName("SJH");
getAge(me)
getName(me)