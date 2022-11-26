import React, { useState } from 'react'
import "./Cart.css";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
  return (
    <div className="cart-container">
        <h1 className="cart-title">Your Bag</h1>
        <div className="cart-top">
            <button className="top-button blank">Continue Shopping</button>
            <div className="top-texts">
                <span className="top-text">Shopping Bag({cart.length})</span>
                <span className="top-text">Your Wishlist({wishlist.length})</span>
            </div>
            <button className="top-button filled">Checkout Now</button>
        </div>
        <div className="cart-bottom">
            <div className="cart-info">
                .cart-item
            </div>
            <div className="cart-summary">

            </div>
        </div>     
    </div>
  )
}

export default Cart;