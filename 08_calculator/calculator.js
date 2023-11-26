const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((rTotal, cNum) => rTotal + cNum,0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num)
};

const power = function(num1, toThePowerOf) {
	return Math.pow(num1, toThePowerOf)
};

const factorial = function(n) {
	let result = ( n === 0 ? 1 : factorial(n-1) * n);
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
