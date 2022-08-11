const fibonacci = function (pos) {
    if ((isNaN(pos)) || pos < 0) return "OOPS";
    pos = +pos;
    let sequence = [1, 1];
    for (let i = 1; i < pos; i++) {
        latest = sequence[i];
        prev = sequence[i - 1];
        sequence.push(latest + prev);
    }
    return sequence[pos - 1];
};

// Do not edit below this line
module.exports = fibonacci;
