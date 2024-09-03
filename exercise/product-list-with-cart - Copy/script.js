'use strict';

const productsEl = document.querySelector('.product')
const cartSectionEl = document.querySelector('.cartSection');
let btnAddItemEl = document.querySelector('.btnAddItem');
let cartBtnEl = document.querySelectorAll('.cart-btn');
let cartEl = document.querySelectorAll('.cart');
const modalEl = document.querySelector('.modal');
const modalSectionEl = document.querySelector('.modalSection');
const btnConfirmOrderEl = document.querySelector('.btnConfirmOrder');


let cartAddButtonEl;
let cartQuantity = '';
let productHTML = '';
let cartItemHtml = '';


fetch("data.json")
  .then(response => response.json())
  .then(values => {
    for (let i = 0; i < values.length; i++){
      productHTML = `<div class="productItem ">
            <div class="productHeader">
              <picture class="productImage">
                <source media="(max-width:360px)" srcset="${values[i].image.mobile}">
                <source media="(max-width:900px)" srcset="${values[i].image.tablet}">
                <source media="(min-width:901px)" srcset="${values[i].image.desktop}">
                <img src="${values[i].image.mobile}" alt="">
              </picture>
              <div class="product-btn">
                <div class="cart-btn btnAddCart${i}">
                  <button class="btnAddItem btn${i}"><span class="cart-icon"><img src="images/icon-add-to-cart.svg" alt=""></span>Add to Cart</button>
                </div>
                <div class="cart btnCartAction${i} hidden">
                  <div class="cart-option">
                    <p class="cartDecrement">-</p>
                    <p class="productQuantity">0</p>
                    <p class="cartIncreament">+</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-footer">
              <p class="productCategory">${values[i].category}</p>
              <h2 class="productName">${values[i].name}</h2>
              <p class="productPrice">$${values[i].price.toFixed(2)}</p>
            </div>
          </div>`
          productsEl.innerHTML += productHTML;
    }
  }
);


const buttonAdd = function () {
  fetch("data.json")
    .then(response => response.json())
    .then(values => {
      for (let i = 0; i < values.length; i++){
        cartAddButtonEl = document.querySelector(`.btn${i}`);
        cartAddButtonEl.addEventListener('click', function () {
          let btnAddCartEl = document.querySelector(`.btnAddCart${i}`);
          let btnCartActionEl = document.querySelector(`.btnCartAction${i}`);

          btnAddCartEl.classList.toggle('hidden');
          btnCartActionEl.classList.remove('hidden');

          // console.log(btnAddCartEl, btnCartActionEl);

          console.log(`Clicked btn${i}`);

        })
        
      }
    } 
  )
};

// buttonAdd();


if(cartQuantity) {
  cartSectionEl.innerHTML = `<h2 class="cart-title">Your Cart is (0)</h2>
        <div class="cart-summary">
          <div class="cart-items">
            <img class="emptyCart" src="images/illustration-empty-cart.svg" alt="">
            <p class="cart-details">Your added items will appear here</p>
          </div>
        </div>`;
} else {
  cartSectionEl.innerHTML =  `<h2 class="cart-title">Your Cart has (3) items</h2>
          <div class="cartItem">
            <div class="itemDescription">
              <img src="images/image-waffle-thumbnail.jpg" alt="">
              <div class="itemDetails">
                <p class="itemTitle">Salted Caramel Brownie</p>
                <div class="itemPcs">
                  <span class="numberOfItem">2x</span>
                  <span class="costPerItem">@ $4.50</span>
                  <span class="totalPerItem">$9.00</span>
                </div>
              </div>
            </div>
            <img class="removeIcon" src="images/icon-remove-item.svg" alt="">
          </div>
  
          <div class="cartItem">
            <div class="itemDescription">
              <img src="images/image-creme-brulee-thumbnail.jpg" alt="">
              <div class="itemDetails">
                <p class="itemTitle">Vanilla Bean Crème Brûlée</p>
                <div class="itemPcs">
                  <span class="numberOfItem">3x</span>
                  <span class="costPerItem">@ $13.50</span>
                  <span class="totalPerItem">$40.50</span>
                </div>
              </div>
            </div>
            <img class="removeIcon" src="images/icon-remove-item.svg" alt="">
          </div>
  
          <div class="cartItem">
            <div class="itemDescription">
              <img src="images/image-macaron-thumbnail.jpg" alt="">
              <div class="itemDetails">
                <p class="itemTitle">Macaron Mix of Five</p>
                <div class="itemPcs">
                  <span class="numberOfItem">2x</span>
                  <span class="costPerItem">@ $7.00</span>
                  <span class="totalPerItem">$14.00</span>
                </div>
              </div>
            </div>
            <img class="removeIcon" src="images/icon-remove-item.svg" alt="">
          </div>
  
          
          <div class="total">
            <span class="orderTotal">Order Total</span>
            <span class="grandTotal">$61.00</span>
          </div>
          <p class="shippingDetails"> <span><img src="images/icon-carbon-neutral.svg" alt=""></span>This is a <a href="">𝕏 xaint_obas</a> express delivery</p>
  
          <a href="" class="btn btnConfirmOrder">Confirm Order</a>`;
};


const showModal =  function () {
  
};

const closeModal = function () { 
  modalSectionEl.style.display = 'none';
}; 

btnConfirmOrderEl.addEventListener('click', function() {
  modalSectionEl.style.display = 'block';
});
 

