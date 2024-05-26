import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'


export function RecipeModal({ forceOpen, buttonText }) {
  return <Container>
    <header>Pão de Queijo Fit Facíl</header>
    <article>
      <div className="cafedmn">
        <ul className='bloco2'>
          <li id='cafe'>cafe da manha</li>
          <li id='kcal'>500 kcal</li>
        </ul>
      </div>
      <section className="bloco3">
        <ul className='bloco'>
          <li>polvilho doce</li>
          <li>queijo parmesãoralado</li>
          <li>polvilho doce</li>
          <li>polvilho  azedo</li>
          <li>queijo mussarela ralado</li>
          <li>creme de ricota</li>
          <li>sal</li>
        </ul>
      </section>
    </article>
    <div className='disc'>
      <h2>Descrição </h2>
      <p>receita fit de pão de queijo pra quem quer emagrecer sem tirar a alegria de viver da dieta
        Você pode adicionar 1 colher de sobremesa de sementes de chia ou de farinha de linhaça, para deixar o pão de queijo ainda mais nutritivo.</p>
      <p>
        Não  se preocupe com, a massa desse pão de queijo fica lisa, mas ainda um pouco pegajosa. Caso fique muito dificíl enrolas as bolinhas,
        basta molhar a mão com um pouco de aguá para facilitar o processo.
        E aproveite para conhecer a nossa receita deliciosa do clássico pão de queijo mineiro.</p>
    </div>
    <div className='prep'>
      <h2>Modo de Preparo</h2>
      <ul>
        <li>Reuna todos os ingredientes do pão de queijo fit fácil</li>
        <li>Em uma vasilha, coloque o polvilho doce, o polvilho azedo, o queijo  mussarela, o queijo parmesão, o creme de ricota e um pouco de sal</li>
        <li>Misture tudo muito bem até obter uma massa homogênea que não grude nas mãos</li>
        <li> Modele bolinhas médias e coloque uma forma untada</li>
        <li>Leve para assar em forno preaquecido a 200°C e deixe por cerca de 30 minutos ou até ficarem dourados</li>
        <li>Agora é só servir. Bom apetite!</li>
      </ul>
    </div>
  </Container>
}




