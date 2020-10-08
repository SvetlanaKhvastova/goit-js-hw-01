function checkForSpam(str) {
  const w1 = `sale`;
  const w2 = `spam`;

  let message = str.toLowerCase();
  // console.log(message);
  return message.includes(w1) || message.includes(w2) ? true : false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function checkForSpam(str) {
//   const spam = ['spam', 'sale'];

//   for (let word of spam) {
//     if (str.toLowerCase().includes(word)) {
//       return true;
//     } else {
//       continue;
//     }
//   }
//   return false;
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
