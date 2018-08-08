// LOG IN
function login(email, password) {
  return axios.post(`${baseURL}/api/organizations/login`, {email, password})
}

// SIGN UP
function signup(email, password, name, ein, logo, description) {
  return axios.post(`${baseURL}/api/organizations/signup`, {
    email,
    password,
    name,
    ein,
    logo,
    description
  })
}

function allEvents(id) {
  return axios.get(`${baseURL}/api/organizations/${id}/events`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token_org')}`
    }
  })
}

module.exports = {
  signup,
  login,
  allEvents
}
