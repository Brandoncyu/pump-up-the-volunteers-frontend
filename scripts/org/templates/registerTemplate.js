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
      <small id="register-ein-text" class="form-text text-muted">
      Only numbers are necessary. No dashes required.
      </small>
    </div>
    <div class="form-group">
      <label for="register-logo">A Link to Your Organization's Logo</label><br>
      <input class="form-control" type="url" id="register-logo" placeholder="Please enter a photo link to your organization's logo" required="required">
    </div>
    <div class="form-group">
      <label for="register-description">Your Organiation's Description</label>
      <textarea id="register-description" name="register-description" type="text" class="form-control" rows="3" maxlength='255' placeholder="Enter your organization's description" required="required"></textarea>
    </div>
    <button class="btn btn-success" type="submit">Submit</button>
  </form>
  <span id="register-alert" style="color:red;"></span>`
}

module.exports = registerTemplate
