import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'Styles/Theme';
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Intro from 'Components/Intro'
import Menu from 'Components/Menu'
import { GlobalStyle } from 'Styles/Global.style'
import { MyPortfolio } from 'Styles/Layout.style'
import { PortfolioContext, IPortfolioContext } from 'context/PortfolioProvider'
import About from 'Components/About'


const App: React.FC = () => {
  const { isDarkMode } = useContext(PortfolioContext) as IPortfolioContext;

  const theme = isDarkMode ? dark : light

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyPortfolio>
        <Header />
        <Intro />
        <About />
        <Footer />
          
        <Menu />
      </MyPortfolio>
    </ThemeProvider>
  );
}

export default App;
