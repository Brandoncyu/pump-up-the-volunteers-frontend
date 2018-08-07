const loginForm = require('./login/00-loginform')
const registerForm = require('./register/00-registerForm')
const logoutMode = require('./modes/logoutMode')
const verify = require('./login/01-loginVerification')
const loginMode = require('./modes/loginMode')

window.baseURL = `http://localhost:5000`

if (localStorage.getItem('token_org') !== null) {
  loginMode()
}

document.getElementById('login-button').addEventListener('click', loginForm)
document.getElementById('register-button').addEventListener('click', registerForm)
document.getElementById('logout-button').addEventListener('click', logoutMode)
document.getElementById('login-form').addEventListener('submit', verify)
