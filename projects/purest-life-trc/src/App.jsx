import React, { useState } from "react";
import { NavBar } from "./NavBar.jsx";
import { HeroSection } from "./HeroSection.jsx";
import { Card } from "./Card.jsx";
import "./App.css";
import ProductDetail from "./ProductDetail.jsx";
import CreditCard from "./CreditCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Footer.jsx";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cards = [
    {
      title: "Whey Protein 2.2kg (chocolate)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_choc",
    },
    {
      title: "Whey Protein 2.2kg (vainilla)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_choc",
    },
    {
      title: "Whey Protein 2.2kg (Cherry Ice)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_choc",
    },
    {
      title: "ISO+ Proteína Aislada de Suero",
      description: "1kg de proteína aislada de suero de leche.",
      imageName: "whey_prot_vain_1kg",
    },
    {
      title: "ISO Woman 1.8kg (Ferrero)",
      description: "1.8kg de proteína aislada de suero de leche.",
      imageName: "whey_prot_ferrero",
    },
    {
      title: "ISO Woman 1.8kg (Fresa)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_fresa",
    },
    {
      title: "ISO+ 2.2kg (brownie)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_plus_brownie",
    },
    {
      title: "ISO+ 2.2kg (vainilla)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_plus_vain",
    },
    {
      title: "ISO+ 2.2kg (Cherry Ice)",
      description: "Discover a healthier lifestyle with Purest Life.",
      imageName: "whey_prot_plus_cherry",
    },
  ];

  return (
    <div>
      <NavBar />
      <HeroSection />
      <section className="cards-section">
        <h2 className="text-center">Catálogo</h2>
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedProduct({
                  id: index,
                  title: card.title,
                  subtitle: "Subtítulo del producto",
                  rating: 4.8,
                  reviews: 120,
                  price: 100,
                  discountPrice: 80,
                  description: card.description,
                  images: [
                    "whey_prot_plus_cherry",
                    "whey_prot_plus_vain",
                    "whey_prot_plus_brownie",
                    "whey_prot_fresa",
                  ],
                })
              }
              style={{ cursor: "pointer" }}
            >
              <Card
                price="$100"
                description={card.description}
                imageName={card.imageName}
              >
                {card.title}
              </Card>
            </div>
          ))}
        </div>
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

      <CreditCard />
      <Footer />
    </div>
  );
}

export default App;
