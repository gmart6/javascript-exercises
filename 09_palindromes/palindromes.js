const palindromes = function (str) {
    // Strip out all the stuff
    cleanStr = str.toLowerCase().replaceAll(' ', '');
    cleanStr = cleanStr.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');

    // Old method
    // for (let i = 0; i < cleanStr.length; i++) {
    //     if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) return false;
    // }
    // return true;

    // New, simpler method
    strReversed = cleanStr.split('').reverse().join('');
    return cleanStr == strReversed;
};

// Do not edit below this line
module.exports = palindromes;
