import './App.css';
import { Characters } from './components/Characters';
import { Header } from './components/Header';
import { ThemeContext } from './contexts/ThemeContext';
import { useTheme } from './hooks/useTheme';

function App() {
  const initialTheme = useTheme();
  return (
    <ThemeContext.Provider value={initialTheme}>
      <div className={`App ${initialTheme.theme.theme}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
