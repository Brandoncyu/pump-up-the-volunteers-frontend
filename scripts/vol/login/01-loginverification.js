const request = require('../request/request')
const renderError = require('./02-loginError')
const loginMode = require('../modes/loginMode')

function verify(event) {
  event.preventDefault()
  const email = document.getElementById('login-email').value.toLowerCase()
  const password = document.getElementById('login-password').value
  request.login(email, password).then(response => {
    const token = localStorage.setItem('token_vol', response.data.token)
    const daysParse = response.data.days
    const daysArray = []
    if (daysParse[0] == true) {
      daysArray.push('Sunday')
    }
    if (daysParse[1] == true) {
      daysArray.push('Monday')
    }
    if (daysParse[2] == true) {
      daysArray.push('Tuesday')
    }
    if (daysParse[3] == true) {
      daysArray.push('Wednesday')
    }
    if (daysParse[4] == true) {
      daysArray.push('Thursday')
    }
    if (daysParse[5] == true) {
      daysArray.push('Friday')
    }
    if (daysParse[6] == true) {
      daysArray.push('Saturday')
    }

    const info = {
      id: response.data.id,
      days: daysArray,
      interests: response.data.interests
    }
    localStorage.setItem('info_vol', JSON.stringify(info))

    loginMode()
    const infoOrg = JSON.parse(localStorage.getItem('info_vol'))
    const days = infoOrg.days
    const interests = infoOrg.interests
    const id = infoOrg.id
    request.eventLoad(days, interests, id).then(response => {
      console.log('response', response)
    }).catch(error => {
      console.log(error)
    })

  }).catch(error => {
    renderError(error)
  })
}

module.exports = verify
