const arr = ["zero", "one", "two"];

arr.color = "blue";
arr.name = "number_array";

for(let prop in arr) {
    console.log(prop, arr[prop]);
}

for(let i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
}