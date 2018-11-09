const request = require('../request/request')
const cardOrgTemplate = require('../templates/cardOrgTemplate')
const moment = require('moment')

function allEvents() {
  const infoOrg = JSON.parse(localStorage.getItem('info_org'))

  request.allEvents(infoOrg.id).then(response => {
    const events = response.data.events
    events.sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return 1
      } else if (new Date(a.date) < new Date(b.date)) {
        return -1
      } else {
        return 0
      }
    })
    const upcomingEvents = []
    const pastEvents = []

    const today = new Date()
    events.forEach(element => {
      if (today <= new Date(element.date)) {
        upcomingEvents.push(element)

      } else {
        pastEvents.push(element)
      }
    })
    let upcomingAccumulator = ''

    upcomingEvents.forEach(newEvent => upcomingAccumulator += cardOrgTemplate(newEvent.id, infoOrg.logo, newEvent.title, moment(new Date(newEvent.date)).format('MMMM Do YYYY'), newEvent.description, newEvent.street, newEvent.city, newEvent.state, newEvent.zip))

    document.getElementById('upcoming-events').innerHTML = upcomingAccumulator

    let pastAccumulator = ''

    pastEvents.forEach(newEvent => pastAccumulator += cardOrgTemplate(newEvent.id, infoOrg.logo, newEvent.title, moment(new Date(newEvent.date)).format('MMMM Do YYYY'), newEvent.description, newEvent.street, newEvent.city, newEvent.state, newEvent.zip))

    document.getElementById('past-events').innerHTML = pastAccumulator
  }).catch(error => {
    console.log(error)
  })
}

module.exports = allEvents
