// красим первую карточку

const firstCard = document.querySelector('.card-container');
const repaintFirstCardButton = document.querySelector('#repaint-first-card-button');
const PlumColorHash = '#DDA0DD';

repaintFirstCardButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = PlumColorHash;
})

// красим все карточки

const productCards = document.querySelectorAll('.card-container');
const repaintAllCardButton = document.querySelector('#repaint-all-card-button');
const LimeColorHash = '#00FF00';

repaintAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = LimeColorHash);
})

// переходим в Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти в Google?');

  if (answer === true) {
    window.open('https://google.com')
  }
}

// выводим сообщение в консоль

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// выводим заголовок в консоль

const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => console.log(mainTitle.textContent));

// меняем цвет кнопочки

const colorChangingButton = document.querySelector('#color-changing-button');

colorChangingButton.addEventListener('click', () => colorChangingButton.classList.toggle("bg-aqua"));