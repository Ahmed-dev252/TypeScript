let productName: string = "Laptop";
let productPrice: number = 1500;
let discountAvailable: boolean = true;

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}


function printLength(x: unknown): void {
  console.log((x as { length: number }).length);
}
