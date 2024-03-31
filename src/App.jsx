import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Protected from './Services/Protected'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/' element={<Protected></Protected>}>
          <Route path='/' element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
