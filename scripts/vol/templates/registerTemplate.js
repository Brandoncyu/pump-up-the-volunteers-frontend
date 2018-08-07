const registerTemplate = () => {
  return `<h3>Register!</h3>
<br>
<form id="register-form">
  <div class="row form-group">
    <div class="col">
      <label for="first-name">First Name</label>
      <br>
        <input class="form-control" type="text" name="first-name" id="first-name" placeholder="Please enter your first name" required="required"></div>
        <div class="col">
          <label for="last-name">Last Name</label>
          <br>
            <input class="form-control" type="text" name="last-name" id="last-name" placeholder="Please enter your last name" required="required"></div>
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <br>
              <input class="form-control" type="email" name="email" id="email" placeholder="Please enter your email" required="required"></div>
              <div class="form-group">
                <label for="password">Password</label>
                <br>
                  <input class="form-control" type="password" name="password" id="password" placeholder="Please enter your password" required="required"></div>
                  <div class="form-group">
                      <label for = "address1" > Street Address</label> <input class = "form-control" type = "text" name = "address1" id = "address1" placeholder = "Street Address" required = "required"> </div>
<div class="row form-group">
<div class="col">
  <label for="city">City</label>
  <br>
    <input class="form-control" type="text" id="city" placeholder="City" required="required"></div>

    <div class="col">
      <label for="state">State</label>
      <select class="form-control" name="state" id="state" required="required">
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    </div>
    <div class="col">
      <label for="zip">Zip Code</label>
      <input class="form-control" type="text" name="zip" id="zip" placeholder="Please enter Your 5-Digit Zip Code" maxlength="5" required="required"></div>
    </div>
    <br>
      <fieldset id="interests">
        <legend>Choose your interests</legend>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="interest" id="1" value="1">
            <label class="form-check-label" for="1">
              Arts, Culture and Humanities
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="interest" id="2" value="2">
              <label class="form-check-label" for="2">
                Educational Institutions and Related Activities
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="interest" id="3" value="3">
                <label class="form-check-label" for="3">
                  Environmental Quality, Protection and Beautification
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="interest" id="4" value="4">
                  <label class="form-check-label" for="4">
                    Animal-Related
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="interest" id="5" value="5">
                    <label class="form-check-label" for="5">
                      Recreation, Sports, Leisure, Athletics
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="interest" id="6" value="6">
                      <label class="form-check-label" for="6">
                        Youth Development
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="interest" id="7" value="7">
                        <label class="form-check-label" for="7">
                          Civil Rights, Social Action, Advocacy
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="interest" id="8" value="8">
                          <label class="form-check-label" for="8">
                            Community Improvement, Capacity Building
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="interest" id="9" value="9">
                            <label class="form-check-label" for="9">
                              Science and Technology Research Institutes, Services
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="interest" id="10" value="10">
                              <label class="form-check-label" for="10">
                                Religion-Related, Spiritual Development
                              </label>
                            </div>
                          </fieldset>
                          <br>
                            <br>
                              <fieldset id="days">
                                <legend>Days I Can Volunteer</legend>
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" name="Sunday" id="Sunday" value="true">
                                    <label class="form-check-label" for="Sunday">
                                      Sunday
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="Monday" id="Monday" value="true">
                                      <label class="form-check-label" for="Monday">
                                        Monday
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" name="Tuesday" id="Tuesday" value="true">
                                        <label class="form-check-label" for="Tuesday">
                                          Tuesday
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="Wednesday" id="Wednesday" value="true">
                                          <label class="form-check-label" for="Wednesday">
                                            Wednesday
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="checkbox" name="Thursday" id="Thursday" value="true">
                                            <label class="form-check-label" for="Thursday">
                                              Thursday
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="Friday" id="Friday" value="true">
                                              <label class="form-check-label" for="Friday">
                                                Friday
                                              </label>
                                            </div>
                                            <div class="form-check">
                                              <input class="form-check-input" type="checkbox" name="Saturday" id="Saturday" value="true">
                                                <label class="form-check-label" for="Saturday">
                                                  Saturday
                                                </label>
                                              </div>
                                            </fieldset>
                                            <br>
                                              <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>
                                            <span id="register-alert" style="color:red;"></span>`
}

module.exports = registerTemplate
