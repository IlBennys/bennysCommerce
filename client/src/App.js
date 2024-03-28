import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./componets/NavCustom";
import Home from "./componets/Home";
import PageNotFound from "./componets/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <NavCustom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
