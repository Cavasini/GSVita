import { Outlet } from "react-router-dom"
import  Login  from "./routes/Login"
import Header from "./components/Header/Header"


function App() {
  return (
    <>
    <Header/>
      <Outlet/>
    </>
  )
}

export default App
