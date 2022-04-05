import React, { useContext } from 'react'
import { PageContainer, PageSection } from 'Styles/Layout.style'
import { HeaderComponent, Logo, HeaderNav, HeaderMenu } from './Style/Header.style'
import logoImage from 'assets/images/signature.png'
import { BsMoon, BsSun } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { PortfolioContext } from 'context/PortfolioProvider'

const Header = () => {

  const { isMenuOpen, toggleMenu, isDarkMode, toggleDarkMode } = useContext(PortfolioContext);

  return (
    <HeaderComponent>
      <PageContainer>
        <PageSection width={'200px'}>
          <Logo>
            <a href="/">
              <img src={logoImage} alt="logo" />
            </a>
          </Logo>
        </PageSection>
        <PageSection>
          <HeaderMenu>
            <span className='header-action' onClick={toggleDarkMode}>
              {
                isDarkMode ?
                <BsMoon size={25} />
                :
                <BsSun size={25} />
              }
            </span>
            <span className='header-action' onClick={toggleMenu}>
              <FiMenu size={25} />
            </span>
          </HeaderMenu>
          
        </PageSection>
      </PageContainer>
    </HeaderComponent>
  )
}

export default Header