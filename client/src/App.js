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
import Carrello from "./components/Carrello";
import Footer from "./components/Footer";
import About from "./components/About";
import Ordini from "./components/Ordini";
// import Pagamento from "./components/Pagamento";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

function App() {
  const [light, setLight] = useState(false);
  const white_Mode = () => {
    setLight(!light);

    if (light) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };
  //const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
  return (
    <BrowserRouter>
      <NavCustom white_Mode={white_Mode} light={light} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/articoli" element={<Articoli light={light} />} />
        <Route path="/login" element={<Login light={light} />} />
        <Route path="/register" element={<Register light={light} />} />
        <Route path="/profilo" element={<Profilo />} />
        <Route path="/ordine" element={<Ordine />} />
        <Route path="/ordini" element={<Ordini />} />
        <Route
          path="/pagamento"
          // element={
          //   <Elements stripe={stripePromise}>
          //     <Pagamento />
          //   </Elements>
          // }
        />
        <Route path="/carrello" element={<Carrello />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
