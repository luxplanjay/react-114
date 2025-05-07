import { useState } from 'react';
import { ThemeContext } from './contexts';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext
      value={{
        theme,
        changeTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext>
  );
}
