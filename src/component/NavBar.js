import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
import logo from '../assets/logo/tdwlogo.png'
// import navS from '../hooks/nav'

const NavBar = () => {
  useEffect(() => {
    const elems = document.querySelector('#mobile-links')
    M.Sidenav.init(elems, {})
  }, [])
  return (
    <div className="">
      <nav className="#37474f blue-grey darken-3">
        <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo">
            <img className="logonav" src={logo} alt={'logo'} />
          </Link>
          <Link className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </Link>

          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/About'}>ABOUT</Link>
            </li>
            <li>
              <Link to={'//thedarkestwinters.bandcamp.com/'} target="_blank">
                MUSIC
              </Link>
            </li>
            <li>
              <Link to={'/NotFound'}>GALLERY</Link>
            </li>
            <li>
              <Link to={'/NotFound'}>OTHER</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav sidenav-close sdnv" id="mobile-links">
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>
          <Link to={'/About'}>ABOUT</Link>
        </li>
        <li>
          <Link to={'//thedarkestwinters.bandcamp.com/'} target="_blank">
            MUSIC
          </Link>
        </li>
        <li>
          <Link to={'/NotFound'}>GALLERY</Link>
        </li>
        <li>
          <Link to={'/NotFound'}>OTHER</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
