const request = require('../request/request')
const availEvents = require('../templates/availEvents')
const rsvpEvents = require('../templates/rsvpEvents')
const interested = require('../buttons/interested')
const notInterested = require('../buttons/notInterested')

function allEvents(){
  const infoOrg = JSON.parse(localStorage.getItem('info_vol'))
  const days = infoOrg.days
  const interests = infoOrg.interests
  const id = infoOrg.id
  request.signedUp(id)
  .then(res => {
    const registeredEvents = res.data.events
    const eventIdArray = registeredEvents.map(element => element.event_id)

    request.eventLoad(days, interests, id).then(response => {
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

      const RSVP = []
      const noRSVP = []

      events.forEach(element => {
        if (eventIdArray.includes(element.id)){
          let statusFinder = registeredEvents.find(el=> element.id == el.event_id).status
          element.status = statusFinder
          RSVP.push(element)
        } else{
          noRSVP.push(element)
        }
      })

      noRSVP.forEach(element => {
        availableAccumulator += availEvents(element.id, id, element.logo, element.title, element.name, element.date, element.description, element.street, element.city, element.state, element.zip)
      })
      document.getElementById('available-events').innerHTML = availableAccumulator
      const interestedButtons = document.querySelectorAll('.interested')

      interestedButtons.forEach(element => {
        element.addEventListener('click', interested(element))
      })

      const notInterestedButtons = document.querySelectorAll('.not-interested')

      notInterestedButtons.forEach(element => {
        element.addEventListener('click', notInterested(element))
      })

      const upcomingEvents = []
      const pastEvents = []
      const today = new Date()

      let trueRSVP = RSVP.filter(element => element.status == true)
      trueRSVP.forEach(element => {
        if (today <= new Date(element.date)) {
          upcomingEvents.push(element)

        } else {
          pastEvents.push(element)
        }
      })

      let upcomingAccumulator = ''

      upcomingEvents.forEach(element => upcomingAccumulator += rsvpEvents(element.id, infoOrg.id, element.logo, element.title, element.name, new Date(element.date), element.description, element.street, element.city, element.state, element.zip))

      let pastAccumulator = ''

      pastEvents.forEach(element => pastAccumulator += rsvpEvents(element.id, infoOrg.id, element.logo, element.title, element.name, new Date(element.date), element.description, element.street, element.city, element.state, element.zip))

      document.getElementById('upcoming-events').innerHTML = upcomingAccumulator
      document.getElementById('past-events').innerHTML = pastAccumulator

    }).catch(error => {
      console.log(error)
    })
  })

}

module.exports = allEvents
