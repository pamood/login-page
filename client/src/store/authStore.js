import create from "zustand"
import axios from "axios"

// Environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL

// Zustand store for authentication
const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,

  // Login function
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
      })
      set({ isAuthenticated: true, user: response.data.user })
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed"
      throw new Error(errorMessage)
    }
  },
}))

export default useAuthStore
