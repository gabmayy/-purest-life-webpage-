export function CtaButton({ children }) {
  return (
    <>
      <a
        href="https://learning.atheros.ai"
        title="Atheros Learning Platform"
        className="cta-button"
      >
        {children}
      </a>
    </>
  );
}
