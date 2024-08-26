import { createContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
