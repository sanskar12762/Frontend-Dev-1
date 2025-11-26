class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  discount() {
    this.price = this.price - (this.price * 0.10);
  }

  details() {
    console.log(this.id, this.name, this.price, this.category);
  }
}

let p1 = new Product(1, "Keyboard", 850, "Electronics");
let p2 = new Product(2, "Watch", 2500, "Wearable");
let p3 = new Product(3, "Shoes", 1500, "Fashion");

p2.discount();

let arr = [p1, p2, p3];

console.log("All:");
for (let i = 0; i < arr.length; i++) {
  arr[i].details();
}

console.log("Price > 1000:");
let result = arr.filter(x => x.price > 1000);
for (let i = 0; i < result.length; i++) {
  result[i].details();
}
