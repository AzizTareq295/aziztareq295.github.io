import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Intro from 'Components/Intro'
import { GlobalStyle } from 'Styles/Global.style'
import { MyPortfolio } from 'Styles/Layout.style'
import { variables } from 'Styles/utils/variables'


function App() {
  return (
    <ThemeProvider theme={variables.theme.light}>
      <GlobalStyle />
      <MyPortfolio>
        <Header />
        <Intro />
        <Footer />
      </MyPortfolio>
    </ThemeProvider>
  );
}

export default App;
