function renderError(error) {
  document.getElementById('register-email').value = ''
  document.getElementById('register-password').value = ''
  document.getElementById('register-name').value = ''
  document.getElementById('register-ein').value = ''
  document.getElementById('register-logo').value = ''
  document.getElementById('register-description').value = ''

  const registerError = document.getElementById('register-alert')

  registerError.innerHTML = 'Username, Password, or EIN Number Already Taken. Please Try Again.'

  setTimeout(function() {
    registerError.innerHTML = ''
  }, 4000)
}

module.exports = renderError
