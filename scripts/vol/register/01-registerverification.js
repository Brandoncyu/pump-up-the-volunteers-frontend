const request = require('../request/request')
const loginMode = require('../modes/loginMode')
const renderError = require('./02-registerError')
const registeredEvents = require('../render/registeredEvents')

function verify(event) {
  event.preventDefault()
  const firstName = document.getElementById('first-name').value
  const lastName = document.getElementById('last-name').value
  const email = document.getElementById('email').value.toLowerCase()
  const password = document.getElementById('password').value
  const address1 = document.getElementById('address1').value
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  const zip = document.getElementById('zip').value

  const interests = []
  const interestForm = document.getElementById('interests')
  const interestList = interestForm.getElementsByTagName('input')

  for (let i = 0; i < interestList.length; i++) {
    if (interestList[i].checked == true) {
      interests.push(parseInt(interestList[i].value))
    }
  }

  const days = []
  const daysForm = document.getElementById('days')
  const daysList = daysForm.getElementsByTagName('input')

  for (let i = 0; i < daysList.length; i++) {
    if (daysList[i].checked == true) {
      days.push(true)
    } else {
      days.push(false)
    }
  }

  request.signup(firstName, lastName, email, password, address1, city, state, zip, days, interests).then(response => {
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
    registeredEvents()
  }).catch(error => {
    renderError(error)
  })
}

module.exports = verify
