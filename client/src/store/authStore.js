import create from "zustand"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
      })
      set({ isAuthenticated: true, user: response.data.user })
    } catch (error) {
      throw new Error(error.response.data.message || "Login failed")
    }
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}))

export default useAuthStore
