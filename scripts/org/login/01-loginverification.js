const request = require('../request/request')

function verify(event) {
  event.preventDefault()
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value

  request.login(email, password)
}

module.exports = verify
