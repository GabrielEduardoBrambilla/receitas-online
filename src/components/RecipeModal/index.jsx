import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'


export function RecipeModal({ title, desc, howto, ingredients, categories }) {
  console.log(ingredients)
  return <Container>
    <header>{title ?? "Pão de Queijo Fit Facíl"}</header>
    <article>
      <div className="cafedmn">
        <ul className='bloco2'>
          <li id='cafe'>{categories ?? 'cafe da manha'}</li>
          <li id='kcal'>500 kcal</li>
        </ul>
      </div>
      <section className="bloco3">
        <ul className='bloco'>
          {ingredients && ingredients.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </section>
    </article>
    <div className='disc'>
      <h2>Descrição </h2>
      {desc ?? ''}
    </div>
    <div className='prep'>
      <h2>Modo de Preparo</h2>
      {howto ?? ''}
    </div>
  </Container>
}




