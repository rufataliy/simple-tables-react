import React from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const WithLinkCode = () => {
  return (
    <div className='highlight-wrapper'>
      <Highlighter language='javascript' style={atomOneDark}>
        {`
  import React from 'react'
  import { Options, Table } from 'simple-react-table'
  import { employees } from '../___mock__'
  import { Employee } from '../models'

  const wrapToLink = (value: any, entry: Employee) => {
    return <a href={\`somelink/\${entry}\`}>{value}</a>
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
        <Table data={employees} options={options} />
    )
  }
        `}
      </Highlighter>
    </div>
  )
}
