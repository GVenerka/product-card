// 4 задание

const subscribe = document.querySelector('.subscribe-wrapp');
subscribe.addEventListener('submit', (event) => {
  event.preventDefault()
  const email = event.target;
  const formData = new FormData(email);
  const userEmail = Object.fromEntries(formData.entries());
  console.log(userEmail);
  document.getElementById('emailInput').value = '';
})

//5 

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const modalShowed = document.querySelector('#registration-button');
modalShowed.addEventListener('click', () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
})

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
})

// 6 

const password = document.querySelector('[name=password]');
const repeatPassword = document.querySelector('[name=repeat-password]');

const registration = document.querySelector('.registration-form');
registration.addEventListener('submit', (event) => {
  event.preventDefault();
  if(password.value !== repeatPassword.value) {
    alert('Пароли не совпадают');
    return;
  }
  const formData = new FormData(registration);
  const user = Object.fromEntries(formData.entries());
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
  console.log(user);
})