import React from 'react'
import { LeftSide, RightSide, TopNav } from '../../styled-components/styled'
import dp from "../../img/ellipse-4@1x.png"
import iconDown from "../../img/icon-ionic-ios-arrow-back@1x.png"
import usa from "../../img/image-1@1x.png";
import bellIcon from "../../img/path-193@1x.png";
import messageIcon from "../../img/path-106@1x.png"
import yellowCircle from "../../img/path-161@1x.png"
import searchIcon from "../../img/path-99-1@1x.png"
import logoRight from "../../img/path-159@1x.png"
import logoLeft from "../../img/path-160@1x.png"

function Main() {
  return (
    <TopNav>
      <LeftSide>
        <div><img className="dp" src={dp} alt="Image 4" /></div>
        <div><img src={iconDown} className='icon' /> <span className='name'>Jonathan Deo</span></div>
      </LeftSide>
      <RightSide>
        {/* <img className='usa' src={usa} alt="Image 1" />

        <div className='message'>
          <img className='img' src={messageIcon} alt="Image 2" />
          <span className="badge">5</span>
        </div>
        <div className=''>
          <img src={bellIcon} className='img' alt="Image 2" />
          <span className="badge">5</span>

        </div>
        <div>
          <input className='input' type="text" placeholder="Search" />
        </div> */}
      </RightSide>
    </TopNav>
  )
}

export default Main

