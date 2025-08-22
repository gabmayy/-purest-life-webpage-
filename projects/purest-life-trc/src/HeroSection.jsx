import { CtaButton } from "./Cta-Button";
import { SecondaryButton } from "./Secondary-Button";

export function HeroSection() {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/public/hero_section_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to Purest Life</h1>
        <p>Your journey to wellness starts here.</p>
        <div className="hero-buttons">
          <CtaButton targetId="catalogo">Shop</CtaButton>
          <SecondaryButton>Contacto</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
