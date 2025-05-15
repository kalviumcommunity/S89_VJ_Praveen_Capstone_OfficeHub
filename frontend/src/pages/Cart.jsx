import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../../src/styles/cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage (simulate cart persistence)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Calculate total
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-page-container">
      <Navbar />
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemove(item.id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
