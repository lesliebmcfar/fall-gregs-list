function realEstateController() {
    var realEstateService = new RealEstateService()
 
    // Buttons
    // Add New animal
    // Delete animal
    // Report Flag
    // View More
    // Filter / Search
    var realEstateElem = document.getElementById('realEstate-list')
    var realEstateFormElem = document.getElementById('add-realEstate-form')
    var showButton = document.getElementById('show-button')
    function drawrealEstate() {
    
      // WHERE ARE ALL THE realEstate?
      var realEstate = realEstateService.getrealEstate()
      var template = ''
      for (var i = 0; i < realEstate.length; i++) {
        var animal = realEstate[i];
        template += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${realEstate.type}</h3>
                          <h6>${realEstate.location}</h6>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${realEstate.img}" class="img-responsive">
                          <h4>${realEstate.breed} - ${realEstate.description} ${realEstate.contact}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${realEstate.price}</h5>
                      </div>
                  </div>
              </div>
              `
      }
      realEstateElem.innerHTML = template

  
    this.addrealEstate = function addrealEstate(event) {
     
      event.preventDefault()
      var form = event.target
      realEstateService.addAnimal(form)
      realEstateFormElem.classList.toggle('hidden', true)
      drawrealEstate()
    }
    var formstate = false
    
    this.showAddrealEstateForm = function showAddrealEstatelForm() {
      if (formstate) {
        showButton.innerText = 'Add Listing'
        showButton.className = 'btn btn-info'
        realEstateFormElem.classList.add('hidden')
        formstate = false
      } else {
        showButton.innerText = 'Cancel'
        showButton.className = 'btn btn-danger'
        realEstateFormElem.classList.remove('hidden')
        formstate = true
      }
    }
  
    drawrealEstate()
  }
}