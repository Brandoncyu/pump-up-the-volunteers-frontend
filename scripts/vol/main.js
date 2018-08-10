const loginForm = require('./login/00-loginform')
const registerForm = require('./register/00-registerform')
const logoutMode = require('./modes/logoutMode')
const verify = require('./login/01-loginVerification')
const loginMode = require('./modes/loginMode')
const allEvents = require('./render/allEvents')

window.baseURL = `http://localhost:5000`

if (localStorage.getItem('token_vol') !== null) {
  loginMode()
  allEvents()
}

document.getElementById('login-button').addEventListener('click', loginForm)
document.getElementById('register-button').addEventListener('click', registerForm)
document.getElementById('logout-button').addEventListener('click', logoutMode)
document.getElementById('login-form').addEventListener('submit', verify)
