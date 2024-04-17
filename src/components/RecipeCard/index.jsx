import React from 'react'
import { Container } from './styles'

export function RecipeCard({ ...rest }) {
  return <Container {...rest}>
    <h3>Pão de queijo fit fácil</h3>
    <p>Quem não adora um bom pão de queijo? E se ele é saudável, então, melhor ainda! Essa receita leva 20 minutinhos para ser preparada e rende 12 unidades. Você pode adicionar uma colher de sobremesa de sementes de chia ou farinha de linhaça para deixá-la ainda mais nutritiva</p>
  </Container>
}
