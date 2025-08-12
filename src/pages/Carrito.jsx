import { useStore } from '../store/useStore';

export default function Carrito() {
  const { carrito, eliminarDelCarrito, limpiarCarrito } = useStore();

  const total = carrito.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div>
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.title.slice(0, 30)}...</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${total}</strong></td>
              </tr>
            </tbody>
          </table>

          {carrito.length > 0 && (
            <button
              className="btn btn-primary mt-3"
              onClick={() => {
                alert('Gracias por tu compra 🎉');
                limpiarCarrito();
              }}
            >
              Pagar
            </button>
          )}
        </div>
      )}
    </div>
  );
}
