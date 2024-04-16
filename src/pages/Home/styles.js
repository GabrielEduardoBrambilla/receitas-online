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
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`
