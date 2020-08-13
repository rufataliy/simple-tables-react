import React from 'react'
import Highlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const WithNestedObjectCode = () => {
  return (
    <div className='highlight-wrapper'>
      <Highlighter language='javascript' style={atomOneDark}>
        {`
  import React from 'react'
  import { Options, Table } from 'simple-react-table'
  import { managers } from '../___mock__'
  import { Manager } from '../models'

  const options: Options<Manager> = {
    cellOptions: {
      name: { displayName: 'First name' },
      'position.name': { displayName: 'Position' },
      'position.team.name': { displayName: 'Type of team' },
      num_exp: { displayName: 'Experience' }
    }
  }

  export const WithNestedObjectCode = () => {
    return (
      <Table data={managers} options={options} />
    )
  }

`}
      </Highlighter>
    </div>
  )
}
