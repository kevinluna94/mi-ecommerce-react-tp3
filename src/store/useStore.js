import { create } from 'zustand';

export const useStore = create((set) => ({
  carrito: [],
  agregarAlCarrito: (producto) =>
    set((state) => {
      const existe = state.carrito.find((p) => p.id === producto.id);
      if (existe) {
        return {
          carrito: state.carrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          ),
        };
      }
      return {
        carrito: [...state.carrito, { ...producto, cantidad: 1 }],
      };
    }),
  eliminarDelCarrito: (id) =>
    set((state) => ({
      carrito: state.carrito.filter((p) => p.id !== id),
    })),
  limpiarCarrito: () => set({ carrito: [] }),
}));
