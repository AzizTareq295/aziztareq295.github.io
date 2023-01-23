import React from 'react'
import { IntroComponent } from './Style/Intro.style'
import ProfileImage from 'assets/images/profile.jpg'

const Intro = () => {
  return (
    <IntroComponent>
      <div className='intro-title'>
        <span>Frontend Developer</span>
        <h1>
          Tareq Aziz
        </h1>
      </div>
      <div className='bio-pic'>
        <div className='image-wrapper'>
          <img src={ProfileImage} alt="bio" />
        </div>
      </div>
    </IntroComponent>
  )
}

export default Intro