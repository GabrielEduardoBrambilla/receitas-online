import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`
export const LogoContainer = styled.div``
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 350px;
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
  /* background-color: red; */
`
