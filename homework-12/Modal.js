export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeModal = () => {
      this.close()
    };
    this.#initOpen(buttonId);
    const closeButton = this.modal.querySelector('#modal-close-button');
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.closeModal);
      this.closeButton.removeEventListener('click', this.closeModal);
    };
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose() {
    this.closeButton.addEventListener('click', this.closeModal);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.closeModal);
    }
  }
}