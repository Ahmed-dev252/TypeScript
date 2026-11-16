"use strict";
let productName = "Laptop";
let productPrice = 1500;
let discountAvailable = true;
function getDiscount(price, discount) {
    return price - price * discount;
}
function printLength(x) {
    console.log(x.length);
}

console.log(getDiscount(productPrice, 0.2));
printLength(productName);
