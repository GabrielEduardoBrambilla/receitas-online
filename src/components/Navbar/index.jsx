import {
  Container, LogoContainer,
  SearchForm,
  UserWrapper
} from './styles'
import Logo from '../../assets/Logo.svg'
import { UserCircle, MagnifyingGlass, Heart } from 'phosphor-react'

export function Navbar() {
  return (
    <Container>

      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>


      <SearchForm>
        <label htmlFor="search">
          <MagnifyingGlass size={16} weight="bold" />
        </label>
        <input type="text" id='search' placeholder='Procure sua receita aqui' />
      </SearchForm>


      <UserWrapper>
        <p>Username</p>
        <UserCircle size={40} weight="fill" />

      </UserWrapper>


    </Container>
  )
}
