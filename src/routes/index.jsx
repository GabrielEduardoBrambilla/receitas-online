import React from 'react'
import { Route, Routes } from 'express'
import { Home } from '../pages/Home'
import { RecipeModal } from '../components/RecipeModal'
import { Login } from '../pages/Login'
import { BrowserRouter } from 'react-router-dom'

export function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/recipe" element={<RecipeModal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
