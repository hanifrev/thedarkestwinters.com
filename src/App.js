import React from 'react'
import './styles/styles.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './component/NavBar'
import MainContent from './component/MainContent'
import About from './component/pages/About'
import Footer from './component/Footer'
// import SideBar from './component/SideBar'

const App = () => {
  return (
    <div>
      <NavBar />
      {/* <SideBar /> */}
      <Switch>
        <Route path="/" component={MainContent} exact />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
