function abcd(abc) {
  let { name, age } = abc;
  console.log(name);
  console.log(age);
}

abcd({ name: "ABCD", age: 12 });

// Array methods

// Sample array
let arr = [1, 2, 3, 4, 5];

let arr2 = arr.map((i) => {
  return i * i;
});

console.log(arr2);

let arr3 = arr.filter((i) => {
  return i % 2 === 0;
});

console.log(arr3);

let reduArray = arr.reduce((acc, i) => {
  return acc + i;
}, 0);

console.log(reduArray);

let arr5 = arr.some((i) => {
  return i > 3;
});
console.log(arr5);

let arr6 = arr.every((i) => {
  return i > 3;
});
console.log(arr6);
