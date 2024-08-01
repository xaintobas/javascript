let cartQuantity = 0;

const showQuantity = function() {
  console.log(`Cart quantity is: ${cartQuantity}`);
  document.querySelector('.cartQuantityHtml').innerHTML = `${cartQuantity}`;
}

const addOne = function() {
  cartQuantity += 1;
  console.log(`Cart quantity is: ${cartQuantity}`); 
  document.querySelector('.cartQuantityHtml').innerHTML = `${cartQuantity}`;
}

const addTwo = function() {
  cartQuantity += 2;
  console.log(`Cart quantity is: ${cartQuantity}`); 
  document.querySelector('.cartQuantityHtml').innerHTML = `${cartQuantity}`;
}

const addThree = function() {
  cartQuantity += 3;
  console.log(`Cart quantity is: ${cartQuantity}`);
  document.querySelector('.cartQuantityHtml').innerHTML = `${cartQuantity}`;
}

const reset = function() {
  cartQuantity = 0;
  console.log(`Cart was reset!!`); 
  console.log(`Cart quantity is: ${cartQuantity}`); 
  document.querySelector('.cartQuantityHtml').innerHTML = `${cartQuantity}`;
}