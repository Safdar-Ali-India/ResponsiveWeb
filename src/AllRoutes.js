import React from 'react'
import { Route, Routes } from "react-router-dom"
import LuckyHome from './Page/LuckyHome'
import City from './Page/City'
import Singup from './Page/Singup'
import Signup from './Page/Signup'
import Register from './Page/Register'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LuckyHome />} />
      <Route path="/city" element={<City />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AllRoutes