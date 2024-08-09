function isEnoughCapacity(products, containerSize) {
    let allProducts = 0;
    const values = Object.values(products);
    for (const value of values) {
        allProducts += value;
    };
    return allProducts <= containerSize;
};

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); 

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); 

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); 

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); 