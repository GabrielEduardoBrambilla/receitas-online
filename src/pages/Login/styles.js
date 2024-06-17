import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 975px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const LogoContainer = styled.div`
  img {
    width: 500px;
    object-fit: cover;
  }
  @media (max-width: 975px) {
    img {
      width: 275px;
    }
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 350px;
  > input {
    background-color: lightgray;
    padding: 16px;
    border: none;
    border-radius: 10px;
  }
  button {
    background-color: #85bb5d;
    color: whitesmoke;
    font-weight: bolder;
    font-family: Inter;
    font-size: 20px;
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
  }
`
