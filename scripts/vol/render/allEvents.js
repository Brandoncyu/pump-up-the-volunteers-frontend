const request = require('../request/request')
const availEvents = require('../templates/availEvents')
const interested = require('../buttons/interested')
const notInterested = require('../buttons/notInterested')

function allEvents(){
  const infoOrg = JSON.parse(localStorage.getItem('info_vol'))
  const days = infoOrg.days
  const interests = infoOrg.interests
  const id = infoOrg.id
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
    events.forEach(element => {
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

  }).catch(error => {
    console.log(error)
  })
}

module.exports = allEvents
