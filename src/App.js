import React from 'react'
import './styles/styles.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './component/NavBar'
import MainContent from './component/MainContent'
import About from './component/pages/About'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={MainContent} exact />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  )
}

export default App
