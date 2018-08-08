const request = require('../request/request')
const cardOrgTemplate = require('../templates/cardOrgTemplate')

function allEvents() {
  const infoOrg = JSON.parse(localStorage.getItem('info_org'))

  request.allEvents(infoOrg.id).then(response => {
    const events = response.data.events
    console.log(events)
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
      if (today < new Date(element.date)) {
        pastEvents.push(element)
      } else {
        upcomingEvents.push(element)
      }
    })
    let upcomingAccumulator = ''

    upcomingEvents.forEach(element => upcomingAccumulator += cardOrgTemplate(element.id, infoOrg.logo, element.title, new Date(element.date), element.description, element.street, element.city, element.state, element.zip))

    document.getElementById('upcoming-events').innerHTML = upcomingAccumulator

    let pastAccumulator = ''

    pastEvents.forEach(element => pastAccumulator += cardOrgTemplate(element.id, infoOrg.logo, element.title, element.date, element.description, element.street, element.city, element.state, element.zip))

    document.getElementById('past-events').innerHTML = pastAccumulator
  }).catch(error => {
    console.log(error)
  })
}

module.exports = allEvents
