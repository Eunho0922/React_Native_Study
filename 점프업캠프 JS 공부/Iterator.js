const array = [1, 2, 3]
const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const customIterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            lase: this.to,
            next() {
                if (this.current <= this.last) {
                    return { value: this.current++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }
    }
}

for (const num of customIterable) {
    console.log(num);
}