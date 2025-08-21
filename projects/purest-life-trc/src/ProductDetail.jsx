import React, { useState } from "react";

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [purchaseType, setPurchaseType] = useState("subscription");

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Galería */}
        <div className="product-gallery">
          <img
            src={`public/all_products/${product.folderName}/${selectedImage}.png`}
            alt={product.title}
            className="main-image"
          />
          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={`public/all_products/${product.folderName}/${img}.png`}
                alt={`Vista ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <h1>{product.title}</h1>
          <h3 className="subtitle">{product.subtitle}</h3>
          <p className="rating">
            ⭐ {product.rating} ({product.reviews} reseñas)
          </p>

          {/* Precios */}
          <div className="price">
            <span className="discount-price">${product.discountPrice}</span>
            <span className="original-price">${product.price}</span>
          </div>

          {/* Opciones */}
          <div className="purchase-options">
            <label>
              <input
                type="radio"
                value="subscription"
                checked={purchaseType === "subscription"}
                onChange={() => setPurchaseType("subscription")}
              />
              Mayoreo - Grandes Descuentos
            </label>
            <label>
              <input
                type="radio"
                value="one-time"
                checked={purchaseType === "one-time"}
                onChange={() => setPurchaseType("one-time")}
              />
              Compra única
            </label>
          </div>

          {/* Botones */}
          <div className="buttons">
            <button className="cart-btn">Agregar al carrito</button>
            <button className="buy-btn">Comprar ahora</button>
          </div>

          {/* Descripción */}
          <div className="description">
            <h4>Descripción del producto</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
