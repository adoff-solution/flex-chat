// src/theme/ThemeWrapperProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { darkTheme, lightTheme } from './index';

export const ThemeContext = createContext();

const ThemeWrapperProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapperProvider;
