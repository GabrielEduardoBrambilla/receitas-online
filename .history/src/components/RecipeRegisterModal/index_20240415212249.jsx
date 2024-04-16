import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'
import { InputForm } from '../InputForm'

export function RecipeRegisterModal({buttonText}) {
  return <DefaultModal buttonText={buttonText}> 
    <form>
      <InputForm name="recipeName" displayName="Receita Nome"/>
    </form>
  </DefaultModal>
}
