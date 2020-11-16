import React from 'react'
import { Link } from 'react-router-dom'
// import onclick from './preventClick'

const Footer = () => {
  return (
    <div className="page-footer blue-grey darken-3">
      {/* <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <Link to={'https://facebook.com'} className="grey-text text-lighten-3">
                Facebook
              </Link>
              <Link to={'https://facebook.com'} className="grey-text text-lighten-3">
                Link 2
              </Link>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright blue-grey darken-3 center">
        <div className="container">
          © 2020 The Darkest Winters {}
          <Link
            to={'//www.facebook.com'}
            target="_blank"
            className="grey-text text-lighten-4"
          >
            | Terms and Condition {}
          </Link>
          <Link
            to={'//facebook.com'}
            target="_blank"
            className="grey-text text-lighten-4"
          >
            | Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
