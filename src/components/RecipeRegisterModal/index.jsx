import React, { useEffect, useState } from 'react'
import { InputWrapper, Row, SaveButton, SimpleInput, TagWrapper } from './styles'
import { InputForm } from '../InputForm'
import { TextAreaForm } from '../TextAreaForm'
import { SelectForm } from '../SelectForm'
import { v4 as uuidv4 } from 'uuid';

export function RecipeRegisterModal({ buttonText }) {
  const [ingredients, setIngredients] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('@ReceitaOnline:recipesData')) ?? [];
    const postData = {
      id: uuidv4(),
      name: document.getElementById('recipeName').value,
      categories: document.getElementById('categories').value,
      ingredients: document.getElementById('ingredients').value,
      desc: document.getElementById('desc').value,
      howto: document.getElementById('howto').value,
    }
    savedData.push(postData);
    localStorage.setItem("@ReceitaOnline:recipesData", JSON.stringify(savedData));
    location.reload()
  }

  const saveIngredient = () => {
    const savedData = JSON.parse(localStorage.getItem('@ReceitaOnline:ingredientsData')) ?? [];

    const nameElement = document.getElementById('ingredientName');
    const caloriesElement = document.getElementById('ingredientCalorie');

    const postData = {
      id: uuidv4(),
      name: nameElement.value,
      calories: caloriesElement.value,
    }

    savedData.push(postData);
    localStorage.setItem("@ReceitaOnline:ingredientsData", JSON.stringify(savedData));
    setIngredients(savedData)

    nameElement.value = '';
    caloriesElement.value = '';
  }

  useEffect(() => {
    const ingredientsData = JSON.parse(localStorage.getItem('@ReceitaOnline:ingredientsData'));
    setIngredients(ingredientsData ?? []);
  }, []);

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
        options={ingredients}
      />
      <InputWrapper>
        <SimpleInput id="ingredientName" type="text" name='IngredientName' placeholder="Nome" />
        <SimpleInput id="ingredientCalorie" type="text" name='IngredientCalorie' placeholder="Calorias" />
        <button type="button" onClick={saveIngredient}>Registrar Ingredientes</button>
      </InputWrapper>

      {ingredients.map(ingredient => {
        <TagWrapper key={ingredient}>
          <p> {ingredient}</p> <span>X</span>
        </TagWrapper>
      })}
      <TagWrapper>
        <p> Feijão</p> <span>X</span>
      </TagWrapper>
    </Row>
    <TextAreaForm name="desc" displayName="Desc" />
    <TextAreaForm name="howto" displayName="Modo de preparo" />
    <SaveButton >Salvar</SaveButton>
  </form>
}
