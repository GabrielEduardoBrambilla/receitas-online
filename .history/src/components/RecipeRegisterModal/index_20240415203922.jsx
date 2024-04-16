import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'

export function RecipeRegisterModal() {
  function openModal() {
    setIsOpen(true);
  }
  
  return <Container>
    <button onClick={openModal}>Open Modal</button>
    <DefaultModal>Home</DefaultModal>
  </Container>
  
}
