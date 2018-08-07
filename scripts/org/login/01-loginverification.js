const request = require('../request/request')
const renderError = require('./02-loginError')
const loginMode = require('../modes/loginMode')

function verify(event) {
  event.preventDefault()
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value

  request.login(email, password).then(response => {
    const token = localStorage.setItem('token_org', response.data.token)

    loginMode()
  }).catch(error => {
    renderError(error)
  })
}

module.exports = verify
