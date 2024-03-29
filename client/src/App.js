import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./componets/NavCustom";
import Home from "./componets/Home";
import PageNotFound from "./componets/PageNotFound";
import Articoli from "./componets/Articoli";

function App() {
  return (
    <BrowserRouter>
      <NavCustom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/articoli" element={<Articoli />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
