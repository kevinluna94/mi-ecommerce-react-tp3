import { create } from 'zustand';

export const useStore = create((set) => ({
  carrito: [],
  agregarAlCarrito: (producto) =>
    set((state) => ({
      carrito: [...state.carrito, producto] 
    })),
  eliminarDelCarrito: (id) =>
    set((state) => ({
      carrito: state.carrito.filter((p) => p.id !== id)
    })),
  limpiarCarrito: () => set({ carrito: [] })
}));