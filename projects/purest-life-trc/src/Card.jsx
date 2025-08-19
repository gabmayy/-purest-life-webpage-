import "bootstrap/dist/css/bootstrap.min.css";

export function Card({ children, price, description, imageName }) {
  return (
    <div
      className="card h-100 mx-auto custom-card"
      style={{ maxWidth: "16rem" }}
    >
      <img
        src={`public/${imageName}.webp`}
        className="card-img-top"
        alt={children}
      />
      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>
        <a className="btn btn-primary card-button">
          <span className="chevron"></span>
        </a>
      </div>
    </div>
  );
}
