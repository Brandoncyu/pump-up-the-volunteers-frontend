const loginForm = require('./login/00-loginform')
const registerForm = require('./register/00-registerform')
const verify = require('./login/01-loginverification')
window.baseURL = `http://localhost:5000`

document.getElementById('login-button').addEventListener('click', loginForm)

document.getElementById('register-button').addEventListener('click', registerForm)

document.getElementById('login-form').addEventListener('submit', verify)
