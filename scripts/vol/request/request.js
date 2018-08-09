// LOG IN
function login(email, password) {
  return axios.post(`${baseURL}/api/volunteers/login`, {email, password})
}

// SIGN UP
function signup(firstName, lastName, email, password, address1, city, state, zip, days, interests) {
  return axios.post(`${baseURL}/api/volunteers/signup`, {
    firstName,
    lastName,
    email,
    password,
    address1,
    city,
    state,
    zip,
    days,
    interests
  })
}

function eventLoad(days, interests, id) {
  let newDays = JSON.stringify(days)
  let newInterests = JSON.stringify(interests)
  return axios.get(`${baseURL}/api/volunteers/${id}/events?interests=${newInterests}&days=${newDays}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token_vol')}`
    }
  })
}

function createFavorite(eventId, volId, status){
  return axios(`${baseURL}/api/volunteers/${volId}/events`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token_vol')}`
    },
    data: {
      volId: volId,
      status,
      eventId: eventId
    }
  })
}

function signedUp(volId){
  return axios.get(`${baseURL}/api/volunteers/${volId}/events/${volId}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token_vol')}`
    }
  })
}

module.exports = {
  signup,
  login,
  eventLoad,
  createFavorite,
  signedUp
}
