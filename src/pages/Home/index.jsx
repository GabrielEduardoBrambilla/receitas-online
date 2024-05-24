import React, { useState } from 'react';
import { Container, TitleWrapper, CardWrapper } from './styles';
import { Navbar } from '../../components/Navbar';
import { RecipeCard } from '../../components/RecipeCard';
import { RecipeRegisterModal } from '../../components/RecipeRegisterModal';
import { RecipeModal } from '../../components/RecipeModal';
import { DefaultModal } from '../../components/DefaultModal';

export function Home() {
  const [modal1, setModal1] = useState(false);
  const [cardModals, setCardModals] = useState(Array(6).fill(false));

  function handleToggleModal(num) {
    if (num === 1) {
      setModal1(!modal1);
    }
  }

  function handleCardModalToggle(index) {
    const newCardModals = [...cardModals];
    newCardModals[index] = !newCardModals[index];
    setCardModals(newCardModals);
  }

  return (
    <Container>
      <Navbar />
      <main>
        <TitleWrapper>
          <h2>Receitas</h2>
          <DefaultModal 
            buttonText="Cadastrar - Receita" 
            isOpen={modal1} 
            onRequestClose={() => handleToggleModal(1)} 
            handleClick={() => handleToggleModal(1)}
          >
            <RecipeRegisterModal />
          </DefaultModal>
        </TitleWrapper>

        <CardWrapper>
          {Array.from({ length: 6 }, (_, index) => (
            <React.Fragment key={index}>
              <div 
                onClick={() => handleCardModalToggle(index)} 
                style={{ cursor: 'pointer' }}
              >
                <RecipeCard />
              </div>
              <DefaultModal
                isOpen={cardModals[index]}
                onRequestClose={() => handleCardModalToggle(index)}
              >
                <RecipeModal />
              </DefaultModal>
            </React.Fragment>
          ))}
        </CardWrapper>
      </main>
      <footer></footer>
    </Container>
  );
}
