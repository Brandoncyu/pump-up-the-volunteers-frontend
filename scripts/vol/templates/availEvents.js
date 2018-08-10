const availEvents = (eventid, volid, logo, title, org, date, description, street, city, state, zip) => `<div class="card available" eventid="${eventid}" volid="${volid}">
  <div class="card-top">
    <img class="card-img-top card-image" src=${logo} alt="Card image cap">
  </div>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-text card-date">
      ${date}
    </h6>

    <p class="card-text description">${description}
    </p>
    <p class="card-text address">
      <strong>Address:</strong>
      ${street}<br>${city}, ${state} ${zip}
    </p>
    <small class="card-text text-muted card-org">
      Hosted by ${org}
    </small>
  </div>
  <div class="card-footer text-muted d-flex justify-content-between">
    <button type="button" class="btn btn-sm btn-outline-primary interested" eventid="${eventid}" volid="${volid}">I'm Interested</button>
    <button type="button" class="btn btn-sm btn-outline-primary not-interested" eventid="${eventid}" volid="${volid}">Not Interested</button>
  </div>
</div>`

module.exports = availEvents
