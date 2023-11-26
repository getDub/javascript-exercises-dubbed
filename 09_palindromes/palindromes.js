const palindromes = function (str) {
    
    let xStr = str.split(', ').join('').split(' ').join('').toLowerCase();
    return xStr.split("").reverse().join("") === xStr;
};


// Do not edit below this line
module.exports = palindromes;
