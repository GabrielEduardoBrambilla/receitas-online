import {
  Container, LogoContainer,
  SearchForm,
  UserWrapper
} from './styles'
import Logo from '../../assets/Logo.svg'
import { UserCircle, MagnifyingGlass, Heart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

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
        <p>Username</p>
        <UserCircle size={40} weight="fill" />

      </UserWrapper>


    </Container>
  )
}
