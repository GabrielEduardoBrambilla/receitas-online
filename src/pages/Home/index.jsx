import React, { useState } from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'
import { RecipeRegisterModal } from '../../components/RecipeRegisterModal'
import { RecipeModal } from '../../components/RecipeModal'
import { Navigate, useNavigate } from 'react-router-dom'

export function Home() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)

  function handleToggleModal(num) {
    if (num == 1) {
      setModal1(!modal1)
    }
    if (num == 2) {
      setModal2(!modal2)
    }
  }


  return <Container>
    <Navbar />
    <main>
      <TitleWrapper>
        <h2>Receitas</h2>
        <RecipeRegisterModal buttonText="Cadastrar - Receita" />
      </TitleWrapper>

      <CardWrapper>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeModal onClick={() => {
          handleToggleModal(2)
        }}
          buttonText="Joao" />
      </CardWrapper>
    </main>
    <footer></footer>
  </Container>
}
