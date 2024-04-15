import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: c;
    /* min-height: 80vh; */
    max-width: 1000px;
    margin: auto;
  }

  > footer {
    height: 80px;
    width: 100%;
    background-color: #d9d9d9;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;

  font-size: 24px;
  font-weight: bold;

  > button {
    font-size: 16px;
    line-height: 0%;
    font-weight: bold;
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
