import { useEffect, useState } from 'react';
import { fetchDestacados } from '../api/api';

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchDestacados().then(setProductos);
  }, []);

  return (
    <>
    <div
        className="hero text-black text-center p-5 mb-5"
        style={{
        backgroundImage: 'url(https://i.pinimg.com/736x/84/68/cd/8468cdd48ba8b0e90e12051bb2a97891.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         width: '100%',
         height: '300px'
        }}
>
        <h1 className="display-4 fw-bold">Bienvenido a mi Tienda</h1>
         <p className="lead">Los mejores productos, al mejor precio</p>
        
    </div>

      <div className="container">
        <h2 className="mb-4">Productos Destacados</h2>
        <div className="row">
          {productos.map((p) => (
            <div className="col-md-3 mb-4" key={p.id}>
              <div className="card h-100">
                <img src={p.image} className="card-img-top p-3" style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.title.slice(0, 30)}</h5>
                  <p className="card-text fw-bold">${p.price}</p>
                  <button className="btn btn-primary mt-auto">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/productos" className="btn btn-outline-primary mt-3">Ver todos los productos</a>
      </div>
    </>
  );
}