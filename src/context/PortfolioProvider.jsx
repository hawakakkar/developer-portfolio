import { useState } from "react";
import { PortfolioContext } from "./PortfolioContext";

function PortfolioProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <PortfolioContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
