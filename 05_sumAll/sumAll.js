const sumAll = function(numStart, numEnd) {
  if(!Number.isInteger(numStart) || !Number.isInteger(numEnd)) return `ERROR`;
  if(numStart < 0 || numEnd < 0) return `ERROR`;
  if(numStart > numEnd){
    const temp = numStart;
    numStart = numEnd;
    numEnd = temp;
  }
  let sum = 0;
  for (let i = numStart; i <= numEnd; i++){
    sum += i;
  }
return sum;

};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
