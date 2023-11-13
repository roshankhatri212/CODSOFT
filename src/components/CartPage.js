// CartPage.js
import React from 'react';
import ShoppingCartComponent from './ShoppingCart';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div>
   
      <ShoppingCartComponent cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
