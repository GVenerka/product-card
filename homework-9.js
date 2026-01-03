// 4 задание

import { Form } from "./Form.js";
import { Modal } from "./Modal.js";

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

const modal = new Modal('#modal');

const modalShowed = document.querySelector('#registration-button');
modalShowed.addEventListener('click', () => {
  modal.openModal();
})

modal.closeButton();

// 6 

const registration = new Form('#registration-form');
const registrationButton = document.querySelector('#registration');
registrationButton.addEventListener('click', (event) => {
  event.preventDefault();
  registration.checkValidation();
  registration.getFormValue();
  modal.closeModal();
})

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  registration.reset();
})