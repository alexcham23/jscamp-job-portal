import {create} from 'zustand'

const useFavoritesStore = create((set,get) => ({
  // Estado inicial de favoritos
  favorites: [],

  // limpiar favoritos
  clearFavorites: () => set({ favorites: [] }),

  // Acciones para actualizar el estado de favoritos
  addFavorite: (jobId) => {
    set((state) => ({
      favorites: state.favorites.includes(jobId)
        ? state.favorites
        : [...state.favorites, jobId]
    }))
  },

  // remover favorito
  removeFavorite: (jobId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== jobId)
    }))
  },

  // verificar si es favorito
  isFavorite: (jobId) => {
    return get().favorites.includes(jobId)
  },

  // alternar favorito
  toggleFavorite: (jobId) => {
    const isFav = get().isFavorite(jobId)
    isFav ? get().removeFavorite(jobId) : get().addFavorite(jobId)
  },

  // contar favoritos
  countFavorites: () => get().favorites.length

}))

export default useFavoritesStore