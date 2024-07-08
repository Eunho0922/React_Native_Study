function* customGenerator(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}

const generator = customGenerator(1, 5)