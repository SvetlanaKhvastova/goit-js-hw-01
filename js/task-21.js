const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  let keys = Object.keys(employees);
  console.log(keys);
  let result = '';
  for (let i = 0; i < keys.length; i += 1) {
    if (employees[keys[i]] >= employees[keys[0]]) {
      result = keys[i];
    }
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};

console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};

console.log(findBestEmployee(sellers));
// 'lux'
