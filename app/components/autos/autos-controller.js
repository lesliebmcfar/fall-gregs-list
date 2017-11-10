function AutosController() {
  var autosService = new AutosService()


  // Buttons
  // Add New Auto
  // Delete Auto
  // Report Flag
  // View More
  // Filter / Search
  var autosElem = document.getElementById('autos-list')
  var autosFormElem = document.getElementById('add-auto-form')
  var showButton = document.getElementById('show-button')
  function drawAutos() {
    // WHERE ARE ALL THE AUTOS?
    var autos = autosService.getAutos()
    var template = ''
    for (var i = 0; i < autos.length; i++) {
      var auto = autos[i];
      template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${auto.title}</h3>
                        <h6>${auto.location}</h6>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${auto.img}" class="img-responsive">
                        <h4>${auto.year} - ${auto.make} ${auto.model}</h4>
                    </div>
                    <div class="panel-footer">
                        <h5>$ ${auto.price}</h5>
                    </div>
                </div>
            </div>
            `
    }
    autosElem.innerHTML = template
  }

  this.addAuto = function addAuto(event) {
    event.preventDefault()
    var form = event.target
    autosService.addAuto(form)
    autosFormElem.classList.toggle('hidden', true)
    drawAutos()
  }
  var formstate = false
  
  this.showAddAutoForm = function showAddAutoForm() {
    if (formstate) {
      showButton.innerText = 'Add Listing'
      showButton.className = 'btn btn-info'
      autosFormElem.classList.add('hidden')
      formstate = false
    } else {
      showButton.innerText = 'Cancel'
      showButton.className = 'btn btn-danger'
      autosFormElem.classList.remove('hidden')
      formstate = true
    }
  }

  drawAutos()
}