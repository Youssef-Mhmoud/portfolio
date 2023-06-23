import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app dark">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
