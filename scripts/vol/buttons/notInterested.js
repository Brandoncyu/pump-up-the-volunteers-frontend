function notInterested(element){
  return function(){
    const allEvents = require('../render/allEvents')
    const eventId = element.getAttribute('eventid')
    const volId = element.getAttribute('volid')
    console.log(eventId, volId)
    allEvents()
  }
}

module.exports = notInterested
