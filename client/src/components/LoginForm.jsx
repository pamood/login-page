import React, { useState } from "react"
import { TextField, Button, Box, Typography, Paper } from "@mui/material"
import { toast } from "react-toastify"
import useAuthStore from "../store/authStore"
import "../styles/LoginForm.css"
import logo from "../assets/logo.png"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const login = useAuthStore((state) => state.login)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(username, password)
      toast.success("Login successful!")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Box className="login-page">
      <Paper elevation={3} className="login-form-container">
        <img src={logo} alt="Company Logo" className="logo" />
        <Typography variant="h4" gutterBottom className="login-title">
          Welcome Back!
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="login-button"
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default LoginForm
