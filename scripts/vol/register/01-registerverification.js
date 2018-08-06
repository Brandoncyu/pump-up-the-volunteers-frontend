const request = require('../request/request')

function verify(event) {
  event.preventDefault()
  const firstName = document.getElementById('first-name').value
  const lastName = document.getElementById('last-name').value
  const email = document.getElementById('email').value
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

  request.signup(firstName, lastName, email, password, address1, city, state, zip, days, interests)
}

module.exports = verify