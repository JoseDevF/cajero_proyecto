const userNameElement = document.querySelector('#userName');

const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `${userName}`;
}