import { createContext, useState } from "react";
import "./App.css";
import ToggleTheme from "./components/toggle-theme";
import Homepage from "./pages/homepage";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div>
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
