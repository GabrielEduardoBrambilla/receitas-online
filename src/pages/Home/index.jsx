import React, { useState } from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'
import { RecipeRegisterModal } from '../../components/RecipeRegisterModal'
import { RecipeModal } from '../../components/RecipeModal'
import { Navigate, useNavigate } from 'react-router-dom'

export function Home() {
  const [modal, setModal] = useState(false)
  function handleModalOpen() {

    setModal(true)
  }

  return <Container>
    <Navbar />
    <main>
      <TitleWrapper>
        <h2>Receitas</h2>
        <RecipeRegisterModal buttonText="Cadastrar - Receita" />
      </TitleWrapper>

      <CardWrapper>
        <RecipeCard onClick={handleModalOpen} />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeModal buttonText="Joao" />
      </CardWrapper>
    </main>
    <footer></footer>
  </Container>
}
