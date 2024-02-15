// Constructor function for Product
function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
  }
  
  
  let products = [
    new Product("Iphone", "Electronics", true, 500),
    new Product("Umbrella", "Material", false, 18),
    new Product("Laptop", "Electronics", true, 1200),
    new Product("PS5","Electronics",true,300 ),
    new Product("Cheese","Food",true,300)
  ];
  
  
  let ProductsAbove20= products.filter(product => product.price > 20);
  console.log("Products above 20:", ProductsAbove20);
  

  let foodProductsOnDiscount = products.filter(product => product.category === "Food" && product.hasDiscount);
  let foodProductNamesOnDiscount = foodProductsOnDiscount.map(product => product.name);
  console.log("Food products on discount:", foodProductNamesOnDiscount);
  
  
  let pricesOfDiscountedProducts = products.filter(product => product.hasDiscount).map(product => product.price);
  console.log("Prices of products on discount:", pricesOfDiscountedProducts);
  
  let nonDiscountedVowelProducts = products.filter(product => !product.hasDiscount && isVowel(product.name[0]));

let nonDiscountedVowelProductInfo = nonDiscountedVowelProducts.map(product=> product.name);

console.log("Non-discounted products starting with a vowel:", nonDiscountedVowelProductInfo);



function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let VowelChar = false;
  for (let vowel of vowels) {
    if (char === vowel) {
      VowelChar = true;
      break;
    }
  }
  return VowelChar;
}