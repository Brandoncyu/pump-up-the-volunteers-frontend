const registerTemplate = () => {
  return `<h3>Register!</h3>
  <br>
  <form id="register-form">
    <div class="form-group">
      <label for="register-email">Email Address</label><br>
      <input class="form-control" type="email" id="register-email" placeholder="Please enter your email address" required="required">
    </div>
    <div class="form-group">
      <label for="register-password">Password</label><br>
      <input class="form-control" type="password" id="register-password" placeholder="Please enter your password" required="required">
    </div>
    <div class="form-group">
      <label for="register-name">Your Organization's Name</label><br>
      <input class="form-control" type="text" id="register-name" placeholder="Please enter your organization's name" required="required">
    </div>
    <div class="form-group">
      <label for="register-ein">Your Organization's EIN Number</label><br>
      <input class="form-control" type="number" id="register-ein" placeholder="Please enter your organiation's EIN number" required="required">
    </div>
    <button class="btn btn-success" type="submit">Submit</button>
  </form>`
}

module.exports = registerTemplate
