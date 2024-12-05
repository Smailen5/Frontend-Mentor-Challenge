"use client";

import { createContext, useContext } from "react";

// Definisce i tipi di bottoni disponibili
type ButtonType = "primary" | "secondary" | "readMore" | "submit";

// Interfaccia per il contesto dei bottoni
interface ButtonContextProps {
  // Mappa i tipi di bottoni alle loro azioni
  buttonActions: Record<ButtonType, () => void>;
}

// Crea il contesto per i bottoni
const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

/**
 * ButtonProvider
 *
 * Un componente che fornisce il contesto dei bottoni ai suoi figli.
 * Deve avvolgere qualsiasi componente che utilizza `useButtonContext`.
 *
 * @param {React.ReactNode} children - I componenti figli che avranno accesso al contesto
 */
export const ButtonProvider = ({ children }: { children: React.ReactNode }) => {
  // Definisce le azioni per ciascun tipo di bottone
  const buttonActions = {
    primary: () => console.log("primary clicked"),
    secondary: () => console.log("secondary clicked"),
    readMore: () => console.log("read more clicked"),
    submit: () => console.log("submit clicked"),
  };

  return (
    <ButtonContext.Provider value={{ buttonActions }}>
      {children}
    </ButtonContext.Provider>
  );
};

/**
 * useButtonContext
 *
 * Un hook per accedere al contesto dei bottoni.
 * Deve essere usato all'interno di un componente avvolto da `ButtonProvider`.
 *
 * @returns {ButtonContextProps} - Le azioni dei bottoni disponibili
 * @throws {Error} - Se usato al di fuori di `ButtonProvider`
 */
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
}
