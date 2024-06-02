import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Navbar from './components/Navbar/Navbar'
import { AuthContext } from './context/AuthContext'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
    <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Home /> : <SignUp />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/signup' element={user ? <Navigate to={'/'} /> : <SignUp />} />
          <Route path='/signin' element={user ? <Navigate to={'/'} /> : <SignIn />} /> 
        </Routes>
      </Router>
    </>

  )
}

export default App