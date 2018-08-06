const loginTemplate = require('../templates/loginTemplate')
const verify = require('./01-loginverification')

function loginForm() {
  document.getElementById('form-container').innerHTML = loginTemplate()

  document.getElementById('login-form').addEventListener('submit', verify)
}

module.exports = loginForm
