import React, { useState, useEffect } from 'react';
import './Home.css';
import ShoppingCartComponent from './ShoppingCart';
import { Link } from 'react-router-dom';

const Home = ({ cart, removeFromCart }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    removeFromCart(updatedCart);
    setShowNotification(true);

    // Hide the notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  useEffect(() => {
    console.log('Cart in Home:', cart);
  }, [cart]);

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our E-Commerce Store</h1>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-card">
          <img src={require('./product1.jpg')} alt="Adidas Sneakers" />
          <h3>Adidas Sneakers</h3>
          <p>Special edition</p>
          <span>$29.99</span>
          <button onClick={() => addToCart('Adidas Sneakers')}>Add to Cart</button>

          <img src={require('./product2.jpg')} alt="Nike Sneakers" />
          <h3>Nike Sneakers</h3>
          <p>Limited edition</p>
          <span>$49.99</span>
          <button onClick={() => addToCart('Nike Sneakers')}>Add to Cart</button>
        </div>
        {/* Add more product cards as needed */}
      </section>
      <Link to="/cart">Go to Cart</Link>

      <ShoppingCartComponent cart={cart} removeFromCart={removeFromCart} />

      {showNotification && <div className="notification">Product added to cart!</div>}
    </div>
  );
};

export default Home;
