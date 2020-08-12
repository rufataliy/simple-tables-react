import React from 'react'
import { WithLink, WithSelects, WithIcons, BasicTable } from './tables'
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
        Some example coming soon . . .
      </div>
    </>
  )
}

export default App
