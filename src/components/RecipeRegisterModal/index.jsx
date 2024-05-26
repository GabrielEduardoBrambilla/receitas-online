import React, { useState } from 'react'
import { InputWrapper, Row, SaveButton, SimpleInput, TagWrapper } from './styles'
import { DefaultModal } from '../DefaultModal'
import { InputForm } from '../InputForm'
import { TextAreaForm } from '../TextAreaForm'
import { SelectForm } from '../SelectForm'
import { v4 as uuidv4 } from 'uuid';

export function RecipeRegisterModal({ buttonText }) {

  const submitHandler = e => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('@ReceitaOnline:recipesData')) ?? [];
    const postData = {
      id: uuidv4(),
      name:document.getElementById('recipeName').value,
      categories:document.getElementById('categories').value,
      ingredients:document.getElementById('ingredients').value,
      desc:document.getElementById('desc').value,
      howto:document.getElementById('howto').value,
    }
    savedData.push(postData);
    localStorage.setItem("@ReceitaOnline:recipesData", JSON.stringify(savedData));
    location.reload()
  }

  return <form onSubmit={submitHandler}>
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
        <SimpleInput id="IngredientName" type="text" name='IngredientName' placeholder="Nome" />
        <SimpleInput id="IngredientCalorie" type="text" name='IngredientCalorie' placeholder="Calorias" />
        <button type="button">Registrar Ingredientes</button>
      </InputWrapper>
      <TagWrapper>
        <p> Feijão</p> <span>X</span>
      </TagWrapper>
    </Row>
    <TextAreaForm name="desc" displayName="Desc" />
    <TextAreaForm name="howto" displayName="Modo de preparo" />
    <SaveButton >Salvar</SaveButton>
  </form>
}
