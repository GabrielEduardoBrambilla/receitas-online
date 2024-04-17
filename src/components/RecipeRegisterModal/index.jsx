import React from 'react'
import { Container, InputWrapper, Row, SimpleInput, TagWrapper } from './styles'
import { DefaultModal } from '../DefaultModal'
import { InputForm } from '../InputForm'
import { TextAreaForm } from '../TextAreaForm'
import { SelectForm } from '../SelectForm'

export function RecipeRegisterModal({ buttonText }) {
  return <DefaultModal buttonText={buttonText}>
    <form>
      <InputForm name="recipeName" displayName="Receita Nome" />
      <Row>
        <SelectForm name="categories" displayName="Categoria"
          options={[{
            value: 'cafe_da_manha',
            name: "Café da manhã"
          }, {
            value: 'almoco',
            name: "Ao Mosso"
          }]}
        />
      </Row>
      <Row>
        <SelectForm name="ingredients" displayName="Ingredientes"
          options={[{
            value: 'feijao',
            name: "Feijão"
          }, {
            value: 'arroiz',
            name: "Arroz"
          }]}
        />
        <InputWrapper>
          <SimpleInput type="text" name='nome' placeholder="Nome" />
          <SimpleInput type="text" name='calorias' placeholder="Calorias" />
          <button type="submit">Registrar Ingredientes</button>
        </InputWrapper>
        <TagWrapper>
          <p> Feijão</p> <span>X</span>
        </TagWrapper>
      </Row>
      <TextAreaForm name="desc" displayName="Desc" />
      <TextAreaForm name="howto" displayName="Modo de preparo" />
    </form>
  </DefaultModal>
}
