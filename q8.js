let objects = [
{
    item : "Laptop" , category : "electronic" , price : 45000},
{
    item : "Shoes" , category : "fashion" , price : 2500
},
{
    item : "Book" , category : "education" , price : 600
}
];
let total_cart = 0;
for(let i = 0 ; i < objects.length ;i++){
    if(objects[i].category === "electronic"){
        console.log("10% Discount");
    }
    else if(objects[i].category === "fashion"){
        console.log("5% Discount");
    }

    total_cart += objects[i].price;
}

if(total_cart > 50000){
    console.log("extra 5 % overall discount");
}const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedPrices = [];

for (let i = 0; i < cart.length; i++) {
    let price = cart[i].price;

    if (cart[i].category === "electronics") {
        price = price - price * 0.10;   
    } 
    else if (cart[i].category === "fashion") {
        price = price - price * 0.05;  
    }

    discountedPrices.push(price);
}
let total = 0;

for(let i = 0; i < discountedPrices.length; i++) {
    total += discountedPrices[i];
}

if (total > 50000) {
    total = total - total * 0.05;
}

console.log("Final Total:", total);


