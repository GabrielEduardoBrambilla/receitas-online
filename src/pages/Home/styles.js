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

    margin: 16px auto;
    @media (max-width: 1150px) {
      margin: 0 16px;
    }
  }

  > footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-top: 24px;
    width: 100%;
    background-color: #d9d9d9;
    font-size: 24px;
    font-weight: bold;
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
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
