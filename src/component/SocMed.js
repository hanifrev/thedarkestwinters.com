import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaBandcamp,
  FaSquare
} from 'react-icons/fa'

const SocMed = () => {
  return (
    <IconContext.Provider
      value={{ color: '#ffffff', className: 'global-class-name', size: '2em' }}
    >
      <div className="socmed">
        <Link to={'//facebook.com/thedarkestwinters/'} target="_blank">
          <FaFacebookSquare />
        </Link>
        <Link to={'//instagram.com/thedarkestwinters/'} target="_blank">
          <FaInstagram />
        </Link>
        <Link to={'//twitter.com/'} target="_blank">
          <FaTwitter />
        </Link>
        <Link to={'//thedarkestwinters.bandcamp.com/'} target="_blank">
          <FaBandcamp />
        </Link>
        <Link
          to={'//www.metal-archives.com/bands/The_Darkest_Winters/3540477257/'}
          target="_blank"
        >
          <FaSquare />
        </Link>
      </div>
    </IconContext.Provider>
  )
}

export default SocMed
