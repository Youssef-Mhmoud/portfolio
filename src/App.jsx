import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="app dark">
      {/* <AnimatePresence initial={false}> */}
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
