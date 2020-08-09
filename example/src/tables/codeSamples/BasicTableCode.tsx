import React from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const BasicTableCode = () => {
  return (
    <div className='highlight-wrapper'>
      <Highlighter language='javascript' style={atomOneDark}>
        {`
  import React from 'react'
  import { Table, Options } from 'simple-react-table'
  import { employees } from '../___mock__'
  import { Employee } from '../models'

  const options: Options<Employee> = {
    cellOptions: {
      name: { displayName: 'First name' },
      height: { displayName: 'Height' },
      age: { displayName: 'Age' }
    }
  }

  export const BasicTable = () => {
    return <Table data={employees} options={options} />
  }


        `}
      </Highlighter>
    </div>
  )
}
