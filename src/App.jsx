import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="app dark">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
