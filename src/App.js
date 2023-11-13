import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation'; // Import the Navigation component
import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
     
      <Navigation /> {/* Include the Navigation component */}
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
      </Routes></CartProvider>
    </Router>
  );
}

export default App;
