import React from 'react'
import SideBar from './SideBar'
import News1 from './news/news1'
import News2 from './news/news2'
import News3 from './news/news3'

const MainContent = () => {
  return (
    <div className="row">
      <div className="col s12 m8">
        <p className="col s12 m11 offset-m1">
          <News1 />
          <hr></hr>
        </p>
        <div className="col s12 m6">
          <p className="col s12 m10 offset-m2">
            <News2 />
            <hr></hr>
          </p>
        </div>
        <div className="col s12 m6">
          <p className="col s12 m10 offset-m1">
            <News3 />
            <hr></hr>
          </p>
        </div>
      </div>
      <div className="col s12 m3">
        <SideBar />
        <hr></hr>
      </div>
      {/* THE NEXT TASK IS MAKE USESTATE OR FUNCTION SO WE CAN CALL A COMPONENT FROM EXTERNAL JS FILE */}
    </div>
  )
}

export default MainContent
