function interested(intEvent){
  return function(){
    const allEvents = require('../render/allEvents')
    const request = require('../request/request')
    const eventId = intEvent.getAttribute('eventid')
    const volId = intEvent.getAttribute('volid')
    const status = true
    request.createFavorite(eventId, volId, status)
    .then(response => {
      allEvents()
    })
  }
}

module.exports = interested
