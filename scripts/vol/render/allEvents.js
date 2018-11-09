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

      events.forEach(event => {
        if (eventIdArray.includes(event.id)){
          let statusFinder = registeredEvents.find(el=> event.id == el.event_id).status
          event.status = statusFinder
          RSVP.push(event)
        } else{
          noRSVP.push(event)
        }
      })

      noRSVP.forEach(event => {
        availableAccumulator += availEvents(event.id, id, event.logo, event.title, event.name, moment(event.date).format('MMMM Do YYYY'), event.description, event.street, event.city, event.state, event.zip)
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

      let trueRSVP = RSVP.filter(event => event.status == true)
      trueRSVP.forEach(event => {
        if (today <= new Date(event.date)) {
          upcomingEvents.push(event)
        } else {
          pastEvents.push(event)
        }
      })

      let upcomingAccumulator = ''

      upcomingEvents.forEach(event => upcomingAccumulator += rsvpEvents(event.id, infoOrg.id, event.logo, event.title, event.name, moment(new Date(event.date)).format('MMMM Do YYYY'), event.description, event.street, event.city, event.state, event.zip))

      let pastAccumulator = ''

      pastEvents.forEach(event => pastAccumulator += rsvpEvents(event.id, infoOrg.id, event.logo, event.title, event.name, moment(new Date(event.date)).format('MMMM Do YYYY'), event.description, event.street, event.city, event.state, event.zip))

      document.getElementById('upcoming-events').innerHTML = upcomingAccumulator
      document.getElementById('past-events').innerHTML = pastAccumulator

    }).catch(error => {
      console.log(error)
    })
  })

}

module.exports = allEvents
