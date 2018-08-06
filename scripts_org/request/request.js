// LOG IN
function login(email, password) {
  return axios.post(`${baseURL}/volunteers/login`, {email, password})
}

// SIGN UP
function signup(email, password, name, ein, logo, description) {
  return axios.post(`${baseURL}/volunteers/signup`, {
    email,
    password,
    name,
    ein,
    logo,
    description
  })
}

module.exports = {
  signup,
  login
}
