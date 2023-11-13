import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const handleRemoveClick = (index) => {
    removeFromCart(index);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart && cart.length > 0 ? (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product}
              <button onClick={() => handleRemoveClick(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
