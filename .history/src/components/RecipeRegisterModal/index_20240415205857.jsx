import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'

export function RecipeRegisterModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return <Modal>Home</Modal>
}
