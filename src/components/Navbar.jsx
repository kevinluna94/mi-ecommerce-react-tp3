import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://i.pinimg.com/736x/fe/25/4d/fe254d40961bb7551b1472de8b579e10.jpg"
            alt="Logo"
            width="40"
            className="me-2"
          />
          Mi Tienda
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <Link to="/carrito" className="nav-link">
              Carrito
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
