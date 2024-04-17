import styled from 'styled-components'
import Modal from 'react-modal'


export const NewModal = styled(Modal)`
  background: #D9D9D9;
  position: absolute;
  inset: 40px;
  border: 1px solid;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width:70%;
  margin: auto;
  box-shadow: 2px 2px;
    > button {
      background-color: transparent;
      border: none;
      font-weight: bold;
      position:absolute;
      top:5px;
      right:15px;
      font-size:40px;
    }
`
export const Container = styled.label`
  height: 100%;
  background-color: red;
  height: 100%;
  font-size: 16px;
  line-height: 0%;
  background-color: #85bb5d;
  border-radius: 9px;
  border: none;
  padding: 5px 34px;
  cursor: pointer;

  > button {
    text-decoration: none;
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: white;
  }
`
