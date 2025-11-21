import { comments } from "./comments.js";

//Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const firstTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filterArray = firstTen.filter(number => number >= 5)
console.log(filterArray)

//3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), 
//проверить, есть ли в массиве какая-то определенная сущность.

const furniture = ['стол', 'стул', 'диван', 'шкаф', 'кровать', 'кресло']

function searchElement(array, parametr) { 
  console.log(array.find( item => item === parametr))
}

searchElement(furniture, 'шкаф')
searchElement(furniture, 'комод')

//4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать"). 
// Два вышеуказанных массива с помощью этой функции перевернуть.

function flipOver(array) {
  console.log(array.reverse())
}

flipOver(firstTen)
flipOver(furniture)

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const searchComments = comments.filter(comment => comment.email.includes(".com"))
console.log(searchComments)

//8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const commentsIdPost = comments.map(comment => ({ ...comment, postId: comment.id <= 5? 2: 1}))
console.log(commentsIdPost)

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const commentsWithIdName = comments.map(comment => ({id: comment.id, name: comment.name}))
console.log(commentsWithIdName)

//10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true,
//  меньше - false.

const commentsIsInvalid = comments.map(comment => ({ ...comment, isInvalid: comment.body.length <= 180}))
console.log(commentsIsInvalid)

//11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsWihtReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, [])

console.log(emailsWihtReduce)

const emailsWithMap = comments.map(comment => comment.email)
console.log(emailsWithMap)

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsString = emailsWithMap.toString()

console.log(emailsString)