// constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// prototype method (shared by all car objects)
Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

// making objects
let c1 = new Car("Toyota", "Fortuner");
let c2 = new Car("Honda", "City");

// calling method
c1.getDetails();
c2.getDetails();
