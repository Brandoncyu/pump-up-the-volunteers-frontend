const request = require('../request/request')
const availEvents = require('../templates/availEvents')
const interested = require('../buttons/interested')
const notInterested = require('../buttons/notInterested')
const moment = require('moment')

function registeredEvents(){
  const infoOrg = JSON.parse(localStorage.getItem('info_vol'))
  const days = infoOrg.days
  const interests = infoOrg.interests
  const id = infoOrg.id

  request.eventLoad(days, interests, id)
  .then(response => {
    let availableAccumulator = ''
    let events = response.data.events
    events.sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return 1
      } else if (new Date(a.date) < new Date(b.date)) {
        return -1
      } else {
        return 0
      }
    })
    const newId = JSON.parse(localStorage.getItem('info_vol')).id
    events.forEach(event => {
      availableAccumulator += availEvents(event.id, newId, event.logo, event.title, event.name, moment(event.date).format('MMM Do YYYY'), event.description, event.street, event.city, event.state, event.zip)
    })

    document.getElementById('available-events').innerHTML = availableAccumulator
    const interestedButtons = document.querySelectorAll('.interested')

    interestedButtons.forEach(interestedButton => {
      interestedButton.addEventListener('click', interested(interestedButton))
    })

    const notInterestedButtons = document.querySelectorAll('.not-interested')

    notInterestedButtons.forEach(notInterestedButton => {
      notInterestedButton.addEventListener('click', notInterested(notInterestedButton))
    })
  })
}

module.exports = registeredEvents
