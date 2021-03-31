function consoleLog(a, b) {
    console.log(a, b);
}

consoleLog(10, 20)
consoleLog(10, 20, 30)

function add(a, b) {
    console.dir(arguments);
    return a + b;
}

console.log(add(1))
console.log(add(1, 2))
console.log(add(1, 2, 3))
