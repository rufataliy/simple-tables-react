import React from 'react'
import { render, screen } from '@testing-library/react'
import { Table, Options } from '../table'
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
  const row = screen.getAllByTestId('row')
  expect(row.length).toEqual(employees.length)
})
