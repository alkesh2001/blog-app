import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import AddBlog from "./Pages/AddBlog"
import Navbar from "./component/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>

        <Navbar/>
        
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/AddBlog" element={<AddBlog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
