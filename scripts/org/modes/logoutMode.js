const loginTemplate = require('../templates/loginTemplate')
const verify = require('../login/01-loginVerification')

function logoutMode() {
  localStorage.removeItem('token_org')
  document.getElementById('closing').setAttribute('style', 'display:none')
  document.getElementById('opening').setAttribute('style', 'display:block')
  document.getElementById('login-signups').setAttribute('style', 'display:block')
  document.getElementById('organization-events').setAttribute('style', 'display:none')

  document.getElementById('form-container').innerHTML = loginTemplate()
  document.getElementById('login-form').addEventListener('submit', verify)
  document.getElementById('upcoming-events').innerHTML = ''
  document.getElementById('past-events').innerHTML = ''
}

module.exports = logoutMode
