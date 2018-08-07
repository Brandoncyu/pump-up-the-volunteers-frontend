function loginMode() {
  document.getElementById('login-signups').setAttribute('style', 'display: none')
  document.getElementById('organization-events').setAttribute('style', 'display: block')
  document.getElementById('closing').setAttribute('style', 'display:block')
  document.getElementById('opening').setAttribute('style', 'display:none')

}

module.exports = loginMode
