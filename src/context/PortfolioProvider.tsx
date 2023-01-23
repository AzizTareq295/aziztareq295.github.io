import React, { useState, createContext } from 'react'

type PortfolioProviderProps = {
  children: React.ReactNode
}

export interface IPortfolioContext {
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}



export const PortfolioContext = createContext({});

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }



  return (
    <PortfolioContext.Provider value={{isMenuOpen, toggleMenu, isDarkMode, toggleDarkMode}}>
      {children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioProvider;