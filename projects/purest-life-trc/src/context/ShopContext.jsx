import { createContext, useState } from "react";
import { PRODUCTS } from "../PRODUCTS.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const generateWhatsAppMessage = () => {
    let message = "Hola, me interesa adquirir los siguientes productos:\n\n";
    let subtotal = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = PRODUCTS.find((p) => p.id === Number(itemId));
        const quantity = cartItems[itemId];
        const total = product.price * quantity;
        subtotal += total;

        message += `• ${product.title} x${quantity} - $${total}\n`;
      }
    }

    message += `\nSubtotal: $${subtotal}\n\n¿Me puedes dar más información?`;

    return message;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    generateWhatsAppMessage,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
