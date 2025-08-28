import { useState, useContext } from "react";
import { ShopContext } from "./context/ShopContext";

const WholesaleCodeInput = () => {
  const [codeInput, setCodeInput] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const {
    isWholesale,
    wholesaleCode,
    applyWholesaleCode,
    removeWholesaleCode,
    getTotalSavings,
  } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!codeInput.trim()) return;

    const result = applyWholesaleCode(codeInput);
    setMessage(result.message);
    setShowMessage(true);

    if (result.success) {
      setCodeInput("");
      // Ocultar mensaje después de 3 segundos
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  const handleRemoveCode = () => {
    removeWholesaleCode();
    setMessage("");
    setShowMessage(false);
  };

  return (
    <div className="wholesale-code-section">
      {!isWholesale ? (
        <div className="code-input-container">
          <h3>¿Tienes un código de mayoreo?</h3>
          <form onSubmit={handleSubmit} className="code-form">
            <input
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder="Ingresa tu código aquí"
              className="code-input"
            />
            <button type="submit" className="apply-code-btn">
              Aplicar
            </button>
          </form>
          {showMessage && (
            <div
              className={`message ${message.includes("correctamente") ? "success" : "error"}`}
            >
              {message}
            </div>
          )}
        </div>
      ) : (
        <div className="wholesale-active">
          <div className="wholesale-info">
            <h3>🎉 Precios de mayoreo activados</h3>
            <p>
              Código: <strong>{wholesaleCode}</strong>
            </p>
            <p>
              Ahorro total: <strong>${getTotalSavings().toFixed(2)}</strong>
            </p>
            <button onClick={handleRemoveCode} className="remove-code-btn">
              Usar precios regulares
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .wholesale-code-section {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }

        .code-input-container h3 {
          margin: 0 0 15px 0;
          color: #333;
        }

        .code-form {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }

        .code-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .apply-code-btn {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .apply-code-btn:hover {
          background: #0056b3;
        }

        .message {
          padding: 10px;
          border-radius: 4px;
          margin-top: 10px;
        }

        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .wholesale-active {
          text-align: center;
        }

        .wholesale-info h3 {
          color: #28a745;
          margin: 0 0 10px 0;
        }

        .wholesale-info p {
          margin: 5px 0;
          color: #333;
        }

        .remove-code-btn {
          background: #6c757d;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        .remove-code-btn:hover {
          background: #545b62;
        }
      `}</style>
    </div>
  );
};

export default WholesaleCodeInput;
