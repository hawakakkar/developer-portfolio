import { createContext, useState } from "react";

export const PortfolioContext = createContext();

function PortfolioProvider({ children }) {
  // THEME STATE (GLOBAL)
  const [theme, setTheme] = useState("light");

  // FAVORITES (BONUS FEATURE)
  const [favorites, setFavorites] = useState([]);

  // USER INFO
  const user = {
    name: "Bibi Hawa Abdul Shukoor",
    title: "Frontend Web Developer",
    bio: "I’m a frontend web developer focused on creating clean, responsive, and modern websites that help businesses build trust and improve user experience.",
  };

  // TOGGLE THEME
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // FAVORITES TOGGLE
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <PortfolioContext.Provider
      value={{
        theme,
        toggleTheme,
        favorites,
        toggleFavorite,
        user,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioProvider;
