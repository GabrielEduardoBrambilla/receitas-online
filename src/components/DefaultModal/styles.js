import styled from 'styled-components'
import Modal from 'react-modal'

export const NewModal = styled(Modal)`
  background: #d9d9d9;
  position: absolute;
  inset: 40px;
  border: 1px solid;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 70%;
  margin: auto;
  box-shadow: 2px 2px;
  > button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 40px;
    /* cursor: pointer; */
  }
`
export const Container = styled.label`
  cursor: pointer;

  > button {
    border-radius: 9px;
    padding: 5px 34px;
    text-decoration: none;
    background-color: #85bb5d;
    border: none;
    font-weight: bold;
    cursor: pointer;
    color: white;
  }
`
