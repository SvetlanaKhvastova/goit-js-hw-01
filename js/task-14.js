function checkForSpam(str) {
  const w1 = `sale`;
  const w2 = `[spam]`;

  let message = str.toLowerCase().split(' ');
  console.log(message);
  return message.includes(w1) || message.includes(w2) ? true : false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
