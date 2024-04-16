import React from 'react'
import { Container, Input, Label } from './styles'

export function InputForm({name, displayName}) {
  return <Container>
    <label htmlFor={name}>{displayName}</label>
    <input type="text" name={name} />
  </Container>
}
