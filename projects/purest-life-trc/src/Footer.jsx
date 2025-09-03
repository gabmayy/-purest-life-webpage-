import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo y descripción */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/LOGO.png" alt="Purest Life" />
          </div>
          <p className="footer-description">
            Tu camino hacia el bienestar comienza aquí. Productos de la más alta
            calidad para una vida más saludable.
          </p>
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={18} />
              <span>+52 870 168 3352</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>hola@purestlife.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>
                Tamazula 461 Parque Industrial Carlos A Herrera Araluce Gómez
                Palacio, Durango. C.P. 35079
              </span>
            </div>
          </div>
        </div>

        {/* Links rápidos */}
        <div className="footer-section">
          <h3 className="footer-title">Enlaces</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#catalogo">Catálogo</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#footer-contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
          <p className="social-text">
            Mantente al día con nuestras últimas novedades y ofertas especiales.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Purest Life. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
