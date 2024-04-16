import React from 'react'
import { Container } from './styles'

export function Input({name}) {
  return <Container>
    <label htmlFor={name}></label>
    <input type="text" name={name} />
  </Container>
}
