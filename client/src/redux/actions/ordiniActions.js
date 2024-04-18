import axios from "axios";
export const ORDINI = "ORDINI";
export const ADD_ID_ORDINE = "ADD_ID_ORDINE";
export const ADD_ORDINE = "ADD_ORDINE";

export function trovaIdOrdine(token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost/api/ordine", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const ordineFiltrato = response.data.filter(
          (e, i) =>
            e.user.id === idUser &&
            e.carrello.id === idCarrello &&
            e.id === response.data[response.data.length - 1].id
        );
        dispatch({
          type: ADD_ID_ORDINE,
          payload: ordineFiltrato[0].id,
        });
        dispatch(getOrdine(ordineFiltrato[0].id, token));
      }
    } catch (error) {
      console.log("Errore nel trovaIdOrdine", error);
    }
  };
}

export function getOrdine(idOrdine, token) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost/api/ordine/${idOrdine}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: ADD_ORDINE,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("Errore nel getOrdine", error);
    }
  };
}

export function getOrdini(token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost/api/ordine", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const ordiniFiltrati = response.data
          .filter((e) => e.user.id === idUser && e.carrello.id === idCarrello)
          .reverse();
        dispatch({
          type: ORDINI,
          payload: ordiniFiltrati,
        });
      }
    } catch (error) {
      console.log("Errore nel getOrdini", error);
    }
  };
}

export function postOrdine(token, idUser, idCarrello) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost/api/ordine/user/${idUser}/carrello/${idCarrello}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        dispatch(trovaIdOrdine(token, idUser, idCarrello));
      }
    } catch (error) {
      console.log("Errore nel postOrdine", error);
    }
  };
}

export const deleteOrdine = (idOrdine, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost/api/ordine/${idOrdine}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: ADD_ID_ORDINE,
          payload: "",
        });
        dispatch({
          type: ADD_ORDINE,
          payload: {},
        });
        window.location.href = "/carrello";
      }
    } catch (error) {
      console.error("Errore durante l'eliminazionde dell'ordine:", error);
    }
  };
};
