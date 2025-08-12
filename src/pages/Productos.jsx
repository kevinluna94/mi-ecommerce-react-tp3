import { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../store/useStore';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const agregarAlCarrito = useStore((state) => state.agregarAlCarrito);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setProductos(res.data));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Todos los Productos</h2>
      <div className="row">
        {productos.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <div className="card h-100">
              <img src={p.image} className="card-img-top p-3" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title.slice(0, 30)}</h5>
                <p className="card-text fw-bold">${p.price}</p>
                <button onClick={() => agregarAlCarrito(p)} className="btn btn-success mt-auto">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}