import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.pinimg.com/736x/fe/25/4d/fe254d40961bb7551b1472de8b579e10.jpg"
            alt="Logo"
            width="40"
            className="me-2"
          />
          Mi Tienda
        </Link>
        <div>
          <Link to="/productos" className="btn btn-outline-light me-2">
            Productos
          </Link>
          <Link to="/carrito" className="btn btn-outline-light">
            Carrito
          </Link>
        </div>
      </div>
    </nav>
  );
}