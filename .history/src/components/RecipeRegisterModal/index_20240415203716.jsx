import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'

export function RecipeRegisterModal() {
  return <Container>
    <button onClick={openModal}>Open Modal</button>
    <DefaultModal>Home</DefaultModal>
  </Container>
  
}
