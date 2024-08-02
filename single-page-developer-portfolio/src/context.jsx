import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

// Brand Logo o nome brand
const brandLogo = () => {
  return (
    <a href="#" className="capitalize">
      adam keys
    </a>
  );
};

// controlla larghezza schermo e ne ritorna il valore
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ useWindowWidth, brandLogo }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalContext };

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}