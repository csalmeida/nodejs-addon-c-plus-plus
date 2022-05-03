const calculate = require('./build/release/calculate');

function calc() {
  let i, x = 100.32462344, y = 200.333456533452;

  for (i = 0; i < 1000000000; i++) {
    x += y;
  }

  const total = x;
  return total;
}

console.time("C++");
calculate.calc();
console.timeEnd("C++");

console.time("JavaScript");
calc();
console.timeEnd("JavaScript");