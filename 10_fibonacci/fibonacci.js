const fibonacci = function(indx) {
    if( indx < 0 ) return "nope";
    if( indx === 0) return 0;

    let firstPrevNo = 1, secondPrevNo = 0, currentNo;
    // i starts at 2 because firstPrevNo and secondPrevNo's have been declared
    for( let i = 2; i <= indx; i++){
        currentNo = firstPrevNo + secondPrevNo;
        console.log(`current = ${currentNo}`)
        secondPrevNo = firstPrevNo;
        firstPrevNo = currentNo
    }
    return firstPrevNo;

};

// Do not edit below this line
module.exports = fibonacci;
