export function CtaButton({ children, targetId }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <a
      href="#"
      title="Catalogo"
      className="cta-button"
      onClick={(e) => {
        e.preventDefault(); // stop the default "#" jump
        scrollToSection(targetId);
      }}
    >
      {children}
    </a>
  );
}
