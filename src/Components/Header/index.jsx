import React from 'react'
import { PageContainer, PageSection } from 'Styles/Layout.style'
import { HeaderComponent, Logo, HeaderNav } from './Style/Header.style'
import logoImage from 'assets/images/signature.png'

const Header = () => {
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
          <HeaderNav>
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
          </HeaderNav>
        </PageSection>
      </PageContainer>
    </HeaderComponent>
  )
}

export default Header