import React from 'react'
import { Container, TextArea, Label } from './styles'

export function TextAreaForm({name, displayName}) {
  return <Container>
    <Label htmlFor={name}>{displayName}</Label>
    <TextArea name={name} />
  </Container>
}
