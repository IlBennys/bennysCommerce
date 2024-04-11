import axios from "axios";
import { svuotaCarrello } from "./carrelloActions";
export const ADD_ID_CUSTOMER = "ADD_ID_CUSTOMER";
export const ADD_PAGAMENTO = "ADD_PAGAMENTO";

export function registrazioneCustomer(input, token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost/api/pagamento/registrazione", input, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Pagamento completato con successo");
        dispatch(getCustomer(token, idUser, idCarrello));
      }
    } catch (error) {
      console.log("Errore nella registrazioneCustomer", error);
    }
  };
}

export function getCustomer(token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/pagamento/registrazione/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const customerId = response.data.match(/Stripe Customer ID: (.*)/)[1].trim();
        console.log("Customer ID:", customerId);
        dispatch({
          type: ADD_ID_CUSTOMER,
          payload: customerId,
        });
        dispatch(creaPagamento(token, customerId, idCarrello));
      }
    } catch (error) {
      console.log("Errore nel getUser", error);
    }
  };
}

export function creaPagamento(token, idCustomer, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost/api/pagamento/${idCustomer}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        dispatch({
          type: ADD_ID_CUSTOMER,
          payload: {},
        });
        dispatch(svuotaCarrello(idCarrello, token));
        console.log("Pagamento completato con successo");
      }
    } catch (error) {
      console.log("Errore nella creaPagamento", error);
    }
  };
}
