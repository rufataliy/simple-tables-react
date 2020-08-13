import React from 'react'
import { Options, Table } from 'simple-react-table'
import { managers } from '../___mock__'
import { Manager } from '../models'
import { WithNestedObjectCode } from './codeSamples'
import Highlighter from 'react-syntax-highlighter'
import { atelierSeasideLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const options: Options<Manager> = {
  cellOptions: {
    name: { displayName: 'First name' },
    'position.name': { displayName: 'Position' },
    'position.team.name': { displayName: 'Type of team' },
    num_exp: { displayName: 'Experience' }
  }
}

export const WithNestedObject = () => {
  return (
    <div className='w-100'>
      <h3 className='light'>With nested objects</h3>
      <p className='default'>
        You can have an array of nested objects and access properties with dot
        notation referencing
        <div className='highlight-wrapper'>
          <Highlighter style={atelierSeasideLight} language='javascript'>
            {` 
     {
      name: 'George',
      position: {
        name: 'Communication Manager',
        code: 'cm102',
        team: {
          name: 'radio presenters',
          num: '5'
        }
      },
      num_exp: '10'
    },
            `}
          </Highlighter>
        </div>
      </p>
      <WithNestedObjectCode />
      <Table data={managers} options={options} />
    </div>
  )
}
