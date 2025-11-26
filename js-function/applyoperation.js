// function that applies a callback to every number
function applyOperation(numbers, operation) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i])); // apply callback
    }

    return result;
}

// callback to double a number
function double(x) {
    return x * 2;
}

// callback to square a number
function square(x) {
    return x * x;
}

let nums = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, square));
