import React from 'react'
import { WithLink, WithSelects, WithIcons } from './tables';
import './index.css'
import "./styles/highlight.css"

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div>You can wrap your component to custom component and extends the functionality.</div>
        <WithLink />
        <WithIcons />
        <WithSelects />
      </div >
    </>
  )
}

export default App
