import React, { useContext } from "react";
import { PRODUCTS } from "../../PRODUCTS";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, generateWhatsAppMessage } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const openWhatsApp = () => {
    const phone = "528701683352"; // sin +, solo número con lada
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Detectar si es móvil
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      window.open(url, "_blank"); // abre WhatsApp móvil
    } else {
      // Si es desktop, opcional: abrir WhatsApp Web
      window.open(url, "_blank");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Items de Compras</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Seguir Comprando </button>
          <button
            onClick={() => {
              openWhatsApp();
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Su Carrito de Compras está vacio</h1>
      )}
    </div>
  );
};
