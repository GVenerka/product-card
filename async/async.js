const usersWrapp = document.querySelector('.users-wrapp');
const loadingMessage = document.querySelector('#message');

function loadData() {
  const storedData = localStorage.getItem('users');
  if (storedData) {
    displayUsers(JSON.parse(storedData));
  } else {
    fetchData();
  }
}

function fetchData() {
  setTimeout(() => {
    fetch('./users.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(users => {
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers(users);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, 3000);
}

const userTemplate = document.querySelector('.user-template');

function displayUsers(users) {
  loadingMessage.style.display = 'none';
  usersWrapp.innerHTML = '';
  users.forEach(user => {
    const userClone = userTemplate.content.cloneNode(true);
    userClone.querySelector('.user-name').textContent = user.name;
    userClone.querySelector('.user-surname').textContent = user.surname;
    userClone.querySelector('.user-email').textContent = user.email;
    userClone.querySelector('.user-age').textContent = user.age;
    userClone.querySelector('.user-city').textContent = user.city;
    userClone.querySelector('.user-delete-button').addEventListener('click', () => {
      deleteUser(user.id);
    });
    usersWrapp.appendChild(userClone);
  });
}

window.onload = loadData;

function deleteUser(id) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const updatedUsers = users.filter(user => user.id !== id);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  displayUsers(updatedUsers);
}

const allUsersDelete = document.querySelector('#all-users-delete-button');
allUsersDelete.addEventListener('click', () => {
  localStorage.removeItem('users');
  usersWrapp.innerHTML = '';
});

const getUsersButton = document.querySelector('#get-users-button');
getUsersButton.addEventListener('click', () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.length === 0) {
    alert('Нет пользователей для отображения.');
  } else {
    displayUsers(users);
  }
});