import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Intro from 'Components/Intro'
import Menu from 'Components/Menu'
import { GlobalStyle } from 'Styles/Global.style'
import { MyPortfolio } from 'Styles/Layout.style'
import { variables } from 'Styles/utils/variables'
import { PortfolioContext } from 'context/PortfolioProvider'


function App() {
  const { isDarkMode, isMenuOpen } = useContext(PortfolioContext)

  const theme = isDarkMode ? variables.theme.dark : variables.theme.light

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyPortfolio>
        <Header />
        <Intro />
        <Footer />
        
        <Menu />
      </MyPortfolio>
    </ThemeProvider>
  );
}

export default App;
