import React from 'react'
import { Container, NewModal } from './styles'

export function DefaultModal({ buttonText, children, buttonChild, forceOpen }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <Container >
    {true &&
      <div onClick={openModal}>
        {buttonChild}
      </div>
    }
    {!buttonChild && (
      <button id='open' onClick={openModal}>{buttonText}</button>
    )}
    <NewModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      {children}
      <button onClick={closeModal}>X</button>
    </NewModal>
  </Container>
}
