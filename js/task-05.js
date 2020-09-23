let credit;

let delivery = prompt('Укажите страну:');

// const normalizedСountry = delivery.toLowerCase();

switch (delivery) {
  case (delivery = null): {
    console.log('Отменено пользователем');
    break;
  }

  case (delivery = 'Китай'): {
    credit = 100;
    console.log(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
    break;
  }

  case (delivery = 'Чили'): {
    credit = 250;
    console.log(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
    break;
  }

  case (delivery = 'Австралия'): {
    credit = 170;
    console.log(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
    break;
  }

  case (delivery = 'Индия'): {
    credit = 80;
    console.log(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
    break;
  }

  case (delivery = 'Ямайка'): {
    credit = 120;
    console.log(`Доставка в ${delivery} будет стоить ${credit} кредитов`);
    break;
  }

  default:
    alert('В вашей стране доставка не доступна');
    console.log('В вашей стране доставка не доступна');
}
