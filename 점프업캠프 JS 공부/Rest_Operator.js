function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log('Sum:', sum(1, 2, 3, 4));

function greet(first, ...rest) {
    console.log(`Hello, ${first}!`);
    console.log(`Additional greetings to: ${rest.join(',')}`);
}

greet('Alice', 'Bob', 'Charlie')
