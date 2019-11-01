function intersection(left, right) {
    var setA = new Set(left);
    var setB = new Set(right);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
}

console.log(intersection(
    [1, 2, 3, 4, 5],
    [2, 8, 3]
));
