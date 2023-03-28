import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import NotFound from './Components/NotFound'
import Contact from './Pages/Contact'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes