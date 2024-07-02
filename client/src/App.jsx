import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginForm from "./components/LoginForm"
import { CssBaseline } from "@mui/material"

function App() {
  return (
    <>
      <CssBaseline />
      <LoginForm />
      <ToastContainer />
    </>
  )
}

export default App
