import React from 'react'
import { WithLink, WithSelects, WithIcons, BasicTable } from './tables'
import './index.css'

const App = () => {
  return (
    <>
      <div className='wrapper'>
        <div>
          You can wrap your component to custom component and extends the
          functionality.
        </div>
        <BasicTable />
        <WithLink />
        <WithIcons />
        <WithSelects />
      </div>
    </>
  )
}

export default App
