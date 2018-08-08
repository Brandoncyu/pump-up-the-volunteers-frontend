const request = require('../request/request')
const renderError = require('./02-loginError')
const loginMode = require('../modes/loginMode')

function verify(event) {
  event.preventDefault()
  const email = document.getElementById('login-email').value.toLowerCase()
  const password = document.getElementById('login-password').value
  request.login(email, password).then(response => {
    const token = localStorage.setItem('token_vol', response.data.token)
    const info = {
      days: response.data.days,
      interests: response.data.interests
    }
    localStorage.setItem('info_vol', JSON.stringify(info))

    loginMode()
  }).catch(error => {
    renderError(error)
  })
}

module.exports = verify
