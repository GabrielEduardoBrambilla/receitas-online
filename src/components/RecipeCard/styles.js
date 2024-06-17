import styled from 'styled-components'

export const Container = styled.div`
  background-color: #d9d9d9;
  padding: 16px;
  border-radius: 9px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between; /* Distribui o conteúdo verticalmente */

  > h3 {
    font-size: 22px;
  }

  > p {
    font-size: 16px;
    font-weight: normal;
  }
`
