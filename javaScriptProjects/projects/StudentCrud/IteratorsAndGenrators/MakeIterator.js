function makeIterator(start = 0, end = Infinity, stepSize = 1) {
    let nextStart = start;

    return {
        next() {
            if (nextStart < end) {
                const result = { value: nextStart, done: false };
                nextStart += stepSize;
                return result;
            }
            return { value: undefined, done: true };
        }
    };
}

const iterator = makeIterator(1, 10, 1);
let result = iterator.next();

while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
   