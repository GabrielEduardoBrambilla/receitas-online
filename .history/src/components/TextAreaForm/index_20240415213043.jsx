import React from 'react'
import { Container, TextArea, Label } from './styles'

export function TextAreaForm({name, displayName}) {
  return <Container>
    <Label htmlFor={name}>{displayName}</Label>
    <Input type="text" name={name} />
  </Container>
}
