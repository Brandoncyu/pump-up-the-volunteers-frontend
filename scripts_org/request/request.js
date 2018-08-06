// LOG IN
function login (email, password) {
    return axios.post(`$(baseURL)/volunteers/login`, {
        email,
        password
    })
}

// SIGN UP 
function signup (email, password, ein) {
    return axios.post(`$(baseURL)/volunteers/signup`, {
        email,
        password,
        ein
    })
}

module.exports = {
    signup, 
    login
}