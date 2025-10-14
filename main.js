// красим первую карточку

const firstCard = document.querySelector('.card-container');
const repaintFirstCardButton = document.querySelector('#repaint-first-card-button');
const firstCardColorHash = '#a969d1ff';

repaintFirstCardButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = firstCardColorHash;
})

// красим все карточки

const productCards = document.querySelectorAll('.card-container');
const repaintAllCardButton = document.querySelector('#repaint-all-card-button');
const allCardColorHash = '#44a886ff';

repaintAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = allCardColorHash);
})

// переходим в Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти в Google?');

  if (answer === true) {
    window.open('https://google.com')
  }
}

// выводим сообщение в консоль

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// выводим заголовок в консоль

const title = document.querySelector('.label');

title.addEventListener('mouseover', () => console.log(title.textContent))

// меняем цвет кнопочки

const paintButton = document.querySelector('#paint-button');

paintButton.addEventListener('click', () => paintButton.classList.toggle("aqua"));