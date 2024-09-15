'use strict';

const productsEl = document.querySelector('.product');
const cartSectionEl = document.querySelector('.cartSection');

// let cartBtnEl = document.querySelectorAll('.cart-btn');
// let cartEl = document.querySelectorAll('.cart');

let cartAddButtonEl;
let cartQuantity = 0;
let productHTML = '';


const products = [
  {
      image: {
          thumbnail: "./images/image-waffle-thumbnail.jpg",
          mobile: "./images/image-waffle-mobile.jpg",
          tablet: "./images/image-waffle-tablet.jpg",
          desktop: "./images/image-waffle-desktop.jpg"
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.50
  },
  {
      image: {
          thumbnail: "./images/image-creme-brulee-thumbnail.jpg",
          mobile: "./images/image-creme-brulee-mobile.jpg",
          tablet: "./images/image-creme-brulee-tablet.jpg",
          desktop: "./images/image-creme-brulee-desktop.jpg"
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.00
  },
  {
      image: {
          thumbnail: "./images/image-macaron-thumbnail.jpg",
          mobile: "./images/image-macaron-mobile.jpg",
          tablet: "./images/image-macaron-tablet.jpg",
          desktop: "./images/image-macaron-desktop.jpg"
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.00
  },
  {
      image: {
          thumbnail: "./images/image-tiramisu-thumbnail.jpg",
          mobile: "./images/image-tiramisu-mobile.jpg",
          tablet: "./images/image-tiramisu-tablet.jpg",
          desktop: "./images/image-tiramisu-desktop.jpg"
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.50
  },
  {
      image: {
          thumbnail: "./images/image-baklava-thumbnail.jpg",
          mobile: "./images/image-baklava-mobile.jpg",
          tablet: "./images/image-baklava-tablet.jpg",
          desktop: "./images/image-baklava-desktop.jpg"
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.00
  },
  {
      image: {
          thumbnail: "./images/image-meringue-thumbnail.jpg",
          mobile: "./images/image-meringue-mobile.jpg",
          tablet: "./images/image-meringue-tablet.jpg",
          desktop: "./images/image-meringue-desktop.jpg"
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.00
  },
  {
      image: {
          thumbnail: "./images/image-cake-thumbnail.jpg",
          mobile: "./images/image-cake-mobile.jpg",
          tablet: "./images/image-cake-tablet.jpg",
          desktop: "./images/image-cake-desktop.jpg"
      },
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.50
  },
  {
      image: {
          thumbnail: "./images/image-brownie-thumbnail.jpg",
          mobile: "./images/image-brownie-mobile.jpg",
          tablet: "./images/image-brownie-tablet.jpg",
          desktop: "./images/image-brownie-desktop.jpg"
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.50
  },
  {
      image: {
          thumbnail: "./images/image-panna-cotta-thumbnail.jpg",
          mobile: "./images/image-panna-cotta-mobile.jpg",
          tablet: "./images/image-panna-cotta-tablet.jpg",
          desktop: "./images/image-panna-cotta-desktop.jpg"
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.50
  }
];

const loadProducts =  function () {
  for (let i = 0; i < products.length; i++){
    // console.log(products[i]);
    productHTML = 
    `<div class="productItem ">
      <div class="productHeader">
        <picture class="productImage">
          <source media="(max-width:360px)" srcset="${products[i].image.mobile}">
          <source media="(max-width:900px)" srcset="${products[i].image.tablet}">
          <source media="(min-width:901px)" srcset="${products[i].image.desktop}">
          <img src="${products[i].image.mobile}" alt="">
        </picture>
        <div class="product-btn">
          <div class="btnAddCart">
            <button class="btnAddItem"><span class="cart-icon"><img src="images/icon-add-to-cart.svg" alt=""></span>Add to Cart</button>
          </div>
          <div class="cartAction btnCartAction${i} hidden">
            <div class="cart-option">
              <p class="cartDecrement">-</p>
              <p class="productQuantity">1</p>
              <p class="cartIncreament">+</p>
            </div>
          </div>
        </div>
      </div>
      <div class="product-footer">
        <p class="productCategory">${products[i].category}</p>
        <h2 class="productName">${products[i].name}</h2>
        <p class="productPrice">$${products[i].price.toFixed(2)}</p>
      </div>
    </div>`

    productsEl.innerHTML += productHTML;

    const btnAddCartEl = document.querySelectorAll('.btnAddCart');
    const btnAddItemEl = document.querySelectorAll('.btnAddItem');
    const cartActionEl = document.querySelectorAll('.cartAction');



    for(let i = 0; i < btnAddItemEl.length; i++){
      btnAddItemEl[i].addEventListener('click', function(){
        btnAddCartEl[i].classList.toggle('hidden');
        cartActionEl[i].classList.toggle('hidden');
      })
    }
  }
}


loadProducts();

let btnAddItemEl = document.querySelectorAll('.btnAddItem');
let cartActionEl = document.querySelectorAll('.cartAction');
let productQuantityEl = document.querySelectorAll('.productQuantity');
let cartItems;
let cartItemsArray = [];

for(let btnIndex = 0; btnIndex < btnAddItemEl.length; btnIndex++) { 
  btnAddItemEl[btnIndex].addEventListener('click', function(){
    let totalPcs = 1;
    cartItems = {
      image: products[btnIndex].image.thumbnail,
      name: products[btnIndex].name,
      price: products[btnIndex].price,
      totalAmt: price * totalPcs,
    };

    // cartItemsArray.push(cartItems);

    console.log(cartItems);
  })
}

if(cartQuantity) {
  cartSectionEl.innerHTML = `<h2 class="cart-title">Your Cart is (0)</h2>
        <div class="cart-summary">
          <div class="cart-items">
            <img class="emptyCart" src="images/illustration-empty-cart.svg" alt="">
            <p class="cart-details">Your added items will appear here</p>
          </div>
        </div>`;
} else {
  cartSectionEl.innerHTML =  
    `<h2 class="cart-title">Your Cart has (3) items</h2>
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
          <button class="btn btnConfirmOrder">Confirm Order</button>
        </div>
    `;
};


const modalEl = document.querySelector('.modal');
const modalSectionEl = document.querySelector('.modalSection');
const modalContentEl = document.querySelector('.modal-content');
const btnConfirmOrderEl = document.querySelector('.btnConfirmOrder');
const overlayEl = document.querySelector('.overlay');



const modalToggle =  function() {
  modalContentEl.classList.toggle('hidden');
  overlayEl.classList.toggle('hidden');
};

btnConfirmOrderEl.addEventListener('click', modalToggle);
overlayEl.addEventListener('click', modalToggle);



