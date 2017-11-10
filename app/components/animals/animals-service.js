function AnimalsService() {
   
        // WHATS PRIVATE?
        // DUMMY DATA
        var animals = [{
            id: 'asdfkljsdafdsaflkj239023u9402u',
            type: 'dog',
            breed: 'lab',
            location: 'Boise',
            contact: 'testanimal@cars.animal',
            img: '//loremflickr.com/200/200/dog',
            description: 'Your New dog'
        }]
    
        var types = [ 
             { id: 2, type: 'cat'},
             { id: 3, type: 'bird'},
             { id: 4, type: 'rodent'},
             { id: 5, type: 'snake'},
             { id: 6, type: 'fish'},
         ]
         
        var types = [
            { id: 1,  breed:"[]", },
             { id: 2, breed: "[]",},
             { id: 3, breed: "[]", },
            
         ]
        var id = 0;


        function Animal(config){
            this.type = config.type.value
            this.breed = config.breed.value        
            this.location = config.location.value
            this.contact = config.conytact.value
            this.description = config.description.value
            this.img = config.img.value
            this.id = id++
        }
    
        // PUBLIC?
    
        this.getAnimals = function getAnimals(){
            debugger
            return animals
        }
        
        this.getAnimal = function getAnimal(id){
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i];
                if(id == animal.id){
                    return animal
                }
            }
        }
    
        this.addAnimal = function addAnimal(form){
            var newAnimal = new Animal(form)
            animals.unshift(newAnimal)
        }
    
    }