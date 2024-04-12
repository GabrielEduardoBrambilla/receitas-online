import styled from 'styled-components'

export const Container = styled.div`
  > main {
    max-width: 1000px;
    margin: auto;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;

  font-size: 24px;
  font-weight: bold;

  > button {
    font-size: 16px;
    color: white;
    background-color: #85bb5d;
    border-radius: 9px;
    border: none;
    padding: 5px 34px;
  }
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`
