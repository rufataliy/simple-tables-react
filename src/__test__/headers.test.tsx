import React from 'react'
import { render, screen } from '@testing-library/react'
import { Table } from '../table'
import { Options } from "../models"
import { employees, Employee } from '../__mocks__'

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

  const emp_numberHeader = screen.getByText('Employee number')
  expect(emp_numberHeader.textContent).toBe('Employee number')
})
