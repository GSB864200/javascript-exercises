const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumo = 0;
  for (let i = 0; i < array.length ; i++){
    sumo += array[i];
  }
  return sumo;
};

const multiply = function(array) {
  let mut = 1;
  for (let i = 0 ; i < array.length ; i++){
    mut *= array[i];
    
  }
  return mut ;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
	let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
