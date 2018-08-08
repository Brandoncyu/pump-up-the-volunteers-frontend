const cardOrgTemplate = (id, logo, name, date, description, street, city, state, zip) => {
  return `<div class="card" eventId="${id}">
    <img class="card-img-top card-image" src="${logo}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text date">
        <small class ="date">${date}</small>
      </p>
      <p class="card-text description">${description}
      </p>
      <p class="card-text address"><strong>Address:</strong> ${street}<br>${city}, ${state} ${zip}
      </p>
    </div>
    <div class="card-footer text-muted d-flex justify-content-end">
      <button type="button" class="btn btn-outline-success">Success</button>
    </div>
  </div>`
}

module.exports = cardOrgTemplate
