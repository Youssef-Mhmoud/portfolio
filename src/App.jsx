import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
function App() {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme && "dark"}`}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
