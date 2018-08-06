const registerTemplate = require('../templates/registerTemplate')

function registerForm() {
  document.getElementById('form-container').innerHTML = registerTemplate()
}

module.exports = registerForm
