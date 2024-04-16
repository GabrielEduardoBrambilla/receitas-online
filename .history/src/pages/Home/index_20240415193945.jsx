import React from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'
import * as Dialog from '@radix-ui/react-dialog';


export function Home() {
  return <Container>
    <Navbar />
    <Dialog.Root>
      <TitleWrapper>
        <h2>Receitas</h2>
          <Dialog.Trigger asChild>
            <button>Cadastrar - Receita</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title />
              <Dialog.Description />
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
      </TitleWrapper>

      <CardWrapper>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </CardWrapper>
    </Dialog.Root>

    <footer></footer>
  </Container>
}
