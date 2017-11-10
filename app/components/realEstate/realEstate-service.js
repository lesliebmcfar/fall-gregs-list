function realEstateService() {
    
        // WHATS PRIVATE?
        // DUMMY DATA
        var realEstate = [{
            id: 'asdfkljsdafdsaflkj239023u9402u',
            homeType: 'Honda',
            style: 'Accord',
            yearBuilt: '1987',
            color: 'Burgandy',
            price: 1800,
            sqft: 323200,
            bedrooms: 3,
            bathrooms: 3, //GOOD QUESTION
            description: 'Runs great with gas',
            location: 'Boise',
            contact: 'testcar@cars.realEstate',
            img: '//loremflickr.com/200/200/castle',
            title: 'Your New Home'
        }]
    
        var homeType = [
            { id: 1, homeType: 'Apartment', bedrooms: [] },
            { id: 2, homeType: 'Duplex ', bedrooms: [] },
            { id: 3, homeType: 'House', bedrooms: [] },
            { id: 4, homeType: 'Condo', bedrooms: []},
         
        ]
        var id = 0;
        function Auto(config){
            this.title = config.title.value
            this.make = config.make.value
            this.model = config.model.value
            this.year = config.year.value
            this.price = config.price.value
            this.mileage = config.mileage.value
            this.color = config.color.value
            this.contact = config.contact.value
            this.location = config.location.value
            this.condition = config.condition.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getAutos = function getAutos(){
            return realEstates
        }
        
        this.getAuto = function getAuto(id){
            for (var i = 0; i < realEstates.length; i++) {
                var realEstate = realEstates[i];
                if(id == realEstate.id){
                    return realEstate
                }
            }
        }
    
        this.addAuto = function addAuto(form){
            var newAuto = new Auto(form)
            realEstates.unshift(newAuto)
        }
    
    }