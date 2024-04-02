import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./componets/NavCustom";
import Home from "./componets/Home";
import PageNotFound from "./componets/PageNotFound";
import Articoli from "./componets/Articoli";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Profilo from "./componets/Profilo";
import Ordini from "./componets/Ordini";
import Pagamento from "./componets/Pagamento";
import Carrello from "./componets/Carrello";
import Footer from "./componets/Footer";
import About from "./componets/About";

function App() {
  return (
    <BrowserRouter>
      <NavCustom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/articoli" element={<Articoli />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profilo" element={<Profilo />} />
        <Route path="/ordini" element={<Ordini />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/carrello" element={<Carrello />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
