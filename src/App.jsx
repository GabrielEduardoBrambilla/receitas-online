import { useState } from 'react'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { RecipeModal } from './components/RecipeModal'

export function App() {

  return (
    <>
      <RecipeModal />
      <GlobalStyle />
    </>
  )
}

