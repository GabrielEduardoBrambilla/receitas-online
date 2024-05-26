import React, { useEffect, useState } from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'
import { RecipeRegisterModal } from '../../components/RecipeRegisterModal'
import { RecipeModal } from '../../components/RecipeModal'
import { Navigate, useNavigate } from 'react-router-dom'
import { DefaultModal } from '../../components/DefaultModal'
import { v4 as uuidv4 } from 'uuid';

export function Home() {
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()

  const nome = localStorage.getItem('@ReceitaOnline:nome') != undefined ? localStorage.getItem('@ReceitaOnline:nome') : 'Nelson-Son';


  const defaultItems = [
    {
      id: uuidv4(),
      name: "Pão de queijo",
      categories: "Café da manhã",
      ingredients: ['Pão', 'Queijo', 'de'],
      desc: "Very gostoso pão feito de queijo e outros ingredientes",
      howto: "Compre os ingredientes, misture tudo, faça bolinhas e coloque para assar no forno",
    },
    {
      id: uuidv4(),
      name: "Feijoada",
      categories: "Almoço",
      ingredients: ['Feijão preto', 'Carne de porco', 'Linguiça', 'Farinha', 'Couve'],
      desc: "Tradicional prato brasileiro feito com feijão preto e várias carnes",
      howto: "Cozinhe o feijão com as carnes e temperos. Sirva com arroz, couve e farofa",
    },
    {
      id: uuidv4(),
      name: "Coxinha",
      categories: "Café da manhã",
      ingredients: ['Frango', 'Farinha', 'Ovos', 'Farinha de rosca', 'Batata'],
      desc: "Salgadinho frito recheado com frango desfiado",
      howto: "Faça a massa com batata e farinha, recheie com frango, empane e frite",
    },
    {
      id: uuidv4(),
      name: "Churrasco",
      categories: "Janta",
      ingredients: ['Carne bovina', 'Linguiça', 'Pão de alho', 'Frango', 'Sal grosso'],
      desc: "Carne assada na churrasqueira, uma tradição brasileira",
      howto: "Tempere as carnes, asse na churrasqueira e sirva com acompanhamentos",
    },
    {
      id: uuidv4(),
      name: "Brigadeiro",
      categories: "Café da manhã",
      ingredients: ['Leite condensado', 'Chocolate em pó', 'Manteiga', 'Granulado'],
      desc: "Doce brasileiro feito com leite condensado e chocolate",
      howto: "Misture leite condensado, manteiga e chocolate, cozinhe e depois faça bolinhas e passe no granulado",
    },
    {
      id: uuidv4(),
      name: "Moqueca",
      categories: "Janta",
      ingredients: ['Peixe', 'Leite de coco', 'Pimentão', 'Tomate', 'Cebola', 'Coentro'],
      desc: "Prato de peixe cozido com leite de coco e pimentões",
      howto: "Cozinhe o peixe com os temperos e leite de coco, sirva com arroz",
    },
    {
      id: uuidv4(),
      name: "Acarajé",
      categories: "Almoço",
      ingredients: ['Feijão-fradinho', 'Camarão', 'Cebola', 'Azeite de dendê', 'Vatapá'],
      desc: "Bolinho de feijão-fradinho frito no azeite de dendê, recheado com camarão",
      howto: "Faça a massa de feijão, frite no azeite de dendê e recheie com camarão e vatapá",
    },
    {
      id: uuidv4(),
      name: "Tapioca",
      categories: "Café da manhã",
      ingredients: ['Goma de tapioca', 'Queijo', 'Presunto', 'Coco ralado'],
      desc: "Prato feito com goma de tapioca, recheado de acordo com a preferência",
      howto: "Hidrate a goma de tapioca, espalhe na frigideira e recheie a gosto",
    },
    {
      id: uuidv4(),
      name: "Bacalhau à Brás",
      categories: "Janta",
      ingredients: ['Bacalhau', 'Batata', 'Cebola', 'Ovos', 'Azeitonas'],
      desc: "Prato português feito com bacalhau desfiado, batata e ovos",
      howto: "Cozinhe o bacalhau, desfaça em lascas, misture com batata e ovos e sirva com azeitonas",
    },
    {
      id: uuidv4(),
      name: "Quindim",
      categories: "Café da manhã",
      ingredients: ['Coco ralado', 'Açúcar', 'Ovos', 'Manteiga'],
      desc: "Doce brasileiro feito com coco ralado e ovos",
      howto: "Misture coco, açúcar e ovos, asse em forminhas untadas",
    },
  ];

  useEffect(() => {
    const recipesData = JSON.parse(localStorage.getItem('@ReceitaOnline:recipesData'));
    setRecipes(recipesData ?? defaultItems);
  }, []);



  return <Container>
    <Navbar nome={nome} />
    <main>
      <TitleWrapper>
        <h2>Receitas</h2>
        <DefaultModal buttonText="Cadastrar - Receita" >
          <RecipeRegisterModal />
        </DefaultModal>

      </TitleWrapper>

      <CardWrapper>
        {recipes && recipes.map(recipe => 
          <DefaultModal key={recipe.id} buttonChild={<RecipeCard title={recipe.name} desc={recipe.desc} />} buttonText="Receita Modal" >
            <RecipeModal />
          </DefaultModal>
        )}
        {/* <DefaultModal buttonChild={<RecipeCard />} buttonText="Receita Modal" >
          <RecipeModal />
        </DefaultModal>
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} /> */}
      </CardWrapper>
    </main>
    <footer></footer>
  </Container>
}
