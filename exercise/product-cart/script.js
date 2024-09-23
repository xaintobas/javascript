'use strict';

const productsEl = document.querySelector('.product');
const cartDivEl = document.querySelector('.cartDiv');
const cartTitleEl = document.querySelector('.cart-title');
// const grandTotalEl = document.querySelector('.grandTotal');
const modalContentEl = document.querySelector('.modal-content');
const overlayEl = document.querySelector('.overlay');
const orderItemsEl = document.querySelector('.orderItems');
const grandTotalEl = document.querySelector('.grandTotal');
const grandTotalConfirmlEl = document.querySelector('.grandTotalConfirm');
const btnNewOrderEl = document.querySelector('.btnNewOrder');
const btnConfirmOrderEl = document.querySelector('.btnConfirmOrder');
const orderDeliveryDivEl = document.querySelector('.orderDeliveryDiv');

// let cartBtnEl = document.querySelectorAll('.cart-btn');
// let cartEl = document.querySelectorAll('.cart');

let cartAddButtonEl;
let cartItems = [];


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
    price: 600.50
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
    price: 730.00
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
    price: 850.00
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
    price: 540.50
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
    price: 700.00
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
    price: 350.00
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
    price: 270.50
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
    price: 650.50
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
    price: 900.50
  }
];

function loadProducts() {

  let productHTML = '';

  products.forEach((product, index) => {
    productHTML += `
    <div class="productItem ">
      <div class="productHeader">
        <picture class="productImage">
          <source media="(max-width:360px)" srcset="${product.image.mobile}">
          <source media="(max-width:900px)" srcset="${product.image.tablet}">
          <source media="(min-width:901px)" srcset="${product.image.desktop}">
          <img src="${product.image.mobile}" alt="">
        </picture>
        <div class="btnAddCart">
          <button class="btnAddItem" data-product-index="${index}"><span class="cart-icon"><img src="images/icon-add-to-cart.svg" alt=""></span>Add to Cart</button>
          <p class="addedToCart">Added to Cart!</p>
        </div>
      </div>
      <div class="product-footer">
        <p class="productCategory">${product.category}</p>
        <h2 class="productName">${product.name}</h2>
        <p class="productPrice">₦ ${product.price.toFixed(2)}</p>
      </div>
    </div>`;
  })
  productsEl.innerHTML = productHTML;

  const btnAddToCartEl = document.querySelectorAll('.btnAddItem');
  const addedToCartEl = document.querySelectorAll('.addedToCart');

  btnAddToCartEl.forEach((button, index) => {
    button.addEventListener('click', () => {

      addedToCartEl[index].classList.add('cartAnimation');
      setTimeout(() => {
        addedToCartEl[index].classList.remove('cartAnimation');
      }, 2000);

      let productIndex = button.dataset.productIndex;
      // Check if product already exist
      let matchingItem;

      cartItems.forEach((item) => {
        if(productIndex === item.productIndex){
          matchingItem = item;
        }
      })
      
      if(matchingItem){
        matchingItem.quantity += 1;
      } else {
        cartItems.push(
          {
            productIndex,
            name: `${products[productIndex].name}`,
            thumbnail: `${products[productIndex].image.thumbnail}`,
            price: products[productIndex].price,
            quantity: 1
          }
        );
      }
    // console.log(cartItems);
    displayCart();
    })
  })
}

loadProducts();

displayCart();

function displayCart() {
  

  if(cartItems.length === 0) {
    cartTitleEl.textContent = `Your Cart is (0)`;
    orderDeliveryDivEl.classList.add('hidden');
    cartDivEl.innerHTML = `
    <div class="cart-summary">
      <div class="cart-items">
        <img class="emptyCart" src="images/illustration-empty-cart.svg" alt="">
        <p class="cart-details">Your added items will appear here</p>
      </div>
    </div>`;
  } else {
    let cartHtml = '';
    cartTitleEl.textContent = `Your Cart has ${cartItems.length} items`;
    orderDeliveryDivEl.classList.remove('hidden');
    cartItems.forEach((cartItem, index) => {      
      cartHtml += `
      <div class="cartItem">
        <div class="itemDescription">
          <img src="${cartItem.thumbnail}" alt="">
          <div class="itemDetails">
            <p class="itemTitle">${cartItem.name}</p>
            <div class="itemPcs">
              <span class="numberOfItem">${cartItem.quantity}x</span>
              <span class="costPerItem">@ ₦${cartItem.price.toFixed(2)}</span>
              <span class="totalPerItem">₦${(cartItem.quantity * cartItem.price).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <img class="removeIcon" src="images/icon-remove-item.svg" alt="">
      </div>
      `;
    })

    cartDivEl.innerHTML = cartHtml;

    removeFromCart();
    grandTotal();
    btnConfirmOrderEl.addEventListener('click', toggleModal);
    overlayEl.addEventListener('click', toggleModal);
  };
}

function grandTotal() {
  let orderTotal = 0;
  cartItems.forEach((cartItem) => {
    orderTotal += cartItem.quantity * cartItem.price;
  })

  grandTotalEl.textContent = `₦ ${orderTotal.toFixed(2)}`;
  grandTotalConfirmlEl.textContent = `₦ ${orderTotal.toFixed(2)}`;
}


function removeFromCart() {
  const removeIconEl = document.querySelectorAll('.removeIcon');
  removeIconEl.forEach((btnRemoveIcon, index) => {
    btnRemoveIcon.addEventListener('click', () => {
      // console.log(cartItems);
      // console.log(orderTotal);
      cartItems.splice(index, 1);
      grandTotal();
      displayCart();
    })
  })
}

const toggleModal = function() {
  confirmOrder();
  modalContentEl.classList.toggle('hidden');
  overlayEl.classList.toggle('hidden');
}

function confirmOrder() {
  let orderHTML = '';
  cartItems.forEach((cartItem) => {
    orderHTML += `
    <div class="cartItem">
      <div class="itemDescription">
        <img src="${cartItem.thumbnail}" alt="" class="cartThumbnail">
        <div class="itemDetails">
          <p class="itemTitle">${cartItem.name}</p>
          <div class="itemPcs">
            <span class="numberOfItem">${cartItem.quantity}x</span>
            <span class="costPerItem">@ ₦${cartItem.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <p class="totalPerItem">₦${(cartItem.quantity * cartItem.price).toFixed(2)}</p>
    </div>
    `;
  })
  orderItemsEl.innerHTML = orderHTML;
  grandTotal();
  // grandTotalConfirmlEl.textContent = `₦ ${orderTotal.toFixed(2)}`;
}

btnNewOrderEl.addEventListener('click', () => {
  orderTotal = 0;
  grandTotalEl.textContent = `₦ ${orderTotal}.00`;
  cartItems = [];
  displayCart();
  toggleModal();
})

