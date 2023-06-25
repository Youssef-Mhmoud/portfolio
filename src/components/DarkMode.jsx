import { motion } from "framer-motion";
import "./DarkMode.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`switcher ${theme && "active"}`}
      onClick={() => setTheme((prevTheme) => !prevTheme)}
    >
      <motion.div
        className="btn__switch"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        {theme ? (
          <FontAwesomeIcon icon={faMoon} className="btn__moon" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="btn__sun" />
        )}
      </motion.div>
    </div>
  );
};

export default DarkMode;
