import React from 'react'
import { Route, Routes } from "react-router-dom"
import LuckyHome from './Page/LuckyHome'
import City from './Page/City'
import Singup from './Page/Singup'
import Explore from './Page/Explore'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LuckyHome />} />
      <Route path="/city" element={<City />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  )
}

export default AllRoutes