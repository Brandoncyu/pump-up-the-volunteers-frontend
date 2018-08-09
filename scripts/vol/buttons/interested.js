function interested(element){
  return function(){
    const allEvents = require('../render/allEvents')
    const eventId = element.getAttribute('eventid')
    const volId = element.getAttribute('volid')
    allEvents()
  }
}

module.exports = interested
