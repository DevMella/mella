import React from 'react';
import './Navbar.css';
import nene4 from '../../assets/nene4.png';
import nene6 from '../../assets/nene6.png';
import nene10 from '../../assets/nene10.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div className='navbar text-white px-4 rounded-[10px_10px_0px_0px] mt-4'>
        <div className='d-flex justify-between items-center gap-[338px]'>
          <ul className='flex gap-14'>
            <li className='font-semibold'><Link to='products' smooth-={true} offset={0} duration={500}>SHOP</Link></li>
            <li  className='font-semibold hidden lg:block'><Link to='two' smooth-={true} offset={0} duration={500}>ABOUT</Link></li>
            <li  className='font-semibold hidden lg:block'><Link to='new' smooth-={true} offset={0} duration={500}>FUTURES</Link></li>
          </ul>
          <div>
            <h1 className='font-bold text-[40px]'>mella&trade;</h1>
          </div>
          <ul className='flex gap-14 items-center'>
            <li className='font-semibold hidden lg:block'>ACCOUNT</li>
            <li className='font-semibold'>
              <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <span className="cart-icon flex items-center text-white">
                  <h1 className='font-semibold text-white'>CART</h1>(<span id="cart-counter" className="text-white">0</span>)
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p className='font-bold text-[17px]'>Start adding to your cart for FREE SHIPPING</p>
          <hr className='mt-3 mb-3' />
          <h5 className="text-center font-bold text-[30px]">If Not Now, When?</h5>
          <a href="shop.html" className="d-flex justify-content-center mt-4"><button className="shop">Shop Now</button></a>
          <div id="productDetails" className="selected-product mt-4" style={{ display: 'none' }}>
            <div className="d-flex flex-row gap-9 align-items-center">
              <div>
                <h6 id="selectedProductName"></h6>
                <h6 id="selectedProductDescription" className='font-bold text-[20px]'></h6>
                <div className="quantity-adjustment flex justify-between">
                  <div className="d-flex justify-between sid">
                    <button onClick={() => adjustQuantity(-1)}>-</button>
                    <p className='mt-[3px]' id="selectedProductQuantity">1</p>
                    <button onClick={() => adjustQuantity(1)}>+</button>
                  </div>
                  <button className="remove-button" onClick={removeFromCart}>Remove</button>
                </div>
              </div>
            </div>
            <p id="selectedProductPrice" className='font-bold tetx-[22px] mt-[-7px]'></p>
          </div>
          <h6 className="text-center mb-4 mt-4 oro">Total Price: <span id="totalPrice">0.00</span></h6>
          <div className="d-flex justify-content-center"><button onClick={checkout} className="owo">Checkout</button></div>
          <div className="dai">
            <h6 className="mt-5 font-bold mb-2 text-[19px]">Shop Our Lineup</h6>
            <hr />
            <div className="inu d-flex justify-content-between mt-3">
              <div className="d-flex gap-3">
                <img src={nene4} className='w-[100px]' alt="" />
                <div className="sweet">
                  <h5 className='font-semibold tracking-wide'>PREP</h5>
                  <h6 className='font-bold text-[20px]'>Glazing milk</h6>
                </div>
              </div>
              <div className="fou">
                <p id="productPrice" className='font-bold'>#24,000</p>
                <button onClick={() => displayProductDetails('PREP', 'Glazing milk', 24000, nene4)} className="owo">QUICK ADD</button>
              </div>
            </div>
            <hr className='mt-2' />
            <div className="inu d-flex justify-content-between mt-3">
              <div className="d-flex gap-3">
                <img src={nene6} className='w-[100px]' alt="" />
                <div className="sweet">
                  <h5 className='font-semibold tracking-wide'>THE SET</h5>
                  <h6 className='font-bold text-[20px]'>Barrier set</h6>
                </div>
              </div>
              <div className="fou">
                <p id="productPrice" className='font-bold'>#2,800</p>
                <button onClick={() => displayProductDetails('THE SET', 'Barrier set', 2800, nene6)} className="owo">QUICK ADD</button>
              </div>
            </div>
            <hr className='mt-2' />
            <div className="inu d-flex justify-content-between mt-3">
              <div className="d-flex gap-3">
                <img src={nene10} className='w-[100px]' alt="" />
                <div className="sweet">
                  <h5 className='font-semibold tracking-wide'>CLEANSE</h5>
                  <h6 className='font-bold text-[20px]'>Coconut refresh</h6>
                </div>
              </div>
              <div className="fou">
                <p id="productPrice" className='font-bold'>#5,400</p>
                <button onClick={() => displayProductDetails('CLEANSE', 'Coconut refresh', 5400, nene10)} className="owo">QUICK ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let cartCounter = 0;
