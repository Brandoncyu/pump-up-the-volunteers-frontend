const loginForm = require('./login/00-loginform')
const registerForm = require('./register/00-registerform')

document.getElementById('login-button').addEventListener('click', loginForm)

document.getElementById('register-button').addEventListener('click', registerForm)
