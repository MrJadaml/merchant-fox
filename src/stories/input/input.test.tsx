import React, { useState } from 'react'
import { screen } from '@testing-library/react'

import { fireEvent, render } from '@testing-library/react'
import { Input } from './index'

const ControlledInput = () => {
  const [value, setValue] = useState('test')
  return (<Input value={value} placeholder="paste the value" onChange={(event) => setValue(event.target.value)} />)
}

describe('Input', () => {
  it('Should display input field', () => {
    render(<Input value="test" />)

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })

  it('Should display placeholder text when provided', () => {
    render(<Input value="test" placeholder="paste the value" />)

    const inputElement = screen.getByPlaceholderText('paste the value')

    expect(inputElement).toBeInTheDocument()
  })

  it('Should display input text when entered', () => {
    render(<ControlledInput />)

    const inputElement = screen.getByDisplayValue('test')
    fireEvent.change(inputElement, { target: { value: '23' } })
    const updatedInput = screen.getByDisplayValue('23')

    expect(updatedInput).toBeInTheDocument()
  })

  it('Should display label text', () => {
    render(<Input label="label Text" />)
    const inputElement = screen.getByText('label Text')
    expect(inputElement).toBeInTheDocument()
  })
})
