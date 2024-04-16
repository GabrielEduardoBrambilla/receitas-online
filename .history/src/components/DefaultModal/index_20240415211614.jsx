import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'

export function DefaultModal({buttonText}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <Container>
      <button onClick={openModal}>{buttonText}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {children}
        <button onClick={closeModal}>close</button>
      </Modal>
  </Container>
}
