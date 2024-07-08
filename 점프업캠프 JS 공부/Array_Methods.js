let arr = [1, 2, 3, 4, 5]

arr.push(6);

let lastElement = arr.pop();

let firstElement = arr.shift();

arr.unshift(0);

let arr2 = [6, 7, 8];
let newArr = arr.concat(arr2);

let sliceArr = newArr.slice(2, 5);

newArr.splice(2, 2, 'a', 'b');

newArr.forEach(element => console.log(element));

let mappedArr = newArr.map(element => element.toString().toUpperCase())

let filteredArr = newArr.filter(element => typeof element === 'number');

let sum = filteredArr.reduce((acc, current) => acc + current, 0);

let foundElement = newArr.find(element => element === 'a');

let foundIndex = newArr.findIndex(element => element === 'a');
