import { motion } from "framer-motion";
import "./DarkMode.scss";
import { useState } from "react";

const DarkMode = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    <div className={`switcher ${isActive && "active"}`} onClick={activeHandler}>
      <motion.div
        className="btn__switch"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </div>
  );
};

export default DarkMode;
