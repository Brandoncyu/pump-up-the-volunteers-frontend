function renderError(error) {
  document.getElementById('register-form').reset()

  const registerError = document.getElementById('register-alert')

  registerError.innerHTML = 'Username or Password Already Taken. Please Try Again.'

  setTimeout(function() {
    registerError.innerHTML = ''
  }, 4000)
}

module.exports = renderError
