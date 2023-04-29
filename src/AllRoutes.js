import React from 'react'
import { Route, Routes } from "react-router-dom"
import LuckyHome from './Page/LuckyHome'
import City from './Page/City'
// import Singup from './Page/Singup'
import Signup from './Page/Signup'
import Register from './Page/Register'
import Explore from './Page/Explore'
// import GeneratePin from './Page/generatepin'
import Pingen from './Page/Pingen'
import EnterYourCode from './Page/EnterYourCode'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LuckyHome />} />
      <Route path="/city" element={<City />} />
      {/* <Route path="/singup" element={<Singup />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/signup" element={<Singup />} /> */}
      <Route path="/explore" element={<Explore />} />
      <Route path="/enter-your-code" element={<EnterYourCode />} />
      <Route path="/pin" element={<Pingen />} />
    </Routes>
  )
}

export default AllRoutes