const loginTemplate = () => {
  return `<h3>Login!</h3>
  <br>
  <form id="login-form">
    <div class="form-group">
      <label for="login-email">Email Address</label><br>
      <input class="form-control" type="email" id="login-email" placeholder="Please enter your email" required="required" value="info@mopop.org">
    </div>
    <div class="form-group">
      <label for="login-password">Password</label><br>
      <input class="form-control" type="password" id="login-password" placeholder="Please enter your password" required="required" value="password">
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
  <span id="login-alert" style="color:red;"></span>`
}

module.exports = loginTemplate
