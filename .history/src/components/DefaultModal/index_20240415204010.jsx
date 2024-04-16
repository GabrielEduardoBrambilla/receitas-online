import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'


export function DefaultModal(modalIsOpen, children) {

  
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
  return <Container>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {children}
        <button onClick={closeModal}>close</button>
      </Modal>
  </Container>
}
