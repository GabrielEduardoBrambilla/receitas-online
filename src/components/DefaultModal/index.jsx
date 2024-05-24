import React from 'react';
import { Container, NewModal } from './styles';
import Modal from 'react-modal';

export function DefaultModal({ buttonText, children, isOpen, onRequestClose, handleClick }) {
  return (
    <Container>
      {buttonText && handleClick && (
        <button onClick={handleClick}>{buttonText}</button>
      )}
      <NewModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        {children}
        <button onClick={onRequestClose}>X</button>
      </NewModal>
    </Container>
  );
}
