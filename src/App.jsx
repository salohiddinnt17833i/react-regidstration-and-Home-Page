import { BrowserRouter, Routes, Route, useNavigate, NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Protected from './Services/Protected'
import About from './Pages/About'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import { IoMoonSharp } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import style from '../src/all.module.css'
import { useState } from 'react'
import Topnav from './Components/Topnav'
import Navbar from './Components/Navbar'
function App() {
  const [darkMode, setDarkMode] = useState('false')
  const [Mode, setMode] = useState('')
  localStorage.setItem("darkMode", JSON.stringify(darkMode))
  const navigate = useNavigate()
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("logged")
    navigate("/login")
  }

  return (
    <>
      {/*Top navbar Login and Registration */}
      <div className={style.topnav}>
        <div className={style.container}>
          <Topnav></Topnav>
        </div>
      </ div>
      {/* Navbar start */}
      <div className={style.Navbar}>
        <div className={style.container}>
          <div className='d-flex align-items-center justify-content-between'>
            <Navbar></Navbar>
            <div className='d-flex'>
              <div className={style.linkHover}> <NavLink className={style.link} to={"/"}>Home</NavLink></div>
              <div className={style.linkHover}> <NavLink className={style.link} to={"/about"}>About</NavLink></div>
              <div className={style.linkHover}><NavLink className={style.link} to={"/products"}>Products</NavLink></div>
              <div className={style.linkHover}> <NavLink className={style.link} to={"/cart"}>Cart</NavLink></div>
            </div>
            <div>
              <div className='d-flex gap-2'>
                <IoMoonSharp style={{
                  cursor: "pointer"
                }} />
                {/* <CiSun style={{
                  cursor: "pointer"
                }} /> */}
                <SlBasket style={{
                  cursor: "pointer"
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/' element={<Protected></Protected>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
