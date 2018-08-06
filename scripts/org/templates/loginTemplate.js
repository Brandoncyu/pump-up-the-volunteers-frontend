const loginTemplate = () => {
  return `<h3>Login!</h3>
  <br>
  <form id="login-form">
    <div class="form-group">
      <label for="login-email">Email Address</label><br>
      <input class="form-control" type="email" id="login-email" placeholder="Please enter your email" required="required">
    </div>
    <div class="form-group">
      <label for="login-password">Password</label><br>
      <input class="form-control" type="password" id="login-password" placeholder="Please enter your password" required="required">
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>`
}

module.exports = loginTemplate
