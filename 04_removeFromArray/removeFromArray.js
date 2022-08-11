const removeFromArray = function (arr, rem) {
    let spliced = arr;
    for (let i = 1; i < arguments.length; i++) {
        if (arr.includes(arguments[i])) {
            pos = arr.indexOf(arguments[i]);
            spliced.splice(pos, 1);
        }
    }
    return spliced;
};


// Do not edit below this line
module.exports = removeFromArray;
