import React, { useContext } from 'react'
import { MenuWrapper } from './Style/Menu.style'
import { MdClose } from 'react-icons/md'
import { PortfolioContext } from 'context/PortfolioProvider'
import ProfileImage from 'assets/images/my_image.png'

const Menu = () => {

  const { toggleMenu, isMenuOpen } = useContext(PortfolioContext);

  return (
    <MenuWrapper className={isMenuOpen ? 'active-menu' : ''}>
      <div className='menu-header'>
        <div className='menu-close'>
          <span onClick={toggleMenu}>
            <MdClose size={25} />
          </span>
        </div>
        <div className='menu-intro'>
          <img src={ProfileImage} alt="profile" />
          <h4>Hi, I'm <span>Tareq Aziz</span></h4>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Intro</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
        </ul>
      </nav>
    </MenuWrapper>
  )
}

export default Menu