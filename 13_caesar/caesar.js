const caesar = function (phrase, code) {
    phraseArr = phrase.split('');

    // Sanitize negatives, large shifts
    code = ((code % 26) + 26) % 26;

    // Perhaps could create a separate function for this
    for (let i = 0; i < phraseArr.length; i++) {
        let charCode = phraseArr[i].charCodeAt(0);
        // Check if capital or lowercase letter
        if (charCode >= 65 && charCode <= 90) {
            charCode += code;
            if (charCode > 90) {
                charCode = charCode - 90 + 64;
            }
        } else if (charCode >= 97 && charCode <= 122) {
            charCode += code;
            if (charCode > 122) {
                charCode = charCode - 122 + 96;
            }
        }
        phraseArr[i] = String.fromCharCode(charCode);
    }
    codedArr = phraseArr.join('');
    return codedArr;
};

// Do not edit below this line
module.exports = caesar;
