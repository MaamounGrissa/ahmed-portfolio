import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  )
}

export default AppRoutes