const loginTemplate = require('../templates/loginTemplate')

function loginForm() {
  document.getElementById('form-container').innerHTML = loginTemplate()
}

module.exports = loginForm
