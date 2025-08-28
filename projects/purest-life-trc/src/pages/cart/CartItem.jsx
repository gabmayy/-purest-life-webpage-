import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./cart.css";
export const CartItem = (props) => {
  const { id, title, price, wholesalePrice, imageName, folderName } =
    props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getProductPrice,
    isWholesale,
  } = useContext(ShopContext);

  const currentPrice = getProductPrice(props.data);
  const regularPrice = parseFloat(price);
  const hasDiscount =
    isWholesale && wholesalePrice && currentPrice < regularPrice;

  return (
    <div className="cart-item">
      <img
        src={`/all_products/${folderName}/${imageName}.webp`}
        alt={title}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <p>
          <b>{title}</b>
        </p>
        <div className="price-section">
          {hasDiscount ? (
            <div className="price-with-discount">
              <p className="original-price">${regularPrice}</p>
              <p className="wholesale-price">${currentPrice}</p>
            </div>
          ) : (
            <p className="current-price">${currentPrice}</p>
          )}
        </div>
        {/* <p>Precio: ${wholesalePrice}</p> */}
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
