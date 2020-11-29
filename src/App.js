import React from 'react'
import './styles/styles.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './component/NavBar'
import MainContent from './component/MainContent'
import About from './component/pages/About'
import NotFound from './component/pages/NotFound'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <Switch>
        <Route path="/" component={MainContent} exact />
        <Route path="/About" component={About} />
        <Route path="/NotFound" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
