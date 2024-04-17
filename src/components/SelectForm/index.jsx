import React from 'react'
import { Container, Select, Label } from './styles'

export function SelectForm({name, displayName, multiple, options}) {
  return <Container>
    <Label htmlFor={name}>{displayName}</Label>
    <Select type="text" name={name} multiple={multiple}>
      
      {options && options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </Select>
    
  </Container>
}
