import axios from "axios";
export const CARRELLO = "CARRELLO";
export const ADD_ID_CARRELLO = "ADD_ID_CARRELLO";

export const trovaIdCarrello = (idUser, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/carrello`, {
        method: "GET",
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const carrelloFiltrato = response.data.filter((e) => e.id === idUser);
        dispatch({
          type: ADD_ID_CARRELLO,
          payload: carrelloFiltrato[0].id,
        });
        dispatch(getCarrelloById(carrelloFiltrato[0].id, token));
      }
    } catch (error) {
      console.log("Errore nel trovaIdCarrello", error);
    }
  };
};

export const getCarrelloById = (idCarrello, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost/api/carrello/${idCarrello}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch({
          type: CARRELLO,
          payload: response.data,
        });
      }
    } catch (error) {
      console.error("Errore nel getCarrelloById", error);
    }
  };
};

export const postCarrello = (idCarrello, idArticolo, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/carrello/${idCarrello}/articoli/${idArticolo}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch(getCarrelloById(idCarrello, token));
      }
    } catch (error) {
      console.error("Errore nel postCarrello", error);
    }
  };
};

export const deleteCarrello = (idCarrello, idArticolo, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/carrello/${idCarrello}/articoli/${idArticolo}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        dispatch(getCarrelloById(idCarrello, token));
      }
    } catch (error) {
      console.error("Errore nel deleteCarrello", error);
    }
  };
};

export const svuotaCarrello = () => {
  return (dispatch) => {
    dispatch({
      type: CARRELLO,
      payload: {},
    });
  };
};
