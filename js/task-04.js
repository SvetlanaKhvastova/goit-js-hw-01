let credits = 23580;
const pricePerDroid = 3000;
let numberDroids;
let totalPrice;
let result;

numberDroids = prompt('Какое количество дроидов Вы хотите купить?');
totalPrice = numberDroids * pricePerDroid;

if (numberDroids === null) {
  result = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  result = 'Недостаточно средств на счету!';
} else {
  credits = credits - totalPrice;
  result = `Вы купили ${numberDroids} дроидов, на счету осталось ${credits} кредитов.`;
}

console.log(result);
