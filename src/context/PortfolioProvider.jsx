import React, { useState, createContext } from 'react'

export const PortfolioContext = createContext();

function PortfolioProvider({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <PortfolioContext.Provider value={{ isMenuOpen, toggleMenu, isDarkMode, toggleDarkMode }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioProvider;