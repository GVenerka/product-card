export class Form {

  constructor(id) {
    this.form = document.querySelector(id);
  }

  getFormValue() {
    const formData = new FormData(this.form);
    return formValue = Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }

}