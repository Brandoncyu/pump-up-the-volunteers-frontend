const request = require('../request/request')
const renderError = require('./02-loginError')
const loginMode = require('../modes/loginMode')
const allEvents = require('../render/allEvents')

function verify(event) {
  event.preventDefault()
  const email = document.getElementById('login-email').value.toLowerCase()
  const password = document.getElementById('login-password').value
  request.login(email, password).then(response => {
    const token = localStorage.setItem('token_org', response.data.token)
    const info = {
      id: response.data.id,
      ein: response.data.ein,
      description: response.data.description,
      logo: response.data.logo,
      street: response.data.street,
      city: response.data.city,
      state: response.data.state,
      zip: response.data.zip
    }
    
    localStorage.setItem('info_org', JSON.stringify(info))

    loginMode()
    allEvents()
  }).catch(error => {
    renderError(error)
  })
}

module.exports = verify
