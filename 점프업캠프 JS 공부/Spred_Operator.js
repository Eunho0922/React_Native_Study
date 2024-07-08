const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const copiedArray = [...array1];
console.log('Copied Array:', copiedArray);

const combinedArray = [...array1, ...array2];
console.log('Combined Array:', combinedArray);

const newArray = [0, ...array1, 4];
console.log('New Array:', newArray);

const object1 = { a: 1, b: 2 }
const object2 = { c: 3, b: 4 }

const copiedObject = {...object1}
console.log('Copied Object:', copiedObject);

const combinedObject = {...object1, ...object2};
console.log('Combined Object', combinedObject);

const newObject = {...object1, e: 5};
console.log('New Object:', newObject);