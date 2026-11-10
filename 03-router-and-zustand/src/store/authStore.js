import {create} from 'zustand'

const useAuthStore = create((set) => ({
  // Estado inicial de autenticación
  isLoggedIn: false,
  // Acciones para actualizar el estado de autenticación
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}))




export default useAuthStore