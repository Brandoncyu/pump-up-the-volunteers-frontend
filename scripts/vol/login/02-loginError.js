function renderError(error) {
  document.getElementById('login-email').value = ''
  document.getElementById('login-password').value = ''

  const loginError = document.getElementById('login-alert')

  loginError.innerHTML = 'Username or Password Not Valid. Please Try Again.'

  setTimeout(function() {
    loginError.innerHTML = ''
  }, 4000)
}

module.exports = renderError
