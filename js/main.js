// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})


const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const listUsers = [
  {
    id: '01',
    email: 'kappa@gmail.com',
    password: '12345',
    displayName: 'KappaJS',
  },
  {
    id: '02',
    email: 'kekw@gmail.com',
    password: '54321',
    displayName: 'KEKWJS',
  },
];

const setUsers = {
  user: null,
  logIn() {

  },
  logOut() {

  },
  signIn() {

  }
};
