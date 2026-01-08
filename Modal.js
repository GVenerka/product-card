export class Modal {

  constructor(id) {
    this.modalWindow = document.querySelector(id);
  }

  overlay = document.querySelector('#overlay');

  openModal() {
    this.modalWindow.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }

  closeModal() {
    this.modalWindow.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }

  isOpen() {
    return this.modalWindow.classList.contains('modal-showed');
  }

  initClose() {
    document.querySelector('.close-modal').addEventListener('click', (event) => {
      event.preventDefault();
      this.modalWindow.classList.remove("modal-showed");
      this.overlay.classList.remove("overlay-showed");
    })
  }
}