const registerTemplate = require('../templates/registerTemplate')
const verify = require('./01-registerverification')

function registerForm() {
  document.getElementById('form-container').innerHTML = registerTemplate()

  document.getElementById('login-signups').addEventListener('submit', verify)
}

module.exports = registerForm
