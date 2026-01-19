const usersWrapp = document.querySelector('.users-wrapp');
const loadingMessage = document.querySelector('#message');

function loadUsers() {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    renderUsers(JSON.parse(storedUsers));
  } else {
    fetchUsers();
  }
}

function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users')) || [];
} 

function fetchUsers() {
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
        renderUsers(users);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, 3000);
}

const userTemplate = document.querySelector('.user-template');

function renderUsers(users) {
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

window.onload = loadUsers;

function deleteUser(id) {
  const users = getUsersFromLocalStorage();
  const updatedUsers = users.filter(user => user.id !== id);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

const allUsersDelete = document.querySelector('#all-users-delete-button');
allUsersDelete.addEventListener('click', () => {
  localStorage.removeItem('users');
  usersWrapp.innerHTML = '';
});

const getUsersButton = document.querySelector('#get-users-button');
getUsersButton.addEventListener('click', () => {
  loadUsers();
});