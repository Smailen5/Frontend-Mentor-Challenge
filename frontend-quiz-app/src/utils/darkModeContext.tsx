import { createContext, useContext, useState } from "react";

// Definiamo il tipo per il contesto
type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Creiamo il contesto con un valore iniziale
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Provider del contesto
const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook per usare il contesto
const useDarkModeContext = () => {
  const context = useContext(DarkModeContext)
  if(context === undefined){
    throw new Error("contesto non trovato");
    
  }
  return context
};

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkModeContext };
