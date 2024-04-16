import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'

export function RecipeRegisterModal({buttonText}) {
  
  return <Container>
      <button onClick={openModal}>{buttonText}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>close</button>
      </Modal>
  </Container>
}
