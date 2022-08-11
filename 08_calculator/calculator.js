const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};

const multiply = function (arr) {
  let product = arr.shift();
  for (let item of arr) {
    product *= item;
  }
  return product;
};

const power = function (num, exp) {
  return num ** exp;
};

const factorial = function (num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
