import React from 'react'
import { Container, NewModal } from './styles'
import Modal from 'react-modal'

export function DefaultModal({ buttonText, children }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <Container htmlFor='open'>
    <button id='open' onClick={openModal}>{buttonText}</button>
    <NewModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      {children}
      <button onClick={closeModal}>X</button>
    </NewModal>
  </Container>
}
