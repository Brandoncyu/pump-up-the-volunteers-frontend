const request = require('../request/request')
const allEvents = require('./allEvents')

function newEvents(event) {
  event.preventDefault()
  const infoOrg = JSON.parse(localStorage.getItem('info_org'))
  const title = document.getElementById('event-name').value
  const date = document.getElementById('event-date').value
  const description = document.getElementById('event-description').value
  const street = document.getElementById('event-address1').value
  const city = document.getElementById('event-city').value
  const state = document.getElementById('event-state').value
  const zip = document.getElementById('event-zip').value

  request.postEvents(infoOrg.id, title, description, date, street, city, state, zip).then(response => {
    document.getElementById('post-event').reset()
    allEvents()
  }).catch(error => {
    console.log(error)
  })

}

module.exports = newEvents
