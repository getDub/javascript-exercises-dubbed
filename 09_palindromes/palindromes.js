const palindromes = function (str) {
    
    let xStr = str.split(', ').join('').split(' ').join('').toLowerCase();
    return xStr.split("").reverse().join("") === xStr;
};

// intro to regex - everything that is not a-z or 0-9 replace with nothing.
const palindromesREGEX = function (str) {
    
    let processedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") === processedString
};

// Do not edit below this line
module.exports = palindromes;
