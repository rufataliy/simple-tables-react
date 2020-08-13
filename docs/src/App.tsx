import React from 'react'
import {
  WithLink,
  WithSelects,
  WithIcons,
  BasicTable,
  WithNestedObject
} from './tables'
import './index.css'

const App = () => {
  return (
    <>
      <div className='wrapper'>
        <div>
          Here are some examples how you can use the <strong>Table</strong>{' '}
          component.
        </div>
        <BasicTable />
        <WithLink />
        <WithIcons />
        <WithSelects />
        <WithNestedObject />
      </div>
    </>
  )
}

export default App
