import axios from "axios";
import { svuotaCarrello } from "./carrelloActions";
import { loadStripe } from "@stripe/stripe-js";
export const ADD_PAGAMENTO = "ADD_PAGAMENTO";

export function registrazioneCustomer(input, token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost/api/pagamento/registrazione",
        input,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const customerId = response.data.split(": ")[1].trim();

        dispatch(creaPagamento(token, customerId, idCarrello));
      }
    } catch (error) {
      console.log("Errore nella registrazioneCustomer", error);
    }
  };
}

export function creaPagamento(token, idCustomer, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost/api/pagamento/${idCustomer}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        dispatch(initializeStripe());

        dispatch(svuotaCarrello(idCarrello, token));
      }
    } catch (error) {
      console.log("Errore nella creaPagamento", error);
    }
  };
}
export function initializeStripe() {
  return async () => {
    try {
      const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
      const stripe = await stripePromise;
      return stripe;
    } catch (error) {
      console.error("Errore durante l'inizializzazione di Stripe:", error);
      throw error;
    }
  };
}
