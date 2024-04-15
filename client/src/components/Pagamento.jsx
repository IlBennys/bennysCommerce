import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  creaPagamento,
  registrazioneCustomer,
} from "../redux/actions/pagamentoActions";

const Pagamento = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.user.idUser);
  const idCarrello = useSelector((state) => state.carrello.idCarrello);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      dispatch(registrazioneCustomer(user, token, idUser, idCarrello));

      console.log("Pagamento completato con successo");
    } catch (error) {
      console.error("Errore durante la conferma del pagamento:", error);
      setErrorMessage("Si è verificato un errore imprevisto.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div id="payment-element"></div>
      <button id="submit" disabled={isLoading}>
        <div
          className={`spinner ${isLoading ? "" : "hidden"}`}
          id="spinner"
        ></div>
        <span id="button-text">
          {isLoading ? "Elaborazione..." : "Paga ora"}
        </span>
      </button>
      <div id="payment-message" className={errorMessage ? "" : "hidden"}>
        {errorMessage}
      </div>
    </form>
  );
};

export default Pagamento;
