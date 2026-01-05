export class Form {

  constructor(id) {
    this.form = document.querySelector(id);
  }

  getFormValue() {
    const formData = new FormData(this.form);
    const formValue = Object.fromEntries(formData.entries());
    console.log(formValue);
  }

  checkValidation() {
    this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}