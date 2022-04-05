import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Intro from 'Components/Intro'
import Menu from 'Components/Menu'
import { GlobalStyle } from 'Styles/Global.style'
import { MyPortfolio } from 'Styles/Layout.style'
import { variables } from 'Styles/utils/variables'
import PortfolioProvider, { PortfolioContext } from 'context/PortfolioProvider'


function App() {


  return (
    <PortfolioProvider>
      <ThemeProvider theme={variables.theme.light}>
        <GlobalStyle />
        <MyPortfolio>
          <Header />
          <Intro />
          <Footer />
            <Menu />
        </MyPortfolio>
      </ThemeProvider>
    </PortfolioProvider>
  );
}

export default App;
