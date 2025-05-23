import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Apply initial theme
    document.documentElement.classList.toggle('light-theme', !isDarkTheme);
  }, []);

  // Apply theme whenever isDarkTheme changes
  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
