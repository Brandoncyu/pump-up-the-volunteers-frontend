function notInterested(notIntEvent){
  return function(){
    const allEvents = require('../render/allEvents')
    const request = require('../request/request')
    const eventId = notIntEvent.getAttribute('eventid')
    const volId = notIntEvent.getAttribute('volid')
    const status = false
    request.createFavorite(eventId, volId, status)
    .then(response => {
      allEvents()
    })

  }
}

module.exports = notInterested
