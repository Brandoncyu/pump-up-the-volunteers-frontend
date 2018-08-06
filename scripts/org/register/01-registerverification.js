const request = require('../request/request')

function verify(event) {
  event.preventDefault()
  const email = document.getElementById('register-email').value
  const password = document.getElementById('register-password').value
  const name = document.getElementById('register-name').value
  const ein = document.getElementById('register-ein').value
  const logo = document.getElementById('register-logo').value
  const description = document.getElementById('register-description').value

  request.signup(email, password, name, ein, logo, description)
}

module.exports = verify
