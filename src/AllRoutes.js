import React from 'react'
import { Route, Routes } from "react-router-dom"
import LuckyHome from './Page/LuckyHome'
import City from './Page/City'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LuckyHome />} />
      <Route path="/city" element={<City />} />
    </Routes>
  )
}

export default AllRoutes