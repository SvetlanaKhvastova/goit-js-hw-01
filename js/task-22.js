const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  let values = Object.values(employees);
  let totalSalary = 0;

  for (let value of values) {
    // console.log(value);
    totalSalary += value;
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
