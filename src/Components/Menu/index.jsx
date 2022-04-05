import React, { useContext } from 'react'
import { MenuWrapper } from './Style/Menu.style'
import { MdClose } from 'react-icons/md'
import { PortfolioContext } from 'context/PortfolioProvider'

const Menu = () => {

  const { toggleMenu } = useContext(PortfolioContext);

  return (
    <MenuWrapper>
      <div className='close-menu'>
        <span onClick={toggleMenu}>
          <MdClose size={25} />
        </span>
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