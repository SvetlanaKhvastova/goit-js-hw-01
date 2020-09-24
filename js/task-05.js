let credit;

let delivery = prompt('Укажите страну:');

if (delivery === null) {
  console.log('Отменено пользователем');
} else {
  let normalizedСountry = delivery.toLowerCase();

  switch (normalizedСountry) {
    case (normalizedСountry = 'китай'): {
      credit = 100;
      console.log(
        `Доставка в ${normalizedСountry} будет стоить ${credit} кредитов`,
      );
      break;
    }

    case (normalizedСountry = 'чили'): {
      credit = 250;
      console.log(
        `Доставка в ${normalizedСountry} будет стоить ${credit} кредитов`,
      );
      break;
    }

    case (normalizedСountry = 'австралия'): {
      credit = 170;
      console.log(
        `Доставка в ${normalizedСountry} будет стоить ${credit} кредитов`,
      );
      break;
    }

    case (normalizedСountry = 'индия'): {
      credit = 80;
      console.log(
        `Доставка в ${normalizedСountry} будет стоить ${credit} кредитов`,
      );
      break;
    }

    case (normalizedСountry = 'ямайка'): {
      credit = 120;
      console.log(
        `Доставка в ${normalizedСountry} будет стоить ${credit} кредитов`,
      );
      break;
    }

    default:
      alert('В вашей стране доставка не доступна');
      console.log('В вашей стране доставка не доступна');
  }
}
