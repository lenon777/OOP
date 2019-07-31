function Animal(breed) {
     this.breed = breed;
}
Animal.prototype.getBreed = function () {
     console.log("Wof-wof I am " + this.breed)
}
function Dog(breed) {
     this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const haski = new Dog('haski');
haski.getBreed();