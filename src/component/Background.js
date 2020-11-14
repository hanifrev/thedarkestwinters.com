import React from 'react'
import big_image from '../assets/mainbgpic.jpg'

const bg = {
  backgroundImage: `url(${big_image})`
}

const Big_Background = () => {
  return (
    <div
      //   className="mainbg"
      style={bg}
    ></div>
  )
}

export default Big_Background
