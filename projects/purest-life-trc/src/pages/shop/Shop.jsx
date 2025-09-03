import React, { useState } from "react";
import "../shop/shop.css";
import { HeroSection } from "../../HeroSection";
import { Card } from "../../Card";
import ProductDetail from "../../ProductDetail.jsx";
import CreditCard from "../../CreditCard.jsx";
import { Footer } from "../../Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { PRODUCTS } from "../../PRODUCTS.js";
export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <HeroSection />
      <section id="catalogo" className="page-section">
        <section className="cards-section">
          <h2 className="text-center">Catálogo</h2>
          <div className="cards-wrapper">
            {PRODUCTS.map((card, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedProduct({
                    id: card.id,
                    title: card.title,
                    subtitle: card.subtitle,
                    rating: 4.8,
                    reviews: 120,
                    price: card.price,
                    wholesalePrice: card.wholesalePrice,
                    description: card.longDescription,
                    folderName: card.folderName,
                    images: card.images,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <Card
                  price={card.price}
                  description={card.shortDescription}
                  imageName={card.imageName}
                  folderName={card.folderName}
                  wholesalePrice={card.wholesalePrice}
                >
                  {card.title}
                </Card>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-3">
              <button
                className="btn-close ms-auto"
                onClick={() => setSelectedProduct(null)}
              ></button>
              <ProductDetail product={selectedProduct} />
            </div>
          </div>
        </div>
      )}
      <section id="formas-pago" className="page-section">
        <h2 className="text-center">Métodos de pago</h2>

        <p className="text-center">
          Aceptamos tarjetas de crédito y débito, PayPal y transferencias
          bancarias.
        </p>
        <CreditCard />
      </section>
      <section id="footer-contacto" className="page-section">
        <Footer />
      </section>
    </>
  );
}
