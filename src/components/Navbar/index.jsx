import {
  Container, LogoContainer,
  SearchForm,
  UserWrapper
} from './styles'
import Logo from '../../assets/Logo.svg'
import { UserCircle, MagnifyingGlass, Heart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Navbar(nome) {
  const navigate = useNavigate()
  console.log(nome)
  return (
    <Container>

      <LogoContainer onClick={() => {
        navigate('/')
      }}>
        <img src={Logo} alt="" />
      </LogoContainer>


      <SearchForm>
        <label htmlFor="search">
          <MagnifyingGlass size={16} weight="bold" />
        </label>
        <input type="text" id='search' placeholder='Procure sua receita aqui' />
      </SearchForm>


      <UserWrapper onClick={() => {
        navigate('/Login')
      }}>
        <p>{nome.nome}</p>
        <UserCircle size={40} weight="fill" />

      </UserWrapper>


    </Container>
  )
}
