import React from 'react'
import { Container } from './styles'
import Modal from 'react-modal'
import { DefaultModal } from '../DefaultModal'
import { Input } from '../Input'

export function RecipeRegisterModal({buttonText}) {
  return <DefaultModal buttonText={buttonText}> 
    <form>
      <Input name="recipeName" displayName="Receita Nome"/>
    </form>
  </DefaultModal>
}
