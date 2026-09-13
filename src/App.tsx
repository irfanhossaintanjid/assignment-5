
import { Hero } from "./components/Hero"
import MainLayout from "./components/MainLayout"
import Nav from "./components/nav"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
       <Nav></Nav>
       <Hero />
       <MainLayout />
       
      <ToastContainer position="top-right" autoClose={2000} />

    </>
  )
}

export default App
