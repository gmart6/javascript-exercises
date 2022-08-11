const sumAll = function (first, second) {
    let sum = 0;
    if (typeof first !== 'number' || typeof second !== 'number') return "ERROR";
    if (first < 0 || second < 0) return "ERROR";
    if (first < second) {
        for (let i = first; i <= second; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = first; i >= second; i--) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
