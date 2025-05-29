// context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const existingIndex = cartItems.findIndex(
      i => i.name === item.name && i.size === item.size
    );

    let updatedCart;
    if (existingIndex !== -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += item.quantity;
    } else {
      updatedCart = [...cartItems, item];
    }

    setCartItems(updatedCart);
    setIsCartOpen(true);
  };

  const toggleCart = (isOpen) => {
    setIsCartOpen(isOpen);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const updateQuantity = (index, newQty) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQty;
    setCartItems(updatedCart);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        toggleCart,
        totalQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
