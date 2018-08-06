// LOG IN
function login(email, password) {
  return axios.post(`${baseURL}/volunteers/login`, {email, password})
}

// SIGN UP
function signup(firstName, lastName, email, password, address1, city, state, zip, days, interests) {
  return axios.post(`${baseURL}/volunteers/signup`, {
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

module.exports = {
  signup,
  login
}