let totalPrice = 0;

function checkout() {
  const productName = document.getElementById('selectedProductName').textContent;
  const totalPrice = document.getElementById('totalPrice').textContent;
  const productImage = document.getElementById('selectedProductImage')?.src;
  window.open(`check.html?productName=${encodeURIComponent(productName)}&productImage=${encodeURIComponent(productImage)}&totalPrice=${encodeURIComponent(totalPrice)}`, '_blank');
}

function updateTotalPrice() {
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function displayProductDetails(name, description, price, image) {
  const selectedProduct = document.getElementById('productDetails');
  const selectedProductName = document.getElementById('selectedProductName');
  const selectedProductDescription = document.getElementById('selectedProductDescription');
  const selectedProductPrice = document.getElementById('selectedProductPrice');
  const selectedProductImage = new Image();
  selectedProductImage.id = 'selectedProductImage';
  selectedProductImage.src = image;
  selectedProductImage.style.width = '100px';

  selectedProductName.textContent = name;
  selectedProductDescription.textContent = description;
  selectedProductPrice.textContent = `#${price}`;
  selectedProductPrice.dataset.initialPrice = price;

  const existingImage = document.getElementById('selectedProductImage');
  if (existingImage) {
    existingImage.replaceWith(selectedProductImage);
  } else {
    selectedProduct.insertBefore(selectedProductImage, selectedProduct.firstChild);
  }

  document.getElementById('selectedProductQuantity').textContent = '1';

  const quantityAdjustment = document.querySelector('.quantity-adjustment');
  const removeButton = document.querySelector('.remove-button');

  quantityAdjustment.style.display = 'flex';
  removeButton.style.display = 'block';

  selectedProduct.style.display = 'flex';
  selectedProduct.style.flexDirection = 'row';
  selectedProduct.style.alignItems = 'center';

  updateCartCounter(1);
  totalPrice += price;
  updateTotalPrice();
}

function adjustQuantity(amount) {
  const selectedProductQuantity = document.getElementById('selectedProductQuantity');
  const selectedProductPrice = document.getElementById('selectedProductPrice');
  const initialPrice = parseFloat(selectedProductPrice.dataset.initialPrice);
  let quantity = parseInt(selectedProductQuantity.textContent) + amount;

  quantity = Math.max(quantity, 1);
  selectedProductQuantity.textContent = quantity.toString();

  totalPrice += amount * initialPrice;
  updateTotalPrice();
}

function updateCartCounter(delta) {
  cartCounter += delta;
  const cartCounterElement = document.getElementById('cart-counter');
  cartCounterElement.textContent = cartCounter.toString();
}

function removeFromCart() {
  const selectedProduct = document.getElementById('productDetails');
  const selectedProductImage = document.getElementById('selectedProductImage');
  const selectedProductPrice = document.getElementById('selectedProductPrice');
  const initialPrice = parseFloat(selectedProductPrice.dataset.initialPrice);
  const quantity = parseInt(document.getElementById('selectedProductQuantity').textContent);

  if (selectedProductImage) {
    selectedProductImage.remove();
  }

  selectedProduct.style.display = 'none';
  updateCartCounter(-1);
  totalPrice -= quantity * initialPrice;
  updateTotalPrice();
}

export default Navbar;
