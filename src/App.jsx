import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layouts/Layout";
import { AnimatePresence } from "framer-motion";
import "./App.scss";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
function App() {
  const location = useLocation();

  return (
    <div className="app dark">
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
