const registerTemplate = require('../templates/registerTemplate')
const verify = require('./01-registerverification')

function registerForm() {
  document.getElementById('form-container').innerHTML = registerTemplate()

  document.getElementById('register-form').addEventListener('submit', verify)
}

module.exports = registerForm
