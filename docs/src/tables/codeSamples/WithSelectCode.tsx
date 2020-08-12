import React from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const WithSelectCode = () => {
  return (
    <div className='highlight-wrapper'>
      <Highlighter language='javascript' style={atomOneDark}>
        {`
  import React, { useState } from 'react'
  import { Options, Table } from 'simple-react-table'
  import { employees } from '../___mock__'
  import { Employee } from '../models'

  export const WithSelects = () => {
    const [checks, setChecks] = useState<string[]>([])
    const handleCheckboxToggle = (id: string) => {
      if (checks.includes(id)) {
        setChecks((checks) => {
          const newChecks = checks.filter((check) => check !== id)
          return newChecks
        })
      } else {
        setChecks((checks) => {
          const newChecks = [...checks, id]
          return newChecks
        })
      }
    }
    
    const wrapToSelect = (value: any, entry: Employee) => {
      return (
        <>
          <input
            onClick={() => handleCheckboxToggle(entry.uuid)}
            id={entry.uuid}
            type='checkbox'
            value={entry.uuid}
            name={entry.uuid}
          />
          <label htmlFor={entry.uuid}>{value}</label>
        </>
      )
    }

    const options: Options<Employee> = {
      cellOptions: {
        name: { displayName: 'First name', wrapper: wrapToSelect },
        height: { displayName: 'Height' },
        age: { displayName: 'Age' }
      }
    }
    return (
        <Table data={employees} options={options} />
    )
  }  
`}
      </Highlighter>
    </div>
  )
}
