import { products } from "./products.js";

//3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
const cardTemplate = document.querySelector('.card-template');
const productsWrapp = document.querySelector('.products-wrapp');

//4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productsNames = products.reduce((acc, product) => {
  acc = (`${acc} ${product.name};`)
  return acc
}, '')
console.log(productsNames)

//5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsList = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description })
  return acc
}, [])
console.log(productsList)

//6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? 
// От 1 до 5" и в зависимости от результата - будет выводить это количество


function showCards() {
  let promtResult = Number(prompt('Сколько карточек отобразить?', 'введите число от 1 до 5'));
  if (promtResult > 1 && promtResult <= 5) {
    products.slice(0, promtResult).forEach(product => {
      const productClone = cardTemplate.content.cloneNode(true)
      productClone.querySelector('.product-image').src = product.image;
      productClone.querySelector('.product-name').textContent = product.name;
      productClone.querySelector('.product-description').textContent = product.description;
      const compoundList = productClone.querySelector('.product-compound');
      product.compound.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        compoundList.appendChild(li)
      });
      productClone.querySelector('.product-price').textContent = product.price;
      productsWrapp.appendChild(productClone)
    })
  } else {
    alert('Введите корректное значение');
    promtResult = Number(prompt('Сколько карточек отобразить?', 'введите число от 1 до 5'))
    showCards()
  }
}
showCards()