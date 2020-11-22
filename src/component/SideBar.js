import React from 'react'
import BandcampPlayer from 'react-bandcamp'

const SideBar = () => {
  return (
    <div>
      <h6 className="bandcamp-title">STREAM HERE</h6>

      <p className="">
        <BandcampPlayer
          className="bandcamp-iframe"
          album="1361300567"
          size="large"
          width="100%"
          height="570px"
        />
      </p>
    </div>
  )
}

export default SideBar
