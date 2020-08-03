import React from 'react'
import { render, screen } from '@testing-library/react'
import { Table } from '../table'
import { Options } from "../models"
import { employees, Employee } from '../__mocks__'
import { getHeaders } from '../utils'

const options: Options<Employee> = {
  cellOptions: {
    emp_number: { displayName: 'Employee number' },
    name: { displayName: 'First name' },
    department: { displayName: 'Department' },
    position: { displayName: 'Position' }
  }
}

test('Should render correct headings', () => {
  render(<Table data={employees} options={options} />)
  const headersFromTest = getHeaders(options)

  const headersFromDom = screen.getAllByTestId('header')
  headersFromDom.forEach((element, index) => {
    expect(element.textContent).toBe(headersFromTest[index])

  })
})
