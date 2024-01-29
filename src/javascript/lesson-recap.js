function add(a, b) {
    return a + b;
}


function addCallback({ a, b }, callback) {
    return callback(a, b);
}

function numberToAlphabet(number) {
    switch (number) {
        case 1:
            return 'A-';
        case 2:
            return 'B-';
        case 3:
            return 'C-';
        case 4:
            return 'D-';
        case 5:
            return 'E-';
        case 6:
            return 'F-';
        default:
            return 'G';
    }
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.map(numberToAlphabet).join(""));
console.log(addCallback({ a: 4, b: 5 }, add));