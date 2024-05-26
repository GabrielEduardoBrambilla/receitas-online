import React from 'react'
import { Container, FormContainer, LogoContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { useNavigate } from 'react-router-dom';
export function Login() {
  const navigate = useNavigate()

  function handleLogin() {
    const nome = document.getElementById("nome");
    localStorage.setItem('@ReceitaOnline:nome', nome.value);
    navigate('/')
  }

  return <Container>
    <LogoContainer>
      <img src={Logo} alt="" />
    </LogoContainer>
    <FormContainer>
      <input type="text" id='nome' placeholder='Seu nome' />
      <button type="submit" onClick={handleLogin}>Logar</button>
    </FormContainer>
  </Container>
}
