import React from 'react'
import { Container } from './styles'
import * as Dialog from '@radix-ui/react-dialog';

export function Modal(children) {
  return (
    <Dialog.Root>
      {children}
      <Dialog.Trigger asChild>
        <button>Cadastrar - Receita</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root> 
  )
}

Modal.Button = Dialog.Trigger
