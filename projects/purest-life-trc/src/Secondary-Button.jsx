// Secondary-Button.jsx
import { useState } from "react";
import { Copy } from "lucide-react"; // optional: use lucide-react for icons

export function SecondaryButton({
  targetId,
  phoneNumber = "+52 870 168 3352",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);

      // Reset back to normal after 1.5s
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <a
      className="scnd-button"
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {copied ? (
        "Copied!"
      ) : isHovered ? (
        <>
          <Copy size={10} /> {phoneNumber}
        </>
      ) : (
        "Contacto"
      )}
    </a>
  );
}
