export class Form {

  constructor(id) {
    this.registrationForm = document.querySelector(id)
  }

  getFormValue() {
    const formData = new FormData(this.registrationForm);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
  }

  checkValidation() {
    const password = document.querySelector('#password');
    const repeatPassword = document.querySelector('#repeat-password');

    if (password.value !== repeatPassword.value) {
      alert('Пароли не совпадают');
      return;
    }
  }

  reset() {
    this.registrationForm.reset();
  }
}