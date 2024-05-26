import styled from 'styled-components'
export const Container = styled.div``

export const InputWrapper = styled.form`
  display:flex;
  gap:8px; 
  > button{
    border: 2px solid black;
    background-color: darkgreen;
    border-radius: 9px;
    padding: 4px 10px;
    color: white;
  }
`

export const SimpleInput = styled.input`
  max-width: min-content;
  background-color: lightgreen;
  border: 2px solid black;
  border-radius: 9px;
  padding: 4px 10px;
  > span{
    font-weight: bolder;
  }
`

export const TagWrapper = styled.div`
  display:flex;
  max-width: min-content;
  gap: 8px;
  background-color: lightgreen;
  border: 2px solid black;
  border-radius: 9px;
  padding: 4px 10px;
  > span{
    font-weight: bolder;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  gap:12px;
`

export const SaveButton = styled.button`
  border: 2px solid black;
  background-color: lightgreen;
  border-radius: 9px;
  padding: 4px 10px;
`
