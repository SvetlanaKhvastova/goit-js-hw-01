const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Введите пароль');

const normalizedInput = userInput.toLowerCase();

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === normalizedInput) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
