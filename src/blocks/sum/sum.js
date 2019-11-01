var sum = function (...args) {
    return args.reduce((acc, item) => item + acc);
};

console.log("result:", sum(1, 2, 3, 4, 5));