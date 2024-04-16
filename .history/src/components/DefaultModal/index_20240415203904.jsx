import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'


export function DefaultModal(openModal, children) {
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
