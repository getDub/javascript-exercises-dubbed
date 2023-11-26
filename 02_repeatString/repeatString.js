const repeatString = function(string,num) {
    if (num < 0) return `ERROR`;
    let repeatedstring = '';
    for (let i = 0; i < num; i++) {
    repeatedstring += string;
}
return repeatedstring;
};

// Do not edit below this line
module.exports = repeatString;
