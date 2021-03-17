const colorsArray = ["orange", "yellow", "green"];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

const colorObj = {
    "0": "orange",
    "1": "yellow",
    "2": "green"
};

console.log(colorObj[0]);
console.log(colorObj[1]);
console.log(colorObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorObj);

console.log(colorsArray.length);
console.log(colorObj.length);

colorsArray.push("red");