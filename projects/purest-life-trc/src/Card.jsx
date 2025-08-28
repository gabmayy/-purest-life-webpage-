import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import "bootstrap/dist/css/bootstrap.min.css";

export function Card({
  children,
  price,
  wholesalePrice,
  description,
  imageName,
  folderName,
}) {
  const { isWholesale } = useContext(ShopContext);

  const regularPrice = parseFloat(price);
  const currentPrice =
    isWholesale && wholesalePrice ? parseFloat(wholesalePrice) : regularPrice;
  const hasDiscount =
    isWholesale && wholesalePrice && currentPrice < regularPrice;

  return (
    <div
      className="card h-100 mx-auto custom-card"
      style={{ maxWidth: "16rem" }}
    >
      <img
        src={`/all_products/${folderName}/${imageName}.webp`}
        className="card-img-top"
        alt={children}
      />
      <div className="card-body">
        <h5 className="card-title">{children}</h5>

        {hasDiscount ? (
          <div className="price-section">
            <h6 className="card-subtitle mb-1 text-muted">
              <span style={{ textDecoration: "line-through" }}>
                ${regularPrice}
              </span>
            </h6>
            <h6 className="card-subtitle mb-2 text-success">
              ${currentPrice}{" "}
              <small className="badge bg-success ms-1">Mayoreo</small>
            </h6>
          </div>
        ) : (
          <h6 className="card-subtitle mb-2 text-muted">${currentPrice}</h6>
        )}

        <p className="card-text">{description}</p>
        <a className="btn btn-primary card-button">
          <span className="chevron"></span>
        </a>
      </div>
    </div>
  );
}
