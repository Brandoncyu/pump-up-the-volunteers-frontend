function eventFormAddress() {
  const infoOrg = JSON.parse(localStorage.getItem('info_org'))
  if (document.getElementById('addressCheck').checked == true) {
    document.getElementById('event-address1').value = infoOrg.street
    document.getElementById('event-city').value = infoOrg.city
    document.getElementById('event-state').value = infoOrg.state
    document.getElementById('event-zip').value = infoOrg.zip
  } else {
    document.getElementById('event-address1').value = ''
    document.getElementById('event-city').value = ''
    document.getElementById('event-state').value = 'AL'
    document.getElementById('event-zip').value = ''
  }
}

module.exports = eventFormAddress
