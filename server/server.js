require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/api/login", (req, res) => {
  const { username, password } = req.body

  // Mock authentication
  if (username === "user" && password === "password") {
    res.json({ user: { username }, message: "Login successful" })
  } else {
    res.status(401).json({ message: "Invalid credentials" })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
