export class Modal {
  constructor(id) {
    this.modalWindow = document.querySelector(id);
  }

  overlay = document.querySelector('#overlay');

  openModal() {
    this.modalWindow.classList.add("modal-showed");
    overlay.classList.add("overlay-showed");
  }

  closeModal() {
    this.modalWindow.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
  }

  checkModal() {
    if (this.modalWindow.classList.contains('modal-showed')) { 
      alert('Модальное окно открыто') }
    else { alert('Модальное окно закрыто') }
  }

  closeButton() {
    document.querySelector('.close-modal').addEventListener('click', (event) => {
      event.preventDefault();
      this.modalWindow.classList.remove("modal-showed");
      overlay.classList.remove("overlay-showed");
    })
  }
}