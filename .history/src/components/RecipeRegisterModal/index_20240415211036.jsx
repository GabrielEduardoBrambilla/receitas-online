import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'

export function RecipeRegisterModal({buttonText}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <Container>
      <button onClick={openModal}>{buttonText}</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>close</button>
      </Modal>
  </Container>
}
