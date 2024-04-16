import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'

export function RecipeRegisterModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  return <Container>
    <button onClick={openModal}>Open Modal</button>
    <DefaultModal modalIsOpen>Home</DefaultModal>
  </Container>
  
}
