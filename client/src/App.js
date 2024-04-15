import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavCustom from "./components/NavCustom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Articoli from "./components/Articoli";
import Login from "./components/Login";
import Register from "./components/Register";
import Profilo from "./components/Profilo";
import Ordine from "./components/Ordine";
import Pagamento from "./components/Pagamento";
import Carrello from "./components/Carrello";
import Footer from "./components/Footer";
import About from "./components/About";
import Ordini from "./components/Ordini";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
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
        <Route path="/ordine" element={<Ordine />} />
        <Route path="/ordini" element={<Ordini />} />
        <Route
          path="/pagamento"
          element={
            <Elements stripe={stripePromise}>
              <Pagamento />
            </Elements>
          }
        />
        <Route path="/carrello" element={<Carrello />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
