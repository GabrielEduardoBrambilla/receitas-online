import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'
import { DefaultModal } from '../DefaultModal'

export function RecipeRegisterModal({buttonText}) {
  return <DefaultModal buttonText={buttonText}> 
    <form>
      <label htmlFor="name"></label>
      <input type="text" name="name" />
      
    </form>
  </DefaultModal>
}
