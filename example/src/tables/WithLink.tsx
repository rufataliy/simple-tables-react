import React from 'react'
import { Options, Table } from 'simple-react-table'
import { employees } from '../___mock__'
import { Employee } from '../models'
import { WithLinkCode } from './codeSamples'

const wrapToLink = (value: any, entry: Employee) => {
  return <a href={`#link/${entry.uuid}`}>{value}</a>
}

const options: Options<Employee> = {
  cellOptions: {
    name: { displayName: 'First name', wrapper: wrapToLink },
    height: { displayName: 'Height' },
    age: { displayName: 'Age' }
  }
}

export const WithLink = () => {
  return (
    <>
      <div className='w-100'>
        <h3 className='light'>With links</h3>
        <p className='default'>
          You can wrap your data around links. Create a function that accepts
          value of the property that mentioned in your options.
          <pre>
            <code>{` {... name:{displayName: "First name"}}`}</code>
          </pre>
          . The value of name property will be passed to your function.
          Optionally the entry object will also be passed to the function. See
          below for an example.
        </p>
        <WithLinkCode />
        <Table data={employees} options={options} />
      </div>
    </>
  )
}
