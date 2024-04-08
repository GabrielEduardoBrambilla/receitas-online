import React from 'react'
import { Route, Routes } from 'express'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/" element={Login} />
    </Routes>
  )
}
