import React from 'react'
import { Table, Options } from 'simple-react-table'
import { employees } from '../___mock__'
import { Employee } from '../models'
import { BasicTableCode } from './codeSamples'

const options: Options<Employee> = {
  cellOptions: {
    name: { displayName: 'First name' },
    height: { displayName: 'Height' },
    age: { displayName: 'Age' }
  }
}

export const BasicTable = () => {
  return (
    <>
      <div className='w-100'>
        <h3 className='light'>Basic Usage</h3>
        <BasicTableCode />
        <Table data={employees} options={options} />
      </div>
    </>
  )
}
