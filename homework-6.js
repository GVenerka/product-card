//Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее.
const personalData = {
  name: 'Венера',
  surname: 'Гареева',
  age: '35',
  email: 'gareyevava@gmail.com',
  country: 'Россия',
  city: 'Уфа',
  maritalStatus: 'замужем',
  work: 'домохозяйка',
  education: 'высшее'
};

//Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
//  Добавьте дополнительное свойство - владелец авто, значением которого будет объект, описанный в пункте №3. 

const carData = { 
  make: "Chevrolet",
  model: "Camaro Mk5",
  yearOfManufacture: "2020",
  color: "Yellow",
  boxType: "Auto"
};

const carNewData = { ...carData, owner: personalData};

// Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
// Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, 
// если есть - прекращает выполнение (ничего не делает)

function checkMaxSpeed(car) {
  if ('max_speed' in car) return
  else return { ...car, max_speed: "250"}
}


// Написать функцию, которая получает первым аргументом  — объект, 
// а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function getPropery(object, propery) {
  console.log(propery, object[propery])
}

getPropery(carData, 'color')

// Создать массив, который содержит названия продуктов (просто строки)

const products = ["молоко", "хлеб", "сметана", "кефир", "торт"]

// Создать массив, состоящий из объектов, где объект представляет собой книгу. 
// добавить еще одну книгу в конец списка.

const books = [
  {
    title: "Литература. 5 класс часть 2", 
    author: "Коровина, Жураввлев, Коровин", 
    release: 2023,
    numberOfPages: 319,
    publishingHouse: "Просвещение",
  }, 
  {
    title: "Внеклассное чтение", 
    author: "Марина Владимировна Юдаева", 
    release: 2021,
    numberOfPages: 127,
    publishingHouse: "Высшая школа",
  },
  {
    title: "Динозавры", 
    author: "Рысакова Ирина Владимировна", 
    release: 2019,
    numberOfPages: 96,
    publishingHouse: "РОСМЭН",
  }
]

const newBook = {
  title: "История. 5класс", 
  author: "Вигасин, Годер, Свенцицкая", 
  release: 2023,
  numberOfPages: 320,
  publishingHouse: "Просвещение",
}

books.push(newBook)

// Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной. объединить эти два массива в один

const collectionHarryPotter = [
  {
    title: "Гарри Поттер и философский камень", 
    author: "Джоан Кэтлин Роулинг", 
    release: 1997,
    numberOfPages: 367,
    publishingHouse: "РОСМЭН",
  },
  {
    title: "Гарри Поттер и тайная комната", 
    author: "Джоан Кэтлин Роулинг", 
    release: 1998,
    numberOfPages: 473,
    publishingHouse: "РОСМЭН",
  },
  {
    title: "Гарри Поттер и узник Азкабана", 
    author: "Джоан Кэтлин Роулинг", 
    release: 1999,
    numberOfPages: 512,
    publishingHouse: "РОСМЭН",
  },
]

const allBooks = [...books, ...collectionHarryPotter]

// Написать функцию, которая принимает массив сущностей с задания №9. 
// Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги устанавливаем true или false.

const checkBooks = allBooks.map(book => ({...book, 'isRare': book.release > 2000? true: false}))
console.log(checkBooks)