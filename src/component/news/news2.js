import React from 'react'
import { Link } from 'react-router-dom'

const News2 = () => {
  return (
    <div>
      <h7 className="news-title">BEHIND THE SCENE</h7>
      <p>
        We will release some photo that were taken during recording our album. There is
        not much photo that we can share, because we almost completely forgot to take a
        photo or video when we were working on the EP. We will upload it on our Facebook
        page{' '}
        <Link to={'//facebook.com/thedarkestwinters/'} target="_blank">
          here
        </Link>
      </p>
    </div>
  )
}

export default News2
