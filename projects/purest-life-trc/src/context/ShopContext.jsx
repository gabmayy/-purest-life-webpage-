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
  const [isWholesale, setIsWholesale] = useState(false);
  const [wholesaleCode, setWholesaleCode] = useState("");

  const validWholesaleCodes = ["WHOLESALE", "MAYOREO", "BULK2025"];

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const applyWholesaleCode = (code) => {
    if (validWholesaleCodes.includes(code.toUpperCase())) {
      setIsWholesale(true);
      setWholesaleCode(code.toUpperCase());
      return {
        success: true,
        message: "¡Código de mayoreo aplicado correctamente!",
      };
    } else {
      return { success: false, message: "Código inválido. Intenta de nuevo." };
    }
  };

  const removeWholesaleCode = () => {
    setIsWholesale(false);
    setWholesaleCode("");
  };

  // Función para obtener el precio correcto según el modo
  const getProductPrice = (product) => {
    if (isWholesale && product.wholesalePrice) {
      return parseFloat(product.wholesalePrice);
    }
    return parseFloat(product.price);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        const price = getProductPrice(itemInfo);
        totalAmount += cartItems[item] * price;
      }
    }
    return totalAmount;
  };

  const generateWhatsAppMessage = () => {
    const priceType = isWholesale ? "Mayoreo" : "Consumidor";
    let message = `Hola, me interesa adquirir los siguientes productos (Precios de ${priceType}):\n\n`;

    if (isWholesale) {
      message += `Código aplicado: ${wholesaleCode}\n\n`;
    }

    let subtotal = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = PRODUCTS.find((p) => p.id === Number(itemId));
        const quantity = cartItems[itemId];
        const price = getProductPrice(product);
        const total = price * quantity;
        subtotal += total;
        message += `• ${product.title} x${quantity} - $${total}\n`;
      }
    }

    message += `\nSubtotal: $${subtotal}`;
    message += `\n\n¿Me puedes dar más información?`;

    return message;
  };
  // Función para obtener el descuento total si está en modo mayoreo
  const getTotalSavings = () => {
    if (!isWholesale) return 0;

    let regularTotal = 0;
    let wholesaleTotal = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        const quantity = cartItems[item];
        regularTotal += quantity * parseFloat(itemInfo.price);
        wholesaleTotal +=
          quantity * parseFloat(itemInfo.wholesalePrice || itemInfo.price);
      }
    }

    return regularTotal - wholesaleTotal;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    generateWhatsAppMessage,
    isWholesale,
    wholesaleCode,
    applyWholesaleCode,
    removeWholesaleCode,
    getProductPrice,
    getTotalSavings,
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
