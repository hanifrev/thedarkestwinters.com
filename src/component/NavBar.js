import React from 'react'
import { Link } from 'react-router-dom'
// import onclick from './preventClick'

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="#37474f blue-grey darken-3">
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo left">
            THE DARKEST WINTER
          </Link>
          <ul className="right">
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/About'}>ABOUT</Link>
            </li>
            <li>
              <Link to={'/'}>MUSIC</Link>
            </li>
            <li>
              <Link to={'/'}>GALLERY</Link>
            </li>
            <li>
              <Link to={'/'}>OTHER</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
