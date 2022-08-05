import { useState } from 'react';

const themes = ['light', 'dark'];

const initialTheme = {
  theme: themes[0],
};

export const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const targetTheme = theme.theme === themes[0] ? 1 : 0;
    setTheme({ theme: themes[targetTheme] });
  };

  return { theme, toggleTheme }
}
