// Write your code here:

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name(){
            return this._name;
        },
        get breed(){
            return this._breed;
        },
        get weight(){
            return this._weight;
        },
        set name(newName){
            (typeof newName == 'string')
            ? this._name = newName
            : console.log('Please enter a string');
        },
        set breed(newBreed){
            (typeof newBreed == 'string')
            ? this._breed = newBreed
            : console.log('Please enter a string');
        },
        set weight(newWeight){
            (typeof newWeight == 'number')
            ? this._weight = newWeight
            : console.log('Please enter a number');
        },
    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this._weight += 1;
    } 
  }
}
  
  const newDog = dogFactory('Joe', 'Pug', 27);
  /* Should return { name: 'Joe', breed: 'Pug', weight: 27 } */