const total = 100;
let ordered = 50;
let orderingDelivery;

if (ordered > total) {
  orderingDelivery = 'На складе недостаточно товаров!';
} else {
  orderingDelivery = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(orderingDelivery);

ordered = 20;

if (ordered > total) {
  orderingDelivery = 'На складе недостаточно товаров!';
} else {
  orderingDelivery = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(orderingDelivery);

ordered = 80;

if (ordered > total) {
  orderingDelivery = 'На складе недостаточно товаров!';
} else {
  orderingDelivery = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(orderingDelivery);

ordered = 130;
if (ordered > total) {
  orderingDelivery = 'На складе недостаточно товаров!';
} else {
  orderingDelivery = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(orderingDelivery);
