const appListen = 'App listening on port';
const movieDelete = 'Удален фильм';
const loginConflict = 'уже зарегистрирован';
const authError = 'Неправильный email или пароль';
const badRequest = 'Проверьте правильность введенных данных';
const movieNotFound = 'Фильм с таким id отсутствует';
const movieNotForbidden = 'Чужой фильм невозможно удалить';
const notFound = 'Запрашиваемый ресурс отсутствует';
const unauthorized = 'Необходим токен для авторизации';
const requiredAnswer = 'Незаполнено обязательное поле';
const emailNovalid = 'Невалидный email';
const urlNovalid = 'Невалидный URL';
const nameMin = 'Минимум 2 символа';
const nameMax = 'Максимум 30 символов';
const ImageTooLarge = 'Картинка слишком большая - до 100 Кб, оптимальная ширина 333px';

module.exports = {
  appListen,
  loginConflict,
  authError,
  badRequest,
  movieNotFound,
  movieNotForbidden,
  movieDelete,
  notFound,
  unauthorized,
  requiredAnswer,
  emailNovalid,
  urlNovalid,
  nameMin,
  nameMax,
  ImageTooLarge,
};
