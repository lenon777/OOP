function Animal(breed) {
    this.breed = breed;
}
Animal.prototype.getBreed = function () {
    console.log("Wof-wof I am " + this.breed)
}
function Dog(breed) {
    Animal.call(this,breed);
    if (!(this instanceof Dog)){
        return new Dog(breed);
   }
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const haski = new Dog('haski');
const pitBul = Dog('pitBull');
haski.getBreed(); // haski
// still works
pitBul.getBreed(); // pitBull
pitBul instanceof Dog // true
