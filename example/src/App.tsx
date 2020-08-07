import React from 'react'
import { Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import { WithLink } from './withLink';
import { Header } from "./Header"
import { WithIcon } from "./WithIcons"
import './index.css'

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <div className="wrapper">
        <Route exact path="/withLink" component={WithLink} />
        <Route exact path="/withIcons" component={WithIcon} />
      </div >
    </Router>
  )
}

export default App
