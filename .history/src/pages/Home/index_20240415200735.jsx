import React from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'
import { Modal } from '../../components/Modal'


export function Home() {
  return <Container>
    <Navbar />
    <main>
      <TitleWrapper>
        <h2>Receitas</h2>
        <RecipeRegisterModal>
          <Modal.Button>
            <button>Cadastrar - Receita</button>
          </Modal.Button>
        </RecipeRegisterModal>
      </TitleWrapper>

      <CardWrapper>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </CardWrapper>
    </main>

    <footer></footer>
  </Container>
}
