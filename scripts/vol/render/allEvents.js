const request = require('../request/request')
const availEvents = require('../templates/availEvents')
const rsvpEvents = require('../templates/rsvpEvents')
const interested = require('../buttons/interested')
const notInterested = require('../buttons/notInterested')
const moment = require('moment')

function allEvents(){
  const infoOrg = JSON.parse(localStorage.getItem('info_vol'))
  const days = infoOrg.days
  const interests = infoOrg.interests
  const id = infoOrg.id
  request.signedUp(id)
  .then(res => {
    const registeredEvents = res.data.events
    const eventIdArray = registeredEvents.map(event => event.event_id)

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

      events.forEach(newEvent => {
        if (eventIdArray.includes(newEvent.id)){
          let statusFinder = registeredEvents.find(el=> newEvent.id == el.event_id).status
          newEvent.status = statusFinder
          RSVP.push(newEvent)
        } else{
          noRSVP.push(newEvent)
        }
      })

      noRSVP.forEach(newEvent => {
        availableAccumulator += availEvents(newEvent.id, id, newEvent.logo, newEvent.title, newEvent.name, moment(newEvent.date).format('MMMM Do YYYY'), newEvent.description, newEvent.street, newEvent.city, newEvent.state, newEvent.zip)
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

      const upcomingEvents = []
      const pastEvents = []
      const today = new Date()

      let trueRSVP = RSVP.filter(newEvent => newEvent.status == true)
      trueRSVP.forEach(newEvent => {
        if (today <= new Date(newEvent.date)) {
          upcomingEvents.push(newEvent)
        } else {
          pastEvents.push(newEvent)
        }
      })

      let upcomingAccumulator = ''

      upcomingEvents.forEach(newEvent => upcomingAccumulator += rsvpEvents(newEvent.id, infoOrg.id, newEvent.logo, newEvent.title, newEvent.name, moment(new Date(newEvent.date)).format('MMMM Do YYYY'), newEvent.description, newEvent.street, newEvent.city, newEvent.state, newEvent.zip))

      let pastAccumulator = ''

      pastEvents.forEach(newEvent => pastAccumulator += rsvpEvents(newEvent.id, infoOrg.id, newEvent.logo, newEvent.title, newEvent.name, moment(new Date(newEvent.date)).format('MMMM Do YYYY'), newEvent.description, newEvent.street, newEvent.city, newEvent.state, newEvent.zip))

      document.getElementById('upcoming-events').innerHTML = upcomingAccumulator
      document.getElementById('past-events').innerHTML = pastAccumulator

    }).catch(error => {
      console.log(error)
    })
  })

}

module.exports = allEvents
