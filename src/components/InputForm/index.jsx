import React from 'react'
import { Container, Input, Label } from './styles'

export function InputForm({name, displayName}) {
  return <Container>
    <Label htmlFor={name}>{displayName}</Label>
    <Input type="text" name={name} />
  </Container>
}
