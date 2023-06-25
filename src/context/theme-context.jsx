import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
